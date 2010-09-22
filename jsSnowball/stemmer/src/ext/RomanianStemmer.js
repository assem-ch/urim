function RomanianStemmer() {
	var a_0 = [new Among("", -1, 3), new Among("I", 0, 1), new Among("U", 0, 2)];
	var a_1 = [new Among("ea", -1, 3), new Among("a\u0163ia", -1, 7),
			new Among("aua", -1, 2), new Among("iua", -1, 4),
			new Among("a\u0163ie", -1, 7), new Among("ele", -1, 3),
			new Among("ile", -1, 5), new Among("iile", 6, 4),
			new Among("iei", -1, 4), new Among("atei", -1, 6),
			new Among("ii", -1, 4), new Among("ului", -1, 1),
			new Among("ul", -1, 1), new Among("elor", -1, 3),
			new Among("ilor", -1, 4), new Among("iilor", 14, 4)];
	var a_2 = [new Among("icala", -1, 4), new Among("iciva", -1, 4),
			new Among("ativa", -1, 5), new Among("itiva", -1, 6),
			new Among("icale", -1, 4), new Among("a\u0163iune", -1, 5),
			new Among("i\u0163iune", -1, 6), new Among("atoare", -1, 5),
			new Among("itoare", -1, 6), new Among("\u0103toare", -1, 5),
			new Among("icitate", -1, 4), new Among("abilitate", -1, 1),
			new Among("ibilitate", -1, 2), new Among("ivitate", -1, 3),
			new Among("icive", -1, 4), new Among("ative", -1, 5),
			new Among("itive", -1, 6), new Among("icali", -1, 4),
			new Among("atori", -1, 5), new Among("icatori", 18, 4),
			new Among("itori", -1, 6), new Among("\u0103tori", -1, 5),
			new Among("icitati", -1, 4), new Among("abilitati", -1, 1),
			new Among("ivitati", -1, 3), new Among("icivi", -1, 4),
			new Among("ativi", -1, 5), new Among("itivi", -1, 6),
			new Among("icit\u0103i", -1, 4), new Among("abilit\u0103i", -1, 1),
			new Among("ivit\u0103i", -1, 3),
			new Among("icit\u0103\u0163i", -1, 4),
			new Among("abilit\u0103\u0163i", -1, 1),
			new Among("ivit\u0103\u0163i", -1, 3), new Among("ical", -1, 4),
			new Among("ator", -1, 5), new Among("icator", 35, 4),
			new Among("itor", -1, 6), new Among("\u0103tor", -1, 5),
			new Among("iciv", -1, 4), new Among("ativ", -1, 5),
			new Among("itiv", -1, 6), new Among("ical\u0103", -1, 4),
			new Among("iciv\u0103", -1, 4), new Among("ativ\u0103", -1, 5),
			new Among("itiv\u0103", -1, 6)];
	var a_3 = [new Among("ica", -1, 1), new Among("abila", -1, 1),
			new Among("ibila", -1, 1), new Among("oasa", -1, 1),
			new Among("ata", -1, 1), new Among("ita", -1, 1),
			new Among("anta", -1, 1), new Among("ista", -1, 3),
			new Among("uta", -1, 1), new Among("iva", -1, 1),
			new Among("ic", -1, 1), new Among("ice", -1, 1),
			new Among("abile", -1, 1), new Among("ibile", -1, 1),
			new Among("isme", -1, 3), new Among("iune", -1, 2),
			new Among("oase", -1, 1), new Among("ate", -1, 1),
			new Among("itate", 17, 1), new Among("ite", -1, 1),
			new Among("ante", -1, 1), new Among("iste", -1, 3),
			new Among("ute", -1, 1), new Among("ive", -1, 1),
			new Among("ici", -1, 1), new Among("abili", -1, 1),
			new Among("ibili", -1, 1), new Among("iuni", -1, 2),
			new Among("atori", -1, 1), new Among("osi", -1, 1),
			new Among("ati", -1, 1), new Among("itati", 30, 1),
			new Among("iti", -1, 1), new Among("anti", -1, 1),
			new Among("isti", -1, 3), new Among("uti", -1, 1),
			new Among("i\u015Fti", -1, 3), new Among("ivi", -1, 1),
			new Among("it\u0103i", -1, 1), new Among("o\u015Fi", -1, 1),
			new Among("it\u0103\u0163i", -1, 1), new Among("abil", -1, 1),
			new Among("ibil", -1, 1), new Among("ism", -1, 3),
			new Among("ator", -1, 1), new Among("os", -1, 1),
			new Among("at", -1, 1), new Among("it", -1, 1),
			new Among("ant", -1, 1), new Among("ist", -1, 3),
			new Among("ut", -1, 1), new Among("iv", -1, 1),
			new Among("ic\u0103", -1, 1), new Among("abil\u0103", -1, 1),
			new Among("ibil\u0103", -1, 1), new Among("oas\u0103", -1, 1),
			new Among("at\u0103", -1, 1), new Among("it\u0103", -1, 1),
			new Among("ant\u0103", -1, 1), new Among("ist\u0103", -1, 3),
			new Among("ut\u0103", -1, 1), new Among("iv\u0103", -1, 1)];
	var a_4 = [new Among("ea", -1, 1), new Among("ia", -1, 1),
			new Among("esc", -1, 1), new Among("\u0103sc", -1, 1),
			new Among("ind", -1, 1), new Among("\u00E2nd", -1, 1),
			new Among("are", -1, 1), new Among("ere", -1, 1),
			new Among("ire", -1, 1), new Among("\u00E2re", -1, 1),
			new Among("se", -1, 2), new Among("ase", 10, 1),
			new Among("sese", 10, 2), new Among("ise", 10, 1),
			new Among("use", 10, 1), new Among("\u00E2se", 10, 1),
			new Among("e\u015Fte", -1, 1), new Among("\u0103\u015Fte", -1, 1),
			new Among("eze", -1, 1), new Among("ai", -1, 1),
			new Among("eai", 19, 1), new Among("iai", 19, 1),
			new Among("sei", -1, 2), new Among("e\u015Fti", -1, 1),
			new Among("\u0103\u015Fti", -1, 1), new Among("ui", -1, 1),
			new Among("ezi", -1, 1), new Among("\u00E2i", -1, 1),
			new Among("a\u015Fi", -1, 1), new Among("se\u015Fi", -1, 2),
			new Among("ase\u015Fi", 29, 1), new Among("sese\u015Fi", 29, 2),
			new Among("ise\u015Fi", 29, 1), new Among("use\u015Fi", 29, 1),
			new Among("\u00E2se\u015Fi", 29, 1), new Among("i\u015Fi", -1, 1),
			new Among("u\u015Fi", -1, 1), new Among("\u00E2\u015Fi", -1, 1),
			new Among("a\u0163i", -1, 2), new Among("ea\u0163i", 38, 1),
			new Among("ia\u0163i", 38, 1), new Among("e\u0163i", -1, 2),
			new Among("i\u0163i", -1, 2), new Among("\u00E2\u0163i", -1, 2),
			new Among("ar\u0103\u0163i", -1, 1),
			new Among("ser\u0103\u0163i", -1, 2),
			new Among("aser\u0103\u0163i", 45, 1),
			new Among("seser\u0103\u0163i", 45, 2),
			new Among("iser\u0103\u0163i", 45, 1),
			new Among("user\u0103\u0163i", 45, 1),
			new Among("\u00E2ser\u0103\u0163i", 45, 1),
			new Among("ir\u0103\u0163i", -1, 1),
			new Among("ur\u0103\u0163i", -1, 1),
			new Among("\u00E2r\u0103\u0163i", -1, 1), new Among("am", -1, 1),
			new Among("eam", 54, 1), new Among("iam", 54, 1),
			new Among("em", -1, 2), new Among("asem", 57, 1),
			new Among("sesem", 57, 2), new Among("isem", 57, 1),
			new Among("usem", 57, 1), new Among("\u00E2sem", 57, 1),
			new Among("im", -1, 2), new Among("\u00E2m", -1, 2),
			new Among("\u0103m", -1, 2), new Among("ar\u0103m", 65, 1),
			new Among("ser\u0103m", 65, 2), new Among("aser\u0103m", 67, 1),
			new Among("seser\u0103m", 67, 2), new Among("iser\u0103m", 67, 1),
			new Among("user\u0103m", 67, 1),
			new Among("\u00E2ser\u0103m", 67, 1),
			new Among("ir\u0103m", 65, 1), new Among("ur\u0103m", 65, 1),
			new Among("\u00E2r\u0103m", 65, 1), new Among("au", -1, 1),
			new Among("eau", 76, 1), new Among("iau", 76, 1),
			new Among("indu", -1, 1), new Among("\u00E2ndu", -1, 1),
			new Among("ez", -1, 1), new Among("easc\u0103", -1, 1),
			new Among("ar\u0103", -1, 1), new Among("ser\u0103", -1, 2),
			new Among("aser\u0103", 84, 1), new Among("seser\u0103", 84, 2),
			new Among("iser\u0103", 84, 1), new Among("user\u0103", 84, 1),
			new Among("\u00E2ser\u0103", 84, 1), new Among("ir\u0103", -1, 1),
			new Among("ur\u0103", -1, 1), new Among("\u00E2r\u0103", -1, 1),
			new Among("eaz\u0103", -1, 1)];
	var a_5 = [new Among("a", -1, 1), new Among("e", -1, 1),
			new Among("ie", 1, 1), new Among("i", -1, 1),
			new Among("\u0103", -1, 1)];
	var sbp = new SnowballProgram();
	this.setCurrent = function(word) {
		sbp.setCurrent(word);
	};
	this.getCurrent = function() {
		return sbp.getCurrent();
	};
	var g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 32, 0, 0,
			4];
	var B_standard_suffix_removed, I_p2, I_p1, I_pV;
	function r_prelude() {
		var v_1, v_2, v_3;
		replab0 : while (true) {
			v_1 = sbp.cursor;
			lab1 : do {
				golab2 : while (true) {
					v_2 = sbp.cursor;
					lab3 : do {
						if (!(sbp.in_grouping(g_v, 97, 259))) {
							break lab3;
						}
						sbp.bra = sbp.cursor;
						lab4 : do {
							v_3 = sbp.cursor;
							lab5 : do {
								if (!(sbp.eq_s(1, "u"))) {
									break lab5;
								}
								sbp.ket = sbp.cursor;
								if (!(sbp.in_grouping(g_v, 97, 259))) {
									break lab5;
								}
								sbp.slice_from("U");
								break lab4;
							} while (false);
							sbp.cursor = v_3;
							if (!(sbp.eq_s(1, "i"))) {
								break lab3;
							}
							sbp.ket = sbp.cursor;
							if (!(sbp.in_grouping(g_v, 97, 259))) {
								break lab3;
							}
							sbp.slice_from("I");
						} while (false);
						sbp.cursor = v_2;
						break golab2;
					} while (false);
					sbp.cursor = v_2;
					if (sbp.cursor >= sbp.limit) {
						break lab1;
					}
					sbp.cursor++;
				}
				continue replab0;
			} while (false);
			sbp.cursor = v_1;
			break replab0;
		}
		return true;
	}
	function r_mark_regions() {
		var v_1, v_2, v_3, v_6, v_8;
		I_pV = sbp.limit;
		I_p1 = sbp.limit;
		I_p2 = sbp.limit;
		v_1 = sbp.cursor;
		lab0 : do {
			lab1 : do {
				v_2 = sbp.cursor;
				lab2 : do {
					if (!(sbp.in_grouping(g_v, 97, 259))) {
						break lab2;
					}
					lab3 : do {
						v_3 = sbp.cursor;
						lab4 : do {
							if (!(sbp.out_grouping(g_v, 97, 259))) {
								break lab4;
							}
							golab5 : while (true) {
								lab6 : do {
									if (!(sbp.in_grouping(g_v, 97, 259))) {
										break lab6;
									}
									break golab5;
								} while (false);
								if (sbp.cursor >= sbp.limit) {
									break lab4;
								}
								sbp.cursor++;
							}
							break lab3;
						} while (false);
						sbp.cursor = v_3;
						if (!(sbp.in_grouping(g_v, 97, 259))) {
							break lab2;
						}
						golab7 : while (true) {
							lab8 : do {
								if (!(sbp.out_grouping(g_v, 97, 259))) {
									break lab8;
								}
								break golab7;
							} while (false);
							if (sbp.cursor >= sbp.limit) {
								break lab2;
							}
							sbp.cursor++;
						}
					} while (false);
					break lab1;
				} while (false);
				sbp.cursor = v_2;
				if (!(sbp.out_grouping(g_v, 97, 259))) {
					break lab0;
				}
				lab9 : do {
					v_6 = sbp.cursor;
					lab10 : do {
						if (!(sbp.out_grouping(g_v, 97, 259))) {
							break lab10;
						}
						golab11 : while (true) {
							lab12 : do {
								if (!(sbp.in_grouping(g_v, 97, 259))) {
									break lab12;
								}
								break golab11;
							} while (false);
							if (sbp.cursor >= sbp.limit) {
								break lab10;
							}
							sbp.cursor++;
						}
						break lab9;
					} while (false);
					sbp.cursor = v_6;
					if (!(sbp.in_grouping(g_v, 97, 259))) {
						break lab0;
					}
					if (sbp.cursor >= sbp.limit) {
						break lab0;
					}
					sbp.cursor++;
				} while (false);
			} while (false);
			I_pV = sbp.cursor;
		} while (false);
		sbp.cursor = v_1;
		v_8 = sbp.cursor;
		lab13 : do {
			golab14 : while (true) {
				lab15 : do {
					if (!(sbp.in_grouping(g_v, 97, 259))) {
						break lab15;
					}
					break golab14;
				} while (false);
				if (sbp.cursor >= sbp.limit) {
					break lab13;
				}
				sbp.cursor++;
			}
			golab16 : while (true) {
				lab17 : do {
					if (!(sbp.out_grouping(g_v, 97, 259))) {
						break lab17;
					}
					break golab16;
				} while (false);
				if (sbp.cursor >= sbp.limit) {
					break lab13;
				}
				sbp.cursor++;
			}
			I_p1 = sbp.cursor;
			golab18 : while (true) {
				lab19 : do {
					if (!(sbp.in_grouping(g_v, 97, 259))) {
						break lab19;
					}
					break golab18;
				} while (false);
				if (sbp.cursor >= sbp.limit) {
					break lab13;
				}
				sbp.cursor++;
			}
			golab20 : while (true) {
				lab21 : do {
					if (!(sbp.out_grouping(g_v, 97, 259))) {
						break lab21;
					}
					break golab20;
				} while (false);
				if (sbp.cursor >= sbp.limit) {
					break lab13;
				}
				sbp.cursor++;
			}
			I_p2 = sbp.cursor;
		} while (false);
		sbp.cursor = v_8;
		return true;
	}
	function r_postlude() {
		var among_var, v_1;
		replab0 : while (true) {
			v_1 = sbp.cursor;
			lab1 : do {
				sbp.bra = sbp.cursor;
				among_var = sbp.find_among(a_0, 3);
				if (among_var == 0) {
					break lab1;
				}
				sbp.ket = sbp.cursor;
				switch (among_var) {
					case 0 :
						break lab1;
					case 1 :
						sbp.slice_from("i");
						break;
					case 2 :
						sbp.slice_from("u");
						break;
					case 3 :
						if (sbp.cursor >= sbp.limit) {
							break lab1;
						}
						sbp.cursor++;
						break;
				}
				continue replab0;
			} while (false);
			sbp.cursor = v_1;
			break replab0;
		}
		return true;
	}
	function r_RV() {
		if (!(I_pV <= sbp.cursor)) {
			return false;
		}
		return true;
	}
	function r_R1() {
		if (!(I_p1 <= sbp.cursor)) {
			return false;
		}
		return true;
	}
	function r_R2() {
		if (!(I_p2 <= sbp.cursor)) {
			return false;
		}
		return true;
	}
	function r_step_0() {
		var among_var, v_1;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_1, 16);
		if (among_var == 0) {
			return false;
		}
		sbp.bra = sbp.cursor;
		if (!r_R1()) {
			return false;
		}
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				sbp.slice_del();
				break;
			case 2 :
				sbp.slice_from("a");
				break;
			case 3 :
				sbp.slice_from("e");
				break;
			case 4 :
				sbp.slice_from("i");
				break;
			case 5 :
				v_1 = sbp.limit - sbp.cursor;
				lab0 : do {
					if (!(sbp.eq_s_b(2, "ab"))) {
						break lab0;
					}
					return false;
				} while (false);
				sbp.cursor = sbp.limit - v_1;
				sbp.slice_from("i");
				break;
			case 6 :
				sbp.slice_from("at");
				break;
			case 7 :
				sbp.slice_from("a\u0163i");
				break;
		}
		return true;
	}
	function r_combo_suffix() {
		var among_var, v_1;
		v_1 = sbp.limit - sbp.cursor;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_2, 46);
		if (among_var == 0) {
			return false;
		}
		sbp.bra = sbp.cursor;
		if (!r_R1()) {
			return false;
		}
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				sbp.slice_from("abil");
				break;
			case 2 :
				sbp.slice_from("ibil");
				break;
			case 3 :
				sbp.slice_from("iv");
				break;
			case 4 :
				sbp.slice_from("ic");
				break;
			case 5 :
				sbp.slice_from("at");
				break;
			case 6 :
				sbp.slice_from("it");
				break;
		}
		B_standard_suffix_removed = true;
		sbp.cursor = sbp.limit - v_1;
		return true;
	}
	function r_standard_suffix() {
		var among_var, v_1;
		B_standard_suffix_removed = false;
		replab0 : while (true) {
			v_1 = sbp.limit - sbp.cursor;
			lab1 : do {
				if (!r_combo_suffix()) {
					break lab1;
				}
				continue replab0;
			} while (false);
			sbp.cursor = sbp.limit - v_1;
			break replab0;
		}
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_3, 62);
		if (among_var == 0) {
			return false;
		}
		sbp.bra = sbp.cursor;
		if (!r_R2()) {
			return false;
		}
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				sbp.slice_del();
				break;
			case 2 :
				if (!(sbp.eq_s_b(1, "\u0163"))) {
					return false;
				}
				sbp.bra = sbp.cursor;
				sbp.slice_from("t");
				break;
			case 3 :
				sbp.slice_from("ist");
				break;
		}
		B_standard_suffix_removed = true;
		return true;
	}
	function r_verb_suffix() {
		var among_var, v_1, v_2, v_3;
		v_1 = sbp.limit - sbp.cursor;
		if (sbp.cursor < I_pV) {
			return false;
		}
		sbp.cursor = I_pV;
		v_2 = sbp.limit_backward;
		sbp.limit_backward = sbp.cursor;
		sbp.cursor = sbp.limit - v_1;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_4, 94);
		if (among_var == 0) {
			sbp.limit_backward = v_2;
			return false;
		}
		sbp.bra = sbp.cursor;
		switch (among_var) {
			case 0 :
				sbp.limit_backward = v_2;
				return false;
			case 1 :
				lab0 : do {
					v_3 = sbp.limit - sbp.cursor;
					lab1 : do {
						if (!(sbp.out_grouping_b(g_v, 97, 259))) {
							break lab1;
						}
						break lab0;
					} while (false);
					sbp.cursor = sbp.limit - v_3;
					if (!(sbp.eq_s_b(1, "u"))) {
						sbp.limit_backward = v_2;
						return false;
					}
				} while (false);
				sbp.slice_del();
				break;
			case 2 :
				sbp.slice_del();
				break;
		}
		sbp.limit_backward = v_2;
		return true;
	}
	function r_vowel_suffix() {
		var among_var;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_5, 5);
		if (among_var == 0) {
			return false;
		}
		sbp.bra = sbp.cursor;
		if (!r_RV()) {
			return false;
		}
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				sbp.slice_del();
				break;
		}
		return true;
	}
	this.stem = function() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8;
		v_1 = sbp.cursor;
		lab0 : do {
			if (!r_prelude()) {
				break lab0;
			}
		} while (false);
		sbp.cursor = v_1;
		v_2 = sbp.cursor;
		lab1 : do {
			if (!r_mark_regions()) {
				break lab1;
			}
		} while (false);
		sbp.cursor = v_2;
		sbp.limit_backward = sbp.cursor;
		sbp.cursor = sbp.limit;
		v_3 = sbp.limit - sbp.cursor;
		lab2 : do {
			if (!r_step_0()) {
				break lab2;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_3;
		v_4 = sbp.limit - sbp.cursor;
		lab3 : do {
			if (!r_standard_suffix()) {
				break lab3;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_4;
		v_5 = sbp.limit - sbp.cursor;
		lab4 : do {
			lab5 : do {
				v_6 = sbp.limit - sbp.cursor;
				lab6 : do {
					if (!(B_standard_suffix_removed)) {
						break lab6;
					}
					break lab5;
				} while (false);
				sbp.cursor = sbp.limit - v_6;
				if (!r_verb_suffix()) {
					break lab4;
				}
			} while (false);
		} while (false);
		sbp.cursor = sbp.limit - v_5;
		v_7 = sbp.limit - sbp.cursor;
		lab7 : do {
			if (!r_vowel_suffix()) {
				break lab7;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_7;
		sbp.cursor = sbp.limit_backward;
		v_8 = sbp.cursor;
		lab8 : do {
			if (!r_postlude()) {
				break lab8;
			}
		} while (false);
		sbp.cursor = v_8;
		return true;
	}
}