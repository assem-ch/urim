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

Components.utils.import("resource://urim/StringHashMap.js");

const STATE_STOP = Components.interfaces.nsIWebProgressListener.STATE_STOP;
const STATE_IS_WINDOW = Components.interfaces.nsIWebProgressListener.STATE_IS_WINDOW;

Components.utils.import("resource://urim/log4moz.js");
Components.utils.import("resource://urim/UrimCore.js");

const urimSidebar = (function() {

	const _logger = Log4Moz.repository.getLogger("Urim.urimSidebar");
	const _urimCore = new UrimCore();

	function getMainWindow() {
		return window
				.QueryInterface(Components.interfaces.nsIInterfaceRequestor)
				.getInterface(Components.interfaces.nsIWebNavigation)
				.QueryInterface(Components.interfaces.nsIDocShellTreeItem).rootTreeItem
				.QueryInterface(Components.interfaces.nsIInterfaceRequestor)
				.getInterface(Components.interfaces.nsIDOMWindow);
	}

	function htmlToText(aStr) {
		var formatConverter = Components.classes["@mozilla.org/widget/htmlformatconverter;1"]
				.createInstance(Components.interfaces.nsIFormatConverter);
		var fromStr = Components.classes["@mozilla.org/supports-string;1"]
				.createInstance(Components.interfaces.nsISupportsString);
		fromStr.data = aStr;
		var toStr = {
			value : null
		};

		try {
			formatConverter.convert("text/html", fromStr,
					fromStr.toString().length, "text/unicode", toStr, {});
		} catch (e) {
			return aStr;
		}
		if (toStr.value) {
			toStr = toStr.value
					.QueryInterface(Components.interfaces.nsISupportsString);
			return toStr.toString();
		}

		return aStr;
	}

	function init() {
		_logger.info("urimSidebar:init");
		try {
			getMainWindow().gBrowser.addProgressListener(
					urimSidebar_stateChangeListener,
					Components.interfaces.nsIWebProgress.NOTIFY_STATE_DOCUMENT);
		} catch (ex) {
			_logger.error(ex);
		}
		onContentChanged();
	}

	function uninit() {
		try {
			getMainWindow().gBrowser
					.removeProgressListener(urimSidebar_stateChangeListener);
		} catch (ex) {
			_logger.error(ex);
		}
		_logger.info("urimSidebar:uninit");
	}

	function onContentChanged() {
		try {
			var isElapsedLoging = Log4Moz.Level.Warn > Log4Moz.repository.rootLogger.level, htmlBuildStart;
			var localGbrowser = getMainWindow().gBrowser;
			var text = localGbrowser.contentWindow.getSelection().toString();
			if (!text && localGbrowser.webProgress.isLoadingDocument) {
				_logger
						.info("localGbrowser.webProgress.isLoadingDocument == true");
				return;
			}
			if (!text)
				text = extractAllContentText(localGbrowser);

			if (!text)
				throw "Can't extract any text from contentDocument and it's frames"

			var urimResult = _urimCore.build(text, 50, isElapsedLoging
							? function(logText) {
								_logger.info(logText);
							}
							: null);

			if (isElapsedLoging)
				htmlBuildStart = new Date()
			var theParent = document.getElementById("urim-tag-cloud");

			if (urimResult.array.length) {
				fillTagsHTML(theParent,
						shuffleArray(calculateFonts(urimResult.array)), text);
				if (isElapsedLoging)
					_logger.info("HTML tags build time: "
							+ _urimCore.elapsed(htmlBuildStart));
			} else
				_logger.warn("Urim result array is empty. Input text - '"
						+ text + "'");
		} catch (ex) {
			_logger.error(ex);
		}
	}

	function shuffleArray(array) {
		if (array.length <= 2)
			return array;

		var newArray = new Array(array.length);

		for (var i = 0; i < array.length; i++) {
			newArray[findMaxOffset()] = array[i];
		}

		return newArray;

		function findMaxOffset() {
			var maxDiff = 0, maxDiffStart;
			var start = 0;

			for (var i = 0; i < newArray.length; i++) {
				if (!newArray[i]) {
					continue;
				}

				var diff = i - start;
				if (diff > maxDiff) {
					maxDiff = diff;
					maxDiffStart = start;
				}

				start = i;
			}

			var diff = newArray.length - start;
			if (diff > maxDiff) {
				maxDiff = diff;
				maxDiffStart = start;
			}

			return maxDiffStart + Math.floor(maxDiff / 2);
		}
	}

	function calculateFonts(array) {
		var newArray = new Array(array.length);

		for (var i = 0; i < array.length; i++) {
			var value = array[i];
			var font = 1;

			if (i == 0)
				font = 10;
			else if (i == 1)
				font = 9;
			else if (i == 2)
				font = 8;
			else if (i == 3)
				font = 7;
			else if (i > 3 && i < 6)
				font = 6;
			else if (i >= 6 && i < 10)
				font = 5;
			else if (i >= 10 && i < 15)
				font = 4;
			else if (i >= 15 && i < 22)
				font = 3;
			else if (i >= 22 && i < 33)
				font = 2;

			newArray[i] = {
				"value" : value,
				"font" : font
			};
		}

		return newArray;
	}

	function fillTagsHTML(parent, array, text) {

		while (parent.hasChildNodes()) {
			parent.removeChild(parent.lastChild);
		}

		for (var i = 0; i < array.length; i++) {
			var item = array[i];
			var value = item.value;

			var htmlTag = document.createElementNS(
					"http://www.w3.org/1999/xhtml", "html:a");

			htmlTag.setAttribute("class", "w" + item.font);
			var uniqueBaseForms = getUniqueBaseForms(value);
			htmlTag.setAttribute("onmouseup", "urimSidebar.onClickTag(["
							+ getBaseEntriesAsCharArrayStr(uniqueBaseForms)
							+ "], event);");
			htmlTag.setAttribute("href", "#\"" + uniqueBaseForms.join("\",\"")
							+ "\"");
			htmlTag.appendChild(document.createTextNode(_urimCore.getEntry(
					value[0], text)));
			var liHtmlTag = document.createElementNS(
					"http://www.w3.org/1999/xhtml", "html:li");
			liHtmlTag.appendChild(htmlTag);

			parent.appendChild(liHtmlTag);
			parent.appendChild(document.createTextNode("\n"));
		}

		function getUniqueBaseForms(arrayValues) {
			var uniqueTermsMap = new StringHashMap();

			for (var i = 0; i < arrayValues.length; i++) {
				uniqueTermsMap.setValue(_urimCore.getBaseEntry(arrayValues[i],
						text).toLowerCase());
			}

			return uniqueTermsMap.getKeys();
		}

		function getBaseEntriesAsCharArrayStr(uniqueTermsArray) {
			var result;

			for (var j = 0; j < uniqueTermsArray.length; j++) {
				if (result) {
					result += ",[" + str2CharArray(uniqueTermsArray[j]).join()
							+ "]";
				} else {
					result = "[" + str2CharArray(uniqueTermsArray[j]).join()
							+ "]";
				}
			}

			return result;

			function str2CharArray(str) {
				var array = new Array(str.length);

				for (var i = 0; i < str.length; i++) {
					array[i] = str.charCodeAt(i);
				}

				return array;
			}
		}
	}

	function onClickTag(tagCharCodesArray, e) {
		try {
			tagCharCodesArray.forEach(function(element, index, array) {
						element.forEach(function(element, index, array) {
									array[index] = String.fromCharCode(element);
								});
						array[index] = element.join("");
					});

			switch (e.button) {
				case 0 :
					gUrimPageHighlighter.FindArrayInPage(tagCharCodesArray, e,
							getMainWindow(), function(logText) {
								_logger.info(logText);
							});
					break;
				case 2 :
					gUrimPageHighlighter.HighlightArrayInPage(
							tagCharCodesArray, getMainWindow(), function(
									logText) {
								_logger.info(logText);
							});
					break;
				default :
					_logger.warn("Fired mouse button: '" + e.button
							+ "' but handler for it not implemented yet.");

			}
		} catch (ex) {
			_logger.error(ex);
		}
	}

	function extractAllContentText(localGbrowser) {
		var text;
		var mainDocumentBody = localGbrowser.contentDocument.body;
		if (mainDocumentBody)
			text = htmlToText(mainDocumentBody.innerHTML);

		var frames = localGbrowser.contentWindow.frames;

		for (var i = 0; i < frames.length; i++) {
			var frameDocumentBody = frames[i].document.body;
			if (frameDocumentBody) {
				var frameText = htmlToText(frameDocumentBody.innerHTML);
				if (!frameText)
					continue;
				if (text)
					text += ". " + frameText;
				else
					text = frameText;
			}
		}

		return text;
	}

	return {
		onContentChanged : onContentChanged,
		onClickTag : onClickTag,

		handleEvent : function(event) {
			switch (event.type) {
				case "load" :
					init();
					break;
				case "unload" :
					uninit();
					break;
			}
		}
	};
})();

const urimSidebar_stateChangeListener = {
	QueryInterface : function(aIID) {
		if (aIID.equals(Components.interfaces.nsIWebProgressListener)
				|| aIID.equals(Components.interfaces.nsISupportsWeakReference)
				|| aIID.equals(Components.interfaces.nsISupports))
			return this;
		throw Components.results.NS_NOINTERFACE;
	},

	onLocationChange : function(aProgress, aRequest, aURI) {
		urimSidebar.onContentChanged();
	},

	onStateChange : function(aWebProgress, aRequest, aFlag, aStatus) {
		if ((aFlag & STATE_STOP) && (aFlag & STATE_IS_WINDOW)) {
			urimSidebar.onContentChanged();
		}
	},

	onProgressChange : function(aWebProgress, aRequest, curSelf, maxSelf,
			curTot, maxTot) {
	},

	onStatusChange : function(aWebProgress, aRequest, aStatus, aMessage) {
	},

	onSecurityChange : function(aWebProgress, aRequest, aState) {
	}
};

window.addEventListener("load", urimSidebar, false);
window.addEventListener("unload", urimSidebar, false);