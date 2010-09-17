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

const EXPORTED_SYMBOLS = ['TrimFilter'];

Components.utils.import("resource://urim/stringUtils.js");

function TrimFilter(input, language) {

	var iIncToken = input.incrementToken;

	if (!language)
		throw "language is undefind"

	var leftEscape = "\u00FC\u00FB\u007B\u005B\u002A\u0026\u0025\u0024\u0015\u000E\u000D\u000C\u000B\u0006\u0005\u0004\u0003\u0002\u0001";
	var rightEscape = "\u007D\u005D\u0025\u0024\u0023\u0015\u000E\u000D\u000C\u000B\u0006\u0005\u0004\u0003\u0002\u0001";

	switch (language) {
		case "en" :
			leftEscape += "'";
			rightEscape += "'";
			break;
		case "hu" :
			rightEscape += ".-";
			break;
	}

	var totalTrimLeft, totalTrimRight;

	function isLetterOrDigit(character) {
		return stringUtils.isUnicodeLetter(character)
				|| stringUtils.isDigit(character);
	}

	function isTrimLeftChar(character) {
		return !isLetterOrDigit(character)
				&& leftEscape.indexOf(character) == -1;
	}

	function isTrimRightChar(character) {
		return !isLetterOrDigit(character)
				&& rightEscape.indexOf(character) == -1;
	}

	function trim(word) {
		if (!word)
			return;

		var wordLength = word.length, start = 0, end = wordLength - 1;

		while (isTrimRightChar(word[end]))
			if (!end--)
				return;

		while (isTrimLeftChar(word[start]))
			if (start++ == end)
				return;

		totalTrimLeft = start;
		totalTrimRight = wordLength - 1 - end;

		if (totalTrimLeft || totalTrimRight)
			return word.substring(start, end + 1);

		return word;
	}

	this.incrementToken = function() {
		var token;
		while (token = iIncToken()) {
			var originalTerm = token.term;
			var finalTerm = trim(originalTerm);
			if (!finalTerm)
				continue;

			if (originalTerm !== finalTerm) {
				token.term = finalTerm;
				if (totalTrimRight) {
					var tokenOffset = token.offset;
					var offset = tokenOffset[tokenOffset.length - 1];
					offset.end -= totalTrimRight;
				}
				if (totalTrimLeft) {
					var offset = token.offset[0];
					offset.start += totalTrimLeft;
				}
			}

			return token;
		}
	}
}