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

	var snowballProgram = new SnowballProgram();

	this.setCurrent = function(word) {
		snowballProgram.setCurrent(word);
	};

	this.getCurrent = function() {
		return snowballProgram.getCurrent()
	};

	function r_mark_regions() {

		var v_1, v_2;
		I_p1 = snowballProgram.limit;
		v_1 = snowballProgram.cursor;
		var c = snowballProgram.cursor + 3;
		if (0 > c || c > snowballProgram.limit) {
			return false;
		}
		snowballProgram.cursor = c;
		I_x = snowballProgram.cursor;
		snowballProgram.cursor = v_1;
		golab0 : while (true) {
			v_2 = snowballProgram.cursor;
			lab1 : do {
				if (!(snowballProgram.in_grouping(g_v, 97, 248))) {
					break lab1;
				}
				snowballProgram.cursor = v_2;
				break golab0;
			} while (false);
			snowballProgram.cursor = v_2;
			if (snowballProgram.cursor >= snowballProgram.limit) {
				return false;
			}
			snowballProgram.cursor++;
		}
		golab2 : while (true) {
			lab3 : do {
				if (!(snowballProgram.out_grouping(g_v, 97, 248))) {
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

		return true;
	}

	function r_main_suffix() {
		var among_var, v_1, v_2;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_p1) {
			return false;
		}
		snowballProgram.cursor = I_p1;
		v_2 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_1;
		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_0, 32);
		if (among_var == 0) {
			snowballProgram.limit_backward = v_2;
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		snowballProgram.limit_backward = v_2;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				snowballProgram.slice_del();
				break;
			case 2 :
				if (!(snowballProgram.in_grouping_b(g_s_ending, 97, 229))) {
					return false;
				}
				snowballProgram.slice_del();
				break;
		}

		return true;
	}

	function r_consonant_pair() {
		var v_1, v_2, v_3;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		v_2 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_p1) {
			return false;
		}
		snowballProgram.cursor = I_p1;
		v_3 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_2;
		snowballProgram.ket = snowballProgram.cursor;
		if (snowballProgram.find_among_b(a_1, 4) == 0) {
			snowballProgram.limit_backward = v_3;
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		snowballProgram.limit_backward = v_3;
		snowballProgram.cursor = snowballProgram.limit - v_1;
		if (snowballProgram.cursor <= snowballProgram.limit_backward) {
			return false;
		}
		snowballProgram.cursor--;
		snowballProgram.bra = snowballProgram.cursor;
		snowballProgram.slice_del();

		return true;
	}

	function r_other_suffix() {
		var among_var, v_1, v_2, v_3, v_4;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		lab0 : do {
			snowballProgram.ket = snowballProgram.cursor;
			if (!(snowballProgram.eq_s_b(2, "st"))) {
				break lab0;
			}
			snowballProgram.bra = snowballProgram.cursor;
			if (!(snowballProgram.eq_s_b(2, "ig"))) {
				break lab0;
			}
			snowballProgram.slice_del();
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_1;
		v_2 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_p1) {
			return false;
		}
		snowballProgram.cursor = I_p1;
		v_3 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_2;
		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_2, 5);
		if (among_var == 0) {
			snowballProgram.limit_backward = v_3;
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		snowballProgram.limit_backward = v_3;
		switch (among_var) {
			case 0 :
				return false;
			case 1 :
				snowballProgram.slice_del();
				v_4 = snowballProgram.limit - snowballProgram.cursor;
				lab1 : do {
					if (!r_consonant_pair()) {
						break lab1;
					}
				} while (false);
				snowballProgram.cursor = snowballProgram.limit - v_4;
				break;
			case 2 :
				snowballProgram.slice_from("l\u00F8s");
				break;
		}

		return true;
	}

	function r_undouble() {
		var v_1, v_2;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_p1) {
			return false;
		}
		snowballProgram.cursor = I_p1;
		v_2 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_1;
		snowballProgram.ket = snowballProgram.cursor;
		if (!(snowballProgram.out_grouping_b(g_v, 97, 248))) {
			snowballProgram.limit_backward = v_2;
			return false;
		}
		snowballProgram.bra = snowballProgram.cursor;
		S_ch = snowballProgram.slice_to(S_ch);
		snowballProgram.limit_backward = v_2;
		if (!(snowballProgram.eq_v_b(S_ch))) {
			return false;
		}
		snowballProgram.slice_del();

		return true;
	}

	this.stem = function() {
		var v_1, v_2, v_3, v_4, v_5;

		v_1 = snowballProgram.cursor;
		lab0 : do {
			if (!r_mark_regions()) {
				break lab0;
			}
		} while (false);
		snowballProgram.cursor = v_1;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit;
		v_2 = snowballProgram.limit - snowballProgram.cursor;
		lab1 : do {
			if (!r_main_suffix()) {
				break lab1;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_2;
		v_3 = snowballProgram.limit - snowballProgram.cursor;
		lab2 : do {
			if (!r_consonant_pair()) {
				break lab2;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_3;
		v_4 = snowballProgram.limit - snowballProgram.cursor;
		lab3 : do {
			if (!r_other_suffix()) {
				break lab3;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_4;
		v_5 = snowballProgram.limit - snowballProgram.cursor;
		lab4 : do {
			if (!r_undouble()) {
				break lab4;
			}
		} while (false);
		snowballProgram.cursor = snowballProgram.limit - v_5;
		snowballProgram.cursor = snowballProgram.limit_backward;

		return true;
	}
}
