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

	Components.utils.import("resource://urim/analysis/WhitespaceTokenizer.js");
}

var testWhitespaceTokenizer = function() {

	assertTokenStreamContents(new WhitespaceTokenizer("foo"), ["foo"], [0], [3]);

	assertTokenStreamContents(new WhitespaceTokenizer("foo\nBar"), ["foo",
					"Bar"], [0, 4], [3, 7]);
	assertTokenStreamContents(new WhitespaceTokenizer("foo\nBar\n"), ["foo",
					"Bar"], [0, 4], [3, 7]);
	assertTokenStreamContents(new WhitespaceTokenizer("\nfoo\nBar"), ["foo",
					"Bar"], [1, 5], [4, 8]);
	assertTokenStreamContents(new WhitespaceTokenizer("\nfoo\nBar\n"), ["foo",
					"Bar"], [1, 5], [4, 8]);

	assertTokenStreamContents(new WhitespaceTokenizer("a\nfoo\nBar"), ["a",
					"foo", "Bar"], [0, 2, 6], [1, 5, 9]);
	assertTokenStreamContents(new WhitespaceTokenizer("foo\na\nBar"), ["foo",
					"a", "Bar"], [0, 4, 6], [3, 5, 9]);
	assertTokenStreamContents(new WhitespaceTokenizer("foo\nBar\na"), ["foo",
					"Bar", "a"], [0, 4, 8], [3, 7, 9]);

	assertTokenStreamContents(new WhitespaceTokenizer("aa\nfoo\nBar"), ["aa",
					"foo", "Bar"], [0, 3, 7], [2, 6, 10]);
	assertTokenStreamContents(new WhitespaceTokenizer("foo\naa\nBar"), ["foo",
					"aa", "Bar"], [0, 4, 7], [3, 6, 10]);
	assertTokenStreamContents(new WhitespaceTokenizer("foo\nBar\naa"), ["foo",
					"Bar", "aa"], [0, 4, 8], [3, 7, 10]);

	assertTokenStreamContents(
			new WhitespaceTokenizer("foo\nBar\tFOO\rBAR \n\t\r a"), ["foo",
					"Bar", "FOO", "BAR", "a"], [0, 4, 8, 12, 20], [3, 7, 11,
					15, 21]);
	assertTokenStreamContents(
			new WhitespaceTokenizer("foo\nBar\tFOO\rBAR \n\t\r a "), ["foo",
					"Bar", "FOO", "BAR", "a"], [0, 4, 8, 12, 20], [3, 7, 11,
					15, 21]);
	assertTokenStreamContents(
			new WhitespaceTokenizer(" foo\nBar\tFOO\rBAR \n\t\r a"), ["foo",
					"Bar", "FOO", "BAR", "a"], [1, 5, 9, 13, 21], [4, 8, 12,
					16, 22]);
	assertTokenStreamContents(
			new WhitespaceTokenizer(" foo\nBar\tFOO\rBAR \n\t\r a "), ["foo",
					"Bar", "FOO", "BAR", "a"], [1, 5, 9, 13, 21], [4, 8, 12,
					16, 22]);

	assertTokenStreamContents(new WhitespaceTokenizer("foo"), ["foo"], [0], [3]);
	assertTokenStreamContents(new WhitespaceTokenizer(" foo"), ["foo"], [1],
			[4]);
	assertTokenStreamContents(new WhitespaceTokenizer("foo "), ["foo"], [0],
			[3]);
	assertTokenStreamContents(new WhitespaceTokenizer(" foo "), ["foo"], [1],
			[4]);

	assertTokenStreamContents(
			new WhitespaceTokenizer("foo      bar .  FOO <> BAR"), ["foo",
					"bar", ".", "FOO", "<>", "BAR"]);
	assertTokenStreamContents(new WhitespaceTokenizer("foo.bar.FOO.BAR"),
			["foo.bar.FOO.BAR"]);
	assertTokenStreamContents(new WhitespaceTokenizer("U.S.A."), ["U.S.A."]);
	assertTokenStreamContents(new WhitespaceTokenizer("C++"), ["C++"]);
	assertTokenStreamContents(new WhitespaceTokenizer("B2B"), ["B2B"]);
	assertTokenStreamContents(new WhitespaceTokenizer("2B"), ["2B"]);
	assertTokenStreamContents(new WhitespaceTokenizer("\"QUOTED\" word"), [
					"\"QUOTED\"", "word"]);

	assertTokenStreamContents(new WhitespaceTokenizer("Urim and Thummim", 4), [
					"Urim", "and", "Thum", "mim"], [0, 5, 9, 13],
			[4, 8, 13, 16]);

	assertTokenStreamContents(new WhitespaceTokenizer("a"), ["a"], [0], [1]);
	assertTokenStreamContents(new WhitespaceTokenizer("a b"), ["a", "b"],
			[0, 2], [1, 3]);
}

function assertTokenStreamContents(tokenStream, output, startOffsets,
		endOffsets) {
	for (var i = 0; i < output.length; i++) {
		var token = tokenStream.incrementToken();
		jumlib.assertNotNull(token);
		jumlib.assertEquals(token.term, output[i]);
		if (startOffsets)
			jumlib.assertEquals(token.offset[0].start, startOffsets[i]);
		if (endOffsets)
			jumlib.assertEquals(token.offset[0].end, endOffsets[i]);
	}

	jumlib.assertUndefined(tokenStream.incrementToken());
}