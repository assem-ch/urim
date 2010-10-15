jsSnowball is a JavaScript port of http://snowball.tartarus.org/ stemmers, 
	web site is at: http://code.google.com/p/urim/

To make porting from Java sources easier each stemmer could be validated by Regex:
	[^\.]((limit_backward)|(limit)|(cursor)|(bra)|(ket)|(setCurrent)|(getCurrent)|(in_grouping)|(in_grouping_b)|(out_grouping)|(out_grouping_b)|(in_range)|(in_range_b)|(out_range)|(out_range_b)|(eq_s)|(eq_s_b)|(find_among)|(find_among_b)|(replace_s)|(slice_check)|(slice_from)|(slice_del)|(insert)|(slice_to)|(eq_v_b))

All *.js files were compressed with http://jscompress.com/

Changes:
	0.2:
	Refactoring - all code with loop labels replaced by more readable equivalent,
	unused variables (v_1, v_2 ... v_n) removed from all functions, 
	sometimes anonymous functions using as function parameter (Turkish).
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
	JsUnit 2.2 TestRunner(Pentium III 667 MHz, 384 Mb RAM) results:
	-------------------------------------------------------------------------------------------
	Running on Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10 
	Status: Done (2257.108 seconds)
	Runs: 4846	Errors: 0	Failures: 0
	-------------------------------------------------------------------------------------------
	Running on Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.6.30 Version/10.62
	Status: Done (7476.318 seconds)
	Runs: 4846	Errors: 0	Failures: 0
	-------------------------------------------------------------------------------------------
	Running on Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET4.0C; .NET4.0E; FDM)
	Status: Done (6027.738 seconds)
	Runs: 4846	 Errors: 0	Failures: 0
	-------------------------------------------------------------------------------------------

	0.1:
	First version. Almost per-to-per Java code with minimum changes. 
	Reflection for Finnish stemmer is replaced by using callback function as function parameter.
	JsUnit 2.2 TestRunner(Pentium III 667 MHz, 384 Mb RAM) results:
	Running on Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.9.2.10) Gecko/20100914 Firefox/3.6.10
	Status: Done (3458.767 seconds)
	Runs: 4846	Errors: 0	Failures: 0
	-------------------------------------------------------------------------------------------
	Running on Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.6.30 Version/10.62
	Status: Done (7318.537 seconds)
	Runs: 4846	Errors: 0	Failures: 0
	-------------------------------------------------------------------------------------------
	Running on Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET4.0C; .NET4.0E; FDM)
	Status: Done (5562.278 seconds)
	Runs: 4846	Errors: 0	Failures: 0