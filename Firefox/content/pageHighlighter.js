/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Urim
 *
 * The Initial Developer of the Original Code is
 * Oleg Mazko
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 * Oleg Mazko <o.mazko@mail.ru>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

const gUrimPageHighlighter = (function() {
	var lastTermsFindArray, lastTermsFindRoundArray, lastTermsHighlightArray, bIgnoreBackRes, findStart;

	function areArraysEquals(array1, array2) {
		return array1.join() == array2.join();
	}

	return {
		HighlightArrayInPage : function(termsArray, mainWindow) {
			if (lastTermsHighlightArray
					&& areArraysEquals(lastTermsHighlightArray, termsArray)) {
				highlight(termsArray, false);
				lastTermsHighlightArray = null;
				return 0;
			} else if (!lastTermsHighlightArray) {
				highlight(termsArray, true);
				lastTermsHighlightArray = termsArray;
				return 1;
			} else {
				highlight(lastTermsHighlightArray, false);
				highlight(termsArray, true);
				lastTermsHighlightArray = termsArray;
				return 2;
			}

			function highlight(termsArray, aHighlight) {
				var findObj = {
					highlightDoc : function(aHighlight, aWord) {
						return mainWindow.document.defaultView.gFindBar
								._highlightDoc(aHighlight, aWord,
										mainWindow.gBrowser.contentWindow);
					}
				};

				for (var i = 0; i < termsArray.length; i++) {
					findObj.highlightDoc(aHighlight, termsArray[i]);
				}
			}
		},

		/*
		 * Reuse the find bar mechanisms in Firefox. Most of this function's
		 * code came from the Google toolbar
		 */

		FindInPage : function(term, e, mainWindow) {
			var findBar = mainWindow.document.defaultView.gFindBar;
			var shiftKey = e.shiftKey;
			var findObj;
			var cachedFindTerm;

			if ("_find" in findBar) {
				findObj = {
					find : function(t) {
						return findBar._find(t);
					},
					findNext : function() {
						return findBar._findAgain(false);
					},
					findPrevious : function() {
						return findBar._findAgain(true);
					}
				};

				cachedFindTerm = mainWindow.getBrowser().fastFind.searchString;
			} else {
				findObj = findBar;
				cachedFindTerm = mainWindow.getBrowser().findString;
			}

			var res;

			if (cachedFindTerm == term) {
				if (shiftKey)
					res = findObj.findPrevious();
				else
					res = findObj.findNext();
			} else {
				res = findObj.find(term);
				if (shiftKey)
					res = findObj.findPrevious();
			}

			return res;
		},

		FindArrayInPage : function(termsArray, e, mainWindow) {
			if (!lastTermsFindArray
					|| !areArraysEquals(lastTermsFindArray, termsArray)) {
				lastTermsFindArray = termsArray;
				lastTermsFindRoundArray = new Array(termsArray.length);
				for (var i = 0; i < termsArray.length; i++)
					lastTermsFindRoundArray[i] = termsArray[i];
				findStart = e.shiftKey ? lastTermsFindRoundArray.length - 1 : 0;
				bIgnoreBackRes = e.shiftKey;
			}

			var term = lastTermsFindRoundArray[findStart];
			var res = this.FindInPage(term, e, mainWindow);

			/* If e.shiftKey == false, ignore bIgnoreBackRes */

			bIgnoreBackRes = bIgnoreBackRes && e.shiftKey;

			if (res == Components.interfaces.nsITypeAheadFind.FIND_NOTFOUND
					|| (!bIgnoreBackRes && res == Components.interfaces.nsITypeAheadFind.FIND_WRAPPED)) {

				if (e.shiftKey)
					lastTermsFindRoundArray.unshift(lastTermsFindRoundArray
							.pop());
				else
					lastTermsFindRoundArray.push(lastTermsFindRoundArray
							.shift());

				if (res == Components.interfaces.nsITypeAheadFind.FIND_WRAPPED) {

					mainWindow.gBrowser.contentWindow.getSelection()
							.removeAllRanges();

					/*
					 * When we do 'removeAllRanges()', find cursor is on the
					 * page start, so first backward find operation result in
					 * this case is always FIND_WRAPPED and we have a recursion
					 * dead lock. To prevent this bIgnoreBackRes variable added.
					 */

					bIgnoreBackRes = e.shiftKey;

					return this.FindArrayInPage(termsArray, e, mainWindow);
				}
			} else
				bIgnoreBackRes = false;

			return term;
		}
	}
})();