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
 
const EXPORTED_SYMBOLS = ['SnowballFilter'];

function SnowballFilter(input, language) {

	var iIncToken = input.incrementToken;

	function loadStemmer() {
		switch (language) {
			case "it" :
				Components.utils
						.import("resource://urim/analysis/stemmer/ext/ItalianStemmer.js");
				return new ItalianStemmer();
			case "hu" :
				Components.utils
						.import("resource://urim/analysis/stemmer/ext/HungarianStemmer.js");
				return new HungarianStemmer();
			case "sv" :
				Components.utils
						.import("resource://urim/analysis/stemmer/ext/SwedishStemmer.js");
				return new SwedishStemmer();
			case "fr" :
				Components.utils
						.import("resource://urim/analysis/stemmer/ext/FrenchStemmer.js");
				return new FrenchStemmer();
			case "ru" :
				Components.utils
						.import("resource://urim/analysis/stemmer/ext/RussianStemmer.js");
				return new RussianStemmer();
			case "fi" :
				Components.utils
						.import("resource://urim/analysis/stemmer/ext/FinnishStemmer.js");
				return new FinnishStemmer();
			case "es" :
				Components.utils
						.import("resource://urim/analysis/stemmer/ext/SpanishStemmer.js");
				return new SpanishStemmer();
			case "en" :
				Components.utils
						.import("resource://urim/analysis/stemmer/ext/EnglishStemmer.js");
				return new EnglishStemmer();
			case "pt" :
				Components.utils
						.import("resource://urim/analysis/stemmer/ext/PortugueseStemmer.js");
				return new PortugueseStemmer();
			case "de" :
				Components.utils
						.import("resource://urim/analysis/stemmer/ext/GermanStemmer.js");
				return new GermanStemmer();
			case "da" :
				Components.utils
						.import("resource://urim/analysis/stemmer/ext/DanishStemmer.js");
				return new DanishStemmer();
			case "no" :
				Components.utils
						.import("resource://urim/analysis/stemmer/ext/NorwegianStemmer.js");
				return new NorwegianStemmer();
			case "nl" :
				Components.utils
						.import("resource://urim/analysis/stemmer/ext/DutchStemmer.js");
				return new DutchStemmer();
			default :
				throw "Unsupported language: " + language;
		}
	}

	var stem = (function() {
		var stemmer = loadStemmer();
		return function(word) {
			stemmer.setCurrent(word);
			stemmer.stem();

			return stemmer.getCurrent();
		}
	})();

	this.incrementToken = function() {
		var token = iIncToken();
		if (!token)
			return;

		var originalTerm = token.term;
		var finalTerm = stem(originalTerm);
		if (originalTerm !== finalTerm)
			token.term = finalTerm;

		return token;
	}
}