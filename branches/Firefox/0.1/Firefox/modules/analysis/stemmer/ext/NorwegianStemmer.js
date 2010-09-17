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

const EXPORTED_SYMBOLS = ['NorwegianStemmer'];

Components.utils.import("resource://urim/analysis/stemmer/Among.js");
Components.utils.import("resource://urim/analysis/stemmer/SnowballProgram.js");

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
		var among_var, v_1, v_2, v_3;

		v_1 = snowballProgram.limit - snowballProgram.cursor;
		if (snowballProgram.cursor < I_p1) {
			return false;
		}
		snowballProgram.cursor = I_p1;
		v_2 = snowballProgram.limit_backward;
		snowballProgram.limit_backward = snowballProgram.cursor;
		snowballProgram.cursor = snowballProgram.limit - v_1;
		snowballProgram.ket = snowballProgram.cursor;
		among_var = snowballProgram.find_among_b(a_0, 29);
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
				lab0 : do {
					v_3 = snowballProgram.limit - snowballProgram.cursor;
					lab1 : do {
						if (!(snowballProgram
								.in_grouping_b(g_s_ending, 98, 122))) {
							break lab1;
						}
						break lab0;
					} while (false);
					snowballProgram.cursor = snowballProgram.limit - v_3;
					if (!(snowballProgram.eq_s_b(1, "k"))) {
						return false;
					}
					if (!(snowballProgram.out_grouping_b(g_v, 97, 248))) {
						return false;
					}
				} while (false);
				snowballProgram.slice_del();
				break;
			case 3 :
				snowballProgram.slice_from("er");
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
		if (snowballProgram.find_among_b(a_1, 2) == 0) {
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
		among_var = snowballProgram.find_among_b(a_2, 11);
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
		}

		return true;
	}

	this.stem = function() {
		var v_1, v_2, v_3, v_4;

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
		snowballProgram.cursor = snowballProgram.limit_backward;

		return true;
	}
}