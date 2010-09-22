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
	var sbp = new SnowballProgram();
	this.setCurrent = function(word) {
		sbp.setCurrent(word);
	};
	this.getCurrent = function() {
		return sbp.getCurrent();
	};
	function r_prelude() {
		var v_1, v_2, v_3, v_4, v_5, v_6;
		v_1 = sbp.cursor;
		replab0 : while (true) {
			v_2 = sbp.cursor;
			lab1 : do {
				lab2 : do {
					v_3 = sbp.cursor;
					lab3 : do {
						sbp.bra = sbp.cursor;
						if (!(sbp.eq_s(1, "\u00DF"))) {
							break lab3;
						}
						sbp.ket = sbp.cursor;
						sbp.slice_from("ss");
						break lab2;
					} while (false);
					sbp.cursor = v_3;
					if (sbp.cursor >= sbp.limit) {
						break lab1;
					}
					sbp.cursor++;
				} while (false);
				continue replab0;
			} while (false);
			sbp.cursor = v_2;
			break replab0;
		}
		sbp.cursor = v_1;
		replab4 : while (true) {
			v_4 = sbp.cursor;
			lab5 : do {
				golab6 : while (true) {
					v_5 = sbp.cursor;
					lab7 : do {
						if (!(sbp.in_grouping(g_v, 97, 252))) {
							break lab7;
						}
						sbp.bra = sbp.cursor;
						lab8 : do {
							v_6 = sbp.cursor;
							lab9 : do {
								if (!(sbp.eq_s(1, "u"))) {
									break lab9;
								}
								sbp.ket = sbp.cursor;
								if (!(sbp.in_grouping(g_v, 97, 252))) {
									break lab9;
								}
								sbp.slice_from("U");
								break lab8;
							} while (false);
							sbp.cursor = v_6;
							if (!(sbp.eq_s(1, "y"))) {
								break lab7;
							}
							sbp.ket = sbp.cursor;
							if (!(sbp.in_grouping(g_v, 97, 252))) {
								break lab7;
							}
							sbp.slice_from("Y");
						} while (false);
						sbp.cursor = v_5;
						break golab6;
					} while (false);
					sbp.cursor = v_5;
					if (sbp.cursor >= sbp.limit) {
						break lab5;
					}
					sbp.cursor++;
				}
				continue replab4;
			} while (false);
			sbp.cursor = v_4;
			break replab4;
		}
		return true;
	}
	function r_mark_regions() {
		var v_1;
		I_p1 = sbp.limit;
		I_p2 = sbp.limit;
		v_1 = sbp.cursor;
		var c = sbp.cursor + 3;
		if (0 > c || c > sbp.limit) {
			return false;
		}
		sbp.cursor = c;
		I_x = sbp.cursor;
		sbp.cursor = v_1;
		golab0 : while (true) {
			lab1 : do {
				if (!(sbp.in_grouping(g_v, 97, 252))) {
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
				if (!(sbp.out_grouping(g_v, 97, 252))) {
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
			if (!(I_p1 < I_x)) {
				break lab4;
			}
			I_p1 = I_x;
		} while (false);
		golab5 : while (true) {
			lab6 : do {
				if (!(sbp.in_grouping(g_v, 97, 252))) {
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
				if (!(sbp.out_grouping(g_v, 97, 252))) {
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
		var among_var;
		var v_1;
		replab0 : while (true) {
			v_1 = sbp.cursor;
			lab1 : do {
				sbp.bra = sbp.cursor;
				among_var = sbp.find_among(a_0, 6);
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
						sbp.slice_from("u");
						break;
					case 3 :
						sbp.slice_from("a");
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
	function r_standard_suffix() {
		var among_var, v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8, v_9, v_10;
		v_1 = sbp.limit - sbp.cursor;
		lab0 : do {
			sbp.ket = sbp.cursor;
			among_var = sbp.find_among_b(a_1, 7);
			if (among_var == 0) {
				break lab0;
			}
			sbp.bra = sbp.cursor;
			if (!r_R1()) {
				break lab0;
			}
			switch (among_var) {
				case 0 :
					break lab0;
				case 1 :
					sbp.slice_del();
					break;
				case 2 :
					sbp.slice_del();
					v_2 = sbp.limit - sbp.cursor;
					lab1 : do {
						sbp.ket = sbp.cursor;
						if (!(sbp.eq_s_b(1, "s"))) {
							sbp.cursor = sbp.limit - v_2;
							break lab1;
						}
						sbp.bra = sbp.cursor;
						if (!(sbp.eq_s_b(3, "nis"))) {
							sbp.cursor = sbp.limit - v_2;
							break lab1;
						}
						sbp.slice_del();
					} while (false);
					break;
				case 3 :
					if (!(sbp.in_grouping_b(g_s_ending, 98, 116))) {
						break lab0;
					}
					sbp.slice_del();
					break;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_1;
		v_3 = sbp.limit - sbp.cursor;
		lab2 : do {
			sbp.ket = sbp.cursor;
			among_var = sbp.find_among_b(a_2, 4);
			if (among_var == 0) {
				break lab2;
			}
			sbp.bra = sbp.cursor;
			if (!r_R1()) {
				break lab2;
			}
			switch (among_var) {
				case 0 :
					break lab2;
				case 1 :
					sbp.slice_del();
					break;
				case 2 :
					if (!(sbp.in_grouping_b(g_st_ending, 98, 116))) {
						break lab2;
					}
					var c = sbp.cursor - 3;
					if (sbp.limit_backward > c || c > sbp.limit) {
						break lab2;
					}
					sbp.cursor = c;
					sbp.slice_del();
					break;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_3;
		v_4 = sbp.limit - sbp.cursor;
		lab3 : do {
			sbp.ket = sbp.cursor;
			among_var = sbp.find_among_b(a_4, 8);
			if (among_var == 0) {
				break lab3;
			}
			sbp.bra = sbp.cursor;
			if (!r_R2()) {
				break lab3;
			}
			switch (among_var) {
				case 0 :
					break lab3;
				case 1 :
					sbp.slice_del();
					v_5 = sbp.limit - sbp.cursor;
					lab4 : do {
						sbp.ket = sbp.cursor;
						if (!(sbp.eq_s_b(2, "ig"))) {
							sbp.cursor = sbp.limit - v_5;
							break lab4;
						}
						sbp.bra = sbp.cursor;
						v_6 = sbp.limit - sbp.cursor;
						lab5 : do {
							if (!(sbp.eq_s_b(1, "e"))) {
								break lab5;
							}
							sbp.cursor = sbp.limit - v_5;
							break lab4;
						} while (false);
						sbp.cursor = sbp.limit - v_6;
						if (!r_R2()) {
							sbp.cursor = sbp.limit - v_5;
							break lab4;
						}
						sbp.slice_del();
					} while (false);
					break;
				case 2 :
					v_7 = sbp.limit - sbp.cursor;
					lab6 : do {
						if (!(sbp.eq_s_b(1, "e"))) {
							break lab6;
						}
						break lab3;
					} while (false);
					sbp.cursor = sbp.limit - v_7;
					sbp.slice_del();
					break;
				case 3 :
					sbp.slice_del();
					v_8 = sbp.limit - sbp.cursor;
					lab7 : do {
						sbp.ket = sbp.cursor;
						lab8 : do {
							v_9 = sbp.limit - sbp.cursor;
							lab9 : do {
								if (!(sbp.eq_s_b(2, "er"))) {
									break lab9;
								}
								break lab8;
							} while (false);
							sbp.cursor = sbp.limit - v_9;
							if (!(sbp.eq_s_b(2, "en"))) {
								sbp.cursor = sbp.limit - v_8;
								break lab7;
							}
						} while (false);
						sbp.bra = sbp.cursor;
						if (!r_R1()) {
							sbp.cursor = sbp.limit - v_8;
							break lab7;
						}
						sbp.slice_del();
					} while (false);
					break;
				case 4 :
					sbp.slice_del();
					v_10 = sbp.limit - sbp.cursor;
					lab10 : do {
						sbp.ket = sbp.cursor;
						among_var = sbp.find_among_b(a_3, 2);
						if (among_var == 0) {
							sbp.cursor = sbp.limit - v_10;
							break lab10;
						}
						sbp.bra = sbp.cursor;
						if (!r_R2()) {
							sbp.cursor = sbp.limit - v_10;
							break lab10;
						}
						switch (among_var) {
							case 0 :
								sbp.cursor = sbp.limit - v_10;
								break lab10;
							case 1 :
								sbp.slice_del();
								break;
						}
					} while (false);
					break;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_4;
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