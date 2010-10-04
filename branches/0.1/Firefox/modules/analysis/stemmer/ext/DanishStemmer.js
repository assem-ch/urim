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

const EXPORTED_SYMBOLS = ['DanishStemmer'];

Components.utils.import("resource://urim/analysis/stemmer/Among.js");
Components.utils.import("resource://urim/analysis/stemmer/SnowballProgram.js");

function DanishStemmer() {
	var a_0 = [new Among("hed", -1, 1), new Among("ethed", 0, 1),
			new Among("ered", -1, 1), new Among("e", -1, 1),
			new Among("erede", 3, 1), new Among("ende", 3, 1),
			new Among("erende", 5, 1), new Among("ene", 3, 1),
			new Among("erne", 3, 1), new Among("ere", 3, 1),
			new Among("en", -1, 1), new Among("heden", 10, 1),
			new Among("eren", 10, 1), new Among("er", -1, 1),
			new Among("heder", 13, 1), new Among("erer", 13, 1),
			new Among("s", -1, 2), new Among("heds", 16, 1),
			new Among("es", 16, 1), new Among("endes", 18, 1),
			new Among("erendes", 19, 1), new Among("enes", 18, 1),
			new Among("ernes", 18, 1), new Among("eres", 18, 1),
			new Among("ens", 16, 1), new Among("hedens", 24, 1),
			new Among("erens", 24, 1), new Among("ers", 16, 1),
			new Among("ets", 16, 1), new Among("erets", 28, 1),
			new Among("et", -1, 1), new Among("eret", 30, 1)];
	var a_1 = [new Among("gd", -1, -1), new Among("dt", -1, -1),
			new Among("gt", -1, -1), new Among("kt", -1, -1)];
	var a_2 = [new Among("ig", -1, 1), new Among("lig", 0, 1),
			new Among("elig", 1, 1), new Among("els", -1, 1),
			new Among("l\u00F8st", -1, 2)];
	var g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128];
	var g_s_ending = [239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16];
	var I_x, I_p1, S_ch;
	var sbp = new SnowballProgram();
	this.setCurrent = function(word) {
		sbp.setCurrent(word);
	};
	this.getCurrent = function() {
		return sbp.getCurrent();
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
		among_var = sbp.find_among_b(a_0, 32);
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
				if (!(sbp.in_grouping_b(g_s_ending, 97, 229))) {
					return false;
				}
				sbp.slice_del();
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
		if (sbp.find_among_b(a_1, 4) == 0) {
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
		var among_var, v_1, v_2, v_3, v_4;
		v_1 = sbp.limit - sbp.cursor;
		lab0 : do {
			sbp.ket = sbp.cursor;
			if (!(sbp.eq_s_b(2, "st"))) {
				break lab0;
			}
			sbp.bra = sbp.cursor;
			if (!(sbp.eq_s_b(2, "ig"))) {
				break lab0;
			}
			sbp.slice_del();
		} while (false);
		sbp.cursor = sbp.limit - v_1;
		v_2 = sbp.limit - sbp.cursor;
		if (sbp.cursor < I_p1) {
			return false;
		}
		sbp.cursor = I_p1;
		v_3 = sbp.limit_backward;
		sbp.limit_backward = sbp.cursor;
		sbp.cursor = sbp.limit - v_2;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_2, 5);
		if (among_var == 0) {
			sbp.limit_backward = v_3;
			return false;
		}
		sbp.bra = sbp.cursor;
		sbp.limit_backward = v_3;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				sbp.slice_del();
				v_4 = sbp.limit - sbp.cursor;
				lab1 : do {
					if (!r_consonant_pair()) {
						break lab1;
					}
				} while (false);
				sbp.cursor = sbp.limit - v_4;
				break;
			case 2 :
				sbp.slice_from("l\u00F8s");
				break;
		}
		return true;
	}
	function r_undouble() {
		var v_1, v_2;
		v_1 = sbp.limit - sbp.cursor;
		if (sbp.cursor < I_p1) {
			return false;
		}
		sbp.cursor = I_p1;
		v_2 = sbp.limit_backward;
		sbp.limit_backward = sbp.cursor;
		sbp.cursor = sbp.limit - v_1;
		sbp.ket = sbp.cursor;
		if (!(sbp.out_grouping_b(g_v, 97, 248))) {
			sbp.limit_backward = v_2;
			return false;
		}
		sbp.bra = sbp.cursor;
		S_ch = sbp.slice_to(S_ch);
		sbp.limit_backward = v_2;
		if (!(sbp.eq_v_b(S_ch))) {
			return false;
		}
		sbp.slice_del();
		return true;
	}
	this.stem = function() {
		var v_1, v_2, v_3, v_4, v_5;
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
		v_5 = sbp.limit - sbp.cursor;
		lab4 : do {
			if (!r_undouble()) {
				break lab4;
			}
		} while (false);
		sbp.cursor = sbp.limit - v_5;
		sbp.cursor = sbp.limit_backward;
		return true;
	}
}