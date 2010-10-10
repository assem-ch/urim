jsSnowball is a JavaScript port of http://snowball.tartarus.org/ stemmers, 
	web site is at: http://code.google.com/p/urim/

Due porting from Java sources each stemmer could be validated by Regex:
	[^\.]((limit_backward)|(limit)|(cursor)|(bra)|(ket)|(setCurrent)|(getCurrent)|(in_grouping)|(in_grouping_b)|(out_grouping)|(out_grouping_b)|(in_range)|(in_range_b)|(out_range)|(out_range_b)|(eq_s)|(eq_s_b)|(find_among)|(find_among_b)|(replace_s)|(slice_check)|(slice_from)|(slice_del)|(insert)|(slice_to)|(eq_v_b))

All *.js files were compressed with http://jscompress.com/

Changes:
	0.2:
	Refactoring - all code with loop labels replaced by more readable equivalent,
	unused variables (v_1, v_2 ... v_n) removed from functions.
	To decrease Snowball.js library size:
	among_var		->	a_v (308 mathes)
	bra : 0			->	b : 0 (1 match)
	this.bra 		->	this.b (7 mathes)
	sbp.bra			->	sbp.b (195 mathes)
	ket : 0			->	k : 0 (1 match)
	this.ket 		->	this.k (7 mathes)
	sbp.ket			->	sbp.k (178 mathes)
	limit : 0		->	l : 0 (1 match)
	this.limit 		->	this.l (11 mathes)
	sbp.limit		->	sbp.l (400 mathes)
	cursor : 0		->	c : 0 (1 match)
	this.cursor 		->	this.c (44 mathes)
	sbp.cursor		->	sbp.c (1093 mathes)
	limit_backward : 0	->	lb : 0 (1 match)
	this.limit_backward 	->	this.lb (7 mathes)
	sbp.limit_backward	->	sbp.lb (142 mathes)
	
	*******************************************************************************

	0.1: 
	First version.