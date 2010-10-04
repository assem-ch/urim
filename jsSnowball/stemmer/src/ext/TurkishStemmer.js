function TurkishStemmer() {
	var a_0 = [new Among("m", -1, -1), new Among("n", -1, -1),
			new Among("miz", -1, -1), new Among("niz", -1, -1),
			new Among("muz", -1, -1), new Among("nuz", -1, -1),
			new Among("m\u00FCz", -1, -1), new Among("n\u00FCz", -1, -1),
			new Among("m\u0131z", -1, -1), new Among("n\u0131z", -1, -1)], a_1 = [
			new Among("leri", -1, -1), new Among("lar\u0131", -1, -1)], a_2 = [
			new Among("ni", -1, -1), new Among("nu", -1, -1),
			new Among("n\u00FC", -1, -1), new Among("n\u0131", -1, -1)], a_3 = [
			new Among("in", -1, -1), new Among("un", -1, -1),
			new Among("\u00FCn", -1, -1), new Among("\u0131n", -1, -1)], a_4 = [
			new Among("a", -1, -1), new Among("e", -1, -1)], a_5 = [
			new Among("na", -1, -1), new Among("ne", -1, -1)], a_6 = [
			new Among("da", -1, -1), new Among("ta", -1, -1),
			new Among("de", -1, -1), new Among("te", -1, -1)], a_7 = [
			new Among("nda", -1, -1), new Among("nde", -1, -1)], a_8 = [
			new Among("dan", -1, -1), new Among("tan", -1, -1),
			new Among("den", -1, -1), new Among("ten", -1, -1)], a_9 = [
			new Among("ndan", -1, -1), new Among("nden", -1, -1)], a_10 = [
			new Among("la", -1, -1), new Among("le", -1, -1)], a_11 = [
			new Among("ca", -1, -1), new Among("ce", -1, -1)], a_12 = [
			new Among("im", -1, -1), new Among("um", -1, -1),
			new Among("\u00FCm", -1, -1), new Among("\u0131m", -1, -1)], a_13 = [
			new Among("sin", -1, -1), new Among("sun", -1, -1),
			new Among("s\u00FCn", -1, -1), new Among("s\u0131n", -1, -1)], a_14 = [
			new Among("iz", -1, -1), new Among("uz", -1, -1),
			new Among("\u00FCz", -1, -1), new Among("\u0131z", -1, -1)], a_15 = [
			new Among("siniz", -1, -1), new Among("sunuz", -1, -1),
			new Among("s\u00FCn\u00FCz", -1, -1),
			new Among("s\u0131n\u0131z", -1, -1)], a_16 = [
			new Among("lar", -1, -1), new Among("ler", -1, -1)], a_17 = [
			new Among("niz", -1, -1), new Among("nuz", -1, -1),
			new Among("n\u00FCz", -1, -1), new Among("n\u0131z", -1, -1)], a_18 = [
			new Among("dir", -1, -1), new Among("tir", -1, -1),
			new Among("dur", -1, -1), new Among("tur", -1, -1),
			new Among("d\u00FCr", -1, -1), new Among("t\u00FCr", -1, -1),
			new Among("d\u0131r", -1, -1), new Among("t\u0131r", -1, -1)], a_19 = [
			new Among("cas\u0131na", -1, -1), new Among("cesine", -1, -1)], a_20 = [
			new Among("di", -1, -1), new Among("ti", -1, -1),
			new Among("dik", -1, -1), new Among("tik", -1, -1),
			new Among("duk", -1, -1), new Among("tuk", -1, -1),
			new Among("d\u00FCk", -1, -1), new Among("t\u00FCk", -1, -1),
			new Among("d\u0131k", -1, -1), new Among("t\u0131k", -1, -1),
			new Among("dim", -1, -1), new Among("tim", -1, -1),
			new Among("dum", -1, -1), new Among("tum", -1, -1),
			new Among("d\u00FCm", -1, -1), new Among("t\u00FCm", -1, -1),
			new Among("d\u0131m", -1, -1), new Among("t\u0131m", -1, -1),
			new Among("din", -1, -1), new Among("tin", -1, -1),
			new Among("dun", -1, -1), new Among("tun", -1, -1),
			new Among("d\u00FCn", -1, -1), new Among("t\u00FCn", -1, -1),
			new Among("d\u0131n", -1, -1), new Among("t\u0131n", -1, -1),
			new Among("du", -1, -1), new Among("tu", -1, -1),
			new Among("d\u00FC", -1, -1), new Among("t\u00FC", -1, -1),
			new Among("d\u0131", -1, -1), new Among("t\u0131", -1, -1)], a_21 = [
			new Among("sa", -1, -1), new Among("se", -1, -1),
			new Among("sak", -1, -1), new Among("sek", -1, -1),
			new Among("sam", -1, -1), new Among("sem", -1, -1),
			new Among("san", -1, -1), new Among("sen", -1, -1)], a_22 = [
			new Among("mi\u015F", -1, -1), new Among("mu\u015F", -1, -1),
			new Among("m\u00FC\u015F", -1, -1),
			new Among("m\u0131\u015F", -1, -1)], a_23 = [new Among("b", -1, 1),
			new Among("c", -1, 2), new Among("d", -1, 3),
			new Among("\u011F", -1, 4)], g_vowel = [17, 65, 16, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 8, 0, 0, 0, 0, 0, 0, 1], g_U = [
			1, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0,
			0, 0, 0, 1], g_vowel1 = [1, 64, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], g_vowel2 = [17, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130], g_vowel3 = [1, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 1], g_vowel4 = [17], g_vowel5 = [65], g_vowel6 = [65], B_c_s_n_s, I_strlen, sbp = new SnowballProgram();
	this.setCurrent = function(word) {
		sbp.setCurrent(word);
	};
	this.getCurrent = function() {
		return sbp.getCurrent();
	};
	function r_check_vowel_harmony() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10, v_11;
		v_1 = sbp.limit - sbp.cursor;
		golab0 : while (true) {
			v_2 = sbp.limit - sbp.cursor;
			lab1 : do {
				if (!(sbp.in_grouping_b(g_vowel, 97, 305))) {
					break lab1;
				}
				sbp.cursor = sbp.limit - v_2;
				break golab0;
			} while (false);
			sbp.cursor = sbp.limit - v_2;
			if (sbp.cursor <= sbp.limit_backward) {
				return false;
			}
			sbp.cursor--;
		}
		lab2 : do {
			v_3 = sbp.limit - sbp.cursor;
			lab3 : do {
				if (!(sbp.eq_s_b(1, "a"))) {
					break lab3;
				}
				golab4 : while (true) {
					v_4 = sbp.limit - sbp.cursor;
					lab5 : do {
						if (!(sbp.in_grouping_b(g_vowel1, 97, 305))) {
							break lab5;
						}
						sbp.cursor = sbp.limit - v_4;
						break golab4;
					} while (false);
					sbp.cursor = sbp.limit - v_4;
					if (sbp.cursor <= sbp.limit_backward) {
						break lab3;
					}
					sbp.cursor--;
				}
				break lab2;
			} while (false);
			sbp.cursor = sbp.limit - v_3;
			lab6 : do {
				if (!(sbp.eq_s_b(1, "e"))) {
					break lab6;
				}
				golab7 : while (true) {
					v_5 = sbp.limit - sbp.cursor;
					lab8 : do {
						if (!(sbp.in_grouping_b(g_vowel2, 101, 252))) {
							break lab8;
						}
						sbp.cursor = sbp.limit - v_5;
						break golab7;
					} while (false);
					sbp.cursor = sbp.limit - v_5;
					if (sbp.cursor <= sbp.limit_backward) {
						break lab6;
					}
					sbp.cursor--;
				}
				break lab2;
			} while (false);
			sbp.cursor = sbp.limit - v_3;
			lab9 : do {
				if (!(sbp.eq_s_b(1, "\u0131"))) {
					break lab9;
				}
				golab10 : while (true) {
					v_6 = sbp.limit - sbp.cursor;
					lab11 : do {
						if (!(sbp.in_grouping_b(g_vowel3, 97, 305))) {
							break lab11;
						}
						sbp.cursor = sbp.limit - v_6;
						break golab10;
					} while (false);
					sbp.cursor = sbp.limit - v_6;
					if (sbp.cursor <= sbp.limit_backward) {
						break lab9;
					}
					sbp.cursor--;
				}
				break lab2;
			} while (false);
			sbp.cursor = sbp.limit - v_3;
			lab12 : do {
				if (!(sbp.eq_s_b(1, "i"))) {
					break lab12;
				}
				golab13 : while (true) {
					v_7 = sbp.limit - sbp.cursor;
					lab14 : do {
						if (!(sbp.in_grouping_b(g_vowel4, 101, 105))) {
							break lab14;
						}
						sbp.cursor = sbp.limit - v_7;
						break golab13;
					} while (false);
					sbp.cursor = sbp.limit - v_7;
					if (sbp.cursor <= sbp.limit_backward) {
						break lab12;
					}
					sbp.cursor--;
				}
				break lab2;
			} while (false);
			sbp.cursor = sbp.limit - v_3;
			lab15 : do {
				if (!(sbp.eq_s_b(1, "o"))) {
					break lab15;
				}
				golab16 : while (true) {
					v_8 = sbp.limit - sbp.cursor;
					lab17 : do {
						if (!(sbp.in_grouping_b(g_vowel5, 111, 117))) {
							break lab17;
						}
						sbp.cursor = sbp.limit - v_8;
						break golab16;
					} while (false);
					sbp.cursor = sbp.limit - v_8;
					if (sbp.cursor <= sbp.limit_backward) {
						break lab15;
					}
					sbp.cursor--;
				}
				break lab2;
			} while (false);
			sbp.cursor = sbp.limit - v_3;
			lab18 : do {
				if (!(sbp.eq_s_b(1, "\u00F6"))) {
					break lab18;
				}
				golab19 : while (true) {
					v_9 = sbp.limit - sbp.cursor;
					lab20 : do {
						if (!(sbp.in_grouping_b(g_vowel6, 246, 252))) {
							break lab20;
						}
						sbp.cursor = sbp.limit - v_9;
						break golab19;
					} while (false);
					sbp.cursor = sbp.limit - v_9;
					if (sbp.cursor <= sbp.limit_backward) {
						break lab18;
					}
					sbp.cursor--;
				}
				break lab2;
			} while (false);
			sbp.cursor = sbp.limit - v_3;
			lab21 : do {
				if (!(sbp.eq_s_b(1, "u"))) {
					break lab21;
				}
				golab22 : while (true) {
					v_10 = sbp.limit - sbp.cursor;
					lab23 : do {
						if (!(sbp.in_grouping_b(g_vowel5, 111, 117))) {
							break lab23;
						}
						sbp.cursor = sbp.limit - v_10;
						break golab22;
					} while (false);
					sbp.cursor = sbp.limit - v_10;
					if (sbp.cursor <= sbp.limit_backward) {
						break lab21;
					}
					sbp.cursor--;
				}
				break lab2;
			} while (false);
			sbp.cursor = sbp.limit - v_3;
			if (!(sbp.eq_s_b(1, "\u00FC"))) {
				return false;
			}
			golab24 : while (true) {
				v_11 = sbp.limit - sbp.cursor;
				lab25 : do {
					if (!(sbp.in_grouping_b(g_vowel6, 246, 252))) {
						break lab25;
					}
					sbp.cursor = sbp.limit - v_11;
					break golab24;
				} while (false);
				sbp.cursor = sbp.limit - v_11;
				if (sbp.cursor <= sbp.limit_backward) {
					return false;
				}
				sbp.cursor--;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_1;
		return true;
	}
	function r_mark_suffix_with_optional_n_consonant() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7;
		lab0 : do {
			v_1 = sbp.limit - sbp.cursor;
			lab1 : do {
				v_2 = sbp.limit - sbp.cursor;
				if (!(sbp.eq_s_b(1, "n"))) {
					break lab1;
				}
				sbp.cursor = sbp.limit - v_2;
				if (sbp.cursor <= sbp.limit_backward) {
					break lab1;
				}
				sbp.cursor--;
				v_3 = sbp.limit - sbp.cursor;
				if (!(sbp.in_grouping_b(g_vowel, 97, 305))) {
					break lab1;
				}
				sbp.cursor = sbp.limit - v_3;
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			v_4 = sbp.limit - sbp.cursor;
			lab2 : do {
				v_5 = sbp.limit - sbp.cursor;
				if (!(sbp.eq_s_b(1, "n"))) {
					break lab2;
				}
				sbp.cursor = sbp.limit - v_5;
				return false;
			} while (false);
			sbp.cursor = sbp.limit - v_4;
			v_6 = sbp.limit - sbp.cursor;
			if (sbp.cursor <= sbp.limit_backward) {
				return false;
			}
			sbp.cursor--;
			v_7 = sbp.limit - sbp.cursor;
			if (!(sbp.in_grouping_b(g_vowel, 97, 305))) {
				return false;
			}
			sbp.cursor = sbp.limit - v_6;
		} while (false);
		return true;
	}
	function r_mark_suffix_with_optional_s_consonant() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7;
		lab0 : do {
			v_1 = sbp.limit - sbp.cursor;
			lab1 : do {
				v_2 = sbp.limit - sbp.cursor;
				if (!(sbp.eq_s_b(1, "s"))) {
					break lab1;
				}
				sbp.cursor = sbp.limit - v_2;
				if (sbp.cursor <= sbp.limit_backward) {
					break lab1;
				}
				sbp.cursor--;
				v_3 = sbp.limit - sbp.cursor;
				if (!(sbp.in_grouping_b(g_vowel, 97, 305))) {
					break lab1;
				}
				sbp.cursor = sbp.limit - v_3;
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			v_4 = sbp.limit - sbp.cursor;
			lab2 : do {
				v_5 = sbp.limit - sbp.cursor;
				if (!(sbp.eq_s_b(1, "s"))) {
					break lab2;
				}
				sbp.cursor = sbp.limit - v_5;
				return false;
			} while (false);
			sbp.cursor = sbp.limit - v_4;
			v_6 = sbp.limit - sbp.cursor;
			if (sbp.cursor <= sbp.limit_backward) {
				return false;
			}
			sbp.cursor--;
			v_7 = sbp.limit - sbp.cursor;
			if (!(sbp.in_grouping_b(g_vowel, 97, 305))) {
				return false;
			}
			sbp.cursor = sbp.limit - v_6;
		} while (false);
		return true;
	}
	function r_mark_suffix_with_optional_y_consonant() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7;
		lab0 : do {
			v_1 = sbp.limit - sbp.cursor;
			lab1 : do {
				v_2 = sbp.limit - sbp.cursor;
				if (!(sbp.eq_s_b(1, "y"))) {
					break lab1;
				}
				sbp.cursor = sbp.limit - v_2;
				if (sbp.cursor <= sbp.limit_backward) {
					break lab1;
				}
				sbp.cursor--;
				v_3 = sbp.limit - sbp.cursor;
				if (!(sbp.in_grouping_b(g_vowel, 97, 305))) {
					break lab1;
				}
				sbp.cursor = sbp.limit - v_3;
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			v_4 = sbp.limit - sbp.cursor;
			lab2 : do {
				v_5 = sbp.limit - sbp.cursor;
				if (!(sbp.eq_s_b(1, "y"))) {
					break lab2;
				}
				sbp.cursor = sbp.limit - v_5;
				return false;
			} while (false);
			sbp.cursor = sbp.limit - v_4;
			v_6 = sbp.limit - sbp.cursor;
			if (sbp.cursor <= sbp.limit_backward) {
				return false;
			}
			sbp.cursor--;
			v_7 = sbp.limit - sbp.cursor;
			if (!(sbp.in_grouping_b(g_vowel, 97, 305))) {
				return false;
			}
			sbp.cursor = sbp.limit - v_6;
		} while (false);
		return true;
	}
	function r_mark_suffix_with_optional_U_vowel() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7;
		lab0 : do {
			v_1 = sbp.limit - sbp.cursor;
			lab1 : do {
				v_2 = sbp.limit - sbp.cursor;
				if (!(sbp.in_grouping_b(g_U, 105, 305))) {
					break lab1;
				}
				sbp.cursor = sbp.limit - v_2;
				if (sbp.cursor <= sbp.limit_backward) {
					break lab1;
				}
				sbp.cursor--;
				v_3 = sbp.limit - sbp.cursor;
				if (!(sbp.out_grouping_b(g_vowel, 97, 305))) {
					break lab1;
				}
				sbp.cursor = sbp.limit - v_3;
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			v_4 = sbp.limit - sbp.cursor;
			lab2 : do {
				v_5 = sbp.limit - sbp.cursor;
				if (!(sbp.in_grouping_b(g_U, 105, 305))) {
					break lab2;
				}
				sbp.cursor = sbp.limit - v_5;
				return false;
			} while (false);
			sbp.cursor = sbp.limit - v_4;
			v_6 = sbp.limit - sbp.cursor;
			if (sbp.cursor <= sbp.limit_backward) {
				return false;
			}
			sbp.cursor--;
			v_7 = sbp.limit - sbp.cursor;
			if (!(sbp.out_grouping_b(g_vowel, 97, 305))) {
				return false;
			}
			sbp.cursor = sbp.limit - v_6;
		} while (false);
		return true;
	}
	function r_mark_possessives() {
		return sbp.find_among_b(a_0, 10)
				&& r_mark_suffix_with_optional_U_vowel();
	}
	function r_mark_sU() {
		return r_check_vowel_harmony() && sbp.in_grouping_b(g_U, 105, 305)
				&& r_mark_suffix_with_optional_s_consonant();
	}
	function r_mark_lArI() {
		return sbp.find_among_b(a_1, 2);
	}
	function r_mark_yU() {
		return r_check_vowel_harmony() && sbp.in_grouping_b(g_U, 105, 305)
				&& r_mark_suffix_with_optional_y_consonant();
	}
	function r_mark_nU() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_2, 4);
	}
	function r_mark_nUn() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_3, 4)
				&& r_mark_suffix_with_optional_n_consonant();
	}
	function r_mark_yA() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_4, 2)
				&& r_mark_suffix_with_optional_y_consonant();
	}
	function r_mark_nA() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_5, 2);
	}
	function r_mark_DA() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_6, 4);
	}
	function r_mark_ndA() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_7, 2);
	}
	function r_mark_DAn() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_8, 4);
	}
	function r_mark_ndAn() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_9, 2);
	}
	function r_mark_ylA() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_10, 2)
				&& r_mark_suffix_with_optional_y_consonant();
	}
	function r_mark_ki() {
		return sbp.eq_s_b(2, "ki");
	}
	function r_mark_ncA() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_11, 2)
				&& r_mark_suffix_with_optional_n_consonant();
	}
	function r_mark_yUm() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_12, 4)
				&& r_mark_suffix_with_optional_y_consonant();
	}
	function r_mark_sUn() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_13, 4);
	}
	function r_mark_yUz() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_14, 4)
				&& r_mark_suffix_with_optional_y_consonant();
	}
	function r_mark_sUnUz() {
		return sbp.find_among_b(a_15, 4);
	}
	function r_mark_lAr() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_16, 2);
	}
	function r_mark_nUz() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_17, 4);
	}
	function r_mark_DUr() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_18, 8);
	}
	function r_mark_cAsInA() {
		return sbp.find_among_b(a_19, 2);
	}
	function r_mark_yDU() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_20, 32)
				&& r_mark_suffix_with_optional_y_consonant();
	}
	function r_mark_ysA() {
		return sbp.find_among_b(a_21, 8)
				&& r_mark_suffix_with_optional_y_consonant();
	}
	function r_mark_ymUs_() {
		return r_check_vowel_harmony() && sbp.find_among_b(a_22, 4)
				&& r_mark_suffix_with_optional_y_consonant();
	}
	function r_mark_yken() {
		return sbp.eq_s_b(3, "ken")
				&& r_mark_suffix_with_optional_y_consonant();
	}
	function r_stem_nominal_verb_suffixes() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10;
		sbp.ket = sbp.cursor;
		B_c_s_n_s = true;
		lab0 : do {
			v_1 = sbp.limit - sbp.cursor;
			lab1 : do {
				lab2 : do {
					v_2 = sbp.limit - sbp.cursor;
					lab3 : do {
						if (!r_mark_ymUs_()) {
							break lab3;
						}
						break lab2;
					} while (false);
					sbp.cursor = sbp.limit - v_2;
					lab4 : do {
						if (!r_mark_yDU()) {
							break lab4;
						}
						break lab2;
					} while (false);
					sbp.cursor = sbp.limit - v_2;
					lab5 : do {
						if (!r_mark_ysA()) {
							break lab5;
						}
						break lab2;
					} while (false);
					sbp.cursor = sbp.limit - v_2;
					if (!r_mark_yken()) {
						break lab1;
					}
				} while (false);
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			lab6 : do {
				if (!r_mark_cAsInA()) {
					break lab6;
				}
				lab7 : do {
					v_3 = sbp.limit - sbp.cursor;
					lab8 : do {
						if (!r_mark_sUnUz()) {
							break lab8;
						}
						break lab7;
					} while (false);
					sbp.cursor = sbp.limit - v_3;
					lab9 : do {
						if (!r_mark_lAr()) {
							break lab9;
						}
						break lab7;
					} while (false);
					sbp.cursor = sbp.limit - v_3;
					lab10 : do {
						if (!r_mark_yUm()) {
							break lab10;
						}
						break lab7;
					} while (false);
					sbp.cursor = sbp.limit - v_3;
					lab11 : do {
						if (!r_mark_sUn()) {
							break lab11;
						}
						break lab7;
					} while (false);
					sbp.cursor = sbp.limit - v_3;
					lab12 : do {
						if (!r_mark_yUz()) {
							break lab12;
						}
						break lab7;
					} while (false);
					sbp.cursor = sbp.limit - v_3;
				} while (false);
				if (!r_mark_ymUs_()) {
					break lab6;
				}
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			lab13 : do {
				if (!r_mark_lAr()) {
					break lab13;
				}
				sbp.bra = sbp.cursor;
				sbp.slice_del();
				v_4 = sbp.limit - sbp.cursor;
				lab14 : do {
					sbp.ket = sbp.cursor;
					lab15 : do {
						v_5 = sbp.limit - sbp.cursor;
						lab16 : do {
							if (!r_mark_DUr()) {
								break lab16;
							}
							break lab15;
						} while (false);
						sbp.cursor = sbp.limit - v_5;
						lab17 : do {
							if (!r_mark_yDU()) {
								break lab17;
							}
							break lab15;
						} while (false);
						sbp.cursor = sbp.limit - v_5;
						lab18 : do {
							if (!r_mark_ysA()) {
								break lab18;
							}
							break lab15;
						} while (false);
						sbp.cursor = sbp.limit - v_5;
						if (!r_mark_ymUs_()) {
							sbp.cursor = sbp.limit - v_4;
							break lab14;
						}
					} while (false);
				} while (false);
				B_c_s_n_s = false;
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			lab19 : do {
				if (!r_mark_nUz()) {
					break lab19;
				}
				lab20 : do {
					v_6 = sbp.limit - sbp.cursor;
					lab21 : do {
						if (!r_mark_yDU()) {
							break lab21;
						}
						break lab20;
					} while (false);
					sbp.cursor = sbp.limit - v_6;
					if (!r_mark_ysA()) {
						break lab19;
					}
				} while (false);
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			lab22 : do {
				lab23 : do {
					v_7 = sbp.limit - sbp.cursor;
					lab24 : do {
						if (!r_mark_sUnUz()) {
							break lab24;
						}
						break lab23;
					} while (false);
					sbp.cursor = sbp.limit - v_7;
					lab25 : do {
						if (!r_mark_yUz()) {
							break lab25;
						}
						break lab23;
					} while (false);
					sbp.cursor = sbp.limit - v_7;
					lab26 : do {
						if (!r_mark_sUn()) {
							break lab26;
						}
						break lab23;
					} while (false);
					sbp.cursor = sbp.limit - v_7;
					if (!r_mark_yUm()) {
						break lab22;
					}
				} while (false);
				sbp.bra = sbp.cursor;
				sbp.slice_del();
				v_8 = sbp.limit - sbp.cursor;
				lab27 : do {
					sbp.ket = sbp.cursor;
					if (!r_mark_ymUs_()) {
						sbp.cursor = sbp.limit - v_8;
						break lab27;
					}
				} while (false);
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			if (!r_mark_DUr()) {
				return false;
			}
			sbp.bra = sbp.cursor;
			sbp.slice_del();
			v_9 = sbp.limit - sbp.cursor;
			lab28 : do {
				sbp.ket = sbp.cursor;
				lab29 : do {
					v_10 = sbp.limit - sbp.cursor;
					lab30 : do {
						if (!r_mark_sUnUz()) {
							break lab30;
						}
						break lab29;
					} while (false);
					sbp.cursor = sbp.limit - v_10;
					lab31 : do {
						if (!r_mark_lAr()) {
							break lab31;
						}
						break lab29;
					} while (false);
					sbp.cursor = sbp.limit - v_10;
					lab32 : do {
						if (!r_mark_yUm()) {
							break lab32;
						}
						break lab29;
					} while (false);
					sbp.cursor = sbp.limit - v_10;
					lab33 : do {
						if (!r_mark_sUn()) {
							break lab33;
						}
						break lab29;
					} while (false);
					sbp.cursor = sbp.limit - v_10;
					lab34 : do {
						if (!r_mark_yUz()) {
							break lab34;
						}
						break lab29;
					} while (false);
					sbp.cursor = sbp.limit - v_10;
				} while (false);
				if (!r_mark_ymUs_()) {
					sbp.cursor = sbp.limit - v_9;
					break lab28;
				}
			} while (false);
		} while (false);
		sbp.bra = sbp.cursor;
		sbp.slice_del();
		return true;
	}
	function r_stem_suffix_chain_before_ki() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10, v_11;
		sbp.ket = sbp.cursor;
		if (!r_mark_ki()) {
			return false;
		}
		lab0 : do {
			v_1 = sbp.limit - sbp.cursor;
			lab1 : do {
				if (!r_mark_DA()) {
					break lab1;
				}
				sbp.bra = sbp.cursor;
				sbp.slice_del();
				v_2 = sbp.limit - sbp.cursor;
				lab2 : do {
					sbp.ket = sbp.cursor;
					lab3 : do {
						v_3 = sbp.limit - sbp.cursor;
						lab4 : do {
							if (!r_mark_lAr()) {
								break lab4;
							}
							sbp.bra = sbp.cursor;
							sbp.slice_del();
							v_4 = sbp.limit - sbp.cursor;
							lab5 : do {
								if (!r_stem_suffix_chain_before_ki()) {
									sbp.cursor = sbp.limit - v_4;
									break lab5;
								}
							} while (false);
							break lab3;
						} while (false);
						sbp.cursor = sbp.limit - v_3;
						if (!r_mark_possessives()) {
							sbp.cursor = sbp.limit - v_2;
							break lab2;
						}
						sbp.bra = sbp.cursor;
						sbp.slice_del();
						v_5 = sbp.limit - sbp.cursor;
						lab6 : do {
							sbp.ket = sbp.cursor;
							if (!r_mark_lAr()) {
								sbp.cursor = sbp.limit - v_5;
								break lab6;
							}
							sbp.bra = sbp.cursor;
							sbp.slice_del();
							if (!r_stem_suffix_chain_before_ki()) {
								sbp.cursor = sbp.limit - v_5;
								break lab6;
							}
						} while (false);
					} while (false);
				} while (false);
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			lab7 : do {
				if (!r_mark_nUn()) {
					break lab7;
				}
				sbp.bra = sbp.cursor;
				sbp.slice_del();
				v_6 = sbp.limit - sbp.cursor;
				lab8 : do {
					sbp.ket = sbp.cursor;
					lab9 : do {
						v_7 = sbp.limit - sbp.cursor;
						lab10 : do {
							if (!r_mark_lArI()) {
								break lab10;
							}
							sbp.bra = sbp.cursor;
							sbp.slice_del();
							break lab9;
						} while (false);
						sbp.cursor = sbp.limit - v_7;
						lab11 : do {
							sbp.ket = sbp.cursor;
							lab12 : do {
								v_8 = sbp.limit - sbp.cursor;
								lab13 : do {
									if (!r_mark_possessives()) {
										break lab13;
									}
									break lab12;
								} while (false);
								sbp.cursor = sbp.limit - v_8;
								if (!r_mark_sU()) {
									break lab11;
								}
							} while (false);
							sbp.bra = sbp.cursor;
							sbp.slice_del();
							v_9 = sbp.limit - sbp.cursor;
							lab14 : do {
								sbp.ket = sbp.cursor;
								if (!r_mark_lAr()) {
									sbp.cursor = sbp.limit - v_9;
									break lab14;
								}
								sbp.bra = sbp.cursor;
								sbp.slice_del();
								if (!r_stem_suffix_chain_before_ki()) {
									sbp.cursor = sbp.limit - v_9;
									break lab14;
								}
							} while (false);
							break lab9;
						} while (false);
						sbp.cursor = sbp.limit - v_7;
						if (!r_stem_suffix_chain_before_ki()) {
							sbp.cursor = sbp.limit - v_6;
							break lab8;
						}
					} while (false);
				} while (false);
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			if (!r_mark_ndA()) {
				return false;
			}
			lab15 : do {
				v_10 = sbp.limit - sbp.cursor;
				lab16 : do {
					if (!r_mark_lArI()) {
						break lab16;
					}
					sbp.bra = sbp.cursor;
					sbp.slice_del();
					break lab15;
				} while (false);
				sbp.cursor = sbp.limit - v_10;
				lab17 : do {
					if (!r_mark_sU()) {
						break lab17;
					}
					sbp.bra = sbp.cursor;
					sbp.slice_del();
					v_11 = sbp.limit - sbp.cursor;
					lab18 : do {
						sbp.ket = sbp.cursor;
						if (!r_mark_lAr()) {
							sbp.cursor = sbp.limit - v_11;
							break lab18;
						}
						sbp.bra = sbp.cursor;
						sbp.slice_del();
						if (!r_stem_suffix_chain_before_ki()) {
							sbp.cursor = sbp.limit - v_11;
							break lab18;
						}
					} while (false);
					break lab15;
				} while (false);
				sbp.cursor = sbp.limit - v_10;
				if (!r_stem_suffix_chain_before_ki()) {
					return false;
				}
			} while (false);
		} while (false);
		return true;
	}
	function r_stem_noun_suffixes() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10, v_11, v_12, v_13, v_14, v_15, v_16, v_17, v_18, v_19, v_20, v_21, v_22, v_23, v_24, v_25, v_26, v_27;
		lab0 : do {
			v_1 = sbp.limit - sbp.cursor;
			lab1 : do {
				sbp.ket = sbp.cursor;
				if (!r_mark_lAr()) {
					break lab1;
				}
				sbp.bra = sbp.cursor;
				sbp.slice_del();
				v_2 = sbp.limit - sbp.cursor;
				lab2 : do {
					if (!r_stem_suffix_chain_before_ki()) {
						sbp.cursor = sbp.limit - v_2;
						break lab2;
					}
				} while (false);
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			lab3 : do {
				sbp.ket = sbp.cursor;
				if (!r_mark_ncA()) {
					break lab3;
				}
				sbp.bra = sbp.cursor;
				sbp.slice_del();
				v_3 = sbp.limit - sbp.cursor;
				lab4 : do {
					lab5 : do {
						v_4 = sbp.limit - sbp.cursor;
						lab6 : do {
							sbp.ket = sbp.cursor;
							if (!r_mark_lArI()) {
								break lab6;
							}
							sbp.bra = sbp.cursor;
							sbp.slice_del();
							break lab5;
						} while (false);
						sbp.cursor = sbp.limit - v_4;
						lab7 : do {
							sbp.ket = sbp.cursor;
							lab8 : do {
								v_5 = sbp.limit - sbp.cursor;
								lab9 : do {
									if (!r_mark_possessives()) {
										break lab9;
									}
									break lab8;
								} while (false);
								sbp.cursor = sbp.limit - v_5;
								if (!r_mark_sU()) {
									break lab7;
								}
							} while (false);
							sbp.bra = sbp.cursor;
							sbp.slice_del();
							v_6 = sbp.limit - sbp.cursor;
							lab10 : do {
								sbp.ket = sbp.cursor;
								if (!r_mark_lAr()) {
									sbp.cursor = sbp.limit - v_6;
									break lab10;
								}
								sbp.bra = sbp.cursor;
								sbp.slice_del();
								if (!r_stem_suffix_chain_before_ki()) {
									sbp.cursor = sbp.limit - v_6;
									break lab10;
								}
							} while (false);
							break lab5;
						} while (false);
						sbp.cursor = sbp.limit - v_4;
						sbp.ket = sbp.cursor;
						if (!r_mark_lAr()) {
							sbp.cursor = sbp.limit - v_3;
							break lab4;
						}
						sbp.bra = sbp.cursor;
						sbp.slice_del();
						if (!r_stem_suffix_chain_before_ki()) {
							sbp.cursor = sbp.limit - v_3;
							break lab4;
						}
					} while (false);
				} while (false);
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			lab11 : do {
				sbp.ket = sbp.cursor;
				lab12 : do {
					v_7 = sbp.limit - sbp.cursor;
					lab13 : do {
						if (!r_mark_ndA()) {
							break lab13;
						}
						break lab12;
					} while (false);
					sbp.cursor = sbp.limit - v_7;
					if (!r_mark_nA()) {
						break lab11;
					}
				} while (false);
				lab14 : do {
					v_8 = sbp.limit - sbp.cursor;
					lab15 : do {
						if (!r_mark_lArI()) {
							break lab15;
						}
						sbp.bra = sbp.cursor;
						sbp.slice_del();
						break lab14;
					} while (false);
					sbp.cursor = sbp.limit - v_8;
					lab16 : do {
						if (!r_mark_sU()) {
							break lab16;
						}
						sbp.bra = sbp.cursor;
						sbp.slice_del();
						v_9 = sbp.limit - sbp.cursor;
						lab17 : do {
							sbp.ket = sbp.cursor;
							if (!r_mark_lAr()) {
								sbp.cursor = sbp.limit - v_9;
								break lab17;
							}
							sbp.bra = sbp.cursor;
							sbp.slice_del();
							if (!r_stem_suffix_chain_before_ki()) {
								sbp.cursor = sbp.limit - v_9;
								break lab17;
							}
						} while (false);
						break lab14;
					} while (false);
					sbp.cursor = sbp.limit - v_8;
					if (!r_stem_suffix_chain_before_ki()) {
						break lab11;
					}
				} while (false);
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			lab18 : do {
				sbp.ket = sbp.cursor;
				lab19 : do {
					v_10 = sbp.limit - sbp.cursor;
					lab20 : do {
						if (!r_mark_ndAn()) {
							break lab20;
						}
						break lab19;
					} while (false);
					sbp.cursor = sbp.limit - v_10;
					if (!r_mark_nU()) {
						break lab18;
					}
				} while (false);
				lab21 : do {
					v_11 = sbp.limit - sbp.cursor;
					lab22 : do {
						if (!r_mark_sU()) {
							break lab22;
						}
						sbp.bra = sbp.cursor;
						sbp.slice_del();
						v_12 = sbp.limit - sbp.cursor;
						lab23 : do {
							sbp.ket = sbp.cursor;
							if (!r_mark_lAr()) {
								sbp.cursor = sbp.limit - v_12;
								break lab23;
							}
							sbp.bra = sbp.cursor;
							sbp.slice_del();
							if (!r_stem_suffix_chain_before_ki()) {
								sbp.cursor = sbp.limit - v_12;
								break lab23;
							}
						} while (false);
						break lab21;
					} while (false);
					sbp.cursor = sbp.limit - v_11;
					if (!r_mark_lArI()) {
						break lab18;
					}
				} while (false);
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			lab24 : do {
				sbp.ket = sbp.cursor;
				if (!r_mark_DAn()) {
					break lab24;
				}
				sbp.bra = sbp.cursor;
				sbp.slice_del();
				v_13 = sbp.limit - sbp.cursor;
				lab25 : do {
					sbp.ket = sbp.cursor;
					lab26 : do {
						v_14 = sbp.limit - sbp.cursor;
						lab27 : do {
							if (!r_mark_possessives()) {
								break lab27;
							}
							sbp.bra = sbp.cursor;
							sbp.slice_del();
							v_15 = sbp.limit - sbp.cursor;
							lab28 : do {
								sbp.ket = sbp.cursor;
								if (!r_mark_lAr()) {
									sbp.cursor = sbp.limit - v_15;
									break lab28;
								}
								sbp.bra = sbp.cursor;
								sbp.slice_del();
								if (!r_stem_suffix_chain_before_ki()) {
									sbp.cursor = sbp.limit - v_15;
									break lab28;
								}
							} while (false);
							break lab26;
						} while (false);
						sbp.cursor = sbp.limit - v_14;
						lab29 : do {
							if (!r_mark_lAr()) {
								break lab29;
							}
							sbp.bra = sbp.cursor;
							sbp.slice_del();
							v_16 = sbp.limit - sbp.cursor;
							lab30 : do {
								if (!r_stem_suffix_chain_before_ki()) {
									sbp.cursor = sbp.limit - v_16;
									break lab30;
								}
							} while (false);
							break lab26;
						} while (false);
						sbp.cursor = sbp.limit - v_14;
						if (!r_stem_suffix_chain_before_ki()) {
							sbp.cursor = sbp.limit - v_13;
							break lab25;
						}
					} while (false);
				} while (false);
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			lab31 : do {
				sbp.ket = sbp.cursor;
				lab32 : do {
					v_17 = sbp.limit - sbp.cursor;
					lab33 : do {
						if (!r_mark_nUn()) {
							break lab33;
						}
						break lab32;
					} while (false);
					sbp.cursor = sbp.limit - v_17;
					if (!r_mark_ylA()) {
						break lab31;
					}
				} while (false);
				sbp.bra = sbp.cursor;
				sbp.slice_del();
				v_18 = sbp.limit - sbp.cursor;
				lab34 : do {
					lab35 : do {
						v_19 = sbp.limit - sbp.cursor;
						lab36 : do {
							sbp.ket = sbp.cursor;
							if (!r_mark_lAr()) {
								break lab36;
							}
							sbp.bra = sbp.cursor;
							sbp.slice_del();
							if (!r_stem_suffix_chain_before_ki()) {
								break lab36;
							}
							break lab35;
						} while (false);
						sbp.cursor = sbp.limit - v_19;
						lab37 : do {
							sbp.ket = sbp.cursor;
							lab38 : do {
								v_20 = sbp.limit - sbp.cursor;
								lab39 : do {
									if (!r_mark_possessives()) {
										break lab39;
									}
									break lab38;
								} while (false);
								sbp.cursor = sbp.limit - v_20;
								if (!r_mark_sU()) {
									break lab37;
								}
							} while (false);
							sbp.bra = sbp.cursor;
							sbp.slice_del();
							v_21 = sbp.limit - sbp.cursor;
							lab40 : do {
								sbp.ket = sbp.cursor;
								if (!r_mark_lAr()) {
									sbp.cursor = sbp.limit - v_21;
									break lab40;
								}
								sbp.bra = sbp.cursor;
								sbp.slice_del();
								if (!r_stem_suffix_chain_before_ki()) {
									sbp.cursor = sbp.limit - v_21;
									break lab40;
								}
							} while (false);
							break lab35;
						} while (false);
						sbp.cursor = sbp.limit - v_19;
						if (!r_stem_suffix_chain_before_ki()) {
							sbp.cursor = sbp.limit - v_18;
							break lab34;
						}
					} while (false);
				} while (false);
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			lab41 : do {
				sbp.ket = sbp.cursor;
				if (!r_mark_lArI()) {
					break lab41;
				}
				sbp.bra = sbp.cursor;
				sbp.slice_del();
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			lab42 : do {
				if (!r_stem_suffix_chain_before_ki()) {
					break lab42;
				}
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			lab43 : do {
				sbp.ket = sbp.cursor;
				lab44 : do {
					v_22 = sbp.limit - sbp.cursor;
					lab45 : do {
						if (!r_mark_DA()) {
							break lab45;
						}
						break lab44;
					} while (false);
					sbp.cursor = sbp.limit - v_22;
					lab46 : do {
						if (!r_mark_yU()) {
							break lab46;
						}
						break lab44;
					} while (false);
					sbp.cursor = sbp.limit - v_22;
					if (!r_mark_yA()) {
						break lab43;
					}
				} while (false);
				sbp.bra = sbp.cursor;
				sbp.slice_del();
				v_23 = sbp.limit - sbp.cursor;
				lab47 : do {
					sbp.ket = sbp.cursor;
					lab48 : do {
						v_24 = sbp.limit - sbp.cursor;
						lab49 : do {
							if (!r_mark_possessives()) {
								break lab49;
							}
							sbp.bra = sbp.cursor;
							sbp.slice_del();
							v_25 = sbp.limit - sbp.cursor;
							lab50 : do {
								sbp.ket = sbp.cursor;
								if (!r_mark_lAr()) {
									sbp.cursor = sbp.limit - v_25;
									break lab50;
								}
							} while (false);
							break lab48;
						} while (false);
						sbp.cursor = sbp.limit - v_24;
						if (!r_mark_lAr()) {
							sbp.cursor = sbp.limit - v_23;
							break lab47;
						}
					} while (false);
					sbp.bra = sbp.cursor;
					sbp.slice_del();
					sbp.ket = sbp.cursor;
					if (!r_stem_suffix_chain_before_ki()) {
						sbp.cursor = sbp.limit - v_23;
						break lab47;
					}
				} while (false);
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			sbp.ket = sbp.cursor;
			lab51 : do {
				v_26 = sbp.limit - sbp.cursor;
				lab52 : do {
					if (!r_mark_possessives()) {
						break lab52;
					}
					break lab51;
				} while (false);
				sbp.cursor = sbp.limit - v_26;
				if (!r_mark_sU()) {
					return false;
				}
			} while (false);
			sbp.bra = sbp.cursor;
			sbp.slice_del();
			v_27 = sbp.limit - sbp.cursor;
			lab53 : do {
				sbp.ket = sbp.cursor;
				if (!r_mark_lAr()) {
					sbp.cursor = sbp.limit - v_27;
					break lab53;
				}
				sbp.bra = sbp.cursor;
				sbp.slice_del();
				if (!r_stem_suffix_chain_before_ki()) {
					sbp.cursor = sbp.limit - v_27;
					break lab53;
				}
			} while (false);
		} while (false);
		return true;
	}
	function r_post_process_last_consonants() {
		var among_var;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_23, 4);
		if (among_var == 0) {
			return false;
		}
		sbp.bra = sbp.cursor;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				sbp.slice_from("p");
				break;
			case 2 :
				sbp.slice_from("\u00E7");
				break;
			case 3 :
				sbp.slice_from("t");
				break;
			case 4 :
				sbp.slice_from("k");
				break;
		}
		return true;
	}
	function r_append_U_to_stems_ending_with_d_or_g() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10, v_11, v_12, v_13, v_14, v_15;
		v_1 = sbp.limit - sbp.cursor;
		lab0 : do {
			v_2 = sbp.limit - sbp.cursor;
			lab1 : do {
				if (!(sbp.eq_s_b(1, "d"))) {
					break lab1;
				}
				break lab0;
			} while (false);
			sbp.cursor = sbp.limit - v_2;
			if (!(sbp.eq_s_b(1, "g"))) {
				return false;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_1;
		lab2 : do {
			v_3 = sbp.limit - sbp.cursor;
			lab3 : do {
				v_4 = sbp.limit - sbp.cursor;
				golab4 : while (true) {
					v_5 = sbp.limit - sbp.cursor;
					lab5 : do {
						if (!(sbp.in_grouping_b(g_vowel, 97, 305))) {
							break lab5;
						}
						sbp.cursor = sbp.limit - v_5;
						break golab4;
					} while (false);
					sbp.cursor = sbp.limit - v_5;
					if (sbp.cursor <= sbp.limit_backward) {
						break lab3;
					}
					sbp.cursor--;
				}
				lab6 : do {
					v_6 = sbp.limit - sbp.cursor;
					lab7 : do {
						if (!(sbp.eq_s_b(1, "a"))) {
							break lab7;
						}
						break lab6;
					} while (false);
					sbp.cursor = sbp.limit - v_6;
					if (!(sbp.eq_s_b(1, "\u0131"))) {
						break lab3;
					}
				} while (false);
				sbp.cursor = sbp.limit - v_4;
				var c = sbp.cursor;
				sbp.insert(sbp.cursor, sbp.cursor, "\u0131");
				sbp.cursor = c;
				break lab2;
			} while (false);
			sbp.cursor = sbp.limit - v_3;
			lab8 : do {
				v_7 = sbp.limit - sbp.cursor;
				golab9 : while (true) {
					v_8 = sbp.limit - sbp.cursor;
					lab10 : do {
						if (!(sbp.in_grouping_b(g_vowel, 97, 305))) {
							break lab10;
						}
						sbp.cursor = sbp.limit - v_8;
						break golab9;
					} while (false);
					sbp.cursor = sbp.limit - v_8;
					if (sbp.cursor <= sbp.limit_backward) {
						break lab8;
					}
					sbp.cursor--;
				}
				lab11 : do {
					v_9 = sbp.limit - sbp.cursor;
					lab12 : do {
						if (!(sbp.eq_s_b(1, "e"))) {
							break lab12;
						}
						break lab11;
					} while (false);
					sbp.cursor = sbp.limit - v_9;
					if (!(sbp.eq_s_b(1, "i"))) {
						break lab8;
					}
				} while (false);
				sbp.cursor = sbp.limit - v_7;
				var c = sbp.cursor;
				sbp.insert(sbp.cursor, sbp.cursor, "i");
				sbp.cursor = c;
				break lab2;
			} while (false);
			sbp.cursor = sbp.limit - v_3;
			lab13 : do {
				v_10 = sbp.limit - sbp.cursor;
				golab14 : while (true) {
					v_11 = sbp.limit - sbp.cursor;
					lab15 : do {
						if (!(sbp.in_grouping_b(g_vowel, 97, 305))) {
							break lab15;
						}
						sbp.cursor = sbp.limit - v_11;
						break golab14;
					} while (false);
					sbp.cursor = sbp.limit - v_11;
					if (sbp.cursor <= sbp.limit_backward) {
						break lab13;
					}
					sbp.cursor--;
				}
				lab16 : do {
					v_12 = sbp.limit - sbp.cursor;
					lab17 : do {
						if (!(sbp.eq_s_b(1, "o"))) {
							break lab17;
						}
						break lab16;
					} while (false);
					sbp.cursor = sbp.limit - v_12;
					if (!(sbp.eq_s_b(1, "u"))) {
						break lab13;
					}
				} while (false);
				sbp.cursor = sbp.limit - v_10;
				var c = sbp.cursor;
				sbp.insert(sbp.cursor, sbp.cursor, "u");
				sbp.cursor = c;
				break lab2;
			} while (false);
			sbp.cursor = sbp.limit - v_3;
			v_13 = sbp.limit - sbp.cursor;
			golab18 : while (true) {
				v_14 = sbp.limit - sbp.cursor;
				lab19 : do {
					if (!(sbp.in_grouping_b(g_vowel, 97, 305))) {
						break lab19;
					}
					sbp.cursor = sbp.limit - v_14;
					break golab18;
				} while (false);
				sbp.cursor = sbp.limit - v_14;
				if (sbp.cursor <= sbp.limit_backward) {
					return false;
				}
				sbp.cursor--;
			}
			lab20 : do {
				v_15 = sbp.limit - sbp.cursor;
				lab21 : do {
					if (!(sbp.eq_s_b(1, "\u00F6"))) {
						break lab21;
					}
					break lab20;
				} while (false);
				sbp.cursor = sbp.limit - v_15;
				if (!(sbp.eq_s_b(1, "\u00FC"))) {
					return false;
				}
			} while (false);
			sbp.cursor = sbp.limit - v_13;
			var c = sbp.cursor;
			sbp.insert(sbp.cursor, sbp.cursor, "\u00FC");
			sbp.cursor = c;
		} while (false);
		return true;
	}
	function r_more_than_one_syllable_word() {
		var v_1, v_3;
		v_1 = sbp.cursor;
		var v_2 = 2;
		replab0 : while (true) {
			v_3 = sbp.cursor;
			lab1 : do {
				golab2 : while (true) {
					lab3 : do {
						if (!(sbp.in_grouping(g_vowel, 97, 305))) {
							break lab3;
						}
						break golab2;
					} while (false);
					if (sbp.cursor >= sbp.limit) {
						break lab1;
					}
					sbp.cursor++;
				}
				v_2--;
				continue replab0;
			} while (false);
			sbp.cursor = v_3;
			break replab0;
		}
		if (v_2 > 0) {
			return false;
		}
		sbp.cursor = v_1;
		return true;
	}
	function r_is_reserved_word() {
		var v_1, v_2, v_4;
		lab0 : do {
			v_1 = sbp.cursor;
			lab1 : do {
				v_2 = sbp.cursor;
				golab2 : while (true) {
					lab3 : do {
						if (!(sbp.eq_s(2, "ad"))) {
							break lab3;
						}
						break golab2;
					} while (false);
					if (sbp.cursor >= sbp.limit) {
						break lab1;
					}
					sbp.cursor++;
				}
				I_strlen = 2;
				if (!(I_strlen == sbp.limit)) {
					break lab1;
				}
				sbp.cursor = v_2;
				break lab0;
			} while (false);
			sbp.cursor = v_1;
			v_4 = sbp.cursor;
			golab4 : while (true) {
				lab5 : do {
					if (!(sbp.eq_s(5, "soyad"))) {
						break lab5;
					}
					break golab4;
				} while (false);
				if (sbp.cursor >= sbp.limit) {
					return false;
				}
				sbp.cursor++;
			}
			I_strlen = 5;
			if (!(I_strlen == sbp.limit)) {
				return false;
			}
			sbp.cursor = v_4;
		} while (false);
		return true;
	}
	function r_postlude() {
		var v_1 = sbp.cursor;
		if (r_is_reserved_word())
			return false;
		sbp.limit_backward = v_1;
		sbp.cursor = sbp.limit;
		r_append_U_to_stems_ending_with_d_or_g();
		sbp.cursor = sbp.limit;
		r_post_process_last_consonants();
		return true;
	}
	this.stem = function() {
		if (r_more_than_one_syllable_word()) {
			sbp.limit_backward = sbp.cursor;
			sbp.cursor = sbp.limit;
			r_stem_nominal_verb_suffixes();
			sbp.cursor = sbp.limit;
			if (B_c_s_n_s) {
				r_stem_noun_suffixes();
				sbp.cursor = sbp.limit_backward;
				if (r_postlude())
					return true;
			}
		}
		return false;
	}
}