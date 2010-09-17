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

const EXPORTED_SYMBOLS = ['LengthFilter'];

function LengthFilter(input, newMinWordLength, newMaxWordLength) {

	var iIncToken = input.incrementToken;

	var maxWordLength = newMaxWordLength ? newMaxWordLength : 30;
	var minWordLength = newMinWordLength ? newMinWordLength : 2;

	if (minWordLength < 2)
		throw "Min word length must be > 1, current: " + minWordLength;

	if (maxWordLength < 2)
		throw "Max word length must be > 1, current: " + maxWordLength;

	if (maxWordLength <= minWordLength)
		throw "Max word length must be > Min, current: " + maxWordLength
				+ " : " + minWordLength;

	this.incrementToken = function() {
		var token;
		while (token = iIncToken()) {

			/*
			 * If token consists of multiple parts, newMinWordLength is limit of
			 * just one part, between them at less one char (usially one space)
			 */

			var tokenOffset = token.offset, tokenOffsetLength = tokenOffset.length;

			var tokenMinLength = tokenOffsetLength * minWordLength
					+ tokenOffsetLength - 1;
			var tokenLength = tokenOffset[tokenOffsetLength - 1].end
					- tokenOffset[0].start;
			if (tokenLength < tokenMinLength || tokenLength > maxWordLength)
				continue;

			return token;
		}
	}
}