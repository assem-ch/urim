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

const EXPORTED_SYMBOLS = ['UrimCore'];

Components.utils.import("resource://urim/StringHashMap.js");
Components.utils.import("resource://urim/LanguageIdentifier.js");
Components.utils.import("resource://urim/analysis/filter/TrimFilter.js");
Components.utils.import("resource://urim/analysis/filter/WipeFilter.js");
Components.utils.import("resource://urim/analysis/WhitespaceTokenizer.js");
Components.utils.import("resource://urim/analysis/filter/LengthFilter.js");
Components.utils.import("resource://urim/analysis/filter/SnowballFilter.js");
Components.utils.import("resource://urim/analysis/filter/LowerCaseFilter.js");
Components.utils.import("resource://urim/analysis/filter/DiacriticsFilter.js");
Components.utils.import("resource://urim/analysis/filter/ShingleStopFilter.js");

function UrimCore() {
	var _languageIdentifier = new LanguageIdentifier();

	function fillTokens(tokenStream) {
		var tokensMap = new StringHashMap(), count = 0, max = 0;

		var token, iIncToken = tokenStream.incrementToken;
		while (token = iIncToken()) {
			var tokenTerm = token.term, item = tokensMap.getValue(tokenTerm);
			if (item) {
				var offsetMatrix = item.offsetMatrix;
				offsetMatrix.push(token.offset);
				var oML = offsetMatrix.length;
				if (oML > max)
					max = oML;
			} else {
				count++;
				if (!max)
					max = 1;
				tokensMap.setValue(tokenTerm, {
							"offsetMatrix" : [token.offset],
							"boost" : token.boost
						});
			}
		}

		var array = new Array(count);
		var i = 0;

		tokensMap.forEach(function(key, value) {
					array[i++] = value;
				});

		return {
			"array" : array,
			"max" : max
		};
	}

	this.joinArray = function(array, text, index) {
		var res;

		for (var i = 0; i < array.length; i++) {
			var value = array[i];
			if (res) {
				res += ", \"" + this.getEntry(value[index], text) + "\" : "
						+ value.length;
			} else {
				res = "\"" + this.getEntry(value[index], text) + "\" : "
						+ value.length;
			}
		}

		return res;
	}

	this.getEntry = function(offsetArray, text) {
		var entry, lastEnd;

		for (var i = 0; i < offsetArray.length; i++) {
			if (entry) {
				var markup = findMarkup(text.substring(lastEnd,
						offsetArray[i].start));

				if (markup)
					entry += markup[0] == ":" ? markup : " " + markup;

				entry += " "
						+ text.substring(offsetArray[i].start,
								offsetArray[i].end);
			} else {
				entry = text
						.substring(offsetArray[i].start, offsetArray[i].end);
			}

			lastEnd = offsetArray[i].end;
		}

		return entry;

		function findMarkup(space) {

			/* http://www.fileformat.info/info/unicode/block/general_punctuation/list.htm */

			var list = ":-^!#$%&*+=/<>@~\u00cd\u00c4\u005e\u001d\u001b\u001a\u0015\u0011\u0010\u000F\u000E\u000D\u000C\u000B\u0006\u0005\u0004\u0003\u0002\u0001\u2010\u2011\u2012\u2013\u2014\u2015\u2030\u2031\u2039\u203A\u2043\u2053\u204C\u204D\u05BE\uFE63\uFF0D\u301C";

			var markup = [];
			var fragment;

			for (var i = 0; i < space.length; i++) {
				var character = space[i];

				if (list.indexOf(character) > -1) {
					if (fragment)
						fragment += character;
					else
						fragment = character;
				} else if (fragment) {
					markup.push(fragment);
					fragment = null;
				}
			}

			if (fragment)
				markup.push(fragment);

			if (markup.length)
				return markup.join(" ");
		}
	}

	this.getBaseEntry = function(offsetArray, text) {
		return text.substring(offsetArray[0].start,
				offsetArray[offsetArray.length - 1].end);
	}

	this.build = function(text, limit, log) {
		var languageIdentifierStart, fillTokensStart, sortStart;

		if (log)
			languageIdentifierStart = new Date();
		var language = _languageIdentifier.identify(text);
		if (log) {
			log("LanguageIdentifier time: "
					+ this.elapsed(languageIdentifierStart) + " [" + language
					+ "]");
			fillTokensStart = new Date();
		}

		/* Shigles 3, min word length 2 */

		var tokenStream = new LengthFilter(
				new ShingleStopFilter(
						new SnowballFilter(
								new LowerCaseFilter(
										new WipeFilter(new TrimFilter(
												new DiacriticsFilter(new WhitespaceTokenizer(text)),
												language)), language), language),
						3), 2);

		var tokens = fillTokens(tokenStream);
		if (log) {
			log("Fill tokens time: " + this.elapsed(fillTokensStart));
			sortStart = new Date();
		}

		/* Sort tokens with token parts count boosting */

		tokens.array.sort(function(a, b) {
					return calculate(b) - calculate(a);

					function calculate(item) {
						var itemOM = item.offsetMatrix, itemOML = itemOM.length;
						return itemOML
								* (item.boost < 1 ? item.boost * itemOML
										/ (7 * tokens.max) : 1)
								* (1 + (itemOML > 3 ? (itemOM[0].length - 1)
										/ 2 : 0));
					}
				});

		if (tokens.array.length > limit)
			tokens.array.length = limit;

		if (log)
			log("Sort tokens time: " + this.elapsed(sortStart));

		var offsetsArray = new Array(tokens.array.length);

		for (var i = 0; i < tokens.array.length; i++)
			offsetsArray[i] = tokens.array[i].offsetMatrix;

		return {
			"array" : offsetsArray,
			"language" : language
		};
	}

	this.elapsed = function(start) {
		var elapsed = new Date(new Date().getTime() - start.getTime())
				.getTime();

		var hours = Math.floor(elapsed / 3600000);
		var hoursMs = 3600000 * hours;
		var minutes = Math.floor((elapsed - hoursMs) / 60000);
		var minutesMs = 60000 * minutes;
		var seconds = Math.floor((elapsed - hoursMs - minutesMs) / 1000);
		var mSeconds = Math.floor(elapsed - hoursMs - minutesMs - 1000
				* seconds);

		return hours + "h:" + minutes + "m:" + seconds + "s:" + mSeconds + "ms";
	}
}