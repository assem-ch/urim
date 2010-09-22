function SnowballProgram() {
	var current;
	return {
		bra : 0,
		ket : 0,
		limit : 0,
		cursor : 0,
		limit_backward : 0,
		setCurrent : function(word) {
			current = word;
			this.cursor = 0;
			this.limit = word.length;
			this.limit_backward = 0;
			this.bra = this.cursor;
			this.ket = this.limit;
		},
		getCurrent : function() {
			var result = current;
			current = null;
			return result;
		},
		in_grouping : function(s, min, max) {
			if (this.cursor >= this.limit)
				return false;
			var ch = current.charCodeAt(this.cursor);
			if (ch > max || ch < min)
				return false;
			ch -= min;
			if ((s[ch >> 3] & (0X1 << (ch & 0X7))) == 0)
				return false;
			this.cursor++;
			return true;
		},
		in_grouping_b : function(s, min, max) {
			if (this.cursor <= this.limit_backward)
				return false;
			var ch = current.charCodeAt(this.cursor - 1);
			if (ch > max || ch < min)
				return false;
			ch -= min;
			if ((s[ch >> 3] & (0X1 << (ch & 0X7))) == 0)
				return false;
			this.cursor--;
			return true;
		},
		out_grouping : function(s, min, max) {
			if (this.cursor >= this.limit)
				return false;
			var ch = current.charCodeAt(this.cursor);
			if (ch > max || ch < min) {
				this.cursor++;
				return true;
			}
			ch -= min;
			if ((s[ch >> 3] & (0X1 << (ch & 0X7))) == 0) {
				this.cursor++;
				return true;
			}
			return false;
		},
		out_grouping_b : function(s, min, max) {
			if (this.cursor <= this.limit_backward)
				return false;
			var ch = current.charCodeAt(this.cursor - 1);
			if (ch > max || ch < min) {
				this.cursor--;
				return true;
			}
			ch -= min;
			if ((s[ch >> 3] & (0X1 << (ch & 0X7))) == 0) {
				this.cursor--;
				return true;
			}
			return false;
		},
		in_range : function(min, max) {
			if (this.cursor >= this.limit)
				return false;
			var ch = current.charCodeAt(this.cursor);
			if (ch > max || ch < min)
				return false;
			this.cursor++;
			return true;
		},
		in_range_b : function(min, max) {
			if (this.cursor <= this.limit_backward)
				return false;
			var ch = current.charCodeAt(this.cursor - 1);
			if (ch > max || ch < min)
				return false;
			this.cursor--;
			return true;
		},
		out_range : function(min, max) {
			if (this.cursor >= this.limit)
				return false;
			var ch = current.charCodeAt(this.cursor);
			if (!(ch > max || ch < min))
				return false;
			this.cursor++;
			return true;
		},
		out_range_b : function(min, max) {
			if (this.cursor <= this.limit_backward)
				return false;
			var ch = current.charCodeAt(this.cursor - 1);
			if (!(ch > max || ch < min))
				return false;
			this.cursor--;
			return true;
		},
		eq_s : function(s_size, s) {
			if (this.limit - this.cursor < s_size)
				return false;
			for (var i = 0; i != s_size; i++) {
				if (current.charCodeAt(this.cursor + i) != s.charCodeAt(i))
					return false;
			}
			this.cursor += s_size;
			return true;
		},
		eq_s_b : function(s_size, s) {
			if (this.cursor - this.limit_backward < s_size)
				return false;
			for (var i = 0; i != s_size; i++) {
				if (current.charCodeAt(this.cursor - s_size + i) != s
						.charCodeAt(i))
					return false;
			}
			this.cursor -= s_size;
			return true;
		},
		find_among : function(v, v_size) {
			var i = 0;
			var j = v_size;
			var c = this.cursor;
			var l = this.limit;
			var common_i = 0;
			var common_j = 0;
			var first_key_inspected = false;
			while (true) {
				var k = i + ((j - i) >> 1);
				var diff = 0;
				var common = common_i < common_j ? common_i : common_j;
				var w = v[k];
				for (var i2 = common; i2 < w.s_size; i2++) {
					if (c + common == l) {
						diff = -1;
						break;
					}
					diff = current.charCodeAt(c + common) - w.s[i2];
					if (diff != 0)
						break;
					common++;
				}
				if (diff < 0) {
					j = k;
					common_j = common;
				} else {
					i = k;
					common_i = common;
				}
				if (j - i <= 1) {
					if (i > 0)
						break;
					if (j == i)
						break;
					if (first_key_inspected)
						break;
					first_key_inspected = true;
				}
			}
			while (true) {
				var w = v[i];
				if (common_i >= w.s_size) {
					this.cursor = c + w.s_size;
					if (!w.method)
						return w.result;
					var res = w.method();
					this.cursor = c + w.s_size;
					if (res)
						return w.result;
				}
				i = w.substring_i;
				if (i < 0)
					return 0;
			}
		},
		find_among_b : function(v, v_size) {
			var i = 0;
			var j = v_size;
			var c = this.cursor;
			var lb = this.limit_backward;
			var common_i = 0;
			var common_j = 0;
			var first_key_inspected = false;
			while (true) {
				var k = i + ((j - i) >> 1);
				var diff = 0;
				var common = common_i < common_j ? common_i : common_j;
				var w = v[k];
				for (var i2 = w.s_size - 1 - common; i2 >= 0; i2--) {
					if (c - common == lb) {
						diff = -1;
						break;
					}
					diff = current.charCodeAt(c - 1 - common) - w.s[i2];
					if (diff != 0)
						break;
					common++;
				}
				if (diff < 0) {
					j = k;
					common_j = common;
				} else {
					i = k;
					common_i = common;
				}
				if (j - i <= 1) {
					if (i > 0)
						break;
					if (j == i)
						break;
					if (first_key_inspected)
						break;
					first_key_inspected = true;
				}
			}
			while (true) {
				var w = v[i];
				if (common_i >= w.s_size) {
					this.cursor = c - w.s_size;
					if (!w.method)
						return w.result;
					var res = w.method();
					this.cursor = c - w.s_size;
					if (res)
						return w.result;
				}
				i = w.substring_i;
				if (i < 0)
					return 0;
			}
		},
		replace_s : function(c_bra, c_ket, s) {
			var adjustment = s.length - (c_ket - c_bra);
			var left = current.substring(0, c_bra);
			var right = current.substring(c_ket);
			current = left + s + right;
			this.limit += adjustment;
			if (this.cursor >= c_ket)
				this.cursor += adjustment;
			else if (this.cursor > c_bra)
				this.cursor = c_bra;
			return adjustment;
		},
		slice_check : function() {
			if (this.bra < 0 || this.bra > this.ket || this.ket > this.limit
					|| this.limit > current.length) {
				throw ("faulty slice operation");
			}
		},
		slice_from : function(s) {
			this.slice_check();
			this.replace_s(this.bra, this.ket, s);
		},
		slice_del : function() {
			this.slice_from("");
		},
		insert : function(c_bra, c_ket, s) {
			var adjustment = this.replace_s(c_bra, c_ket, s);
			if (c_bra <= this.bra)
				this.bra += adjustment;
			if (c_bra <= this.ket)
				this.ket += adjustment;
		},
		slice_to : function() {
			this.slice_check();
			return current.substring(this.bra, this.ket);
		},
		eq_v_b : function(s) {
			return this.eq_s_b(s.length, s);
		}
	};
}