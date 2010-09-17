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

const EXPORTED_SYMBOLS = ['FinnishStemmer'];

Components.utils.import("resource://urim/analysis/stemmer/Among.js");
Components.utils.import("resource://urim/analysis/stemmer/SnowballProgram.js");

function FinnishStemmer() {

	var a_0 = [new Among("pa", -1, 1), new Among("sti", -1, 2),
			new Among("kaan", -1, 1), new Among("han", -1, 1),
			new Among("kin", -1, 1), new Among("h\u00E4n", -1, 1),
			new Among("k\u00E4\u00E4n", -1, 1), new Among("ko", -1, 1),
			new Among("p\u00E4", -1, 1), new Among("k\u00F6", -1, 1)];

	var a_1 = [new Among("lla", -1, -1), new Among("na", -1, -1),
			new Among("ssa", -1, -1), new Among("ta", -1, -1),
			new Among("lta", 3, -1), new Among("sta", 3, -1)];

	var a_2 = [new Among("ll\u00E4", -1, -1), new Among("n\u00E4", -1, -1),
			new Among("ss\u00E4", -1, -1), new Among("t\u00E4", -1, -1),
			new Among("lt\u00E4", 3, -1), new Among("st\u00E4", 3, -1)];

	var a_3 = [new Among("lle", -1, -1), new Among("ine", -1, -1)];

	var a_4 = [new Among("nsa", -1, 3), new Among("mme", -1, 3),
			new Among("nne", -1, 3), new Among("ni", -1, 2),
			new Among("si", -1, 1), new Among("an", -1, 4),
			new Among("en", -1, 6), new Among("\u00E4n", -1, 5),
			new Among("ns\u00E4", -1, 3)];

	var a_5 = [new Among("aa", -1, -1), new Among("ee", -1, -1),
			new Among("ii", -1, -1), new Among("oo", -1, -1),
			new Among("uu", -1, -1), new Among("\u00E4\u00E4", -1, -1),
			new Among("\u00F6\u00F6", -1, -1)];

	var a_6 = [new Among("a", -1, 8), new Among("lla", 0, -1),
			new Among("na", 0, -1), new Among("ssa", 0, -1),
			new Among("ta", 0, -1), new Among("lta", 4, -1),
			new Among("sta", 4, -1), new Among("tta", 4, 9),
			new Among("lle", -1, -1), new Among("ine", -1, -1),
			new Among("ksi", -1, -1), new Among("n", -1, 7),
			new Among("han", 11, 1), new Among("den", 11, -1, r_VI),
			new Among("seen", 11, -1, r_LONG), new Among("hen", 11, 2),
			new Among("tten", 11, -1, r_VI), new Among("hin", 11, 3),
			new Among("siin", 11, -1, r_VI), new Among("hon", 11, 4),
			new Among("h\u00E4n", 11, 5), new Among("h\u00F6n", 11, 6),
			new Among("\u00E4", -1, 8), new Among("ll\u00E4", 22, -1),
			new Among("n\u00E4", 22, -1), new Among("ss\u00E4", 22, -1),
			new Among("t\u00E4", 22, -1), new Among("lt\u00E4", 26, -1),
			new Among("st\u00E4", 26, -1), new Among("tt\u00E4", 26, 9)];

	var a_7 = [new Among("eja", -1, -1), new Among("mma", -1, 1),
			new Among("imma", 1, -1), new Among("mpa", -1, 1),
			new Among("impa", 3, -1), new Among("mmi", -1, 1),
			new Among("immi", 5, -1), new Among("mpi", -1, 1),
			new Among("impi", 7, -1), new Among("ej\u00E4", -1, -1),
			new Among("mm\u00E4", -1, 1), new Among("imm\u00E4", 10, -1),
			new Among("mp\u00E4", -1, 1), new Among("imp\u00E4", 12, -1)];

	var a_8 = [new Among("i", -1, -1), new Among("j", -1, -1)];

	var a_9 = [new Among("mma", -1, 1), new Among("imma", 0, -1)];

	var g_AEI = [17, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8];

	var g_V1 = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

	var g_V2 = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32];

	var g_particle_end = [17, 97, 24, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8,
			0, 32];

	var B_ending_removed, S_x, I_p2, I_p1;

	var snowballProgram = new SnowballProgram();

	this.setCurrent = function(word) {
		snowballProgram.setCurrent(word);
	};

	this.getCurrent = function() {
		return snowballProgram.getCurrent()
	};

	function r_mark_regions() {
		var v_1, v_3;

		I_p1 = snowballProgram.limit;
		I_p2 = snowballProgram.limit;
		golab0 : while (true) {
			v_1 = snowballProgram.cursor;
			lab1 : do {
				if (!(snowballProgram.in_grouping(g_V1, 97, 246))) {
					break lab1;
				}
				snowballProgram.cursor = v_1;
				break golab0;
			} while (false);
			snowballProgram.cursor = v_1;
			if (snowballProgram.cursor >= snowballProgram.limit) {
				return false;
			}
			snowballProgram.cursor++;
		}
		golab2 : while (true) {
			lab3 : do {
				if (!(snowballProgram.out_grouping(g_V1, 97, 246))) {
					break lab3;
				}
				break golab2;
			} while (false);
			if (snowballProgram.cursor >= snowballProgram.limit) {
				return false;
			}
			snowballProgram.cursor++;
		}
		I_p1 = snowballProgram.cursor;
		golab4 : while (true) {
			v_3 = snowballProgram.cursor;
			lab5 : do {
				if (!(snowballProgram.in_grouping(g_V1, 97, 246))) {
					break lab5;
				}
				snowballProgram.cursor = v_3;
				break golab4;
			} while (false);
			snowballProgram.cursor = v_3;
			if (snowballProgram.cursor >= snowballProgram.limit) {
				return false;
			}
			snowballProgram.cursor++;
		}
		golab6 : while (true) {
			lab7 : do {
				if (!(snowballProgram.out_grouping(g_V1, 97, 246))) {
					break lab7;
				}
				break golab6;
			} while (false);
			if (snowballProgram.cursor >= snowballProgram.limit) {
				return false;
			}
			snowballProgram.cursor++;
		}
		I_p2 = snowballProgram.cursor;

		return true;
	}

	function r_R2() {
		if (!(I_p2 <= snowballProgram.cursor)) {
			return false;
		}
		return true;
	}

	function r_particle_etc() {
		var among_var, v_1, v_2;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_p1) {
			return false;
		}
		snowballProgram.cursor = I_p1;
		v_2 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_1;
		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_0, 10);
		if (among_var == 0) {
			snowballProgram.limit_backward = v_2;
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		snowballProgram.limit_backward = v_2;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				if (!(snowballProgram.in_grouping_b(g_particle_end, 97, 246))) {
					return false;
				}
				break;
			case 2 :
				if (!r_R2()) {
					return false;
				}
				break;
		}
		snowballProgram.slice_del();

		return true;
	}

	function r_possessive() {
		var among_var, v_1, v_2, v_3;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_p1) {
			return false;
		}
		snowballProgram.cursor = I_p1;
		v_2 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_1;
		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_4, 9);
		if (among_var == 0) {
			snowballProgram.limit_backward = v_2;
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		snowballProgram.limit_backward = v_2;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				v_3 = snowballProgram.limit - snowballProgram.cursor;
				lab0 : do {
					// literal, line 72
					if (!(snowballProgram.eq_s_b(1, "k"))) {
						break lab0;
					}
					return false;
				} while (false);
				snowballProgram.cursor = snowballProgram.limit - v_3;
				snowballProgram.slice_del();
				break;
			case 2 :
				snowballProgram.slice_del();
				snowballProgram.ket = snowballProgram.cursor;
				if (!(snowballProgram.eq_s_b(3, "kse"))) {
					return false;
				}
				snowballProgram.bra = snowballProgram.cursor;
				snowballProgram.slice_from("ksi");
				break;
			case 3 :
				snowballProgram.slice_del();
				break;
			case 4 :
				if (snowballProgram.find_among_b(a_1, 6) == 0) {
					return false;
				}
				snowballProgram.slice_del();
				break;
			case 5 :
				if (snowballProgram.find_among_b(a_2, 6) == 0) {
					return false;
				}
				snowballProgram.slice_del();
				break;
			case 6 :
				if (snowballProgram.find_among_b(a_3, 2) == 0) {
					return false;
				}
				snowballProgram.slice_del();
				break;
		}

		return true;
	}

	function r_LONG() {
		if (snowballProgram.find_among_b(a_5, 7) == 0) {
			return false;
		}
		return true;
	}

	function r_VI() {
		if (!(snowballProgram.eq_s_b(1, "i"))) {
			return false;
		}
		if (!(snowballProgram.in_grouping_b(g_V2, 97, 246))) {
			return false;
		}
		return true;
	}

	function r_case_ending() {
		var among_var, v_1, v_2, v_3, v_4, v_5;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_p1) {
			return false;
		}
		snowballProgram.cursor = I_p1;
		v_2 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_1;
		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_6, 30);
		if (among_var == 0) {
			snowballProgram.limit_backward = v_2;
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		snowballProgram.limit_backward = v_2;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				if (!(snowballProgram.eq_s_b(1, "a"))) {
					return false;
				}
				break;
			case 2 :
				if (!(snowballProgram.eq_s_b(1, "e"))) {
					return false;
				}
				break;
			case 3 :
				if (!(snowballProgram.eq_s_b(1, "i"))) {
					return false;
				}
				break;
			case 4 :
				if (!(snowballProgram.eq_s_b(1, "o"))) {
					return false;
				}
				break;
			case 5 :
				if (!(snowballProgram.eq_s_b(1, "\u00E4"))) {
					return false;
				}
				break;
			case 6 :
				if (!(snowballProgram.eq_s_b(1, "\u00F6"))) {
					return false;
				}
				break;
			case 7 :
				v_3 = snowballProgram.limit - snowballProgram.cursor;
				lab0 : do {
					v_4 = snowballProgram.limit - snowballProgram.cursor;
					lab1 : do {
						v_5 = snowballProgram.limit - snowballProgram.cursor;
						lab2 : do {
							if (!r_LONG()) {
								break lab2;
							}
							break lab1;
						} while (false);
						snowballProgram.cursor = snowballProgram.limit - v_5;
						if (!(snowballProgram.eq_s_b(2, "ie"))) {
							snowballProgram.cursor = snowballProgram.limit
									- v_3;
							break lab0;
						}
					} while (false);
					snowballProgram.cursor = snowballProgram.limit - v_4;
					if (snowballProgram.cursor <= snowballProgram.limit_backward) {
						snowballProgram.cursor = snowballProgram.limit - v_3;
						break lab0;
					}
					snowballProgram.cursor--;
					snowballProgram.bra = snowballProgram.cursor;
				} while (false);
				break;
			case 8 :
				if (!(snowballProgram.in_grouping_b(g_V1, 97, 246))) {
					return false;
				}
				if (!(snowballProgram.out_grouping_b(g_V1, 97, 246))) {
					return false;
				}
				break;
			case 9 :
				if (!(snowballProgram.eq_s_b(1, "e"))) {
					return false;
				}
				break;
		}
		snowballProgram.slice_del();
		B_ending_removed = true;

		return true;
	}

	function r_other_endings() {
		var among_var, v_1, v_2, v_3;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_p2) {
			return false;
		}
		snowballProgram.cursor = I_p2;
		v_2 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_1;
		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_7, 14);
		if (among_var == 0) {
			snowballProgram.limit_backward = v_2;
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		snowballProgram.limit_backward = v_2;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				v_3 = snowballProgram.limit - snowballProgram.cursor;
				lab0 : do {
					// literal, line 146
					if (!(snowballProgram.eq_s_b(2, "po"))) {
						break lab0;
					}
					return false;
				} while (false);
				snowballProgram.cursor = snowballProgram.limit - v_3;
				break;
		}
		snowballProgram.slice_del();

		return true;
	}

	function r_i_plural() {
		var v_1, v_2;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_p1) {
			return false;
		}
		snowballProgram.cursor = I_p1;
		v_2 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_1;
		snowballProgram.ket = snowballProgram.cursor;
		if (snowballProgram.find_among_b(a_8, 2) == 0) {
			snowballProgram.limit_backward = v_2;
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		snowballProgram.limit_backward = v_2;
		snowballProgram.slice_del();

		return true;
	}

	function r_t_plural() {
		var among_var, v_1, v_2, v_3, v_4, v_5, v_6;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_p1) {
			return false;
		}
		snowballProgram.cursor = I_p1;
		v_2 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_1;
		snowballProgram.ket = snowballProgram.cursor;
		if (!(snowballProgram.eq_s_b(1, "t"))) {
			snowballProgram.limit_backward = v_2;
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		v_3 = snowballProgram.limit - snowballProgram.cursor;
		if (!(snowballProgram.in_grouping_b(g_V1, 97, 246))) {
			snowballProgram.limit_backward = v_2;
			return false;
		}
		snowballProgram.cursor = snowballProgram.limit - v_3;
		snowballProgram.slice_del();
		snowballProgram.limit_backward = v_2;
		v_4 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_p2) {
			return false;
		}
		snowballProgram.cursor = I_p2;
		v_5 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_4;
		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_9, 2);
		if (among_var == 0) {
			snowballProgram.limit_backward = v_5;
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		snowballProgram.limit_backward = v_5;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				v_6 = snowballProgram.limit - snowballProgram.cursor;
				lab0 : do {
					// literal, line 167
					if (!(snowballProgram.eq_s_b(2, "po"))) {
						break lab0;
					}
					return false;
				} while (false);
				snowballProgram.cursor = snowballProgram.limit - v_6;
				break;
		}
		snowballProgram.slice_del();

		return true;
	}

	function r_tidy() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_p1) {
			return false;
		}
		snowballProgram.cursor = I_p1;
		v_2 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_1;
		v_3 = snowballProgram.limit - snowballProgram.cursor;
		lab0 : do {
			v_4 = snowballProgram.limit - snowballProgram.cursor;
			if (!r_LONG()) {
				break lab0;
			}
			snowballProgram.cursor = snowballProgram.limit - v_4;
			snowballProgram.ket = snowballProgram.cursor;
			if (snowballProgram.cursor <= snowballProgram.limit_backward) {
				break lab0;
			}
			snowballProgram.cursor--;
			snowballProgram.bra = snowballProgram.cursor;
			snowballProgram.slice_del();
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_3;
		v_5 = snowballProgram.limit - snowballProgram.cursor;
		lab1 : do {
			snowballProgram.ket = snowballProgram.cursor;
			if (!(snowballProgram.in_grouping_b(g_AEI, 97, 228))) {
				break lab1;
			}
			snowballProgram.bra = snowballProgram.cursor;
			if (!(snowballProgram.out_grouping_b(g_V1, 97, 246))) {
				break lab1;
			}
			snowballProgram.slice_del();
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_5;
		v_6 = snowballProgram.limit - snowballProgram.cursor;
		lab2 : do {
			snowballProgram.ket = snowballProgram.cursor;
			if (!(snowballProgram.eq_s_b(1, "j"))) {
				break lab2;
			}
			snowballProgram.bra = snowballProgram.cursor;
			lab3 : do {
				v_7 = snowballProgram.limit - snowballProgram.cursor;
				lab4 : do {
					if (!(snowballProgram.eq_s_b(1, "o"))) {
						break lab4;
					}
					break lab3;
				} while (false);
				snowballProgram.cursor = snowballProgram.limit - v_7;
				if (!(snowballProgram.eq_s_b(1, "u"))) {
					break lab2;
				}
			} while (false);
			snowballProgram.slice_del();
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_6;
		v_8 = snowballProgram.limit - snowballProgram.cursor;
		lab5 : do {
			snowballProgram.ket = snowballProgram.cursor;
			if (!(snowballProgram.eq_s_b(1, "o"))) {
				break lab5;
			}
			snowballProgram.bra = snowballProgram.cursor;
			if (!(snowballProgram.eq_s_b(1, "j"))) {
				break lab5;
			}
			snowballProgram.slice_del();
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_8;
		snowballProgram.limit_backward = v_2;
		golab6 : while (true) {
			v_9 = snowballProgram.limit - snowballProgram.cursor;
			lab7 : do {
				if (!(snowballProgram.out_grouping_b(g_V1, 97, 246))) {
					break lab7;
				}
				snowballProgram.cursor = snowballProgram.limit - v_9;
				break golab6;
			} while (false);
			snowballProgram.cursor = snowballProgram.limit - v_9;
			if (snowballProgram.cursor <= snowballProgram.limit_backward) {
				return false;
			}
			snowballProgram.cursor--;
		}
		snowballProgram.ket = snowballProgram.cursor;
		if (snowballProgram.cursor <= snowballProgram.limit_backward) {
			return false;
		}
		snowballProgram.cursor--;
		snowballProgram.bra = snowballProgram.cursor;
		S_x = snowballProgram.slice_to();
		if (!(snowballProgram.eq_v_b(S_x))) {
			return false;
		}
		snowballProgram.slice_del();

		return true;
	}

	this.stem = function() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9;

		v_1 = snowballProgram.cursor;
		lab0 : do {
			if (!r_mark_regions()) {
				break lab0;
			}
		} while (false);
		snowballProgram.cursor = v_1;
		B_ending_removed = false;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit;
		v_2 = snowballProgram.limit - snowballProgram.cursor;
		lab1 : do {
			if (!r_particle_etc()) {
				break lab1;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_2;
		v_3 = snowballProgram.limit - snowballProgram.cursor;
		lab2 : do {
			if (!r_possessive()) {
				break lab2;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_3;
		v_4 = snowballProgram.limit - snowballProgram.cursor;
		lab3 : do {
			if (!r_case_ending()) {
				break lab3;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_4;
		v_5 = snowballProgram.limit - snowballProgram.cursor;
		lab4 : do {
			if (!r_other_endings()) {
				break lab4;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_5;
		lab5 : do {
			v_6 = snowballProgram.limit - snowballProgram.cursor;
			lab6 : do {
				if (!(B_ending_removed)) {
					break lab6;
				}
				v_7 = snowballProgram.limit - snowballProgram.cursor;
				lab7 : do {
					if (!r_i_plural()) {
						break lab7;
					}
				} while (false);
				snowballProgram.cursor = snowballProgram.limit - v_7;
				break lab5;
			} while (false);
			snowballProgram.cursor = snowballProgram.limit - v_6;
			v_8 = snowballProgram.limit - snowballProgram.cursor;
			lab8 : do {
				if (!r_t_plural()) {
					break lab8;
				}
			} while (false);
			snowballProgram.cursor = snowballProgram.limit - v_8;
		} while (false);
		v_9 = snowballProgram.limit - snowballProgram.cursor;
		lab9 : do {
			if (!r_tidy()) {
				break lab9;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_9;
		snowballProgram.cursor = snowballProgram.limit_backward;

		return true;
	}
}