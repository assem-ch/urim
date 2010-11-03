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

const EXPORTED_SYMBOLS = ['WhitespaceTokenizer'];

Components.utils.import("resource://urim/analysis/Token.js");

function WhitespaceTokenizer(input, newMaxWordLen) {
	var maxWordLen = newMaxWordLen ? newMaxWordLen : 255;

	if (!input)
		throw "No text to tokenize ! Input: " + input;

	var cursor = 0;
	var inputLength = input.length;

	this.incrementToken = function() {
		while (cursor < inputLength) {
			if (!isWhiteSpace(input[cursor])) {
				var startWord = cursor++;
				var totalRight = Math.min(inputLength - startWord, maxWordLen);
				while (--totalRight) {
					if (isWhiteSpace(input[cursor])) {
						var endWord = cursor++;
						return new Token(input.substring(startWord, endWord),
								startWord, endWord);
					} else
						cursor++;
				}

				return new Token(input.substring(startWord, cursor), startWord,
						cursor);

			} else
				cursor++;
		}
	}

	/*
	 * http://mdn.beonex.com/en/Core_JavaScript_1.5_Guide/Writing_a_Regular_Expression_Pattern
	 * http://stackoverflow.com/questions/1496826/check-if-a-single-character-is-a-whitespace
	 */

	function isWhiteSpace(character) {
		return " \f\n\r\t\v\u00A0\u2028\u2029".indexOf(character) > -1;
	}
}