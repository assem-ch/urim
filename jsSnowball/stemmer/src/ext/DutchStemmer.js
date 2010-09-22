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
	var sbp = new SnowballProgram();
	this.setCurrent = function(word) {
		sbp.setCurrent(word);
	};
	this.getCurrent = function() {
		return sbp.getCurrent()
	};
	function r_prelude() {
		var among_var, v_1, v_2, v_3, v_4, v_5, v_6;
		v_1 = sbp.cursor;
		replab0 : while (true) {
			v_2 = sbp.cursor;
			lab1 : do {
				sbp.bra = sbp.cursor;
				among_var = sbp.find_among(a_0, 11);
				if (among_var == 0) {
					break lab1;
				}
				sbp.ket = sbp.cursor;
				switch (among_var) {
					case 0 :
						break lab1;
					case 1 :
						sbp.slice_from("a");
						break;
					case 2 :
						sbp.slice_from("e");
						break;
					case 3 :
						sbp.slice_from("i");
						break;
					case 4 :
						sbp.slice_from("o");
						break;
					case 5 :
						sbp.slice_from("u");
						break;
					case 6 :
						if (sbp.cursor >= sbp.limit) {
							break lab1;
						}
						sbp.cursor++;
						break;
				}
				continue replab0;
			} while (false);
			sbp.cursor = v_2;
			break replab0;
		}
		sbp.cursor = v_1;
		v_3 = sbp.cursor;
		lab2 : do {
			sbp.bra = sbp.cursor;
			if (!(sbp.eq_s(1, "y"))) {
				sbp.cursor = v_3;
				break lab2;
			}
			sbp.ket = sbp.cursor;
			sbp.slice_from("Y");
		} while (false);
		replab3 : while (true) {
			v_4 = sbp.cursor;
			lab4 : do {
				golab5 : while (true) {
					v_5 = sbp.cursor;
					lab6 : do {
						if (!(sbp.in_grouping(g_v, 97, 232))) {
							break lab6;
						}
						sbp.bra = sbp.cursor;
						lab7 : do {
							v_6 = sbp.cursor;
							lab8 : do {
								if (!(sbp.eq_s(1, "i"))) {
									break lab8;
								}
								sbp.ket = sbp.cursor;
								if (!(sbp.in_grouping(g_v, 97, 232))) {
									break lab8;
								}
								sbp.slice_from("I");
								break lab7;
							} while (false);
							sbp.cursor = v_6;
							if (!(sbp.eq_s(1, "y"))) {
								break lab6;
							}
							sbp.ket = sbp.cursor;
							sbp.slice_from("Y");
						} while (false);
						sbp.cursor = v_5;
						break golab5;
					} while (false);
					sbp.cursor = v_5;
					if (sbp.cursor >= sbp.limit) {
						break lab4;
					}
					sbp.cursor++;
				}
				continue replab3;
			} while (false);
			sbp.cursor = v_4;
			break replab3;
		}
		return true;
	}
	function r_mark_regions() {
		I_p1 = sbp.limit;
		I_p2 = sbp.limit;
		golab0 : while (true) {
			lab1 : do {
				if (!(sbp.in_grouping(g_v, 97, 232))) {
					break lab1;
				}
				break golab0;
			} while (false);
			if (sbp.cursor >= sbp.limit) {
				return false;
			}
			sbp.cursor++;
		}
		golab2 : while (true) {
			lab3 : do {
				if (!(sbp.out_grouping(g_v, 97, 232))) {
					break lab3;
				}
				break golab2;
			} while (false);
			if (sbp.cursor >= sbp.limit) {
				return false;
			}
			sbp.cursor++;
		}
		I_p1 = sbp.cursor;
		lab4 : do {
			if (!(I_p1 < 3)) {
				break lab4;
			}
			I_p1 = 3;
		} while (false);
		golab5 : while (true) {
			lab6 : do {
				if (!(sbp.in_grouping(g_v, 97, 232))) {
					break lab6;
				}
				break golab5;
			} while (false);
			if (sbp.cursor >= sbp.limit) {
				return false;
			}
			sbp.cursor++;
		}
		golab7 : while (true) {
			lab8 : do {
				if (!(sbp.out_grouping(g_v, 97, 232))) {
					break lab8;
				}
				break golab7;
			} while (false);
			if (sbp.cursor >= sbp.limit) {
				return false;
			}
			sbp.cursor++;
		}
		I_p2 = sbp.cursor;
		return true;
	}
	function r_postlude() {
		var among_var, v_1;
		replab0 : while (true) {
			v_1 = sbp.cursor;
			lab1 : do {
				sbp.bra = sbp.cursor;
				among_var = sbp.find_among(a_1, 3);
				if (among_var == 0) {
					break lab1;
				}
				sbp.ket = sbp.cursor;
				switch (among_var) {
					case 0 :
						break lab1;
					case 1 :
						sbp.slice_from("y");
						break;
					case 2 :
						sbp.slice_from("i");
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
	function r_undouble() {
		var v_1;
		v_1 = sbp.limit - sbp.cursor;
		if (sbp.find_among_b(a_2, 3) == 0) {
			return false;
		}
		sbp.cursor = sbp.limit - v_1;
		sbp.ket = sbp.cursor;
		if (sbp.cursor <= sbp.limit_backward) {
			return false;
		}
		sbp.cursor--;
		sbp.bra = sbp.cursor;
		sbp.slice_del();
		return true;
	}
	function r_e_ending() {
		var v_1;
		B_e_found = false;
		sbp.ket = sbp.cursor;
		if (!(sbp.eq_s_b(1, "e"))) {
			return false;
		}
		sbp.bra = sbp.cursor;
		if (!r_R1()) {
			return false;
		}
		v_1 = sbp.limit - sbp.cursor;
		if (!(sbp.out_grouping_b(g_v, 97, 232))) {
			return false;
		}
		sbp.cursor = sbp.limit - v_1;
		sbp.slice_del();
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
		v_1 = sbp.limit - sbp.cursor;
		if (!(sbp.out_grouping_b(g_v, 97, 232))) {
			return false;
		}
		sbp.cursor = sbp.limit - v_1;
		v_2 = sbp.limit - sbp.cursor;
		lab0 : do {
			if (!(sbp.eq_s_b(3, "gem"))) {
				break lab0;
			}
			return false;
		} while (false);
		sbp.cursor = sbp.limit - v_2;
		sbp.slice_del();
		if (!r_undouble()) {
			return false;
		}
		return true;
	}
	function r_standard_suffix() {
		var among_var, v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10;
		v_1 = sbp.limit - sbp.cursor;
		lab0 : do {
			sbp.ket = sbp.cursor;
			among_var = sbp.find_among_b(a_3, 5);
			if (among_var == 0) {
				break lab0;
			}
			sbp.bra = sbp.cursor;
			switch (among_var) {
				case 0 :
					break lab0;
				case 1 :
					if (!r_R1()) {
						break lab0;
					}
					sbp.slice_from("heid");
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
					if (!(sbp.out_grouping_b(g_v_j, 97, 232))) {
						break lab0;
					}
					sbp.slice_del();
					break;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_1;
		v_2 = sbp.limit - sbp.cursor;
		lab1 : do {
			if (!r_e_ending()) {
				break lab1;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_2;
		v_3 = sbp.limit - sbp.cursor;
		lab2 : do {
			sbp.ket = sbp.cursor;
			if (!(sbp.eq_s_b(4, "heid"))) {
				break lab2;
			}
			sbp.bra = sbp.cursor;
			if (!r_R2()) {
				break lab2;
			}
			v_4 = sbp.limit - sbp.cursor;
			lab3 : do {
				if (!(sbp.eq_s_b(1, "c"))) {
					break lab3;
				}
				break lab2;
			} while (false);
			sbp.cursor = sbp.limit - v_4;
			sbp.slice_del();
			sbp.ket = sbp.cursor;
			if (!(sbp.eq_s_b(2, "en"))) {
				break lab2;
			}
			sbp.bra = sbp.cursor;
			if (!r_en_ending()) {
				break lab2;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_3;
		v_5 = sbp.limit - sbp.cursor;
		lab4 : do {
			sbp.ket = sbp.cursor;
			among_var = sbp.find_among_b(a_4, 6);
			if (among_var == 0) {
				break lab4;
			}
			sbp.bra = sbp.cursor;
			switch (among_var) {
				case 0 :
					break lab4;
				case 1 :
					if (!r_R2()) {
						break lab4;
					}
					sbp.slice_del();
					lab5 : do {
						v_6 = sbp.limit - sbp.cursor;
						lab6 : do {
							sbp.ket = sbp.cursor;
							if (!(sbp.eq_s_b(2, "ig"))) {
								break lab6;
							}
							sbp.bra = sbp.cursor;
							if (!r_R2()) {
								break lab6;
							}
							v_7 = sbp.limit - sbp.cursor;
							lab7 : do {
								if (!(sbp.eq_s_b(1, "e"))) {
									break lab7;
								}
								break lab6;
							} while (false);
							sbp.cursor = sbp.limit - v_7;
							sbp.slice_del();
							break lab5;
						} while (false);
						sbp.cursor = sbp.limit - v_6;
						if (!r_undouble()) {
							break lab4;
						}
					} while (false);
					break;
				case 2 :
					if (!r_R2()) {
						break lab4;
					}
					v_8 = sbp.limit - sbp.cursor;
					lab8 : do {
						if (!(sbp.eq_s_b(1, "e"))) {
							break lab8;
						}
						break lab4;
					} while (false);
					sbp.cursor = sbp.limit - v_8;
					sbp.slice_del();
					break;
				case 3 :
					if (!r_R2()) {
						break lab4;
					}
					sbp.slice_del();
					if (!r_e_ending()) {
						break lab4;
					}
					break;
				case 4 :
					if (!r_R2()) {
						break lab4;
					}
					sbp.slice_del();
					break;
				case 5 :
					if (!r_R2()) {
						break lab4;
					}
					if (!(B_e_found)) {
						break lab4;
					}
					sbp.slice_del();
					break;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_5;
		v_9 = sbp.limit - sbp.cursor;
		lab9 : do {
			if (!(sbp.out_grouping_b(g_v_I, 73, 232))) {
				break lab9;
			}
			v_10 = sbp.limit - sbp.cursor;
			if (sbp.find_among_b(a_5, 4) == 0) {
				break lab9;
			}
			if (!(sbp.out_grouping_b(g_v, 97, 232))) {
				break lab9;
			}
			sbp.cursor = sbp.limit - v_10;
			sbp.ket = sbp.cursor;
			if (sbp.cursor <= sbp.limit_backward) {
				break lab9;
			}
			sbp.cursor--;
			sbp.bra = sbp.cursor;
			sbp.slice_del();
		} while (false);
		sbp.cursor = sbp.limit - v_9;
		return true;
	}
	this.stem = function() {
		var v_1, v_2, v_3, v_4;
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
			if (!r_standard_suffix()) {
				break lab2;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_3;
		sbp.cursor = sbp.limit_backward;
		v_4 = sbp.cursor;
		lab3 : do {
			if (!r_postlude()) {
				break lab3;
			}
		} while (false);
		sbp.cursor = v_4;
		return true;
	}
}