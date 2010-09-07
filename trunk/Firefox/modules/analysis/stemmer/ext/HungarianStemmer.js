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

const EXPORTED_SYMBOLS = ['HungarianStemmer'];

Components.utils.import("resource://urim/analysis/stemmer/Among.js");
Components.utils.import("resource://urim/analysis/stemmer/SnowballProgram.js");

function HungarianStemmer() {

	var a_0 = [new Among("cs", -1, -1), new Among("dzs", -1, -1),
			new Among("gy", -1, -1), new Among("ly", -1, -1),
			new Among("ny", -1, -1), new Among("sz", -1, -1),
			new Among("ty", -1, -1), new Among("zs", -1, -1)];

	var a_1 = [new Among("\u00E1", -1, 1), new Among("\u00E9", -1, 2)];

	var a_2 = [new Among("bb", -1, -1), new Among("cc", -1, -1),
			new Among("dd", -1, -1), new Among("ff", -1, -1),
			new Among("gg", -1, -1), new Among("jj", -1, -1),
			new Among("kk", -1, -1), new Among("ll", -1, -1),
			new Among("mm", -1, -1), new Among("nn", -1, -1),
			new Among("pp", -1, -1), new Among("rr", -1, -1),
			new Among("ccs", -1, -1), new Among("ss", -1, -1),
			new Among("zzs", -1, -1), new Among("tt", -1, -1),
			new Among("vv", -1, -1), new Among("ggy", -1, -1),
			new Among("lly", -1, -1), new Among("nny", -1, -1),
			new Among("tty", -1, -1), new Among("ssz", -1, -1),
			new Among("zz", -1, -1)];

	var a_3 = [new Among("al", -1, 1), new Among("el", -1, 2)];

	var a_4 = [new Among("ba", -1, -1), new Among("ra", -1, -1),
			new Among("be", -1, -1), new Among("re", -1, -1),
			new Among("ig", -1, -1), new Among("nak", -1, -1),
			new Among("nek", -1, -1), new Among("val", -1, -1),
			new Among("vel", -1, -1), new Among("ul", -1, -1),
			new Among("n\u00E1l", -1, -1), new Among("n\u00E9l", -1, -1),
			new Among("b\u00F3l", -1, -1), new Among("r\u00F3l", -1, -1),
			new Among("t\u00F3l", -1, -1), new Among("b\u00F5l", -1, -1),
			new Among("r\u00F5l", -1, -1), new Among("t\u00F5l", -1, -1),
			new Among("\u00FCl", -1, -1), new Among("n", -1, -1),
			new Among("an", 19, -1), new Among("ban", 20, -1),
			new Among("en", 19, -1), new Among("ben", 22, -1),
			new Among("k\u00E9ppen", 22, -1), new Among("on", 19, -1),
			new Among("\u00F6n", 19, -1), new Among("k\u00E9pp", -1, -1),
			new Among("kor", -1, -1), new Among("t", -1, -1),
			new Among("at", 29, -1), new Among("et", 29, -1),
			new Among("k\u00E9nt", 29, -1), new Among("ank\u00E9nt", 32, -1),
			new Among("enk\u00E9nt", 32, -1), new Among("onk\u00E9nt", 32, -1),
			new Among("ot", 29, -1), new Among("\u00E9rt", 29, -1),
			new Among("\u00F6t", 29, -1), new Among("hez", -1, -1),
			new Among("hoz", -1, -1), new Among("h\u00F6z", -1, -1),
			new Among("v\u00E1", -1, -1), new Among("v\u00E9", -1, -1)];

	var a_5 = [new Among("\u00E1n", -1, 2), new Among("\u00E9n", -1, 1),
			new Among("\u00E1nk\u00E9nt", -1, 3)];

	var a_6 = [new Among("stul", -1, 2), new Among("astul", 0, 1),
			new Among("\u00E1stul", 0, 3), new Among("st\u00FCl", -1, 2),
			new Among("est\u00FCl", 3, 1), new Among("\u00E9st\u00FCl", 3, 4)];

	var a_7 = [new Among("\u00E1", -1, 1), new Among("\u00E9", -1, 2)];

	var a_8 = [new Among("k", -1, 7), new Among("ak", 0, 4),
			new Among("ek", 0, 6), new Among("ok", 0, 5),
			new Among("\u00E1k", 0, 1), new Among("\u00E9k", 0, 2),
			new Among("\u00F6k", 0, 3)];

	var a_9 = [new Among("\u00E9i", -1, 7), new Among("\u00E1\u00E9i", 0, 6),
			new Among("\u00E9\u00E9i", 0, 5), new Among("\u00E9", -1, 9),
			new Among("k\u00E9", 3, 4), new Among("ak\u00E9", 4, 1),
			new Among("ek\u00E9", 4, 1), new Among("ok\u00E9", 4, 1),
			new Among("\u00E1k\u00E9", 4, 3), new Among("\u00E9k\u00E9", 4, 2),
			new Among("\u00F6k\u00E9", 4, 1), new Among("\u00E9\u00E9", 3, 8)];

	var a_10 = [new Among("a", -1, 18), new Among("ja", 0, 17),
			new Among("d", -1, 16), new Among("ad", 2, 13),
			new Among("ed", 2, 13), new Among("od", 2, 13),
			new Among("\u00E1d", 2, 14), new Among("\u00E9d", 2, 15),
			new Among("\u00F6d", 2, 13), new Among("e", -1, 18),
			new Among("je", 9, 17), new Among("nk", -1, 4),
			new Among("unk", 11, 1), new Among("\u00E1nk", 11, 2),
			new Among("\u00E9nk", 11, 3), new Among("\u00FCnk", 11, 1),
			new Among("uk", -1, 8), new Among("juk", 16, 7),
			new Among("\u00E1juk", 17, 5), new Among("\u00FCk", -1, 8),
			new Among("j\u00FCk", 19, 7), new Among("\u00E9j\u00FCk", 20, 6),
			new Among("m", -1, 12), new Among("am", 22, 9),
			new Among("em", 22, 9), new Among("om", 22, 9),
			new Among("\u00E1m", 22, 10), new Among("\u00E9m", 22, 11),
			new Among("o", -1, 18), new Among("\u00E1", -1, 19),
			new Among("\u00E9", -1, 20)];

	var a_11 = [new Among("id", -1, 10), new Among("aid", 0, 9),
			new Among("jaid", 1, 6), new Among("eid", 0, 9),
			new Among("jeid", 3, 6), new Among("\u00E1id", 0, 7),
			new Among("\u00E9id", 0, 8), new Among("i", -1, 15),
			new Among("ai", 7, 14), new Among("jai", 8, 11),
			new Among("ei", 7, 14), new Among("jei", 10, 11),
			new Among("\u00E1i", 7, 12), new Among("\u00E9i", 7, 13),
			new Among("itek", -1, 24), new Among("eitek", 14, 21),
			new Among("jeitek", 15, 20), new Among("\u00E9itek", 14, 23),
			new Among("ik", -1, 29), new Among("aik", 18, 26),
			new Among("jaik", 19, 25), new Among("eik", 18, 26),
			new Among("jeik", 21, 25), new Among("\u00E1ik", 18, 27),
			new Among("\u00E9ik", 18, 28), new Among("ink", -1, 20),
			new Among("aink", 25, 17), new Among("jaink", 26, 16),
			new Among("eink", 25, 17), new Among("jeink", 28, 16),
			new Among("\u00E1ink", 25, 18), new Among("\u00E9ink", 25, 19),
			new Among("aitok", -1, 21), new Among("jaitok", 32, 20),
			new Among("\u00E1itok", -1, 22), new Among("im", -1, 5),
			new Among("aim", 35, 4), new Among("jaim", 36, 1),
			new Among("eim", 35, 4), new Among("jeim", 38, 1),
			new Among("\u00E1im", 35, 2), new Among("\u00E9im", 35, 3)];

	var g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 52, 14];

	var I_p1;

	var snowballProgram = new SnowballProgram();

	this.setCurrent = function(word) {
		snowballProgram.setCurrent(word);
	};

	this.getCurrent = function() {
		return snowballProgram.getCurrent()
	};

	function r_mark_regions() {
		var v_1, v_2, v_3;

		I_p1 = snowballProgram.limit;
		lab0 : do {
			v_1 = snowballProgram.cursor;
			lab1 : do {
				if (!(snowballProgram.in_grouping(g_v, 97, 252))) {
					break lab1;
				}
				golab2 : while (true) {
					v_2 = snowballProgram.cursor;
					lab3 : do {
						if (!(snowballProgram.out_grouping(g_v, 97, 252))) {
							break lab3;
						}
						snowballProgram.cursor = v_2;
						break golab2;
					} while (false);
					snowballProgram.cursor = v_2;
					if (snowballProgram.cursor >= snowballProgram.limit) {
						break lab1;
					}
					snowballProgram.cursor++;
				}
				lab4 : do {
					v_3 = snowballProgram.cursor;
					lab5 : do {
						if (snowballProgram.find_among(a_0, 8) == 0) {
							break lab5;
						}
						break lab4;
					} while (false);
					snowballProgram.cursor = v_3;
					if (snowballProgram.cursor >= snowballProgram.limit) {
						break lab1;
					}
					snowballProgram.cursor++;
				} while (false);
				I_p1 = snowballProgram.cursor;
				break lab0;
			} while (false);
			snowballProgram.cursor = v_1;
			if (!(snowballProgram.out_grouping(g_v, 97, 252))) {
				return false;
			}
			golab6 : while (true) {
				lab7 : do {
					if (!(snowballProgram.in_grouping(g_v, 97, 252))) {
						break lab7;
					}
					break golab6;
				} while (false);
				if (snowballProgram.cursor >= snowballProgram.limit) {
					return false;
				}
				snowballProgram.cursor++;
			}
			I_p1 = snowballProgram.cursor;
		} while (false);

		return true;
	}

	function r_R1() {
		if (!(I_p1 <= snowballProgram.cursor)) {
			return false;
		}
		return true;
	}

	function r_v_ending() {
		var among_var;

		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_1, 2);
		if (among_var == 0) {
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		if (!r_R1()) {
			return false;
		}
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				snowballProgram.slice_from("a");
				break;
			case 2 :
				snowballProgram.slice_from("e");
				break;
		}

		return true;
	}

	function r_double() {
		var v_1;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.find_among_b(a_2, 23) == 0) {
			return false;
		}
		snowballProgram.cursor = snowballProgram.limit - v_1;

		return true;
	}

	function r_undouble() {
		if (snowballProgram.cursor <= snowballProgram.limit_backward) {
			return false;
		}
		snowballProgram.cursor--;
		snowballProgram.ket = snowballProgram.cursor;
		var c = snowballProgram.cursor - 1;
		if (snowballProgram.limit_backward > c || c > snowballProgram.limit) {
			return false;
		}
		snowballProgram.cursor = c;
		snowballProgram.bra = snowballProgram.cursor;
		snowballProgram.slice_del();

		return true;
	}

	function r_instrum() {
		var among_var;

		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_3, 2);
		if (among_var == 0) {
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		if (!r_R1()) {
			return false;
		}
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				if (!r_double()) {
					return false;
				}
				break;
			case 2 :
				if (!r_double()) {
					return false;
				}
				break;
		}
		snowballProgram.slice_del();
		if (!r_undouble()) {
			return false;
		}
		return true;
	}

	function r_case() {
		snowballProgram.ket = snowballProgram.cursor;
		if (snowballProgram.find_among_b(a_4, 44) == 0) {
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		if (!r_R1()) {
			return false;
		}
		snowballProgram.slice_del();
		if (!r_v_ending()) {
			return false;
		}

		return true;
	}

	function r_case_special() {
		var among_var;

		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_5, 3);
		if (among_var == 0) {
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		if (!r_R1()) {
			return false;
		}
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				snowballProgram.slice_from("e");
				break;
			case 2 :
				snowballProgram.slice_from("a");
				break;
			case 3 :
				snowballProgram.slice_from("a");
				break;
		}

		return true;
	}

	function r_case_other() {
		var among_var;

		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_6, 6);
		if (among_var == 0) {
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		if (!r_R1()) {
			return false;
		}
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				snowballProgram.slice_del();
				break;
			case 2 :
				snowballProgram.slice_del();
				break;
			case 3 :
				snowballProgram.slice_from("a");
				break;
			case 4 :
				snowballProgram.slice_from("e");
				break;
		}

		return true;
	}

	function r_factive() {
		var among_var;

		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_7, 2);
		if (among_var == 0) {
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		if (!r_R1()) {
			return false;
		}
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				if (!r_double()) {
					return false;
				}
				break;
			case 2 :
				if (!r_double()) {
					return false;
				}
				break;
		}
		snowballProgram.slice_del();
		if (!r_undouble()) {
			return false;
		}

		return true;
	}

	function r_plural() {
		var among_var;

		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_8, 7);
		if (among_var == 0) {
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		if (!r_R1()) {
			return false;
		}
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				snowballProgram.slice_from("a");
				break;
			case 2 :
				snowballProgram.slice_from("e");
				break;
			case 3 :
				snowballProgram.slice_del();
				break;
			case 4 :
				snowballProgram.slice_del();
				break;
			case 5 :
				snowballProgram.slice_del();
				break;
			case 6 :
				snowballProgram.slice_del();
				break;
			case 7 :
				snowballProgram.slice_del();
				break;
		}

		return true;
	}

	function r_owned() {
		var among_var;

		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_9, 12);
		if (among_var == 0) {
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		if (!r_R1()) {
			return false;
		}
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				snowballProgram.slice_del();
				break;
			case 2 :
				snowballProgram.slice_from("e");
				break;
			case 3 :
				snowballProgram.slice_from("a");
				break;
			case 4 :
				snowballProgram.slice_del();
				break;
			case 5 :
				snowballProgram.slice_from("e");
				break;
			case 6 :
				snowballProgram.slice_from("a");
				break;
			case 7 :
				snowballProgram.slice_del();
				break;
			case 8 :
				snowballProgram.slice_from("e");
				break;
			case 9 :
				snowballProgram.slice_del();
				break;
		}

		return true;
	}

	function r_sing_owner() {
		var among_var;

		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_10, 31);
		if (among_var == 0) {
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		if (!r_R1()) {
			return false;
		}
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				snowballProgram.slice_del();
				break;
			case 2 :
				snowballProgram.slice_from("a");
				break;
			case 3 :
				snowballProgram.slice_from("e");
				break;
			case 4 :
				snowballProgram.slice_del();
				break;
			case 5 :
				snowballProgram.slice_from("a");
				break;
			case 6 :
				snowballProgram.slice_from("e");
				break;
			case 7 :
				snowballProgram.slice_del();
				break;
			case 8 :
				snowballProgram.slice_del();
				break;
			case 9 :
				snowballProgram.slice_del();
				break;
			case 10 :
				snowballProgram.slice_from("a");
				break;
			case 11 :
				snowballProgram.slice_from("e");
				break;
			case 12 :
				snowballProgram.slice_del();
				break;
			case 13 :
				snowballProgram.slice_del();
				break;
			case 14 :
				snowballProgram.slice_from("a");
				break;
			case 15 :
				snowballProgram.slice_from("e");
				break;
			case 16 :
				snowballProgram.slice_del();
				break;
			case 17 :
				snowballProgram.slice_del();
				break;
			case 18 :
				snowballProgram.slice_del();
				break;
			case 19 :
				snowballProgram.slice_from("a");
				break;
			case 20 :
				snowballProgram.slice_from("e");
				break;
		}

		return true;
	}

	function r_plur_owner() {
		var among_var;

		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_11, 42);
		if (among_var == 0) {
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		if (!r_R1()) {
			return false;
		}
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				snowballProgram.slice_del();
				break;
			case 2 :
				snowballProgram.slice_from("a");
				break;
			case 3 :
				snowballProgram.slice_from("e");
				break;
			case 4 :
				snowballProgram.slice_del();
				break;
			case 5 :
				snowballProgram.slice_del();
				break;
			case 6 :
				snowballProgram.slice_del();
				break;
			case 7 :
				snowballProgram.slice_from("a");
				break;
			case 8 :
				snowballProgram.slice_from("e");
				break;
			case 9 :
				snowballProgram.slice_del();
				break;
			case 10 :
				snowballProgram.slice_del();
				break;
			case 11 :
				snowballProgram.slice_del();
				break;
			case 12 :
				snowballProgram.slice_from("a");
				break;
			case 13 :
				snowballProgram.slice_from("e");
				break;
			case 14 :
				snowballProgram.slice_del();
				break;
			case 15 :
				snowballProgram.slice_del();
				break;
			case 16 :
				snowballProgram.slice_del();
				break;
			case 17 :
				snowballProgram.slice_del();
				break;
			case 18 :
				snowballProgram.slice_from("a");
				break;
			case 19 :
				snowballProgram.slice_from("e");
				break;
			case 20 :
				snowballProgram.slice_del();
				break;
			case 21 :
				snowballProgram.slice_del();
				break;
			case 22 :
				snowballProgram.slice_from("a");
				break;
			case 23 :
				snowballProgram.slice_from("e");
				break;
			case 24 :
				snowballProgram.slice_del();
				break;
			case 25 :
				snowballProgram.slice_del();
				break;
			case 26 :
				snowballProgram.slice_del();
				break;
			case 27 :
				snowballProgram.slice_from("a");
				break;
			case 28 :
				snowballProgram.slice_from("e");
				break;
			case 29 :
				snowballProgram.slice_del();
				break;
		}

		return true;
	}

	this.stem = function() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10;

		v_1 = snowballProgram.cursor;
		lab0 : do {
			if (!r_mark_regions()) {
				break lab0;
			}
		} while (false);
		snowballProgram.cursor = v_1;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit;
		v_2 = snowballProgram.limit - snowballProgram.cursor;
		lab1 : do {
			if (!r_instrum()) {
				break lab1;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_2;
		v_3 = snowballProgram.limit - snowballProgram.cursor;
		lab2 : do {
			if (!r_case()) {
				break lab2;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_3;
		v_4 = snowballProgram.limit - snowballProgram.cursor;
		lab3 : do {
			if (!r_case_special()) {
				break lab3;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_4;
		v_5 = snowballProgram.limit - snowballProgram.cursor;
		lab4 : do {
			if (!r_case_other()) {
				break lab4;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_5;
		v_6 = snowballProgram.limit - snowballProgram.cursor;
		lab5 : do {
			if (!r_factive()) {
				break lab5;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_6;
		v_7 = snowballProgram.limit - snowballProgram.cursor;
		lab6 : do {
			if (!r_owned()) {
				break lab6;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_7;
		v_8 = snowballProgram.limit - snowballProgram.cursor;
		lab7 : do {
			if (!r_sing_owner()) {
				break lab7;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_8;
		v_9 = snowballProgram.limit - snowballProgram.cursor;
		lab8 : do {
			if (!r_plur_owner()) {
				break lab8;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_9;
		v_10 = snowballProgram.limit - snowballProgram.cursor;
		lab9 : do {
			if (!r_plural()) {
				break lab9;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_10;
		snowballProgram.cursor = snowballProgram.limit_backward;

		return true;
	}
}