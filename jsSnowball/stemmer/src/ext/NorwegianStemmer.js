function NorwegianStemmer() {
	var a_0 = [new Among("a", -1, 1), new Among("e", -1, 1),
			new Among("ede", 1, 1), new Among("ande", 1, 1),
			new Among("ende", 1, 1), new Among("ane", 1, 1),
			new Among("ene", 1, 1), new Among("hetene", 6, 1),
			new Among("erte", 1, 3), new Among("en", -1, 1),
			new Among("heten", 9, 1), new Among("ar", -1, 1),
			new Among("er", -1, 1), new Among("heter", 12, 1),
			new Among("s", -1, 2), new Among("as", 14, 1),
			new Among("es", 14, 1), new Among("edes", 16, 1),
			new Among("endes", 16, 1), new Among("enes", 16, 1),
			new Among("hetenes", 19, 1), new Among("ens", 14, 1),
			new Among("hetens", 21, 1), new Among("ers", 14, 1),
			new Among("ets", 14, 1), new Among("et", -1, 1),
			new Among("het", 25, 1), new Among("ert", -1, 3),
			new Among("ast", -1, 1)];
	var a_1 = [new Among("dt", -1, -1), new Among("vt", -1, -1)];
	var a_2 = [new Among("leg", -1, 1), new Among("eleg", 0, 1),
			new Among("ig", -1, 1), new Among("eig", 2, 1),
			new Among("lig", 2, 1), new Among("elig", 4, 1),
			new Among("els", -1, 1), new Among("lov", -1, 1),
			new Among("elov", 7, 1), new Among("slov", 7, 1),
			new Among("hetslov", 9, 1)];
	var g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128];
	var g_s_ending = [119, 125, 149, 1];
	var I_x, I_p1;
	var sbp = new SnowballProgram();
	this.setCurrent = function(word) {
		sbp.setCurrent(word);
	};
	this.getCurrent = function() {
		return sbp.getCurrent()
	};
	function r_mark_regions() {
		var v_1, v_2;
		I_p1 = sbp.limit;
		v_1 = sbp.cursor;
		var c = sbp.cursor + 3;
		if (0 > c || c > sbp.limit) {
			return false;
		}
		sbp.cursor = c;
		I_x = sbp.cursor;
		sbp.cursor = v_1;
		golab0 : while (true) {
			v_2 = sbp.cursor;
			lab1 : do {
				if (!(sbp.in_grouping(g_v, 97, 248))) {
					break lab1;
				}
				sbp.cursor = v_2;
				break golab0;
			} while (false);
			sbp.cursor = v_2;
			if (sbp.cursor >= sbp.limit) {
				return false;
			}
			sbp.cursor++;
		}
		golab2 : while (true) {
			lab3 : do {
				if (!(sbp.out_grouping(g_v, 97, 248))) {
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
		return true;
	}
	function r_main_suffix() {
		var among_var, v_1, v_2, v_3;
		v_1 = sbp.limit - sbp.cursor;
		if (sbp.cursor < I_p1) {
			return false;
		}
		sbp.cursor = I_p1;
		v_2 = sbp.limit_backward;
		sbp.limit_backward = sbp.cursor;
		sbp.cursor = sbp.limit - v_1;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_0, 29);
		if (among_var == 0) {
			sbp.limit_backward = v_2;
			return false;
		}
		sbp.bra = sbp.cursor;
		sbp.limit_backward = v_2;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				sbp.slice_del();
				break;
			case 2 :
				lab0 : do {
					v_3 = sbp.limit - sbp.cursor;
					lab1 : do {
						if (!(snowballProgram
								.in_grouping_b(g_s_ending, 98, 122))) {
							break lab1;
						}
						break lab0;
					} while (false);
					sbp.cursor = sbp.limit - v_3;
					if (!(sbp.eq_s_b(1, "k"))) {
						return false;
					}
					if (!(sbp.out_grouping_b(g_v, 97, 248))) {
						return false;
					}
				} while (false);
				sbp.slice_del();
				break;
			case 3 :
				sbp.slice_from("er");
				break;
		}
		return true;
	}
	function r_consonant_pair() {
		var v_1, v_2, v_3;
		v_1 = sbp.limit - sbp.cursor;
		v_2 = sbp.limit - sbp.cursor;
		if (sbp.cursor < I_p1) {
			return false;
		}
		sbp.cursor = I_p1;
		v_3 = sbp.limit_backward;
		sbp.limit_backward = sbp.cursor;
		sbp.cursor = sbp.limit - v_2;
		sbp.ket = sbp.cursor;
		if (sbp.find_among_b(a_1, 2) == 0) {
			sbp.limit_backward = v_3;
			return false;
		}
		sbp.bra = sbp.cursor;
		sbp.limit_backward = v_3;
		sbp.cursor = sbp.limit - v_1;
		if (sbp.cursor <= sbp.limit_backward) {
			return false;
		}
		sbp.cursor--;
		sbp.bra = sbp.cursor;
		sbp.slice_del();
		return true;
	}
	function r_other_suffix() {
		var among_var, v_1, v_2;
		v_1 = sbp.limit - sbp.cursor;
		if (sbp.cursor < I_p1) {
			return false;
		}
		sbp.cursor = I_p1;
		v_2 = sbp.limit_backward;
		sbp.limit_backward = sbp.cursor;
		sbp.cursor = sbp.limit - v_1;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_2, 11);
		if (among_var == 0) {
			sbp.limit_backward = v_2;
			return false;
		}
		sbp.bra = sbp.cursor;
		sbp.limit_backward = v_2;
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
		var v_1, v_2, v_3, v_4;
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
		lab1 : do {
			if (!r_main_suffix()) {
				break lab1;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_2;
		v_3 = sbp.limit - sbp.cursor;
		lab2 : do {
			if (!r_consonant_pair()) {
				break lab2;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_3;
		v_4 = sbp.limit - sbp.cursor;
		lab3 : do {
			if (!r_other_suffix()) {
				break lab3;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_4;
		sbp.cursor = sbp.limit_backward;
		return true;
	}
}