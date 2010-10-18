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

const EXPORTED_SYMBOLS = ['PortugueseStemmer'];

Components.utils.import("resource://urim/analysis/stemmer/Among.js");
Components.utils.import("resource://urim/analysis/stemmer/SnowballProgram.js");

function PortugueseStemmer() {

	var a_0 = [new Among("", -1, 3), new Among("\u00E3", 0, 1),
			new Among("\u00F5", 0, 2)];

	var a_1 = [new Among("", -1, 3), new Among("a~", 0, 1),
			new Among("o~", 0, 2)];

	var a_2 = [new Among("ic", -1, -1), new Among("ad", -1, -1),
			new Among("os", -1, -1), new Among("iv", -1, 1)];

	var a_3 = [new Among("ante", -1, 1), new Among("avel", -1, 1),
			new Among("\u00EDvel", -1, 1)];

	var a_4 = [new Among("ic", -1, 1), new Among("abil", -1, 1),
			new Among("iv", -1, 1)];

	var a_5 = [new Among("ica", -1, 1), new Among("\u00E2ncia", -1, 1),
			new Among("\u00EAncia", -1, 4), new Among("ira", -1, 9),
			new Among("adora", -1, 1), new Among("osa", -1, 1),
			new Among("ista", -1, 1), new Among("iva", -1, 8),
			new Among("eza", -1, 1), new Among("log\u00EDa", -1, 2),
			new Among("idade", -1, 7), new Among("ante", -1, 1),
			new Among("mente", -1, 6), new Among("amente", 12, 5),
			new Among("\u00E1vel", -1, 1), new Among("\u00EDvel", -1, 1),
			new Among("uci\u00F3n", -1, 3), new Among("ico", -1, 1),
			new Among("ismo", -1, 1), new Among("oso", -1, 1),
			new Among("amento", -1, 1), new Among("imento", -1, 1),
			new Among("ivo", -1, 8), new Among("a\u00E7a~o", -1, 1),
			new Among("ador", -1, 1), new Among("icas", -1, 1),
			new Among("\u00EAncias", -1, 4), new Among("iras", -1, 9),
			new Among("adoras", -1, 1), new Among("osas", -1, 1),
			new Among("istas", -1, 1), new Among("ivas", -1, 8),
			new Among("ezas", -1, 1), new Among("log\u00EDas", -1, 2),
			new Among("idades", -1, 7), new Among("uciones", -1, 3),
			new Among("adores", -1, 1), new Among("antes", -1, 1),
			new Among("a\u00E7o~es", -1, 1), new Among("icos", -1, 1),
			new Among("ismos", -1, 1), new Among("osos", -1, 1),
			new Among("amentos", -1, 1), new Among("imentos", -1, 1),
			new Among("ivos", -1, 8)];

	var a_6 = [new Among("ada", -1, 1), new Among("ida", -1, 1),
			new Among("ia", -1, 1), new Among("aria", 2, 1),
			new Among("eria", 2, 1), new Among("iria", 2, 1),
			new Among("ara", -1, 1), new Among("era", -1, 1),
			new Among("ira", -1, 1), new Among("ava", -1, 1),
			new Among("asse", -1, 1), new Among("esse", -1, 1),
			new Among("isse", -1, 1), new Among("aste", -1, 1),
			new Among("este", -1, 1), new Among("iste", -1, 1),
			new Among("ei", -1, 1), new Among("arei", 16, 1),
			new Among("erei", 16, 1), new Among("irei", 16, 1),
			new Among("am", -1, 1), new Among("iam", 20, 1),
			new Among("ariam", 21, 1), new Among("eriam", 21, 1),
			new Among("iriam", 21, 1), new Among("aram", 20, 1),
			new Among("eram", 20, 1), new Among("iram", 20, 1),
			new Among("avam", 20, 1), new Among("em", -1, 1),
			new Among("arem", 29, 1), new Among("erem", 29, 1),
			new Among("irem", 29, 1), new Among("assem", 29, 1),
			new Among("essem", 29, 1), new Among("issem", 29, 1),
			new Among("ado", -1, 1), new Among("ido", -1, 1),
			new Among("ando", -1, 1), new Among("endo", -1, 1),
			new Among("indo", -1, 1), new Among("ara~o", -1, 1),
			new Among("era~o", -1, 1), new Among("ira~o", -1, 1),
			new Among("ar", -1, 1), new Among("er", -1, 1),
			new Among("ir", -1, 1), new Among("as", -1, 1),
			new Among("adas", 47, 1), new Among("idas", 47, 1),
			new Among("ias", 47, 1), new Among("arias", 50, 1),
			new Among("erias", 50, 1), new Among("irias", 50, 1),
			new Among("aras", 47, 1), new Among("eras", 47, 1),
			new Among("iras", 47, 1), new Among("avas", 47, 1),
			new Among("es", -1, 1), new Among("ardes", 58, 1),
			new Among("erdes", 58, 1), new Among("irdes", 58, 1),
			new Among("ares", 58, 1), new Among("eres", 58, 1),
			new Among("ires", 58, 1), new Among("asses", 58, 1),
			new Among("esses", 58, 1), new Among("isses", 58, 1),
			new Among("astes", 58, 1), new Among("estes", 58, 1),
			new Among("istes", 58, 1), new Among("is", -1, 1),
			new Among("ais", 71, 1), new Among("eis", 71, 1),
			new Among("areis", 73, 1), new Among("ereis", 73, 1),
			new Among("ireis", 73, 1), new Among("\u00E1reis", 73, 1),
			new Among("\u00E9reis", 73, 1), new Among("\u00EDreis", 73, 1),
			new Among("\u00E1sseis", 73, 1), new Among("\u00E9sseis", 73, 1),
			new Among("\u00EDsseis", 73, 1), new Among("\u00E1veis", 73, 1),
			new Among("\u00EDeis", 73, 1), new Among("ar\u00EDeis", 84, 1),
			new Among("er\u00EDeis", 84, 1), new Among("ir\u00EDeis", 84, 1),
			new Among("ados", -1, 1), new Among("idos", -1, 1),
			new Among("amos", -1, 1), new Among("\u00E1ramos", 90, 1),
			new Among("\u00E9ramos", 90, 1), new Among("\u00EDramos", 90, 1),
			new Among("\u00E1vamos", 90, 1), new Among("\u00EDamos", 90, 1),
			new Among("ar\u00EDamos", 95, 1), new Among("er\u00EDamos", 95, 1),
			new Among("ir\u00EDamos", 95, 1), new Among("emos", -1, 1),
			new Among("aremos", 99, 1), new Among("eremos", 99, 1),
			new Among("iremos", 99, 1), new Among("\u00E1ssemos", 99, 1),
			new Among("\u00EAssemos", 99, 1), new Among("\u00EDssemos", 99, 1),
			new Among("imos", -1, 1), new Among("armos", -1, 1),
			new Among("ermos", -1, 1), new Among("irmos", -1, 1),
			new Among("\u00E1mos", -1, 1), new Among("ar\u00E1s", -1, 1),
			new Among("er\u00E1s", -1, 1), new Among("ir\u00E1s", -1, 1),
			new Among("eu", -1, 1), new Among("iu", -1, 1),
			new Among("ou", -1, 1), new Among("ar\u00E1", -1, 1),
			new Among("er\u00E1", -1, 1), new Among("ir\u00E1", -1, 1)];

	var a_7 = [new Among("a", -1, 1), new Among("i", -1, 1),
			new Among("o", -1, 1), new Among("os", -1, 1),
			new Among("\u00E1", -1, 1), new Among("\u00ED", -1, 1),
			new Among("\u00F3", -1, 1)];

	var a_8 = [new Among("e", -1, 1), new Among("\u00E7", -1, 2),
			new Among("\u00E9", -1, 1), new Among("\u00EA", -1, 1)];

	var g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 19, 12, 2];

	var I_p2, I_p1, I_pV;

	var snowballProgram = new SnowballProgram();

	this.setCurrent = function(word) {
		snowballProgram.setCurrent(word);
	};

	this.getCurrent = function() {
		return snowballProgram.getCurrent()
	};

	function r_prelude() {
		var among_var, v_1;

		replab0 : while (true) {
			v_1 = snowballProgram.cursor;
			lab1 : do {
				snowballProgram.bra = snowballProgram.cursor;
				among_var = snowballProgram.find_among(a_0, 3);
				if (among_var == 0) {
					break lab1;
				}
				snowballProgram.ket = snowballProgram.cursor;
				switch (among_var) {
					case 0 :
						break lab1;
					case 1 :
						snowballProgram.slice_from("a~");
						break;
					case 2 :
						snowballProgram.slice_from("o~");
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

	function r_mark_regions() {
		var v_1, v_2, v_3, v_6, v_8;

		I_pV = snowballProgram.limit;
		I_p1 = snowballProgram.limit;
		I_p2 = snowballProgram.limit;
		v_1 = snowballProgram.cursor;
		lab0 : do {
			lab1 : do {
				v_2 = snowballProgram.cursor;
				lab2 : do {
					if (!(snowballProgram.in_grouping(g_v, 97, 250))) {
						break lab2;
					}
					lab3 : do {
						v_3 = snowballProgram.cursor;
						lab4 : do {
							if (!(snowballProgram.out_grouping(g_v, 97, 250))) {
								break lab4;
							}
							golab5 : while (true) {
								lab6 : do {
									if (!(snowballProgram.in_grouping(g_v, 97,
											250))) {
										break lab6;
									}
									break golab5;
								} while (false);
								if (snowballProgram.cursor >= snowballProgram.limit) {
									break lab4;
								}
								snowballProgram.cursor++;
							}
							break lab3;
						} while (false);
						snowballProgram.cursor = v_3;
						if (!(snowballProgram.in_grouping(g_v, 97, 250))) {
							break lab2;
						}
						golab7 : while (true) {
							lab8 : do {
								if (!(snowballProgram
										.out_grouping(g_v, 97, 250))) {
									break lab8;
								}
								break golab7;
							} while (false);
							if (snowballProgram.cursor >= snowballProgram.limit) {
								break lab2;
							}
							snowballProgram.cursor++;
						}
					} while (false);
					break lab1;
				} while (false);
				snowballProgram.cursor = v_2;
				if (!(snowballProgram.out_grouping(g_v, 97, 250))) {
					break lab0;
				}
				lab9 : do {
					v_6 = snowballProgram.cursor;
					lab10 : do {
						if (!(snowballProgram.out_grouping(g_v, 97, 250))) {
							break lab10;
						}
						golab11 : while (true) {
							lab12 : do {
								if (!(snowballProgram.in_grouping(g_v, 97, 250))) {
									break lab12;
								}
								break golab11;
							} while (false);
							if (snowballProgram.cursor >= snowballProgram.limit) {
								break lab10;
							}
							snowballProgram.cursor++;
						}
						break lab9;
					} while (false);
					snowballProgram.cursor = v_6;
					if (!(snowballProgram.in_grouping(g_v, 97, 250))) {
						break lab0;
					}
					if (snowballProgram.cursor >= snowballProgram.limit) {
						break lab0;
					}
					snowballProgram.cursor++;
				} while (false);
			} while (false);
			I_pV = snowballProgram.cursor;
		} while (false);
		snowballProgram.cursor = v_1;
		v_8 = snowballProgram.cursor;
		lab13 : do {
			golab14 : while (true) {
				lab15 : do {
					if (!(snowballProgram.in_grouping(g_v, 97, 250))) {
						break lab15;
					}
					break golab14;
				} while (false);
				if (snowballProgram.cursor >= snowballProgram.limit) {
					break lab13;
				}
				snowballProgram.cursor++;
			}
			golab16 : while (true) {
				lab17 : do {
					if (!(snowballProgram.out_grouping(g_v, 97, 250))) {
						break lab17;
					}
					break golab16;
				} while (false);
				if (snowballProgram.cursor >= snowballProgram.limit) {
					break lab13;
				}
				snowballProgram.cursor++;
			}
			I_p1 = snowballProgram.cursor;
			golab18 : while (true) {
				lab19 : do {
					if (!(snowballProgram.in_grouping(g_v, 97, 250))) {
						break lab19;
					}
					break golab18;
				} while (false);
				if (snowballProgram.cursor >= snowballProgram.limit) {
					break lab13;
				}
				snowballProgram.cursor++;
			}
			golab20 : while (true) {
				lab21 : do {
					if (!(snowballProgram.out_grouping(g_v, 97, 250))) {
						break lab21;
					}
					break golab20;
				} while (false);
				if (snowballProgram.cursor >= snowballProgram.limit) {
					break lab13;
				}
				snowballProgram.cursor++;
			}
			I_p2 = snowballProgram.cursor;
		} while (false);
		snowballProgram.cursor = v_8;

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
						snowballProgram.slice_from("\u00E3");
						break;
					case 2 :
						snowballProgram.slice_from("\u00F5");
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

	function r_RV() {
		if (!(I_pV <= snowballProgram.cursor)) {
			return false;
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
		var among_var, v_1, v_2, v_3, v_4;

		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_5, 45);
		if (among_var == 0) {
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				if (!r_R2()) {
					return false;
				}
				snowballProgram.slice_del();
				break;
			case 2 :
				if (!r_R2()) {
					return false;
				}
				snowballProgram.slice_from("log");
				break;
			case 3 :
				if (!r_R2()) {
					return false;
				}
				snowballProgram.slice_from("u");
				break;
			case 4 :
				if (!r_R2()) {
					return false;
				}
				snowballProgram.slice_from("ente");
				break;
			case 5 :
				if (!r_R1()) {
					return false;
				}
				snowballProgram.slice_del();
				v_1 = snowballProgram.limit - snowballProgram.cursor;
				lab0 : do {
					snowballProgram.ket = snowballProgram.cursor;
					among_var = snowballProgram.find_among_b(a_2, 4);
					if (among_var == 0) {
						snowballProgram.cursor = snowballProgram.limit - v_1;
						break lab0;
					}
					snowballProgram.bra = snowballProgram.cursor;
					if (!r_R2()) {
						snowballProgram.cursor = snowballProgram.limit - v_1;
						break lab0;
					}
					snowballProgram.slice_del();
					switch (among_var) {
						case 0 :
							snowballProgram.cursor = snowballProgram.limit
									- v_1;
							break lab0;
						case 1 :
							snowballProgram.ket = snowballProgram.cursor;
							if (!(snowballProgram.eq_s_b(2, "at"))) {
								snowballProgram.cursor = snowballProgram.limit
										- v_1;
								break lab0;
							}
							snowballProgram.bra = snowballProgram.cursor;
							if (!r_R2()) {
								snowballProgram.cursor = snowballProgram.limit
										- v_1;
								break lab0;
							}
							snowballProgram.slice_del();
							break;
					}
				} while (false);
				break;
			case 6 :
				if (!r_R2()) {
					return false;
				}
				snowballProgram.slice_del();
				v_2 = snowballProgram.limit - snowballProgram.cursor;
				lab1 : do {
					snowballProgram.ket = snowballProgram.cursor;
					among_var = snowballProgram.find_among_b(a_3, 3);
					if (among_var == 0) {
						snowballProgram.cursor = snowballProgram.limit - v_2;
						break lab1;
					}
					snowballProgram.bra = snowballProgram.cursor;
					switch (among_var) {
						case 0 :
							snowballProgram.cursor = snowballProgram.limit
									- v_2;
							break lab1;
						case 1 :
							if (!r_R2()) {
								snowballProgram.cursor = snowballProgram.limit
										- v_2;
								break lab1;
							}
							snowballProgram.slice_del();
							break;
					}
				} while (false);
				break;
			case 7 :
				if (!r_R2()) {
					return false;
				}
				snowballProgram.slice_del();
				v_3 = snowballProgram.limit - snowballProgram.cursor;
				lab2 : do {
					snowballProgram.ket = snowballProgram.cursor;
					among_var = snowballProgram.find_among_b(a_4, 3);
					if (among_var == 0) {
						snowballProgram.cursor = snowballProgram.limit - v_3;
						break lab2;
					}
					snowballProgram.bra = snowballProgram.cursor;
					switch (among_var) {
						case 0 :
							snowballProgram.cursor = snowballProgram.limit
									- v_3;
							break lab2;
						case 1 :
							if (!r_R2()) {
								snowballProgram.cursor = snowballProgram.limit
										- v_3;
								break lab2;
							}
							snowballProgram.slice_del();
							break;
					}
				} while (false);
				break;
			case 8 :
				if (!r_R2()) {
					return false;
				}
				snowballProgram.slice_del();
				v_4 = snowballProgram.limit - snowballProgram.cursor;
				lab3 : do {
					snowballProgram.ket = snowballProgram.cursor;
					if (!(snowballProgram.eq_s_b(2, "at"))) {
						snowballProgram.cursor = snowballProgram.limit - v_4;
						break lab3;
					}
					snowballProgram.bra = snowballProgram.cursor;
					if (!r_R2()) {
						snowballProgram.cursor = snowballProgram.limit - v_4;
						break lab3;
					}
					snowballProgram.slice_del();
				} while (false);
				break;
			case 9 :
				if (!r_RV()) {
					return false;
				}
				if (!(snowballProgram.eq_s_b(1, "e"))) {
					return false;
				}
				snowballProgram.slice_from("ir");
				break;
		}

		return true;
	}

	function r_verb_suffix() {
		var among_va, v_1, v_2;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_pV) {
			return false;
		}
		snowballProgram.cursor = I_pV;
		v_2 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_1;
		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_6, 120);
		if (among_var == 0) {
			snowballProgram.limit_backward = v_2;
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		switch (among_var) {
			case 0 :
				snowballProgram.limit_backward = v_2;
				return false;
			case 1 :
				snowballProgram.slice_del();
				break;
		}
		snowballProgram.limit_backward = v_2;

		return true;
	}

	function r_residual_suffix() {
		var among_var;

		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_7, 7);
		if (among_var == 0) {
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				if (!r_RV()) {
					return false;
				}
				snowballProgram.slice_del();
				break;
		}

		return true;
	}

	function r_residual_form() {
		var among_var, v_1, v_2, v_3;

		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_8, 4);
		if (among_var == 0) {
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				if (!r_RV()) {
					return false;
				}
				snowballProgram.slice_del();
				snowballProgram.ket = snowballProgram.cursor;
				lab0 : do {
					v_1 = snowballProgram.limit - snowballProgram.cursor;
					lab1 : do {
						if (!(snowballProgram.eq_s_b(1, "u"))) {
							break lab1;
						}
						snowballProgram.bra = snowballProgram.cursor;
						v_2 = snowballProgram.limit - snowballProgram.cursor;
						if (!(snowballProgram.eq_s_b(1, "g"))) {
							break lab1;
						}
						snowballProgram.cursor = snowballProgram.limit - v_2;
						break lab0;
					} while (false);
					snowballProgram.cursor = snowballProgram.limit - v_1;
					if (!(snowballProgram.eq_s_b(1, "i"))) {
						return false;
					}
					snowballProgram.bra = snowballProgram.cursor;
					v_3 = snowballProgram.limit - snowballProgram.cursor;
					if (!(snowballProgram.eq_s_b(1, "c"))) {
						return false;
					}
					snowballProgram.cursor = snowballProgram.limit - v_3;
				} while (false);
				if (!r_RV()) {
					return false;
				}
				snowballProgram.slice_del();
				break;
			case 2 :
				snowballProgram.slice_from("c");
				break;
		}

		return true;
	}

	this.stem = function() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10;

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
			lab3 : do {
				v_4 = snowballProgram.limit - snowballProgram.cursor;
				lab4 : do {
					v_5 = snowballProgram.limit - snowballProgram.cursor;
					lab5 : do {
						v_6 = snowballProgram.limit - snowballProgram.cursor;
						lab6 : do {
							if (!r_standard_suffix()) {
								break lab6;
							}
							break lab5;
						} while (false);
						snowballProgram.cursor = snowballProgram.limit - v_6;
						if (!r_verb_suffix()) {
							break lab4;
						}
					} while (false);
					snowballProgram.cursor = snowballProgram.limit - v_5;
					v_7 = snowballProgram.limit - snowballProgram.cursor;
					lab7 : do {
						snowballProgram.ket = snowballProgram.cursor;
						if (!(snowballProgram.eq_s_b(1, "i"))) {
							break lab7;
						}
						snowballProgram.bra = snowballProgram.cursor;
						v_8 = snowballProgram.limit - snowballProgram.cursor;
						if (!(snowballProgram.eq_s_b(1, "c"))) {
							break lab7;
						}
						snowballProgram.cursor = snowballProgram.limit - v_8;
						if (!r_RV()) {
							break lab7;
						}
						snowballProgram.slice_del();
					} while (false);
					snowballProgram.cursor = snowballProgram.limit - v_7;
					break lab3;
				} while (false);
				snowballProgram.cursor = snowballProgram.limit - v_4;
				if (!r_residual_suffix()) {
					break lab2;
				}
			} while (false);
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_3;
		v_9 = snowballProgram.limit - snowballProgram.cursor;
		lab8 : do {
			if (!r_residual_form()) {
				break lab8;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_9;
		snowballProgram.cursor = snowballProgram.limit_backward;
		v_10 = snowballProgram.cursor;
		lab9 : do {
			if (!r_postlude()) {
				break lab9;
			}
		} while (false);
		snowballProgram.cursor = v_10;

		return true;
	}
}