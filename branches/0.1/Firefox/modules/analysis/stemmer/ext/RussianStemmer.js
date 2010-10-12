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

const EXPORTED_SYMBOLS = ['RussianStemmer'];

Components.utils.import("resource://urim/analysis/stemmer/Among.js");
Components.utils.import("resource://urim/analysis/stemmer/SnowballProgram.js");

function RussianStemmer() {
	var a_0 = [new Among("\u0432", -1, 1), new Among("\u0438\u0432", 0, 2),
			new Among("\u044B\u0432", 0, 2),
			new Among("\u0432\u0448\u0438", -1, 1),
			new Among("\u0438\u0432\u0448\u0438", 3, 2),
			new Among("\u044B\u0432\u0448\u0438", 3, 2),
			new Among("\u0432\u0448\u0438\u0441\u044C", -1, 1),
			new Among("\u0438\u0432\u0448\u0438\u0441\u044C", 6, 2),
			new Among("\u044B\u0432\u0448\u0438\u0441\u044C", 6, 2)], a_1 = [
			new Among("\u0435\u0435", -1, 1), new Among("\u0438\u0435", -1, 1),
			new Among("\u043E\u0435", -1, 1), new Among("\u044B\u0435", -1, 1),
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
			new Among("\u0430\u044F", -1, 1), new Among("\u044F\u044F", -1, 1)], a_2 = [
			new Among("\u0435\u043C", -1, 1), new Among("\u043D\u043D", -1, 1),
			new Among("\u0432\u0448", -1, 1),
			new Among("\u0438\u0432\u0448", 2, 2),
			new Among("\u044B\u0432\u0448", 2, 2), new Among("\u0449", -1, 1),
			new Among("\u044E\u0449", 5, 1),
			new Among("\u0443\u044E\u0449", 6, 2)], a_3 = [
			new Among("\u0441\u044C", -1, 1), new Among("\u0441\u044F", -1, 1)], a_4 = [
			new Among("\u043B\u0430", -1, 1),
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
			new Among("\u0443\u044E", 44, 2)], a_5 = [
			new Among("\u0430", -1, 1), new Among("\u0435\u0432", -1, 1),
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
			new Among("\u044C\u044F", 33, 1)], a_6 = [
			new Among("\u043E\u0441\u0442", -1, 1),
			new Among("\u043E\u0441\u0442\u044C", -1, 1)], a_7 = [
			new Among("\u0435\u0439\u0448\u0435", -1, 1),
			new Among("\u043D", -1, 2), new Among("\u0435\u0439\u0448", -1, 1),
			new Among("\u044C", -1, 3)], g_v = [33, 65, 8, 232], I_p2, I_pV, sbp = new SnowballProgram();
	this.setCurrent = function(word) {
		sbp.setCurrent(word);
	};
	this.getCurrent = function() {
		return sbp.getCurrent();
	};
	function habr3() {
		while (!sbp.in_grouping(g_v, 1072, 1103)) {
			if (sbp.cursor >= sbp.limit)
				return false;
			sbp.cursor++;
		}
		return true;
	}
	function habr4() {
		while (!sbp.out_grouping(g_v, 1072, 1103)) {
			if (sbp.cursor >= sbp.limit)
				return false;
			sbp.cursor++;
		}
		return true;
	}
	function r_mark_regions() {
		I_pV = sbp.limit;
		I_p2 = I_pV;
		if (habr3()) {
			I_pV = sbp.cursor;
			if (habr4())
				if (habr3())
					if (habr4())
						I_p2 = sbp.cursor;
		}
	}
	function r_R2() {
		return I_p2 <= sbp.cursor;
	}
	function habr2(a, n) {
		var among_var, v_1;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a, n);
		if (among_var) {
			sbp.bra = sbp.cursor;
			switch (among_var) {
				case 1 :
					v_1 = sbp.limit - sbp.cursor;
					if (!sbp.eq_s_b(1, "\u0430")) {
						sbp.cursor = sbp.limit - v_1;
						if (!sbp.eq_s_b(1, "\u044F"))
							return false;
					}
				case 2 :
					sbp.slice_del();
					break;
			}
			return true;
		}
		return false;
	}
	function r_perfective_gerund() {
		return habr2(a_0, 9);
	}
	function habr1(a, n) {
		var among_var;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a, n);
		if (among_var) {
			sbp.bra = sbp.cursor;
			if (among_var == 1)
				sbp.slice_del();
			return true;
		}
		return false;
	}
	function r_adjective() {
		return habr1(a_1, 26);
	}
	function r_adjectival() {
		var among_var;
		if (r_adjective()) {
			habr2(a_2, 8);
			return true;
		}
		return false;
	}
	function r_reflexive() {
		return habr1(a_3, 2);
	}
	function r_verb() {
		return habr2(a_4, 46);
	}
	function r_noun() {
		habr1(a_5, 36);
	}
	function r_derivational() {
		var among_var;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_6, 2);
		if (among_var) {
			sbp.bra = sbp.cursor;
			if (r_R2() && among_var == 1)
				sbp.slice_del();
		}
	}
	function r_tidy_up() {
		var among_var;
		sbp.ket = sbp.cursor;
		among_var = sbp.find_among_b(a_7, 4);
		if (among_var) {
			sbp.bra = sbp.cursor;
			switch (among_var) {
				case 1 :
					sbp.slice_del();
					sbp.ket = sbp.cursor;
					if (!sbp.eq_s_b(1, "\u043D"))
						break;
					sbp.bra = sbp.cursor;
				case 2 :
					if (!sbp.eq_s_b(1, "\u043D"))
						break;
				case 3 :
					sbp.slice_del();
					break;
			}
		}
	}
	this.stem = function() {
		r_mark_regions();
		sbp.cursor = sbp.limit;
		if (sbp.cursor < I_pV)
			return false;
		sbp.limit_backward = I_pV;
		if (!r_perfective_gerund()) {
			sbp.cursor = sbp.limit;
			if (!r_reflexive())
				sbp.cursor = sbp.limit;
			if (!r_adjectival()) {
				sbp.cursor = sbp.limit;
				if (!r_verb()) {
					sbp.cursor = sbp.limit;
					r_noun();
				}
			}
		}
		sbp.cursor = sbp.limit;
		sbp.ket = sbp.cursor;
		if (sbp.eq_s_b(1, "\u0438")) {
			sbp.bra = sbp.cursor;
			sbp.slice_del();
		} else
			sbp.cursor = sbp.limit;
		r_derivational();
		sbp.cursor = sbp.limit;
		r_tidy_up();
		return true;
	}
}