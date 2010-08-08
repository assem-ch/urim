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

const EXPORTED_SYMBOLS = ['FrenchStemmer'];

Components.utils.import("resource://urim/analysis/stemmer/Among.js");
Components.utils.import("resource://urim/analysis/stemmer/SnowballProgram.js");

function FrenchStemmer() {

	var a_0 = [new Among("col", -1, -1), new Among("par", -1, -1),
			new Among("tap", -1, -1)];

	var a_1 = [new Among("", -1, 4), new Among("I", 0, 1),
			new Among("U", 0, 2), new Among("Y", 0, 3)];

	var a_2 = [new Among("iqU", -1, 3), new Among("abl", -1, 3),
			new Among("I\u00E8r", -1, 4), new Among("i\u00E8r", -1, 4),
			new Among("eus", -1, 2), new Among("iv", -1, 1)];

	var a_3 = [new Among("ic", -1, 2), new Among("abil", -1, 1),
			new Among("iv", -1, 3)];

	var a_4 = [new Among("iqUe", -1, 1), new Among("atrice", -1, 2),
			new Among("ance", -1, 1), new Among("ence", -1, 5),
			new Among("logie", -1, 3), new Among("able", -1, 1),
			new Among("isme", -1, 1), new Among("euse", -1, 11),
			new Among("iste", -1, 1), new Among("ive", -1, 8),
			new Among("if", -1, 8), new Among("usion", -1, 4),
			new Among("ation", -1, 2), new Among("ution", -1, 4),
			new Among("ateur", -1, 2), new Among("iqUes", -1, 1),
			new Among("atrices", -1, 2), new Among("ances", -1, 1),
			new Among("ences", -1, 5), new Among("logies", -1, 3),
			new Among("ables", -1, 1), new Among("ismes", -1, 1),
			new Among("euses", -1, 11), new Among("istes", -1, 1),
			new Among("ives", -1, 8), new Among("ifs", -1, 8),
			new Among("usions", -1, 4), new Among("ations", -1, 2),
			new Among("utions", -1, 4), new Among("ateurs", -1, 2),
			new Among("ments", -1, 15), new Among("ements", 30, 6),
			new Among("issements", 31, 12), new Among("it\u00E9s", -1, 7),
			new Among("ment", -1, 15), new Among("ement", 34, 6),
			new Among("issement", 35, 12), new Among("amment", 34, 13),
			new Among("emment", 34, 14), new Among("aux", -1, 10),
			new Among("eaux", 39, 9), new Among("eux", -1, 1),
			new Among("it\u00E9", -1, 7)];

	var a_5 = [new Among("ira", -1, 1), new Among("ie", -1, 1),
			new Among("isse", -1, 1), new Among("issante", -1, 1),
			new Among("i", -1, 1), new Among("irai", 4, 1),
			new Among("ir", -1, 1), new Among("iras", -1, 1),
			new Among("ies", -1, 1), new Among("\u00EEmes", -1, 1),
			new Among("isses", -1, 1), new Among("issantes", -1, 1),
			new Among("\u00EEtes", -1, 1), new Among("is", -1, 1),
			new Among("irais", 13, 1), new Among("issais", 13, 1),
			new Among("irions", -1, 1), new Among("issions", -1, 1),
			new Among("irons", -1, 1), new Among("issons", -1, 1),
			new Among("issants", -1, 1), new Among("it", -1, 1),
			new Among("irait", 21, 1), new Among("issait", 21, 1),
			new Among("issant", -1, 1), new Among("iraIent", -1, 1),
			new Among("issaIent", -1, 1), new Among("irent", -1, 1),
			new Among("issent", -1, 1), new Among("iront", -1, 1),
			new Among("\u00EEt", -1, 1), new Among("iriez", -1, 1),
			new Among("issiez", -1, 1), new Among("irez", -1, 1),
			new Among("issez", -1, 1)];

	var a_6 = [new Among("a", -1, 3), new Among("era", 0, 2),
			new Among("asse", -1, 3), new Among("ante", -1, 3),
			new Among("\u00E9e", -1, 2), new Among("ai", -1, 3),
			new Among("erai", 5, 2), new Among("er", -1, 2),
			new Among("as", -1, 3), new Among("eras", 8, 2),
			new Among("\u00E2mes", -1, 3), new Among("asses", -1, 3),
			new Among("antes", -1, 3), new Among("\u00E2tes", -1, 3),
			new Among("\u00E9es", -1, 2), new Among("ais", -1, 3),
			new Among("erais", 15, 2), new Among("ions", -1, 1),
			new Among("erions", 17, 2), new Among("assions", 17, 3),
			new Among("erons", -1, 2), new Among("ants", -1, 3),
			new Among("\u00E9s", -1, 2), new Among("ait", -1, 3),
			new Among("erait", 23, 2), new Among("ant", -1, 3),
			new Among("aIent", -1, 3), new Among("eraIent", 26, 2),
			new Among("\u00E8rent", -1, 2), new Among("assent", -1, 3),
			new Among("eront", -1, 2), new Among("\u00E2t", -1, 3),
			new Among("ez", -1, 2), new Among("iez", 32, 2),
			new Among("eriez", 33, 2), new Among("assiez", 33, 3),
			new Among("erez", 32, 2), new Among("\u00E9", -1, 2)];

	var a_7 = [new Among("e", -1, 3), new Among("I\u00E8re", 0, 2),
			new Among("i\u00E8re", 0, 2), new Among("ion", -1, 1),
			new Among("Ier", -1, 2), new Among("ier", -1, 2),
			new Among("\u00EB", -1, 4)];

	var a_8 = [new Among("ell", -1, -1), new Among("eill", -1, -1),
			new Among("enn", -1, -1), new Among("onn", -1, -1),
			new Among("ett", -1, -1)];

	var g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 130, 103,
			8, 5];

	var g_keep_with_s = [1, 65, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128];

	var I_p2, I_p1, I_pV;

	var snowballProgram = new SnowballProgram();

	this.setCurrent = function(word) {
		snowballProgram.setCurrent(word);
	};

	this.getCurrent = function() {
		return snowballProgram.getCurrent()
	};

	function r_prelude() {
		var v_1, v_2, v_3, v_4;

		replab0 : while (true) {
			v_1 = snowballProgram.cursor;
			lab1 : do {
				golab2 : while (true) {
					v_2 = snowballProgram.cursor;
					lab3 : do {
						lab4 : do {
							v_3 = snowballProgram.cursor;
							lab5 : do {
								if (!(snowballProgram.in_grouping(g_v, 97, 251))) {
									break lab5;
								}
								snowballProgram.bra = snowballProgram.cursor;
								lab6 : do {
									v_4 = snowballProgram.cursor;
									lab7 : do {
										if (!(snowballProgram.eq_s(1, "u"))) {
											break lab7;
										}
										snowballProgram.ket = snowballProgram.cursor;
										if (!(snowballProgram.in_grouping(g_v,
												97, 251))) {
											break lab7;
										}
										snowballProgram.slice_from("U");
										break lab6;
									} while (false);
									snowballProgram.cursor = v_4;
									lab8 : do {
										if (!(snowballProgram.eq_s(1, "i"))) {
											break lab8;
										}
										snowballProgram.ket = snowballProgram.cursor;
										if (!(snowballProgram.in_grouping(g_v,
												97, 251))) {
											break lab8;
										}
										snowballProgram.slice_from("I");
										break lab6;
									} while (false);
									snowballProgram.cursor = v_4;
									if (!(snowballProgram.eq_s(1, "y"))) {
										break lab5;
									}
									snowballProgram.ket = snowballProgram.cursor;
									snowballProgram.slice_from("Y");
								} while (false);
								break lab4;
							} while (false);
							snowballProgram.cursor = v_3;
							lab9 : do {
								snowballProgram.bra = snowballProgram.cursor;
								if (!(snowballProgram.eq_s(1, "y"))) {
									break lab9;
								}
								snowballProgram.ket = snowballProgram.cursor;
								if (!(snowballProgram.in_grouping(g_v, 97, 251))) {
									break lab9;
								}
								snowballProgram.slice_from("Y");
								break lab4;
							} while (false);
							snowballProgram.cursor = v_3;
							if (!(snowballProgram.eq_s(1, "q"))) {
								break lab3;
							}
							snowballProgram.bra = snowballProgram.cursor;
							if (!(snowballProgram.eq_s(1, "u"))) {
								break lab3;
							}
							snowballProgram.ket = snowballProgram.cursor;
							snowballProgram.slice_from("U");
						} while (false);
						snowballProgram.cursor = v_2;
						break golab2;
					} while (false);
					snowballProgram.cursor = v_2;
					if (snowballProgram.cursor >= snowballProgram.limit) {
						break lab1;
					}
					snowballProgram.cursor++;
				}
				continue replab0;
			} while (false);
			snowballProgram.cursor = v_1;
			break replab0;
		}

		return true;
	}

	function r_mark_regions() {
		var v_1, v_2, v_4;

		I_pV = snowballProgram.limit;
		I_p1 = snowballProgram.limit;
		I_p2 = snowballProgram.limit;
		v_1 = snowballProgram.cursor;
		lab0 : do {
			lab1 : do {
				v_2 = snowballProgram.cursor;
				lab2 : do {
					if (!(snowballProgram.in_grouping(g_v, 97, 251))) {
						break lab2;
					}
					if (!(snowballProgram.in_grouping(g_v, 97, 251))) {
						break lab2;
					}
					if (snowballProgram.cursor >= snowballProgram.limit) {
						break lab2;
					}
					snowballProgram.cursor++;
					break lab1;
				} while (false);
				snowballProgram.cursor = v_2;
				lab3 : do {
					if (snowballProgram.find_among(a_0, 3) == 0) {
						break lab3;
					}
					break lab1;
				} while (false);
				snowballProgram.cursor = v_2;
				if (snowballProgram.cursor >= snowballProgram.limit) {
					break lab0;
				}
				snowballProgram.cursor++;
				golab4 : while (true) {
					lab5 : do {
						if (!(snowballProgram.in_grouping(g_v, 97, 251))) {
							break lab5;
						}
						break golab4;
					} while (false);
					if (snowballProgram.cursor >= snowballProgram.limit) {
						break lab0;
					}
					snowballProgram.cursor++;
				}
			} while (false);
			I_pV = snowballProgram.cursor;
		} while (false);
		snowballProgram.cursor = v_1;
		v_4 = snowballProgram.cursor;
		lab6 : do {
			golab7 : while (true) {
				lab8 : do {
					if (!(snowballProgram.in_grouping(g_v, 97, 251))) {
						break lab8;
					}
					break golab7;
				} while (false);
				if (snowballProgram.cursor >= snowballProgram.limit) {
					break lab6;
				}
				snowballProgram.cursor++;
			}
			golab9 : while (true) {
				lab10 : do {
					if (!(snowballProgram.out_grouping(g_v, 97, 251))) {
						break lab10;
					}
					break golab9;
				} while (false);
				if (snowballProgram.cursor >= snowballProgram.limit) {
					break lab6;
				}
				snowballProgram.cursor++;
			}
			I_p1 = snowballProgram.cursor;
			golab11 : while (true) {
				lab12 : do {
					if (!(snowballProgram.in_grouping(g_v, 97, 251))) {
						break lab12;
					}
					break golab11;
				} while (false);
				if (snowballProgram.cursor >= snowballProgram.limit) {
					break lab6;
				}
				snowballProgram.cursor++;
			}
			golab13 : while (true) {
				lab14 : do {
					if (!(snowballProgram.out_grouping(g_v, 97, 251))) {
						break lab14;
					}
					break golab13;
				} while (false);
				if (snowballProgram.cursor >= snowballProgram.limit) {
					break lab6;
				}
				snowballProgram.cursor++;
			}
			I_p2 = snowballProgram.cursor;
		} while (false);
		snowballProgram.cursor = v_4;

		return true;
	}

	function r_postlude() {
		var among_var, v_1;

		replab0 : while (true) {
			v_1 = snowballProgram.cursor;
			lab1 : do {
				snowballProgram.bra = snowballProgram.cursor;
				among_var = snowballProgram.find_among(a_1, 4);
				if (among_var == 0) {
					break lab1;
				}
				snowballProgram.ket = snowballProgram.cursor;
				switch (among_var) {
					case 0 :
						break lab1;
					case 1 :
						snowballProgram.slice_from("i");
						break;
					case 2 :
						snowballProgram.slice_from("u");
						break;
					case 3 :
						snowballProgram.slice_from("y");
						break;
					case 4 :
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
		var among_var, v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10, v_11;

		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_4, 43);
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
				snowballProgram.slice_del();
				v_1 = snowballProgram.limit - snowballProgram.cursor;
				lab0 : do {
					snowballProgram.ket = snowballProgram.cursor;
					if (!(snowballProgram.eq_s_b(2, "ic"))) {
						snowballProgram.cursor = snowballProgram.limit - v_1;
						break lab0;
					}
					snowballProgram.bra = snowballProgram.cursor;
					lab1 : do {
						v_2 = snowballProgram.limit - snowballProgram.cursor;
						lab2 : do {
							if (!r_R2()) {
								break lab2;
							}
							snowballProgram.slice_del();
							break lab1;
						} while (false);
						snowballProgram.cursor = snowballProgram.limit - v_2;
						snowballProgram.slice_from("iqU");
					} while (false);
				} while (false);
				break;
			case 3 :
				if (!r_R2()) {
					return false;
				}
				snowballProgram.slice_from("log");
				break;
			case 4 :
				if (!r_R2()) {
					return false;
				}
				snowballProgram.slice_from("u");
				break;
			case 5 :
				if (!r_R2()) {
					return false;
				}
				snowballProgram.slice_from("ent");
				break;
			case 6 :
				if (!r_RV()) {
					return false;
				}
				snowballProgram.slice_del();
				v_3 = snowballProgram.limit - snowballProgram.cursor;
				lab3 : do {
					snowballProgram.ket = snowballProgram.cursor;
					among_var = snowballProgram.find_among_b(a_2, 6);
					if (among_var == 0) {
						snowballProgram.cursor = snowballProgram.limit - v_3;
						break lab3;
					}
					snowballProgram.bra = snowballProgram.cursor;
					switch (among_var) {
						case 0 :
							snowballProgram.cursor = snowballProgram.limit
									- v_3;
							break lab3;
						case 1 :
							if (!r_R2()) {
								snowballProgram.cursor = snowballProgram.limit
										- v_3;
								break lab3;
							}
							snowballProgram.slice_del();
							snowballProgram.ket = snowballProgram.cursor;
							if (!(snowballProgram.eq_s_b(2, "at"))) {
								snowballProgram.cursor = snowballProgram.limit
										- v_3;
								break lab3;
							}
							snowballProgram.bra = snowballProgram.cursor;
							if (!r_R2()) {
								snowballProgram.cursor = snowballProgram.limit
										- v_3;
								break lab3;
							}
							snowballProgram.slice_del();
							break;
						case 2 :
							lab4 : do {
								v_4 = snowballProgram.limit
										- snowballProgram.cursor;
								lab5 : do {
									if (!r_R2()) {
										break lab5;
									}
									snowballProgram.slice_del();
									break lab4;
								} while (false);
								snowballProgram.cursor = snowballProgram.limit
										- v_4;
								if (!r_R1()) {
									snowballProgram.cursor = snowballProgram.limit
											- v_3;
									break lab3;
								}
								snowballProgram.slice_from("eux");
							} while (false);
							break;
						case 3 :
							if (!r_R2()) {
								snowballProgram.cursor = snowballProgram.limit
										- v_3;
								break lab3;
							}
							snowballProgram.slice_del();
							break;
						case 4 :
							if (!r_RV()) {
								snowballProgram.cursor = snowballProgram.limit
										- v_3;
								break lab3;
							}
							snowballProgram.slice_from("i");
							break;
					}
				} while (false);
				break;
			case 7 :
				if (!r_R2()) {
					return false;
				}
				snowballProgram.slice_del();
				v_5 = snowballProgram.limit - snowballProgram.cursor;
				lab6 : do {
					snowballProgram.ket = snowballProgram.cursor;
					among_var = snowballProgram.find_among_b(a_3, 3);
					if (among_var == 0) {
						snowballProgram.cursor = snowballProgram.limit - v_5;
						break lab6;
					}
					snowballProgram.bra = snowballProgram.cursor;
					switch (among_var) {
						case 0 :
							snowballProgram.cursor = snowballProgram.limit
									- v_5;
							break lab6;
						case 1 :
							lab7 : do {
								v_6 = snowballProgram.limit
										- snowballProgram.cursor;
								lab8 : do {
									if (!r_R2()) {
										break lab8;
									}
									snowballProgram.slice_del();
									break lab7;
								} while (false);
								snowballProgram.cursor = snowballProgram.limit
										- v_6;
								snowballProgram.slice_from("abl");
							} while (false);
							break;
						case 2 :
							lab9 : do {
								v_7 = snowballProgram.limit
										- snowballProgram.cursor;
								lab10 : do {
									if (!r_R2()) {
										break lab10;
									}
									snowballProgram.slice_del();
									break lab9;
								} while (false);
								snowballProgram.cursor = snowballProgram.limit
										- v_7;
								snowballProgram.slice_from("iqU");
							} while (false);
							break;
						case 3 :
							if (!r_R2()) {
								snowballProgram.cursor = snowballProgram.limit
										- v_5;
								break lab6;
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
				v_8 = snowballProgram.limit - snowballProgram.cursor;
				lab11 : do {
					snowballProgram.ket = snowballProgram.cursor;
					if (!(snowballProgram.eq_s_b(2, "at"))) {
						snowballProgram.cursor = snowballProgram.limit - v_8;
						break lab11;
					}
					snowballProgram.bra = snowballProgram.cursor;
					if (!r_R2()) {
						snowballProgram.cursor = snowballProgram.limit - v_8;
						break lab11;
					}
					snowballProgram.slice_del();
					snowballProgram.ket = snowballProgram.cursor;
					if (!(snowballProgram.eq_s_b(2, "ic"))) {
						snowballProgram.cursor = snowballProgram.limit - v_8;
						break lab11;
					}
					snowballProgram.bra = snowballProgram.cursor;
					lab12 : do {
						v_9 = snowballProgram.limit - snowballProgram.cursor;
						lab13 : do {
							if (!r_R2()) {
								break lab13;
							}
							snowballProgram.slice_del();
							break lab12;
						} while (false);
						snowballProgram.cursor = snowballProgram.limit - v_9;
						snowballProgram.slice_from("iqU");
					} while (false);
				} while (false);
				break;
			case 9 :
				snowballProgram.slice_from("eau");
				break;
			case 10 :
				if (!r_R1()) {
					return false;
				}
				snowballProgram.slice_from("al");
				break;
			case 11 :
				lab14 : do {
					v_10 = snowballProgram.limit - snowballProgram.cursor;
					lab15 : do {
						if (!r_R2()) {
							break lab15;
						}
						snowballProgram.slice_del();
						break lab14;
					} while (false);
					snowballProgram.cursor = snowballProgram.limit - v_10;
					if (!r_R1()) {
						return false;
					}
					snowballProgram.slice_from("eux");
				} while (false);
				break;
			case 12 :
				if (!r_R1()) {
					return false;
				}
				if (!(snowballProgram.out_grouping_b(g_v, 97, 251))) {
					return false;
				}
				snowballProgram.slice_del();
				break;
			case 13 :
				if (!r_RV()) {
					return false;
				}
				snowballProgram.slice_from("ant");
				return false;
			case 14 :
				if (!r_RV()) {
					return false;
				}
				snowballProgram.slice_from("ent");
				return false;
			case 15 :
				v_11 = snowballProgram.limit - snowballProgram.cursor;
				if (!(snowballProgram.in_grouping_b(g_v, 97, 251))) {
					return false;
				}
				if (!r_RV()) {
					return false;
				}
				snowballProgram.cursor = snowballProgram.limit - v_11;
				snowballProgram.slice_del();
				return false;
		}

		return true;
	}

	function r_i_verb_suffix() {
		var among_var, v_1, v_2;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_pV) {
			return false;
		}
		snowballProgram.cursor = I_pV;
		v_2 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_1;
		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_5, 35);
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
				if (!(snowballProgram.out_grouping_b(g_v, 97, 251))) {
					snowballProgram.limit_backward = v_2;
					return false;
				}
				snowballProgram.slice_del();
				break;
		}
		snowballProgram.limit_backward = v_2;

		return true;
	}

	function r_verb_suffix() {
		var among_var, v_1, v_2, v_3;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_pV) {
			return false;
		}
		snowballProgram.cursor = I_pV;
		v_2 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_1;
		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_6, 38);
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
				if (!r_R2()) {
					snowballProgram.limit_backward = v_2;
					return false;
				}
				snowballProgram.slice_del();
				break;
			case 2 :
				snowballProgram.slice_del();
				break;
			case 3 :
				snowballProgram.slice_del();
				v_3 = snowballProgram.limit - snowballProgram.cursor;
				lab0 : do {
					snowballProgram.ket = snowballProgram.cursor;
					if (!(snowballProgram.eq_s_b(1, "e"))) {
						snowballProgram.cursor = snowballProgram.limit - v_3;
						break lab0;
					}
					snowballProgram.bra = snowballProgram.cursor;
					snowballProgram.slice_del();
				} while (false);
				break;
		}
		snowballProgram.limit_backward = v_2;

		return true;
	}

	function r_residual_suffix() {
		var among_var, v_1, v_2, v_3, v_4, v_5;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		lab0 : do {
			snowballProgram.ket = snowballProgram.cursor;
			if (!(snowballProgram.eq_s_b(1, "s"))) {
				snowballProgram.cursor = snowballProgram.limit - v_1;
				break lab0;
			}
			snowballProgram.bra = snowballProgram.cursor;
			v_2 = snowballProgram.limit - snowballProgram.cursor;
			if (!(snowballProgram.out_grouping_b(g_keep_with_s, 97, 232))) {
				snowballProgram.cursor = snowballProgram.limit - v_1;
				break lab0;
			}
			snowballProgram.cursor = snowballProgram.limit - v_2;
			snowballProgram.slice_del();
		} while (false);
		v_3 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_pV) {
			return false;
		}
		snowballProgram.cursor = I_pV;
		v_4 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_3;
		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_7, 7);
		if (among_var == 0) {
			snowballProgram.limit_backward = v_4;
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		switch (among_var) {
			case 0 :
				snowballProgram.limit_backward = v_4;
				return false;
			case 1 :
				if (!r_R2()) {
					snowballProgram.limit_backward = v_4;
					return false;
				}
				lab1 : do {
					v_5 = snowballProgram.limit - snowballProgram.cursor;
					lab2 : do {
						if (!(snowballProgram.eq_s_b(1, "s"))) {
							break lab2;
						}
						break lab1;
					} while (false);
					snowballProgram.cursor = snowballProgram.limit - v_5;
					if (!(snowballProgram.eq_s_b(1, "t"))) {
						snowballProgram.limit_backward = v_4;
						return false;
					}
				} while (false);
				snowballProgram.slice_del();
				break;
			case 2 :
				snowballProgram.slice_from("i");
				break;
			case 3 :
				snowballProgram.slice_del();
				break;
			case 4 :
				if (!(snowballProgram.eq_s_b(2, "gu"))) {
					snowballProgram.limit_backward = v_4;
					return false;
				}
				snowballProgram.slice_del();
				break;
		}
		snowballProgram.limit_backward = v_4;

		return true;
	}

	function r_un_double() {
		var v_1;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.find_among_b(a_8, 5) == 0) {
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

	function r_un_accent() {
		var v_3;
		var v_1 = 1;

		replab0 : while (true) {
			lab1 : do {
				if (!(snowballProgram.out_grouping_b(g_v, 97, 251))) {
					break lab1;
				}
				v_1--;
				continue replab0;
			} while (false);
			break replab0;
		}
		if (v_1 > 0) {
			return false;
		}
		snowballProgram.ket = snowballProgram.cursor;
		lab2 : do {
			v_3 = snowballProgram.limit - snowballProgram.cursor;
			lab3 : do {
				if (!(snowballProgram.eq_s_b(1, "\u00E9"))) {
					break lab3;
				}
				break lab2;
			} while (false);
			snowballProgram.cursor = snowballProgram.limit - v_3;
			if (!(snowballProgram.eq_s_b(1, "\u00E8"))) {
				return false;
			}
		} while (false);
		snowballProgram.bra = snowballProgram.cursor;
		snowballProgram.slice_from("e");

		return true;
	}

	this.stem = function() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10, v_11;

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
						lab7 : do {
							if (!r_i_verb_suffix()) {
								break lab7;
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
					lab8 : do {
						snowballProgram.ket = snowballProgram.cursor;
						lab9 : do {
							v_8 = snowballProgram.limit
									- snowballProgram.cursor;
							lab10 : do {
								if (!(snowballProgram.eq_s_b(1, "Y"))) {
									break lab10;
								}
								snowballProgram.bra = snowballProgram.cursor;
								snowballProgram.slice_from("i");
								break lab9;
							} while (false);
							snowballProgram.cursor = snowballProgram.limit
									- v_8;
							if (!(snowballProgram.eq_s_b(1, "\u00E7"))) {
								snowballProgram.cursor = snowballProgram.limit
										- v_7;
								break lab8;
							}
							snowballProgram.bra = snowballProgram.cursor;
							snowballProgram.slice_from("c");
						} while (false);
					} while (false);
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
		lab11 : do {
			if (!r_un_double()) {
				break lab11;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_9;
		v_10 = snowballProgram.limit - snowballProgram.cursor;
		lab12 : do {
			if (!r_un_accent()) {
				break lab12;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_10;
		snowballProgram.cursor = snowballProgram.limit_backward;
		v_11 = snowballProgram.cursor;
		lab13 : do {
			if (!r_postlude()) {
				break lab13;
			}
		} while (false);
		snowballProgram.cursor = v_11;

		return true;
	}
}