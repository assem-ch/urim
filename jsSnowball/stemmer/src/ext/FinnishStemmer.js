function FinnishStemmer(){var a_0=[new Among("pa",-1,1),new Among("sti",-1,2),new Among("kaan",-1,1),new Among("han",-1,1),new Among("kin",-1,1),new Among("h\u00E4n",-1,1),new Among("k\u00E4\u00E4n",-1,1),new Among("ko",-1,1),new Among("p\u00E4",-1,1),new Among("k\u00F6",-1,1)];var a_1=[new Among("lla",-1,-1),new Among("na",-1,-1),new Among("ssa",-1,-1),new Among("ta",-1,-1),new Among("lta",3,-1),new Among("sta",3,-1)];var a_2=[new Among("ll\u00E4",-1,-1),new Among("n\u00E4",-1,-1),new Among("ss\u00E4",-1,-1),new Among("t\u00E4",-1,-1),new Among("lt\u00E4",3,-1),new Among("st\u00E4",3,-1)];var a_3=[new Among("lle",-1,-1),new Among("ine",-1,-1)];var a_4=[new Among("nsa",-1,3),new Among("mme",-1,3),new Among("nne",-1,3),new Among("ni",-1,2),new Among("si",-1,1),new Among("an",-1,4),new Among("en",-1,6),new Among("\u00E4n",-1,5),new Among("ns\u00E4",-1,3)];var a_5=[new Among("aa",-1,-1),new Among("ee",-1,-1),new Among("ii",-1,-1),new Among("oo",-1,-1),new Among("uu",-1,-1),new Among("\u00E4\u00E4",-1,-1),new Among("\u00F6\u00F6",-1,-1)];var a_6=[new Among("a",-1,8),new Among("lla",0,-1),new Among("na",0,-1),new Among("ssa",0,-1),new Among("ta",0,-1),new Among("lta",4,-1),new Among("sta",4,-1),new Among("tta",4,9),new Among("lle",-1,-1),new Among("ine",-1,-1),new Among("ksi",-1,-1),new Among("n",-1,7),new Among("han",11,1),new Among("den",11,-1,r_VI),new Among("seen",11,-1,r_LONG),new Among("hen",11,2),new Among("tten",11,-1,r_VI),new Among("hin",11,3),new Among("siin",11,-1,r_VI),new Among("hon",11,4),new Among("h\u00E4n",11,5),new Among("h\u00F6n",11,6),new Among("\u00E4",-1,8),new Among("ll\u00E4",22,-1),new Among("n\u00E4",22,-1),new Among("ss\u00E4",22,-1),new Among("t\u00E4",22,-1),new Among("lt\u00E4",26,-1),new Among("st\u00E4",26,-1),new Among("tt\u00E4",26,9)];var a_7=[new Among("eja",-1,-1),new Among("mma",-1,1),new Among("imma",1,-1),new Among("mpa",-1,1),new Among("impa",3,-1),new Among("mmi",-1,1),new Among("immi",5,-1),new Among("mpi",-1,1),new Among("impi",7,-1),new Among("ej\u00E4",-1,-1),new Among("mm\u00E4",-1,1),new Among("imm\u00E4",10,-1),new Among("mp\u00E4",-1,1),new Among("imp\u00E4",12,-1)];var a_8=[new Among("i",-1,-1),new Among("j",-1,-1)];var a_9=[new Among("mma",-1,1),new Among("imma",0,-1)];var g_AEI=[17,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8];var g_V1=[17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,8,0,32];var g_V2=[17,65,16,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,32];var g_particle_end=[17,97,24,1,0,0,0,0,0,0,0,0,0,0,0,0,8,0,32];var B_ending_removed,S_x,I_p2,I_p1;var sbp=new SnowballProgram();this.setCurrent=function(word){sbp.setCurrent(word);};this.getCurrent=function(){return sbp.getCurrent();};function r_mark_regions(){var v_1,v_2;I_p1=sbp.limit;I_p2=I_p1;golab0:while(true){v_1=sbp.cursor;lab1:do{if(!(sbp.in_grouping(g_V1,97,246)))
break lab1;sbp.cursor=v_1;break golab0;}while(false);sbp.cursor=v_1;if(sbp.cursor>=sbp.limit)
return false;sbp.cursor++;}
golab2:while(true){lab3:do{if(!(sbp.out_grouping(g_V1,97,246)))
break lab3;break golab2;}while(false);if(sbp.cursor>=sbp.limit)
return false;sbp.cursor++;}
I_p1=sbp.cursor;golab4:while(true){v_2=sbp.cursor;lab5:do{if(!(sbp.in_grouping(g_V1,97,246)))
break lab5;sbp.cursor=v_2;break golab4;}while(false);sbp.cursor=v_2;if(sbp.cursor>=sbp.limit)
return false;sbp.cursor++;}
golab6:while(true){lab7:do{if(!(sbp.out_grouping(g_V1,97,246)))
break lab7;break golab6;}while(false);if(sbp.cursor>=sbp.limit)
return false;sbp.cursor++;}
I_p2=sbp.cursor;return true;}
function r_R2(){if(!(I_p2<=sbp.cursor))
return false;return true;}
function r_particle_etc(){var among_var,v_1;if(sbp.cursor<I_p1)
return false;v_1=sbp.limit_backward;sbp.limit_backward=I_p1;sbp.ket=sbp.cursor;among_var=sbp.find_among_b(a_0,10);if(among_var==0){sbp.limit_backward=v_1;return false;}
sbp.bra=sbp.cursor;sbp.limit_backward=v_1;switch(among_var){case 0:return false;case 1:if(!(sbp.in_grouping_b(g_particle_end,97,246)))
return false;break;case 2:if(!r_R2()){return false;}
break;}
sbp.slice_del();return true;}
function r_possessive(){var among_var,v_1,v_2;if(sbp.cursor<I_p1)
return false;v_1=sbp.limit_backward;sbp.limit_backward=I_p1;sbp.ket=sbp.cursor;among_var=sbp.find_among_b(a_4,9);if(among_var==0){sbp.limit_backward=v_1;return false;}
sbp.bra=sbp.cursor;sbp.limit_backward=v_1;switch(among_var){case 0:return false;case 1:v_2=sbp.limit-sbp.cursor;lab0:do{if(!(sbp.eq_s_b(1,"k")))
break lab0;return false;}while(false);sbp.cursor=sbp.limit-v_2;sbp.slice_del();break;case 2:sbp.slice_del();sbp.ket=sbp.cursor;if(!(sbp.eq_s_b(3,"kse")))
return false;sbp.bra=sbp.cursor;sbp.slice_from("ksi");break;case 3:sbp.slice_del();break;case 4:if(sbp.find_among_b(a_1,6)==0)
return false;sbp.slice_del();break;case 5:if(sbp.find_among_b(a_2,6)==0)
return false;sbp.slice_del();break;case 6:if(sbp.find_among_b(a_3,2)==0)
return false;sbp.slice_del();break;}
return true;}
function r_LONG(){if(sbp.find_among_b(a_5,7)==0)
return false;return true;}
function r_VI(){if(!(sbp.eq_s_b(1,"i")))
return false;if(!(sbp.in_grouping_b(g_V2,97,246)))
return false;return true;}
function r_case_ending(){var among_var,v_1,v_2,v_3,v_4;if(sbp.cursor<I_p1)
return false;v_1=sbp.limit_backward;sbp.limit_backward=I_p1;sbp.ket=sbp.cursor;among_var=sbp.find_among_b(a_6,30);if(among_var==0){sbp.limit_backward=v_1;return false;}
sbp.bra=sbp.cursor;sbp.limit_backward=v_1;switch(among_var){case 0:return false;case 1:if(!(sbp.eq_s_b(1,"a")))
return false;break;case 2:if(!(sbp.eq_s_b(1,"e")))
return false;break;case 3:if(!(sbp.eq_s_b(1,"i")))
return false;break;case 4:if(!(sbp.eq_s_b(1,"o")))
return false;break;case 5:if(!(sbp.eq_s_b(1,"\u00E4")))
return false;break;case 6:if(!(sbp.eq_s_b(1,"\u00F6")))
return false;break;case 7:v_2=sbp.limit-sbp.cursor;lab0:do{v_3=sbp.limit-sbp.cursor;lab1:do{v_4=sbp.limit-sbp.cursor;lab2:do{if(!r_LONG())
break lab2;break lab1;}while(false);sbp.cursor=sbp.limit-v_4;if(!(sbp.eq_s_b(2,"ie"))){sbp.cursor=sbp.limit-v_2;break lab0;}}while(false);sbp.cursor=sbp.limit-v_3;if(sbp.cursor<=sbp.limit_backward){sbp.cursor=sbp.limit-v_2;break lab0;}
sbp.cursor--;sbp.bra=sbp.cursor;}while(false);break;case 8:if(!(sbp.in_grouping_b(g_V1,97,246)))
return false;if(!(sbp.out_grouping_b(g_V1,97,246)))
return false;break;case 9:if(!(sbp.eq_s_b(1,"e")))
return false;break;}
sbp.slice_del();B_ending_removed=true;return true;}
function r_other_endings(){var among_var,v_1,v_2;if(sbp.cursor<I_p2)
return false;v_1=sbp.limit_backward;sbp.limit_backward=I_p2;sbp.ket=sbp.cursor;among_var=sbp.find_among_b(a_7,14);if(among_var==0){sbp.limit_backward=v_1;return false;}
sbp.bra=sbp.cursor;sbp.limit_backward=v_1;switch(among_var){case 0:return false;case 1:v_2=sbp.limit-sbp.cursor;lab0:do{if(!(sbp.eq_s_b(2,"po")))
break lab0;return false;}while(false);sbp.cursor=sbp.limit-v_2;break;}
sbp.slice_del();return true;}
function r_i_plural(){var v_1;if(sbp.cursor<I_p1)
return false;v_1=sbp.limit_backward;sbp.limit_backward=I_p1;sbp.ket=sbp.cursor;if(sbp.find_among_b(a_8,2)==0){sbp.limit_backward=v_1;return false;}
sbp.bra=sbp.cursor;sbp.limit_backward=v_1;sbp.slice_del();return true;}
function r_t_plural(){var among_var,v_1,v_2,v_3,v_5;if(sbp.cursor<I_p1)
return false;v_1=sbp.limit_backward;sbp.limit_backward=I_p1;sbp.ket=sbp.cursor;if(!(sbp.eq_s_b(1,"t"))){sbp.limit_backward=v_1;return false;}
sbp.bra=sbp.cursor;v_2=sbp.limit-sbp.cursor;if(!(sbp.in_grouping_b(g_V1,97,246))){sbp.limit_backward=v_1;return false;}
sbp.cursor=sbp.limit-v_2;sbp.slice_del();sbp.limit_backward=v_1;if(sbp.cursor<I_p2)
return false;v_3=sbp.limit_backward;sbp.limit_backward=I_p2;sbp.ket=sbp.cursor;among_var=sbp.find_among_b(a_9,2);if(among_var==0){sbp.limit_backward=v_3;return false;}
sbp.bra=sbp.cursor;sbp.limit_backward=v_5;switch(among_var){case 0:return false;case 1:v_5=sbp.limit-sbp.cursor;lab0:do{if(!(sbp.eq_s_b(2,"po")))
break lab0;return false;}while(false);sbp.cursor=sbp.limit-v_5;break;}
sbp.slice_del();return true;}
function r_tidy(){var v_1,v_2,v_3,v_4,v_5,v_6,v_7,v_8;if(sbp.cursor<I_p1)
return false;v_1=sbp.limit_backward;sbp.limit_backward=I_p1;v_2=sbp.limit-sbp.cursor;lab0:do{v_3=sbp.limit-sbp.cursor;if(!r_LONG())
break lab0;sbp.cursor=sbp.limit-v_3;sbp.ket=sbp.cursor;if(sbp.cursor<=sbp.limit_backward)
break lab0;sbp.cursor--;sbp.bra=sbp.cursor;sbp.slice_del();}while(false);sbp.cursor=sbp.limit-v_2;v_4=sbp.limit-sbp.cursor;lab1:do{sbp.ket=sbp.cursor;if(!(sbp.in_grouping_b(g_AEI,97,228)))
break lab1;sbp.bra=sbp.cursor;if(!(sbp.out_grouping_b(g_V1,97,246)))
break lab1;sbp.slice_del();}while(false);sbp.cursor=sbp.limit-v_4;v_5=sbp.limit-sbp.cursor;lab2:do{sbp.ket=sbp.cursor;if(!(sbp.eq_s_b(1,"j")))
break lab2;sbp.bra=sbp.cursor;lab3:do{v_6=sbp.limit-sbp.cursor;lab4:do{if(!(sbp.eq_s_b(1,"o")))
break lab4;break lab3;}while(false);sbp.cursor=sbp.limit-v_6;if(!(sbp.eq_s_b(1,"u")))
break lab2;}while(false);sbp.slice_del();}while(false);sbp.cursor=sbp.limit-v_5;v_7=sbp.limit-sbp.cursor;lab5:do{sbp.ket=sbp.cursor;if(!(sbp.eq_s_b(1,"o")))
break lab5;sbp.bra=sbp.cursor;if(!(sbp.eq_s_b(1,"j")))
break lab5;sbp.slice_del();}while(false);sbp.cursor=sbp.limit-v_7;sbp.limit_backward=v_1;golab6:while(true){v_8=sbp.limit-sbp.cursor;lab7:do{if(!(sbp.out_grouping_b(g_V1,97,246)))
break lab7;sbp.cursor=sbp.limit-v_8;break golab6;}while(false);sbp.cursor=sbp.limit-v_8;if(sbp.cursor<=sbp.limit_backward)
return false;sbp.cursor--;}
sbp.ket=sbp.cursor;if(sbp.cursor<=sbp.limit_backward)
return false;sbp.cursor--;sbp.bra=sbp.cursor;S_x=sbp.slice_to();if(!(sbp.eq_v_b(S_x)))
return false;sbp.slice_del();return true;}
this.stem=function(){var v_1,v_2,v_3;v_1=sbp.cursor;lab0:do
if(!r_mark_regions())
break lab0;while(false);B_ending_removed=false;sbp.limit_backward=v_1;sbp.cursor=sbp.limit;lab1:do
if(!r_particle_etc())
break lab1;while(false);sbp.cursor=sbp.limit;lab2:do
if(!r_possessive())
break lab2;while(false);sbp.cursor=sbp.limit;lab3:do
if(!r_case_ending())
break lab3;while(false);sbp.cursor=sbp.limit;lab4:do
if(!r_other_endings())
break lab4;while(false);sbp.cursor=sbp.limit;lab5:do{v_2=sbp.limit-sbp.cursor;lab6:do{if(!(B_ending_removed))
break lab6;v_3=sbp.limit-sbp.cursor;lab7:do
if(!r_i_plural())
break lab7;while(false);sbp.cursor=sbp.limit-v_3;break lab5;}while(false);sbp.cursor=sbp.limit-v_2;lab8:do
if(!r_t_plural())
break lab8;while(false);sbp.cursor=sbp.limit-v_2;}while(false);lab9:do
if(!r_tidy())
break lab9;while(false);sbp.cursor=sbp.limit_backward;return true;}}