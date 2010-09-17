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

const EXPORTED_SYMBOLS = ['DutchStemmer'];

Components.utils.import("resource://urim/analysis/stemmer/Among.js");
Components.utils.import("resource://urim/analysis/stemmer/SnowballProgram.js");

function DutchStemmer() {

	var a_0 = [new Among("", -1, 6), new Among("\u00E1", 0, 1),
			new Among("\u00E4", 0, 1), new Among("\u00E9", 0, 2),
			new Among("\u00EB", 0, 2), new Among("\u00ED", 0, 3),
			new Among("\u00EF", 0, 3), new Among("\u00F3", 0, 4),
			new Among("\u00F6", 0, 4), new Among("\u00FA", 0, 5),
			new Among("\u00FC", 0, 5)];

	var a_1 = [new Among("", -1, 3), new Among("I", 0, 2), new Among("Y", 0, 1)];

	var a_2 = [new Among("dd", -1, -1), new Among("kk", -1, -1),
			new Among("tt", -1, -1)];

	var a_3 = [new Among("ene", -1, 2), new Among("se", -1, 3),
			new Among("en", -1, 2), new Among("heden", 2, 1),
			new Among("s", -1, 3)];

	var a_4 = [new Among("end", -1, 1), new Among("ig", -1, 2),
			new Among("ing", -1, 1), new Among("lijk", -1, 3),
			new Among("baar", -1, 4), new Among("bar", -1, 5)];

	var a_5 = [new Among("aa", -1, -1), new Among("ee", -1, -1),
			new Among("oo", -1, -1), new Among("uu", -1, -1)];

	var g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

	var g_v_I = [1, 0, 0, 17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			128];

	var g_v_j = [17, 67, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

	var I_p2, I_p1, B_e_found;

	var snowballProgram = new SnowballProgram();

	this.setCurrent = function(word) {
		snowballProgram.setCurrent(word);
	};

	this.getCurrent = function() {
		return snowballProgram.getCurrent()
	};

	function r_prelude() {
		var among_var, v_1, v_2, v_3, v_4, v_5, v_6;

		v_1 = snowballProgram.cursor;
		replab0 : while (true) {
			v_2 = snowballProgram.cursor;
			lab1 : do {
				snowballProgram.bra = snowballProgram.cursor;
				among_var = snowballProgram.find_among(a_0, 11);
				if (among_var == 0) {
					break lab1;
				}
				snowballProgram.ket = snowballProgram.cursor;
				switch (among_var) {
					case 0 :
						break lab1;
					case 1 :
						snowballProgram.slice_from("a");
						break;
					case 2 :
						snowballProgram.slice_from("e");
						break;
					case 3 :
						snowballProgram.slice_from("i");
						break;
					case 4 :
						snowballProgram.slice_from("o");
						break;
					case 5 :
						snowballProgram.slice_from("u");
						break;
					case 6 :
						if (snowballProgram.cursor >= snowballProgram.limit) {
							break lab1;
						}
						snowballProgram.cursor++;
						break;
				}
				continue replab0;
			} while (false);
			snowballProgram.cursor = v_2;
			break replab0;
		}
		snowballProgram.cursor = v_1;
		v_3 = snowballProgram.cursor;
		lab2 : do {
			snowballProgram.bra = snowballProgram.cursor;
			if (!(snowballProgram.eq_s(1, "y"))) {
				snowballProgram.cursor = v_3;
				break lab2;
			}
			snowballProgram.ket = snowballProgram.cursor;
			snowballProgram.slice_from("Y");
		} while (false);
		replab3 : while (true) {
			v_4 = snowballProgram.cursor;
			lab4 : do {
				golab5 : while (true) {
					v_5 = snowballProgram.cursor;
					lab6 : do {
						if (!(snowballProgram.in_grouping(g_v, 97, 232))) {
							break lab6;
						}
						snowballProgram.bra = snowballProgram.cursor;
						lab7 : do {
							v_6 = snowballProgram.cursor;
							lab8 : do {
								if (!(snowballProgram.eq_s(1, "i"))) {
									break lab8;
								}
								snowballProgram.ket = snowballProgram.cursor;
								if (!(snowballProgram.in_grouping(g_v, 97, 232))) {
									break lab8;
								}
								snowballProgram.slice_from("I");
								break lab7;
							} while (false);
							snowballProgram.cursor = v_6;
							if (!(snowballProgram.eq_s(1, "y"))) {
								break lab6;
							}
							snowballProgram.ket = snowballProgram.cursor;
							snowballProgram.slice_from("Y");
						} while (false);
						snowballProgram.cursor = v_5;
						break golab5;
					} while (false);
					snowballProgram.cursor = v_5;
					if (snowballProgram.cursor >= snowballProgram.limit) {
						break lab4;
					}
					snowballProgram.cursor++;
				}
				continue replab3;
			} while (false);
			snowballProgram.cursor = v_4;
			break replab3;
		}

		return true;
	}

	function r_mark_regions() {
		I_p1 = snowballProgram.limit;
		I_p2 = snowballProgram.limit;
		golab0 : while (true) {
			lab1 : do {
				if (!(snowballProgram.in_grouping(g_v, 97, 232))) {
					break lab1;
				}
				break golab0;
			} while (false);
			if (snowballProgram.cursor >= snowballProgram.limit) {
				return false;
			}
			snowballProgram.cursor++;
		}
		golab2 : while (true) {
			lab3 : do {
				if (!(snowballProgram.out_grouping(g_v, 97, 232))) {
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
		lab4 : do {
			if (!(I_p1 < 3)) {
				break lab4;
			}
			I_p1 = 3;
		} while (false);
		golab5 : while (true) {
			lab6 : do {
				if (!(snowballProgram.in_grouping(g_v, 97, 232))) {
					break lab6;
				}
				break golab5;
			} while (false);
			if (snowballProgram.cursor >= snowballProgram.limit) {
				return false;
			}
			snowballProgram.cursor++;
		}
		golab7 : while (true) {
			lab8 : do {
				if (!(snowballProgram.out_grouping(g_v, 97, 232))) {
					break lab8;
				}
				break golab7;
			} while (false);
			if (snowballProgram.cursor >= snowballProgram.limit) {
				return false;
			}
			snowballProgram.cursor++;
		}
		I_p2 = snowballProgram.cursor;

		return true;
	}

	function r_postlude() {
		var among_var, v_1;

		replab0 : while (true) {
			v_1 = snowballProgram.cursor;
			lab1 : do {
				snowballProgram.bra = snowballProgram.cursor;
				among_var = snowballProgram.find_among(a_1, 3);
				if (among_var == 0) {
					break lab1;
				}
				snowballProgram.ket = snowballProgram.cursor;
				switch (among_var) {
					case 0 :
						break lab1;
					case 1 :
						snowballProgram.slice_from("y");
						break;
					case 2 :
						snowballProgram.slice_from("i");
						break;
					case 3 :
						if (snowballProgram.cursor >= snowballProgram.limit) {
							break lab1;
						}
						snowballProgram.cursor++;
						break;
				}
				continue replab0;
			} while (false);
			snowballProgram.cursor = v_1;
			break replab0;
		}

		return true;
	}

	function r_R1() {
		if (!(I_p1 <= snowballProgram.cursor)) {
			return false;
		}
		return true;
	}

	function r_R2() {
		if (!(I_p2 <= snowballProgram.cursor)) {
			return false;
		}
		return true;
	}

	function r_undouble() {
		var v_1;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.find_among_b(a_2, 3) == 0) {
			return false;
		}
		snowballProgram.cursor = snowballProgram.limit - v_1;
		snowballProgram.ket = snowballProgram.cursor;
		if (snowballProgram.cursor <= snowballProgram.limit_backward) {
			return false;
		}
		snowballProgram.cursor--;
		snowballProgram.bra = snowballProgram.cursor;
		snowballProgram.slice_del();

		return true;
	}

	function r_e_ending() {
		var v_1;

		B_e_found = false;
		snowballProgram.ket = snowballProgram.cursor;
		if (!(snowballProgram.eq_s_b(1, "e"))) {
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		if (!r_R1()) {
			return false;
		}
		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (!(snowballProgram.out_grouping_b(g_v, 97, 232))) {
			return false;
		}
		snowballProgram.cursor = snowballProgram.limit - v_1;
		snowballProgram.slice_del();
		B_e_found = true;
		if (!r_undouble()) {
			return false;
		}

		return true;
	}

	function r_en_ending() {
		var v_1, v_2;

		if (!r_R1()) {
			return false;
		}
		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (!(snowballProgram.out_grouping_b(g_v, 97, 232))) {
			return false;
		}
		snowballProgram.cursor = snowballProgram.limit - v_1;
		v_2 = snowballProgram.limit - snowballProgram.cursor;
		lab0 : do {
			// literal, line 102
			if (!(snowballProgram.eq_s_b(3, "gem"))) {
				break lab0;
			}
			return false;
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_2;
		snowballProgram.slice_del();
		if (!r_undouble()) {
			return false;
		}

		return true;
	}

	function r_standard_suffix() {
		var among_var, v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		lab0 : do {
			snowballProgram.ket = snowballProgram.cursor;
			among_var = snowballProgram.find_among_b(a_3, 5);
			if (among_var == 0) {
				break lab0;
			}
			snowballProgram.bra = snowballProgram.cursor;
			switch (among_var) {
				case 0 :
					break lab0;
				case 1 :
					if (!r_R1()) {
						break lab0;
					}
					snowballProgram.slice_from("heid");
					break;
				case 2 :
					if (!r_en_ending()) {
						break lab0;
					}
					break;
				case 3 :
					if (!r_R1()) {
						break lab0;
					}
					if (!(snowballProgram.out_grouping_b(g_v_j, 97, 232))) {
						break lab0;
					}
					snowballProgram.slice_del();
					break;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_1;
		v_2 = snowballProgram.limit - snowballProgram.cursor;
		lab1 : do {
			if (!r_e_ending()) {
				break lab1;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_2;
		v_3 = snowballProgram.limit - snowballProgram.cursor;
		lab2 : do {
			snowballProgram.ket = snowballProgram.cursor;
			if (!(snowballProgram.eq_s_b(4, "heid"))) {
				break lab2;
			}
			snowballProgram.bra = snowballProgram.cursor;
			if (!r_R2()) {
				break lab2;
			}
			v_4 = snowballProgram.limit - snowballProgram.cursor;
			lab3 : do {
				// literal, line 122
				if (!(snowballProgram.eq_s_b(1, "c"))) {
					break lab3;
				}
				break lab2;
			} while (false);
			snowballProgram.cursor = snowballProgram.limit - v_4;
			snowballProgram.slice_del();
			snowballProgram.ket = snowballProgram.cursor;
			if (!(snowballProgram.eq_s_b(2, "en"))) {
				break lab2;
			}
			snowballProgram.bra = snowballProgram.cursor;
			if (!r_en_ending()) {
				break lab2;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_3;
		v_5 = snowballProgram.limit - snowballProgram.cursor;
		lab4 : do {
			snowballProgram.ket = snowballProgram.cursor;
			among_var = snowballProgram.find_among_b(a_4, 6);
			if (among_var == 0) {
				break lab4;
			}
			snowballProgram.bra = snowballProgram.cursor;
			switch (among_var) {
				case 0 :
					break lab4;
				case 1 :
					if (!r_R2()) {
						break lab4;
					}
					snowballProgram.slice_del();
					lab5 : do {
						v_6 = snowballProgram.limit - snowballProgram.cursor;
						lab6 : do {
							snowballProgram.ket = snowballProgram.cursor;
							if (!(snowballProgram.eq_s_b(2, "ig"))) {
								break lab6;
							}
							snowballProgram.bra = snowballProgram.cursor;
							if (!r_R2()) {
								break lab6;
							}
							v_7 = snowballProgram.limit
									- snowballProgram.cursor;
							lab7 : do {
								// literal, line 130
								if (!(snowballProgram.eq_s_b(1, "e"))) {
									break lab7;
								}
								break lab6;
							} while (false);
							snowballProgram.cursor = snowballProgram.limit
									- v_7;
							snowballProgram.slice_del();
							break lab5;
						} while (false);
						snowballProgram.cursor = snowballProgram.limit - v_6;
						if (!r_undouble()) {
							break lab4;
						}
					} while (false);
					break;
				case 2 :
					if (!r_R2()) {
						break lab4;
					}
					v_8 = snowballProgram.limit - snowballProgram.cursor;
					lab8 : do {
						// literal, line 133
						if (!(snowballProgram.eq_s_b(1, "e"))) {
							break lab8;
						}
						break lab4;
					} while (false);
					snowballProgram.cursor = snowballProgram.limit - v_8;
					snowballProgram.slice_del();
					break;
				case 3 :
					if (!r_R2()) {
						break lab4;
					}
					snowballProgram.slice_del();
					if (!r_e_ending()) {
						break lab4;
					}
					break;
				case 4 :
					if (!r_R2()) {
						break lab4;
					}
					snowballProgram.slice_del();
					break;
				case 5 :
					if (!r_R2()) {
						break lab4;
					}
					if (!(B_e_found)) {
						break lab4;
					}
					snowballProgram.slice_del();
					break;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_5;
		v_9 = snowballProgram.limit - snowballProgram.cursor;
		lab9 : do {
			if (!(snowballProgram.out_grouping_b(g_v_I, 73, 232))) {
				break lab9;
			}
			v_10 = snowballProgram.limit - snowballProgram.cursor;
			if (snowballProgram.find_among_b(a_5, 4) == 0) {
				break lab9;
			}
			if (!(snowballProgram.out_grouping_b(g_v, 97, 232))) {
				break lab9;
			}
			snowballProgram.cursor = snowballProgram.limit - v_10;
			snowballProgram.ket = snowballProgram.cursor;
			if (snowballProgram.cursor <= snowballProgram.limit_backward) {
				break lab9;
			}
			snowballProgram.cursor--;
			snowballProgram.bra = snowballProgram.cursor;
			snowballProgram.slice_del();
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_9;

		return true;
	}

	this.stem = function() {
		var v_1, v_2, v_3, v_4;
		v_1 = snowballProgram.cursor;
		lab0 : do {
			if (!r_prelude()) {
				break lab0;
			}
		} while (false);
		snowballProgram.cursor = v_1;
		v_2 = snowballProgram.cursor;
		lab1 : do {
			if (!r_mark_regions()) {
				break lab1;
			}
		} while (false);
		snowballProgram.cursor = v_2;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit;
		v_3 = snowballProgram.limit - snowballProgram.cursor;
		lab2 : do {
			if (!r_standard_suffix()) {
				break lab2;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_3;
		snowballProgram.cursor = snowballProgram.limit_backward;
		v_4 = snowballProgram.cursor;
		lab3 : do {
			if (!r_postlude()) {
				break lab3;
			}
		} while (false);
		snowballProgram.cursor = v_4;

		return true;
	}
}