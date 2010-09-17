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

const EXPORTED_SYMBOLS = ['DiacriticsFilter'];

function DiacriticsFilter(input) {

	var iIncToken = input.incrementToken;

	/* http://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%B0%D0%BA%D1%80%D0%B8%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%B7%D0%BD%D0%B0%D0%BA */

	var diacritic = "\u0300\u0301\u0302\u0311\u0484\u0361\u030B\u030F\u030A\u0358\u0303\u0342\u0304\u030C\u0314\u0485\u0313\u0486\u0309\u0483\u0323\u0326\u0325\u035C\u032F\u0331\u032C\u0345\u031B\u0327\u0328\u0335\u0336\u0337\u0338";

	function isDiacritic(character) {
		return diacritic.indexOf(character) > -1;
	}

	function removeDiacritic(word) {
		if (!word)
			return;

		var result = word, wordLength = word.length, end = wordLength;

		golab1 : while (end--) {
			if (isDiacritic(word[end])) {
				var totalRemove = 1, beginRemove = end + 1;
				while (end--) {
					if (isDiacritic(word[end]))
						totalRemove++;
					else {
						var left = result.substring(0, beginRemove
										- totalRemove);
						var right = result.substring(beginRemove);
						result = left + right;
						continue golab1;
					}
				}

				if (totalRemove == wordLength)
					return;

				return result.substring(beginRemove);
			}
		}

		return result;
	}

	this.incrementToken = function() {
		var token;
		while (token = iIncToken()) {
			var originalTerm = token.term;
			var filteredTerm = removeDiacritic(originalTerm);

			if (!filteredTerm)
				continue;

			if (originalTerm !== filteredTerm) {
				token.term = filteredTerm;
			}

			return token;
		}
	}
}