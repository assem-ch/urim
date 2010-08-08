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

const EXPORTED_SYMBOLS = ['GermanStemmer'];

Components.utils.import("resource://urim/analysis/stemmer/Among.js");
Components.utils.import("resource://urim/analysis/stemmer/SnowballProgram.js");

function GermanStemmer() {

	var a_0 = [new Among("", -1, 6), new Among("U", 0, 2),
			new Among("Y", 0, 1), new Among("\u00E4", 0, 3),
			new Among("\u00F6", 0, 4), new Among("\u00FC", 0, 5)];

	var a_1 = [new Among("e", -1, 2), new Among("em", -1, 1),
			new Among("en", -1, 2), new Among("ern", -1, 1),
			new Among("er", -1, 1), new Among("s", -1, 3),
			new Among("es", 5, 2)];

	var a_2 = [new Among("en", -1, 1), new Among("er", -1, 1),
			new Among("st", -1, 2), new Among("est", 2, 1)];

	var a_3 = [new Among("ig", -1, 1), new Among("lich", -1, 1)];

	var a_4 = [new Among("end", -1, 1), new Among("ig", -1, 2),
			new Among("ung", -1, 1), new Among("lich", -1, 3),
			new Among("isch", -1, 2), new Among("ik", -1, 2),
			new Among("heit", -1, 3), new Among("keit", -1, 4)];

	var g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32, 8];

	var g_s_ending = [117, 30, 5];

	var g_st_ending = [117, 30, 4];

	var I_x, I_p2, I_p1;

	var snowballProgram = new SnowballProgram();

	this.setCurrent = function(word) {
		snowballProgram.setCurrent(word);
	};

	this.getCurrent = function() {
		return snowballProgram.getCurrent()
	};

	function r_prelude() {
		var v_1, v_2, v_3, v_4, v_5, v_6;

		v_1 = snowballProgram.cursor;
		replab0 : while (true) {
			v_2 = snowballProgram.cursor;
			lab1 : do {
				lab2 : do {
					v_3 = snowballProgram.cursor;
					lab3 : do {
						snowballProgram.bra = snowballProgram.cursor;
						if (!(snowballProgram.eq_s(1, "\u00DF"))) {
							break lab3;
						}
						snowballProgram.ket = snowballProgram.cursor;
						snowballProgram.slice_from("ss");
						break lab2;
					} while (false);
					snowballProgram.cursor = v_3;
					if (snowballProgram.cursor >= snowballProgram.limit) {
						break lab1;
					}
					snowballProgram.cursor++;
				} while (false);
				continue replab0;
			} while (false);
			snowballProgram.cursor = v_2;
			break replab0;
		}
		snowballProgram.cursor = v_1;
		replab4 : while (true) {
			v_4 = snowballProgram.cursor;
			lab5 : do {
				golab6 : while (true) {
					v_5 = snowballProgram.cursor;
					lab7 : do {
						if (!(snowballProgram.in_grouping(g_v, 97, 252))) {
							break lab7;
						}
						snowballProgram.bra = snowballProgram.cursor;
						lab8 : do {
							v_6 = snowballProgram.cursor;
							lab9 : do {
								if (!(snowballProgram.eq_s(1, "u"))) {
									break lab9;
								}
								snowballProgram.ket = snowballProgram.cursor;
								if (!(snowballProgram.in_grouping(g_v, 97, 252))) {
									break lab9;
								}
								snowballProgram.slice_from("U");
								break lab8;
							} while (false);
							snowballProgram.cursor = v_6;
							if (!(snowballProgram.eq_s(1, "y"))) {
								break lab7;
							}
							snowballProgram.ket = snowballProgram.cursor;
							if (!(snowballProgram.in_grouping(g_v, 97, 252))) {
								break lab7;
							}
							snowballProgram.slice_from("Y");
						} while (false);
						snowballProgram.cursor = v_5;
						break golab6;
					} while (false);
					snowballProgram.cursor = v_5;
					if (snowballProgram.cursor >= snowballProgram.limit) {
						break lab5;
					}
					snowballProgram.cursor++;
				}
				continue replab4;
			} while (false);
			snowballProgram.cursor = v_4;
			break replab4;
		}

		return true;
	}

	function r_mark_regions() {
		var v_1;

		I_p1 = snowballProgram.limit;
		I_p2 = snowballProgram.limit;
		v_1 = snowballProgram.cursor;

		var c = snowballProgram.cursor + 3;
		if (0 > c || c > snowballProgram.limit) {
			return false;
		}
		snowballProgram.cursor = c;

		I_x = snowballProgram.cursor;
		snowballProgram.cursor = v_1;
		golab0 : while (true) {
			lab1 : do {
				if (!(snowballProgram.in_grouping(g_v, 97, 252))) {
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
				if (!(snowballProgram.out_grouping(g_v, 97, 252))) {
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
			if (!(I_p1 < I_x)) {
				break lab4;
			}
			I_p1 = I_x;
		} while (false);
		golab5 : while (true) {
			lab6 : do {
				if (!(snowballProgram.in_grouping(g_v, 97, 252))) {
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
				if (!(snowballProgram.out_grouping(g_v, 97, 252))) {
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
		var among_var;
		var v_1;

		replab0 : while (true) {
			v_1 = snowballProgram.cursor;
			lab1 : do {
				snowballProgram.bra = snowballProgram.cursor;
				among_var = snowballProgram.find_among(a_0, 6);
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
						snowballProgram.slice_from("u");
						break;
					case 3 :
						snowballProgram.slice_from("a");
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

	function r_standard_suffix() {
		var among_var, v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		lab0 : do {
			snowballProgram.ket = snowballProgram.cursor;
			among_var = snowballProgram.find_among_b(a_1, 7);
			if (among_var == 0) {
				break lab0;
			}
			snowballProgram.bra = snowballProgram.cursor;
			if (!r_R1()) {
				break lab0;
			}
			switch (among_var) {
				case 0 :
					break lab0;
				case 1 :
					snowballProgram.slice_del();
					break;
				case 2 :
					snowballProgram.slice_del();
					v_2 = snowballProgram.limit - snowballProgram.cursor;
					lab1 : do {
						snowballProgram.ket = snowballProgram.cursor;
						if (!(snowballProgram.eq_s_b(1, "s"))) {
							snowballProgram.cursor = snowballProgram.limit
									- v_2;
							break lab1;
						}
						snowballProgram.bra = snowballProgram.cursor;
						if (!(snowballProgram.eq_s_b(3, "nis"))) {
							snowballProgram.cursor = snowballProgram.limit
									- v_2;
							break lab1;
						}
						snowballProgram.slice_del();
					} while (false);
					break;
				case 3 :
					if (!(snowballProgram.in_grouping_b(g_s_ending, 98, 116))) {
						break lab0;
					}
					snowballProgram.slice_del();
					break;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_1;
		v_3 = snowballProgram.limit - snowballProgram.cursor;
		lab2 : do {
			snowballProgram.ket = snowballProgram.cursor;
			among_var = snowballProgram.find_among_b(a_2, 4);
			if (among_var == 0) {
				break lab2;
			}
			snowballProgram.bra = snowballProgram.cursor;
			if (!r_R1()) {
				break lab2;
			}
			switch (among_var) {
				case 0 :
					break lab2;
				case 1 :
					snowballProgram.slice_del();
					break;
				case 2 :
					if (!(snowballProgram.in_grouping_b(g_st_ending, 98, 116))) {
						break lab2;
					}
					var c = snowballProgram.cursor - 3;
					if (snowballProgram.limit_backward > c
							|| c > snowballProgram.limit) {
						break lab2;
					}
					snowballProgram.cursor = c;
					snowballProgram.slice_del();
					break;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_3;
		v_4 = snowballProgram.limit - snowballProgram.cursor;
		lab3 : do {
			snowballProgram.ket = snowballProgram.cursor;
			among_var = snowballProgram.find_among_b(a_4, 8);
			if (among_var == 0) {
				break lab3;
			}
			snowballProgram.bra = snowballProgram.cursor;
			if (!r_R2()) {
				break lab3;
			}
			switch (among_var) {
				case 0 :
					break lab3;
				case 1 :
					snowballProgram.slice_del();
					v_5 = snowballProgram.limit - snowballProgram.cursor;
					lab4 : do {
						snowballProgram.ket = snowballProgram.cursor;
						if (!(snowballProgram.eq_s_b(2, "ig"))) {
							snowballProgram.cursor = snowballProgram.limit
									- v_5;
							break lab4;
						}
						snowballProgram.bra = snowballProgram.cursor;

						v_6 = snowballProgram.limit - snowballProgram.cursor;
						lab5 : do {
							// literal, line 107
							if (!(snowballProgram.eq_s_b(1, "e"))) {
								break lab5;
							}
							snowballProgram.cursor = snowballProgram.limit
									- v_5;
							break lab4;
						} while (false);
						snowballProgram.cursor = snowballProgram.limit - v_6;
						if (!r_R2()) {
							snowballProgram.cursor = snowballProgram.limit
									- v_5;
							break lab4;
						}
						snowballProgram.slice_del();
					} while (false);
					break;
				case 2 :
					v_7 = snowballProgram.limit - snowballProgram.cursor;
					lab6 : do {
						if (!(snowballProgram.eq_s_b(1, "e"))) {
							break lab6;
						}
						break lab3;
					} while (false);
					snowballProgram.cursor = snowballProgram.limit - v_7;
					snowballProgram.slice_del();
					break;
				case 3 :
					snowballProgram.slice_del();
					v_8 = snowballProgram.limit - snowballProgram.cursor;
					lab7 : do {
						snowballProgram.ket = snowballProgram.cursor;
						lab8 : do {
							v_9 = snowballProgram.limit
									- snowballProgram.cursor;
							lab9 : do {
								if (!(snowballProgram.eq_s_b(2, "er"))) {
									break lab9;
								}
								break lab8;
							} while (false);
							snowballProgram.cursor = snowballProgram.limit
									- v_9;
							if (!(snowballProgram.eq_s_b(2, "en"))) {
								snowballProgram.cursor = snowballProgram.limit
										- v_8;
								break lab7;
							}
						} while (false);
						snowballProgram.bra = snowballProgram.cursor;
						if (!r_R1()) {
							snowballProgram.cursor = snowballProgram.limit
									- v_8;
							break lab7;
						}
						snowballProgram.slice_del();
					} while (false);
					break;
				case 4 :
					snowballProgram.slice_del();
					v_10 = snowballProgram.limit - snowballProgram.cursor;
					lab10 : do {
						snowballProgram.ket = snowballProgram.cursor;
						among_var = snowballProgram.find_among_b(a_3, 2);
						if (among_var == 0) {
							snowballProgram.cursor = snowballProgram.limit
									- v_10;
							break lab10;
						}
						snowballProgram.bra = snowballProgram.cursor;
						if (!r_R2()) {
							snowballProgram.cursor = snowballProgram.limit
									- v_10;
							break lab10;
						}
						switch (among_var) {
							case 0 :
								snowballProgram.cursor = snowballProgram.limit
										- v_10;
								break lab10;
							case 1 :
								snowballProgram.slice_del();
								break;
						}
					} while (false);
					break;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_4;

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