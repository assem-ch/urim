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

var jumlib = {};
Components.utils.import("resource://mozmill/modules/jum.js", jumlib);

var setupModule = function(module) {
	const URIM_ID = "o.mazko@mail.ru";
	var location = Components.classes["@mozilla.org/extensions/manager;1"]
			.getService(Components.interfaces.nsIExtensionManager)
			.getInstallLocation(URIM_ID).getItemLocation(URIM_ID);
	var ioService = Components.classes["@mozilla.org/network/io-service;1"]
			.getService(Components.interfaces.nsIIOService);
	var resProt = ioService.getProtocolHandler("resource")
			.QueryInterface(Components.interfaces.nsIResProtocolHandler);
	var aliasFile = Components.classes["@mozilla.org/file/local;1"]
			.createInstance(Components.interfaces.nsILocalFile);
	aliasFile.initWithPath(location.path);
	aliasFile.append("modules");
	var aliasURI = ioService.newFileURI(aliasFile);
	resProt.setSubstitution("urim", aliasURI);

	Components.utils
			.import("resource://urim/analysis/filter/SnowballFilter.js");
	Components.utils
			.import("resource://urim/analysis/filter/LowerCaseFilter.js");
	Components.utils
			.import("resource://urim/analysis/filter/ShingleStopFilter.js");
	Components.utils
			.import("resource://urim/analysis/filter/DiacriticsFilter.js");
	Components.utils.import("resource://urim/analysis/filter/TrimFilter.js");
	Components.utils.import("resource://urim/analysis/filter/WipeFilter.js");
	Components.utils.import("resource://urim/analysis/filter/LengthFilter.js");
	Components.utils.import("resource://urim/analysis/Token.js");
}

var testSnowballFilter = function() {

	assertTokenStreamContents(
			new SnowballFilter(new TestTokenStream([]), "en"), []);

	assertTokenStreamContents(new SnowballFilter(
					new TestTokenStream(["aabenbaringen"]), "da"),
			["aabenbaring"]);

	assertTokenStreamContents(new SnowballFilter(
					new TestTokenStream(["aalmoezen"]), "nl"), ["aalmoez"]);

	assertTokenStreamContents(new SnowballFilter(
					new TestTokenStream(["abandoning"]), "en"), ["abandon"]);

	assertTokenStreamContents(new SnowballFilter(
					new TestTokenStream(["aachenin"]), "fi"), ["aachen"]);

	assertTokenStreamContents(new SnowballFilter(
					new TestTokenStream(["abaissait"]), "fr"), ["abaiss"]);

	assertTokenStreamContents(new SnowballFilter(
					new TestTokenStream(["aalglatten"]), "de"), ["aalglatt"]);

	assertTokenStreamContents(new SnowballFilter(
					new TestTokenStream(["abazinok"]), "hu"), ["abazin"]);

	assertTokenStreamContents(new SnowballFilter(
					new TestTokenStream(["abakoumova"]), "it"), ["abakoumov"]);

	assertTokenStreamContents(new SnowballFilter(
					new TestTokenStream(["aabakken"]), "no"), ["aabakk"]);

	assertTokenStreamContents(new SnowballFilter(
					new TestTokenStream(["aacho"]), "pt"), ["aach"]);
	assertTokenStreamContents(
			new SnowballFilter(
					new TestTokenStream(["\u0430\u0431\u0438\u0441\u0441\u0438\u043d\u0438\u044e"]),
					"ru"), ["\u0430\u0431\u0438\u0441\u0441\u0438\u043d"]);

	assertTokenStreamContents(new SnowballFilter(
					new TestTokenStream(["abandera"]), "es"), ["abander"]);

	assertTokenStreamContents(new SnowballFilter(
					new TestTokenStream(["abborrarna"]), "sv"), ["abborr"]);
}

var testLowerCaseFilter = function() {

	assertTokenStreamContents(
			new LowerCaseFilter(new TestTokenStream([]), "en"), []);

	assertTokenStreamContents(new LowerCaseFilter(
					new TestTokenStream(["Urim"]), "en"), ["urim"], [[0]],
			[[4]]);

	assertTokenStreamContents(new LowerCaseFilter(
					new TestTokenStream(["Urim"]), "fi"), ["urim"], [[0]],
			[[4]]);

	assertTokenStreamContents(new LowerCaseFilter(
					new TestTokenStream(["\u00c4"]), "fi"), ["\u00c4"], [[0]],
			[[1]]);

	assertTokenStreamContents(new LowerCaseFilter(
					new TestTokenStream(["\u00c4\u00c4"]), "fi"),
			["\u00c4\u00c4"], [[0]], [[2]]);

	assertTokenStreamContents(new LowerCaseFilter(
					new TestTokenStream(["Urim\u00c4"]), "fi"), ["urim\u00c4"],
			[[0]], [[5]]);

	assertTokenStreamContents(new LowerCaseFilter(
					new TestTokenStream(["Urim\u00c4\u00c4"]), "fi"),
			["urim\u00c4\u00c4"], [[0]], [[6]]);

	assertTokenStreamContents(new LowerCaseFilter(
					new TestTokenStream(["\u00c4Urim"]), "fi"), ["\u00c4urim"],
			[[0]], [[5]]);

	assertTokenStreamContents(new LowerCaseFilter(
					new TestTokenStream(["\u00c4\u00c4Urim"]), "fi"),
			["\u00c4\u00c4urim"], [[0]], [[6]]);

	assertTokenStreamContents(new LowerCaseFilter(
					new TestTokenStream(["Ur\u00c4im"]), "fi"), ["ur\u00c4im"],
			[[0]], [[5]]);

	assertTokenStreamContents(new LowerCaseFilter(
					new TestTokenStream(["Ur\u00c4\u00c4im"]), "fi"),
			["ur\u00c4\u00c4im"], [[0]], [[6]]);

	assertTokenStreamContents(
			new LowerCaseFilter(
					new TestTokenStream(["\u00c4U\u00c4r\u00c4i\u00c4m\u00c4"]),
					"fi"), ["\u00c4u\u00c4r\u00c4i\u00c4m\u00c4"], [[0]], [[9]]);

	assertTokenStreamContents(
			new LowerCaseFilter(
					new TestTokenStream(["\u00c4\u00c4U\u00c4\u00c4r\u00c4\u00c4i\u00c4\u00c4m\u00c4\u00c4"]),
					"fi"),
			["\u00c4\u00c4u\u00c4\u00c4r\u00c4\u00c4i\u00c4\u00c4m\u00c4\u00c4"],
			[[0]], [[14]]);

}

var testShingleStopFilter = function() {

	/* first, simple non stop test */

	for (var i = 1; i < 75; i += 22 / 3) {

		var j = i;
		i = Math.floor(i);

		assertTokenStreamContents(new ShingleStopFilter(
						new TestTokenStream([]), 2, i), []);

		assertTokenStreamContents(new ShingleStopFilter(
						new TestTokenStream(["Urim"]), 2, i), ["Urim"], [[0]],
				[[4]], [1]);

		assertTokenStreamContents(new ShingleStopFilter(new TestTokenStream([
								"Urim", "Thummim"]), 2, i), ["Urim",
						"Urim Thummim", "Thummim"], [[0], [0, 4], [4]], [[4],
						[4, 11], [11]], [1, 1, 1]);

		assertTokenStreamContents(new ShingleStopFilter(
						new TestTokenStream(["pleaseNonStop", "divide", "thisNonStop",
								"sentence"]), 2, i), ["pleaseNonStop",
						"pleaseNonStop divide", "divide", "divide thisNonStop",
						"thisNonStop", "thisNonStop sentence", "sentence"]);

		assertTokenStreamContents(new ShingleStopFilter(new TestTokenStream([
								"pleaseNonStop", "divide", "thisNonStop", "sentence",
								"intoNonStop", "shingles"]), 3, i), ["pleaseNonStop",
						"pleaseNonStop divide", "pleaseNonStop divide thisNonStop", "divide",
						"divide thisNonStop", "divide thisNonStop sentence",
						"thisNonStop", "thisNonStop sentence",
						"thisNonStop sentence intoNonStop", "sentence",
						"sentence intoNonStop",
						"sentence intoNonStop shingles", "intoNonStop",
						"intoNonStop shingles", "shingles"]);

		assertTokenStreamContents(new ShingleStopFilter(new TestTokenStream([
								"pleaseNonStop", "divide", "thisNonStop", "sentence",
								"intoNonStop", "shingles"]), 4, i), ["pleaseNonStop",
						"pleaseNonStop divide", "pleaseNonStop divide thisNonStop",
						"pleaseNonStop divide thisNonStop sentence", "divide",
						"divide thisNonStop", "divide thisNonStop sentence",
						"divide thisNonStop sentence intoNonStop",
						"thisNonStop", "thisNonStop sentence",
						"thisNonStop sentence intoNonStop",
						"thisNonStop sentence intoNonStop shingles",
						"sentence", "sentence intoNonStop",
						"sentence intoNonStop shingles", "intoNonStop",
						"intoNonStop shingles", "shingles"]);

		i = j;
	}

	/* and more complex with stopwords */

	for (var i = 1; i < 75; i += 22 / 3) {

		var j = i;
		i = Math.floor(i);

		assertTokenStreamContents(new ShingleStopFilter(
						new TestTokenStream(["and"]), 2, i), []);

		assertTokenStreamContents(new ShingleStopFilter(new TestTokenStream([
								"and", "the"]), 2, i), []);

		assertTokenStreamContents(new ShingleStopFilter(new TestTokenStream([
								"Urim", "and"]), 2, i), ["Urim", "Urim and"], [
						[0], [0, 4]], [[4], [4, 7]], [1, 1 / 2]);

		assertTokenStreamContents(new ShingleStopFilter(new TestTokenStream([
								"the", "Urim"]), 2, i), ["the Urim", "Urim"], [
						[0, 3], [3]], [[3, 7], [7]], [1 / 2, 1]);

		assertTokenStreamContents(new ShingleStopFilter(new TestTokenStream([
								"Urim", "and", "Thummim"]), 2, i), ["Urim",
						"Urim and", "and Thummim", "Thummim"], [[0], [0, 4],
						[4, 7], [7]], [[4], [4, 7], [7, 14], [14]], [1, 1 / 2,
						1 / 2, 1]);

		assertTokenStreamContents(new ShingleStopFilter(new TestTokenStream([
								"Urim", "and", "Thummim"]), 3, i), ["Urim",
						"Urim and", "Urim and Thummim", "and Thummim",
						"Thummim"], [[0], [0, 4], [0, 4, 7], [4, 7], [7]], [
						[4], [4, 7], [4, 7, 14], [7, 14], [14]], [1, 1 / 2, 1,
						1 / 2, 1]);

		assertTokenStreamContents(new ShingleStopFilter(new TestTokenStream([
								"Urim", "and", "not", "Thummim"]), 2, i), [
						"Urim", "Urim and", "not Thummim", "Thummim"], [[0],
						[0, 4], [7, 10], [10]], [[4], [4, 7], [10, 17], [17]],
				[1, 1 / 2, 1 / 2, 1]);

		assertTokenStreamContents(new ShingleStopFilter(new TestTokenStream([
								"Urim", "and", "not", "Thummim"]), 3, i), [
						"Urim", "Urim and", "Urim and not", "and not Thummim",
						"not Thummim", "Thummim"], [[0], [0, 4], [0, 4, 7],
						[4, 7, 10], [7, 10], [10]], [[4], [4, 7], [4, 7, 10],
						[7, 10, 17], [10, 17], [17]], [1, 1 / 2, 1 - 2 / 3,
						1 - 2 / 3, 1 / 2, 1]);

		assertTokenStreamContents(new ShingleStopFilter(new TestTokenStream([
								"Urim", "and", "not", "Thummim"]), 4, i), [
						"Urim", "Urim and", "Urim and not",
						"Urim and not Thummim", "and not Thummim",
						"not Thummim", "Thummim"], [[0], [0, 4], [0, 4, 7],
						[0, 4, 7, 10], [4, 7, 10], [7, 10], [10]], [[4],
						[4, 7], [4, 7, 10], [4, 7, 10, 17], [7, 10, 17],
						[10, 17], [17]], [1, 1 / 2, 1 - 2 / 3, 1, 1 - 2 / 3,
						1 / 2, 1]);

		assertTokenStreamContents(
				new ShingleStopFilter(new TestTokenStream(["please", "divide",
								"this", "sentence"]), 2, i), ["please divide",
						"divide", "divide this", "this sentence", "sentence"]);

		assertTokenStreamContents(new ShingleStopFilter(new TestTokenStream([
								"please", "divide", "this", "sentence", "into",
								"shingles"]), 3, i), ["please divide",
						"please divide this", "divide", "divide this",
						"divide this sentence", "this sentence",
						"this sentence into", "sentence", "sentence into",
						"sentence into shingles", "into shingles", "shingles"]);

		assertTokenStreamContents(new ShingleStopFilter(new TestTokenStream([
								"please", "divide", "this", "sentence", "into",
								"shingles"]), 4, i), ["please divide",
						"please divide this", "please divide this sentence",
						"divide", "divide this", "divide this sentence",
						"divide this sentence into", "this sentence",
						"this sentence into", "this sentence into shingles",
						"sentence", "sentence into", "sentence into shingles",
						"into shingles", "shingles"]);

		i = j;
	}
}

var testTrimFilter = function() {

	assertTokenStreamContents(new TrimFilter(new TestTokenStream([]), "en"), []);

	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["]"]), "en"),
			[]);

	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["]"]), "en"),
			[]);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream([",**"]), "en"), []);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream([",*"]), "en"), []);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream(["*,"]), "en"), []);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream(["**,"]), "en"), []);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream(["**"]), "en"), []);

	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["*"]), "en"),
			[]);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream([",##"]), "en"), []);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream([",#"]), "en"), []);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream(["#,"]), "en"), []);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream(["##,"]), "en"), []);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream(["##"]), "en"), []);

	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["#"]), "en"),
			[]);

	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["*"]), "en"),
			[]);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream(["*#"]), "en"), ["*#"], [[0]],
			[[2]]);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream(["#*"]), "en"), []);

	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["*101#"]),
					"en"), ["*101#"], [[0]], [[5]]);

	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["#101*"]),
					"en"), ["101"], [[1]], [[4]]);

	assertTokenStreamContents(new TrimFilter(new TestTokenStream([","]), "en"),
			[]);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream([",,"]), "en"), []);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream([",,,"]), "en"), []);

	assertTokenStreamContents(new TrimFilter(new TestTokenStream([",", ","]),
					"en"), []);

	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["Urim"]),
					"en"), ["Urim"], [[0]], [[4]]);
	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["U'ri,m"]),
					"en"), ["U'ri,m"], [[0]], [[6]]);

	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["0Urim0"]),
					"en"), ["0Urim0"], [[0]], [[6]]);
	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["9Urim9"]),
					"en"), ["9Urim9"], [[0]], [[6]]);

	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["Urim;"]),
					"en"), ["Urim"], [[0]], [[4]]);
	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["Urim;,"]),
					"en"), ["Urim"], [[0]], [[4]]);
	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["Urim;,."]),
					"en"), ["Urim"], [[0]], [[4]]);

	assertTokenStreamContents(new TrimFilter(new TestTokenStream([",Urim"]),
					"en"), ["Urim"], [[1]], [[5]]);
	assertTokenStreamContents(new TrimFilter(new TestTokenStream([",;Urim"]),
					"en"), ["Urim"], [[2]], [[6]]);
	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["',;Urim"]),
					"en"), ["',;Urim"], [[0]], [[7]]);
	assertTokenStreamContents(new TrimFilter(new TestTokenStream([",;Urim'"]),
					"en"), ["Urim'"], [[2]], [[7]]);

	assertTokenStreamContents(new TrimFilter(new TestTokenStream([",Urim,"]),
					"en"), ["Urim"], [[1]], [[5]]);
	assertTokenStreamContents(new TrimFilter(new TestTokenStream([",;Urim,;"]),
					"en"), ["Urim"], [[2]], [[6]]);
	assertTokenStreamContents(new TrimFilter(
					new TestTokenStream(["',;Urim',;"]), "en"), ["',;Urim'"],
			[[0]], [[8]]);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream(["',;"]), "en"), ["'"], [[0]],
			[[1]]);
	assertTokenStreamContents(new TrimFilter(
					new TestTokenStream(["',;", "',;"]), "en"), ["'", "'"], [
					[0], [3]], [[1], [4]]);
	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["',;",
							"',;Urim"]), "en"), ["'", "',;Urim"], [[0], [3]], [
					[1], [10]]);
	assertTokenStreamContents(new TrimFilter(new TestTokenStream(["',;",
							"',;Urim", "',;"]), "en"), ["'", "',;Urim", "'"], [
					[0], [3], [10]], [[1], [10], [11]]);
	assertTokenStreamContents(new TrimFilter(
					new TestTokenStream(["',;", "Urim"]), "en"), ["'", "Urim"],
			[[0], [3]], [[1], [7]]);
	assertTokenStreamContents(new TrimFilter(
					new TestTokenStream(["Urim", "',;"]), "en"), ["Urim", "'"],
			[[0], [4]], [[4], [5]]);

	assertTokenStreamContents(
			new TrimFilter(new TestTokenStream([",;'"]), "en"), ["'"], [[2]],
			[[3]]);
	assertTokenStreamContents(new TrimFilter(
					new TestTokenStream([",;'", ",;'"]), "en"), ["'", "'"], [
					[2], [5]], [[3], [6]]);
	assertTokenStreamContents(new TrimFilter(new TestTokenStream([",;'",
							"Urim',;"]), "en"), ["'", "Urim'"], [[2], [3]], [
					[3], [8]]);
	assertTokenStreamContents(new TrimFilter(new TestTokenStream([",;'",
							"Urim',;", ",;'"]), "en"), ["'", "Urim'", "'"], [
					[2], [3], [12]], [[3], [8], [13]]);
}

var testLengthFilter = function() {

	assertTokenStreamContents(new LengthFilter(new TestTokenStream([])), []);

	assertTokenStreamContents(new LengthFilter(new TestTokenStream(["Urim"])),
			["Urim"], [[0]], [[4]]);

	assertTokenStreamContents(new LengthFilter(new TestTokenStream(["U"])), []);

	assertTokenStreamContents(
			new LengthFilter(new TestTokenStream(["Urim", "u"])), ["Urim"],
			[[0]], [[4]]);

	assertTokenStreamContents(
			new LengthFilter(new TestTokenStream(["u", "Urim"])), ["Urim"],
			[[1]], [[5]]);

	assertTokenStreamContents(new LengthFilter(new TestTokenStream(["u", "u",
					"Urim"])), ["Urim"], [[2]], [[6]]);

	assertTokenStreamContents(new LengthFilter(new TestTokenStream(["u",
					"Urim", "u"])), ["Urim"], [[1]], [[5]]);

	assertTokenStreamContents(new LengthFilter(new TestTokenStream(["ur",
					"Urim"])), ["ur", "Urim"], [[0], [2]], [[2], [6]]);

	assertTokenStreamContents(new LengthFilter(
					new TestTokenStream(["Thummim"]), 2, 5), []);

	assertTokenStreamContents(new LengthFilter(new TestTokenStream(["Urim"]),
					2, 5), ["Urim"], [[0]], [[4]]);

	assertTokenStreamContents(new LengthFilter(new TestTokenStream(["Thummim",
							"Urim"]), 2, 5), ["Urim"], [[7]], [[11]]);

	assertTokenStreamContents(new LengthFilter(new TestTokenStream(["Urim",
							"Thummim"]), 2, 5), ["Urim"], [[0]], [[4]]);
}

var testWipeFilter = function() {

	assertTokenStreamContents(new WipeFilter(new TestTokenStream([])), []);

	assertTokenStreamContents(new WipeFilter(new TestTokenStream(["Urim"])),
			["Urim"], [[0]], [[4]]);

	assertTokenStreamContents(new WipeFilter(new TestTokenStream(["[Urim"])),
			[]);

	assertTokenStreamContents(new WipeFilter(new TestTokenStream(["Urim]"])),
			[]);

	assertTokenStreamContents(new WipeFilter(new TestTokenStream(["[Urim]"])),
			[]);

	assertTokenStreamContents(new WipeFilter(new TestTokenStream(["Urim",
					"[Urim"])), ["Urim"], [[0]], [[4]]);

	assertTokenStreamContents(new WipeFilter(new TestTokenStream(["Urim]",
					"Urim"])), ["Urim"], [[5]], [[9]]);
}

var testDiacriticsFilter = function() {

	assertTokenStreamContents(new DiacriticsFilter(new TestTokenStream([])), []);

	assertTokenStreamContents(
			new DiacriticsFilter(new TestTokenStream(["\u0301"])), []);

	assertTokenStreamContents(
			new DiacriticsFilter(new TestTokenStream(["\u0301\u0301"])), []);

	assertTokenStreamContents(new DiacriticsFilter(new TestTokenStream([
					"\u0301", "\u0301"])), []);

	assertTokenStreamContents(
			new DiacriticsFilter(new TestTokenStream(["u\u0301\u0301"])), ["u"]);

	assertTokenStreamContents(
			new DiacriticsFilter(new TestTokenStream(["Urim"])), ["Urim"],
			[[0]], [[4]]);

	assertTokenStreamContents(
			new DiacriticsFilter(new TestTokenStream(["Uri\u0301m"])),
			["Urim"], [[0]], [[5]]);

	assertTokenStreamContents(
			new DiacriticsFilter(new TestTokenStream(["\u0301Uri\u0301m\u0301"])),
			["Urim"], [[0]], [[7]]);

	assertTokenStreamContents(
			new DiacriticsFilter(new TestTokenStream(["\u0301U\u0301r\u0301i\u0301m\u0301"])),
			["Urim"], [[0]], [[9]]);

	assertTokenStreamContents(
			new DiacriticsFilter(new TestTokenStream(["\u0301\u0301U\u0301\u0301r\u0301\u0301i\u0301\u0301m\u0301\u0301"])),
			["Urim"], [[0]], [[14]]);

	assertTokenStreamContents(
			new DiacriticsFilter(new TestTokenStream(["Uri\u0301\u0301m"])),
			["Urim"], [[0]], [[6]]);

	assertTokenStreamContents(
			new DiacriticsFilter(new TestTokenStream(["\u0301\u0301Uri\u0301\u0301m\u0301\u0301"])),
			["Urim"], [[0]], [[10]]);

	assertTokenStreamContents(new TrimFilter(
					new DiacriticsFilter(new TestTokenStream(["Urim\u0301"])),
					"en"), ["Urim"], [[0]], [[5]]);

	assertTokenStreamContents(
			new TrimFilter(
					new DiacriticsFilter(new TestTokenStream(["Urim\u0301\u0301"])),
					"en"), ["Urim"], [[0]], [[6]]);

	assertTokenStreamContents(new TrimFilter(
					new DiacriticsFilter(new TestTokenStream(["\u0301Urim"])),
					"en"), ["Urim"], [[0]], [[5]]);

	assertTokenStreamContents(
			new TrimFilter(
					new DiacriticsFilter(new TestTokenStream(["\u0301\u0301Urim"])),
					"en"), ["Urim"], [[0]], [[6]]);

	assertTokenStreamContents(
			new TrimFilter(
					new DiacriticsFilter(new TestTokenStream(["\u0301\u0301Urim\u0301\u0301"])),
					"en"), ["Urim"], [[0]], [[8]]);

	assertTokenStreamContents(
			new TrimFilter(
					new DiacriticsFilter(new TestTokenStream([" Urim\u0301 "])),
					"en"), ["Urim"], [[1]], [[6]]);

	assertTokenStreamContents(
			new TrimFilter(
					new DiacriticsFilter(new TestTokenStream([" \u0301Urim "])),
					"en"), ["Urim"], [[1]], [[6]]);
}

function TestTokenStream(words) {
	var i = 0, start = 0;
	this.incrementToken = function() {
		if (i < words.length) {
			var word = words[i++];
			start += word.length;
			return new Token(word, start - word.length, start);
		}
	}
}

function assertTokenStreamContents(tokenStream, output, startOffsets,
		endOffsets, boosts) {
	for (var i = 0; i < output.length; i++) {
		var token = tokenStream.incrementToken();
		jumlib.assertEquals(token.term, output[i]);
		if (startOffsets) {
			for (var j = 0; j < token.offset.length; j++) {
				jumlib.assertEquals(token.offset[j].start, startOffsets[i][j]);
			}
		}
		if (endOffsets) {
			for (var j = 0; j < token.offset.length; j++) {
				jumlib.assertEquals(token.offset[j].end, endOffsets[i][j]);
			}
		}
		if (boosts) {
			jumlib.assertEquals(token.boost, boosts[i]);
		}
	}

	jumlib.assertUndefined(tokenStream.incrementToken());
}