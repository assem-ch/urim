function RussianStemmer() {
	var a_0 = [new Among("\u0432", -1, 1), new Among("\u0438\u0432", 0, 2),
			new Among("\u044B\u0432", 0, 2),
			new Among("\u0432\u0448\u0438", -1, 1),
			new Among("\u0438\u0432\u0448\u0438", 3, 2),
			new Among("\u044B\u0432\u0448\u0438", 3, 2),
			new Among("\u0432\u0448\u0438\u0441\u044C", -1, 1),
			new Among("\u0438\u0432\u0448\u0438\u0441\u044C", 6, 2),
			new Among("\u044B\u0432\u0448\u0438\u0441\u044C", 6, 2)];
	var a_1 = [new Among("\u0435\u0435", -1, 1),
			new Among("\u0438\u0435", -1, 1), new Among("\u043E\u0435", -1, 1),
			new Among("\u044B\u0435", -1, 1),
			new Among("\u0438\u043C\u0438", -1, 1),
			new Among("\u044B\u043C\u0438", -1, 1),
			new Among("\u0435\u0439", -1, 1), new Among("\u0438\u0439", -1, 1),
			new Among("\u043E\u0439", -1, 1), new Among("\u044B\u0439", -1, 1),
			new Among("\u0435\u043C", -1, 1), new Among("\u0438\u043C", -1, 1),
			new Among("\u043E\u043C", -1, 1), new Among("\u044B\u043C", -1, 1),
			new Among("\u0435\u0433\u043E", -1, 1),
			new Among("\u043E\u0433\u043E", -1, 1),
			new Among("\u0435\u043C\u0443", -1, 1),
			new Among("\u043E\u043C\u0443", -1, 1),
			new Among("\u0438\u0445", -1, 1), new Among("\u044B\u0445", -1, 1),
			new Among("\u0435\u044E", -1, 1), new Among("\u043E\u044E", -1, 1),
			new Among("\u0443\u044E", -1, 1), new Among("\u044E\u044E", -1, 1),
			new Among("\u0430\u044F", -1, 1), new Among("\u044F\u044F", -1, 1)];
	var a_2 = [new Among("\u0435\u043C", -1, 1),
			new Among("\u043D\u043D", -1, 1), new Among("\u0432\u0448", -1, 1),
			new Among("\u0438\u0432\u0448", 2, 2),
			new Among("\u044B\u0432\u0448", 2, 2), new Among("\u0449", -1, 1),
			new Among("\u044E\u0449", 5, 1),
			new Among("\u0443\u044E\u0449", 6, 2)]
	var a_3 = [new Among("\u0441\u044C", -1, 1),
			new Among("\u0441\u044F", -1, 1)];
	var a_4 = [new Among("\u043B\u0430", -1, 1),
			new Among("\u0438\u043B\u0430", 0, 2),
			new Among("\u044B\u043B\u0430", 0, 2),
			new Among("\u043D\u0430", -1, 1),
			new Among("\u0435\u043D\u0430", 3, 2),
			new Among("\u0435\u0442\u0435", -1, 1),
			new Among("\u0438\u0442\u0435", -1, 2),
			new Among("\u0439\u0442\u0435", -1, 1),
			new Among("\u0435\u0439\u0442\u0435", 7, 2),
			new Among("\u0443\u0439\u0442\u0435", 7, 2),
			new Among("\u043B\u0438", -1, 1),
			new Among("\u0438\u043B\u0438", 10, 2),
			new Among("\u044B\u043B\u0438", 10, 2), new Among("\u0439", -1, 1),
			new Among("\u0435\u0439", 13, 2), new Among("\u0443\u0439", 13, 2),
			new Among("\u043B", -1, 1), new Among("\u0438\u043B", 16, 2),
			new Among("\u044B\u043B", 16, 2), new Among("\u0435\u043C", -1, 1),
			new Among("\u0438\u043C", -1, 2), new Among("\u044B\u043C", -1, 2),
			new Among("\u043D", -1, 1), new Among("\u0435\u043D", 22, 2),
			new Among("\u043B\u043E", -1, 1),
			new Among("\u0438\u043B\u043E", 24, 2),
			new Among("\u044B\u043B\u043E", 24, 2),
			new Among("\u043D\u043E", -1, 1),
			new Among("\u0435\u043D\u043E", 27, 2),
			new Among("\u043D\u043D\u043E", 27, 1),
			new Among("\u0435\u0442", -1, 1),
			new Among("\u0443\u0435\u0442", 30, 2),
			new Among("\u0438\u0442", -1, 2), new Among("\u044B\u0442", -1, 2),
			new Among("\u044E\u0442", -1, 1),
			new Among("\u0443\u044E\u0442", 34, 2),
			new Among("\u044F\u0442", -1, 2), new Among("\u043D\u044B", -1, 1),
			new Among("\u0435\u043D\u044B", 37, 2),
			new Among("\u0442\u044C", -1, 1),
			new Among("\u0438\u0442\u044C", 39, 2),
			new Among("\u044B\u0442\u044C", 39, 2),
			new Among("\u0435\u0448\u044C", -1, 1),
			new Among("\u0438\u0448\u044C", -1, 2), new Among("\u044E", -1, 2),
			new Among("\u0443\u044E", 44, 2)];
	var a_5 = [new Among("\u0430", -1, 1), new Among("\u0435\u0432", -1, 1),
			new Among("\u043E\u0432", -1, 1), new Among("\u0435", -1, 1),
			new Among("\u0438\u0435", 3, 1), new Among("\u044C\u0435", 3, 1),
			new Among("\u0438", -1, 1), new Among("\u0435\u0438", 6, 1),
			new Among("\u0438\u0438", 6, 1),
			new Among("\u0430\u043C\u0438", 6, 1),
			new Among("\u044F\u043C\u0438", 6, 1),
			new Among("\u0438\u044F\u043C\u0438", 10, 1),
			new Among("\u0439", -1, 1), new Among("\u0435\u0439", 12, 1),
			new Among("\u0438\u0435\u0439", 13, 1),
			new Among("\u0438\u0439", 12, 1), new Among("\u043E\u0439", 12, 1),
			new Among("\u0430\u043C", -1, 1), new Among("\u0435\u043C", -1, 1),
			new Among("\u0438\u0435\u043C", 18, 1),
			new Among("\u043E\u043C", -1, 1), new Among("\u044F\u043C", -1, 1),
			new Among("\u0438\u044F\u043C", 21, 1), new Among("\u043E", -1, 1),
			new Among("\u0443", -1, 1), new Among("\u0430\u0445", -1, 1),
			new Among("\u044F\u0445", -1, 1),
			new Among("\u0438\u044F\u0445", 26, 1), new Among("\u044B", -1, 1),
			new Among("\u044C", -1, 1), new Among("\u044E", -1, 1),
			new Among("\u0438\u044E", 30, 1), new Among("\u044C\u044E", 30, 1),
			new Among("\u044F", -1, 1), new Among("\u0438\u044F", 33, 1),
			new Among("\u044C\u044F", 33, 1)];
	var a_6 = [new Among("\u043E\u0441\u0442", -1, 1),
			new Among("\u043E\u0441\u0442\u044C", -1, 1)];
	var a_7 = [new Among("\u0435\u0439\u0448\u0435", -1, 1),
			new Among("\u043D", -1, 2), new Among("\u0435\u0439\u0448", -1, 1),
			new Among("\u044C", -1, 3)];
	var g_v = [33, 65, 8, 232];
	var I_p2, I_pV;
	var sbp = new SnowballProgram();
	this.setCurrent = function(word) {
		sbp.setCurrent(word);
	};
	this.getCurrent = function() {
		return sbp.getCurrent()
	};
	function r_mark_regions() {
		var v_1;
		I_pV = sbp.limit;
		I_p2 = sbp.limit;
		v_1 = sbp.cursor;
		lab0 : do {
			golab1 : while (true) {
				lab2 : do {
					if (!(sbp.in_grouping(g_v, 1072, 1103))) {
						break lab2;
					}
					break golab1;
				} while (false);
				if (sbp.cursor >= sbp.limit) {
					break lab0;
				}
				sbp.cursor++;
			}
			I_pV = sbp.cursor;
			golab3 : while (true) {
				lab4 : do {
					if (!(sbp.out_grouping(g_v, 1072, 1103))) {
						break lab4;
					}
					break golab3;
				} while (false);
				if (sbp.cursor >= sbp.limit) {
					break lab0;
				}
				sbp.cursor++;
			}
			golab5 : while (true) {
				lab6 : do {
					if (!(sbp.in_grouping(g_v, 1072, 1103))) {
						break lab6;
					}
					break golab5;
				} while (false);
				if (sbp.cursor >= sbp.limit) {
					break lab0;
				}
				sbp.cursor++;
			}
			golab7 : while (true) {
				lab8 : do {
					if (!(sbp.out_grouping(g_v, 1072, 1103))) {
						break lab8;
					}
					break golab7;
				} while (false);
				if (sbp.cursor >= sbp.limit) {
					break lab0;
				}
				sbp.cursor++;
			}
			I_p2 = sbp.cursor;
		} while (false);
		sbp.cursor = v_1;
		return true;
	}
	function r_R2() {
		if (!(I_p2 <= sbp.cursor)) {
			return false;
		}
		return true;
	}
	function r_perfective_gerund() {
		var among_var;
		var v_1;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_0, 9);
		if (among_var == 0) {
			return false;
		}
		sbp.bra = sbp.cursor;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				lab0 : do {
					v_1 = sbp.limit - sbp.cursor;
					lab1 : do {
						if (!(sbp.eq_s_b(1, "\u0430"))) {
							break lab1;
						}
						break lab0;
					} while (false);
					sbp.cursor = sbp.limit - v_1;
					if (!(sbp.eq_s_b(1, "\u044F"))) {
						return false;
					}
				} while (false);
				sbp.slice_del();
				break;
			case 2 :
				sbp.slice_del();
				break;
		}
		return true;
	}
	function r_adjective() {
		var among_var;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_1, 26);
		if (among_var == 0) {
			return false;
		}
		sbp.bra = sbp.cursor;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				sbp.slice_del();
				break;
		}
		return true;
	}
	function r_adjectival() {
		var among_var;
		var v_1;
		var v_2;
		if (!r_adjective()) {
			return false;
		}
		v_1 = sbp.limit - sbp.cursor;
		lab0 : do {
			sbp.ket = sbp.cursor;
			among_var = sbp.find_among_b(a_2, 8);
			if (among_var == 0) {
				sbp.cursor = sbp.limit - v_1;
				break lab0;
			}
			sbp.bra = sbp.cursor;
			switch (among_var) {
				case 0 :
					sbp.cursor = sbp.limit - v_1;
					break lab0;
				case 1 :
					lab1 : do {
						v_2 = sbp.limit - sbp.cursor;
						lab2 : do {
							if (!(sbp.eq_s_b(1, "\u0430"))) {
								break lab2;
							}
							break lab1;
						} while (false);
						sbp.cursor = sbp.limit - v_2;
						if (!(sbp.eq_s_b(1, "\u044F"))) {
							sbp.cursor = sbp.limit
									- v_1;
							break lab0;
						}
					} while (false);
					sbp.slice_del();
					break;
				case 2 :
					sbp.slice_del();
					break;
			}
		} while (false);
		return true;
	}
	function r_reflexive() {
		var among_var;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_3, 2);
		if (among_var == 0) {
			return false;
		}
		sbp.bra = sbp.cursor;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				sbp.slice_del();
				break;
		}
		return true;
	}
	function r_verb() {
		var among_var;
		var v_1;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_4, 46);
		if (among_var == 0) {
			return false;
		}
		sbp.bra = sbp.cursor;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				lab0 : do {
					v_1 = sbp.limit - sbp.cursor;
					lab1 : do {
						if (!(sbp.eq_s_b(1, "\u0430"))) {
							break lab1;
						}
						break lab0;
					} while (false);
					sbp.cursor = sbp.limit - v_1;
					if (!(sbp.eq_s_b(1, "\u044F"))) {
						return false;
					}
				} while (false);
				sbp.slice_del();
				break;
			case 2 :
				sbp.slice_del();
				break;
		}
		return true;
	}
	function r_noun() {
		var among_var;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_5, 36);
		if (among_var == 0) {
			return false;
		}
		sbp.bra = sbp.cursor;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				sbp.slice_del();
				break;
		}
		return true;
	}
	function r_derivational() {
		var among_var;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_6, 2);
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
		}
		return true;
	}
	function r_tidy_up() {
		var among_var;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_7, 4);
		if (among_var == 0) {
			return false;
		}
		sbp.bra = sbp.cursor;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				sbp.slice_del();
				sbp.ket = sbp.cursor;
				if (!(sbp.eq_s_b(1, "\u043D"))) {
					return false;
				}
				sbp.bra = sbp.cursor;
				if (!(sbp.eq_s_b(1, "\u043D"))) {
					return false;
				}
				sbp.slice_del();
				break;
			case 2 :
				if (!(sbp.eq_s_b(1, "\u043D"))) {
					return false;
				}
				sbp.slice_del();
				break;
			case 3 :
				sbp.slice_del();
				break;
		}
		return true;
	}
	this.stem = function() {
		var v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10;
		v_1 = sbp.cursor;
		lab0 : do {
			if (!r_mark_regions()) {
				break lab0;
			}
		} while (false);
		sbp.cursor = v_1;
		sbp.limit_backward = sbp.cursor;
		sbp.cursor = sbp.limit;
		v_2 = sbp.limit - sbp.cursor;
		if (sbp.cursor < I_pV) {
			return false;
		}
		sbp.cursor = I_pV;
		v_3 = sbp.limit_backward;
		sbp.limit_backward = sbp.cursor;
		sbp.cursor = sbp.limit - v_2;
		v_4 = sbp.limit - sbp.cursor;
		lab1 : do {
			lab2 : do {
				v_5 = sbp.limit - sbp.cursor;
				lab3 : do {
					if (!r_perfective_gerund()) {
						break lab3;
					}
					break lab2;
				} while (false);
				sbp.cursor = sbp.limit - v_5;
				v_6 = sbp.limit - sbp.cursor;
				lab4 : do {
					if (!r_reflexive()) {
						sbp.cursor = sbp.limit - v_6;
						break lab4;
					}
				} while (false);
				lab5 : do {
					v_7 = sbp.limit - sbp.cursor;
					lab6 : do {
						if (!r_adjectival()) {
							break lab6;
						}
						break lab5;
					} while (false);
					sbp.cursor = sbp.limit - v_7;
					lab7 : do {
						if (!r_verb()) {
							break lab7;
						}
						break lab5;
					} while (false);
					sbp.cursor = sbp.limit - v_7;
					if (!r_noun()) {
						break lab1;
					}
				} while (false);
			} while (false);
		} while (false);
		sbp.cursor = sbp.limit - v_4;
		v_8 = sbp.limit - sbp.cursor;
		lab8 : do {
			sbp.ket = sbp.cursor;
			if (!(sbp.eq_s_b(1, "\u0438"))) {
				sbp.cursor = sbp.limit - v_8;
				break lab8;
			}
			sbp.bra = sbp.cursor;
			sbp.slice_del();
		} while (false);
		v_9 = sbp.limit - sbp.cursor;
		lab9 : do {
			if (!r_derivational()) {
				break lab9;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_9;
		v_10 = sbp.limit - sbp.cursor;
		lab10 : do {
			if (!r_tidy_up()) {
				break lab10;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_10;
		sbp.limit_backward = v_3;
		sbp.cursor = sbp.limit_backward;
		return true;
	}
}