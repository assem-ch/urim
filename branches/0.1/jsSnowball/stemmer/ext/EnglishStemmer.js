function EnglishStemmer(){var a_0=[new Among("arsen",-1,-1),new Among("commun",-1,-1),new Among("gener",-1,-1)];var a_1=[new Among("'",-1,1),new Among("'s'",0,1),new Among("'s",-1,1)];var a_2=[new Among("ied",-1,2),new Among("s",-1,3),new Among("ies",1,2),new Among("sses",1,1),new Among("ss",1,-1),new Among("us",1,-1)];var a_3=[new Among("",-1,3),new Among("bb",0,2),new Among("dd",0,2),new Among("ff",0,2),new Among("gg",0,2),new Among("bl",0,1),new Among("mm",0,2),new Among("nn",0,2),new Among("pp",0,2),new Among("rr",0,2),new Among("at",0,1),new Among("tt",0,2),new Among("iz",0,1)];var a_4=[new Among("ed",-1,2),new Among("eed",0,1),new Among("ing",-1,2),new Among("edly",-1,2),new Among("eedly",3,1),new Among("ingly",-1,2)];var a_5=[new Among("anci",-1,3),new Among("enci",-1,2),new Among("ogi",-1,13),new Among("li",-1,16),new Among("bli",3,12),new Among("abli",4,4),new Among("alli",3,8),new Among("fulli",3,14),new Among("lessli",3,15),new Among("ousli",3,10),new Among("entli",3,5),new Among("aliti",-1,8),new Among("biliti",-1,12),new Among("iviti",-1,11),new Among("tional",-1,1),new Among("ational",14,7),new Among("alism",-1,8),new Among("ation",-1,7),new Among("ization",17,6),new Among("izer",-1,6),new Among("ator",-1,7),new Among("iveness",-1,11),new Among("fulness",-1,9),new Among("ousness",-1,10)];var a_6=[new Among("icate",-1,4),new Among("ative",-1,6),new Among("alize",-1,3),new Among("iciti",-1,4),new Among("ical",-1,4),new Among("tional",-1,1),new Among("ational",5,2),new Among("ful",-1,5),new Among("ness",-1,5)];var a_7=[new Among("ic",-1,1),new Among("ance",-1,1),new Among("ence",-1,1),new Among("able",-1,1),new Among("ible",-1,1),new Among("ate",-1,1),new Among("ive",-1,1),new Among("ize",-1,1),new Among("iti",-1,1),new Among("al",-1,1),new Among("ism",-1,1),new Among("ion",-1,2),new Among("er",-1,1),new Among("ous",-1,1),new Among("ant",-1,1),new Among("ent",-1,1),new Among("ment",15,1),new Among("ement",16,1)];var a_8=[new Among("e",-1,1),new Among("l",-1,2)];var a_9=[new Among("succeed",-1,-1),new Among("proceed",-1,-1),new Among("exceed",-1,-1),new Among("canning",-1,-1),new Among("inning",-1,-1),new Among("earring",-1,-1),new Among("herring",-1,-1),new Among("outing",-1,-1)];var a_10=[new Among("andes",-1,-1),new Among("atlas",-1,-1),new Among("bias",-1,-1),new Among("cosmos",-1,-1),new Among("dying",-1,3),new Among("early",-1,9),new Among("gently",-1,7),new Among("howe",-1,-1),new Among("idly",-1,6),new Among("lying",-1,4),new Among("news",-1,-1),new Among("only",-1,10),new Among("singly",-1,11),new Among("skies",-1,2),new Among("skis",-1,1),new Among("sky",-1,-1),new Among("tying",-1,5),new Among("ugly",-1,8)];var g_v=[17,65,16,1];var g_v_WXY=[1,17,65,208,1];var g_valid_LI=[55,141,2];var B_Y_found;var I_p2;var I_p1;var snowballProgram=new SnowballProgram();this.setCurrent=function(word){snowballProgram.setCurrent(word);};this.getCurrent=function(){return snowballProgram.getCurrent()};this.stem=function(){var v_1,v_2,v_3,v_4,v_5,v_6,v_7,v_8,v_9,v_10,v_11,v_12,v_13;lab0:do{v_1=snowballProgram.cursor;lab1:do{if(!r_exception1()){break lab1;}
break lab0;}while(false);snowballProgram.cursor=v_1;lab2:do{v_2=snowballProgram.cursor;lab3:do{var c=snowballProgram.cursor+3;if(0>c||c>snowballProgram.limit){break lab3;}
snowballProgram.cursor=c;break lab2;}while(false);snowballProgram.cursor=v_2;break lab0;}while(false);snowballProgram.cursor=v_1;v_3=snowballProgram.cursor;lab4:do{if(!r_prelude()){break lab4;}}while(false);snowballProgram.cursor=v_3;v_4=snowballProgram.cursor;lab5:do{if(!r_mark_regions()){break lab5;}}while(false);snowballProgram.cursor=v_4;snowballProgram.limit_backward=snowballProgram.cursor;snowballProgram.cursor=snowballProgram.limit;v_5=snowballProgram.limit-snowballProgram.cursor;lab6:do{if(!r_Step_1a()){break lab6;}}while(false);snowballProgram.cursor=snowballProgram.limit-v_5;lab7:do{v_6=snowballProgram.limit-snowballProgram.cursor;lab8:do{if(!r_exception2()){break lab8;}
break lab7;}while(false);snowballProgram.cursor=snowballProgram.limit-v_6;v_7=snowballProgram.limit-snowballProgram.cursor;lab9:do{if(!r_Step_1b()){break lab9;}}while(false);snowballProgram.cursor=snowballProgram.limit-v_7;v_8=snowballProgram.limit-snowballProgram.cursor;lab10:do{if(!r_Step_1c()){break lab10;}}while(false);snowballProgram.cursor=snowballProgram.limit-v_8;v_9=snowballProgram.limit-snowballProgram.cursor;lab11:do{if(!r_Step_2()){break lab11;}}while(false);snowballProgram.cursor=snowballProgram.limit-v_9;v_10=snowballProgram.limit-snowballProgram.cursor;lab12:do{if(!r_Step_3()){break lab12;}}while(false);snowballProgram.cursor=snowballProgram.limit-v_10;v_11=snowballProgram.limit-snowballProgram.cursor;lab13:do{if(!r_Step_4()){break lab13;}}while(false);snowballProgram.cursor=snowballProgram.limit-v_11;v_12=snowballProgram.limit-snowballProgram.cursor;lab14:do{if(!r_Step_5()){break lab14;}}while(false);snowballProgram.cursor=snowballProgram.limit-v_12;}while(false);snowballProgram.cursor=snowballProgram.limit_backward;v_13=snowballProgram.cursor;lab15:do{if(!r_postlude()){break lab15;}}while(false);snowballProgram.cursor=v_13;}while(false);return true;}
function r_prelude(){var v_1,v_2,v_3,v_4,v_5;B_Y_found=false;v_1=snowballProgram.cursor;lab0:do{snowballProgram.bra=snowballProgram.cursor;if(!(snowballProgram.eq_s(1,"'"))){break lab0;}
snowballProgram.ket=snowballProgram.cursor;snowballProgram.slice_del();}while(false);snowballProgram.cursor=v_1;v_2=snowballProgram.cursor;lab1:do{snowballProgram.bra=snowballProgram.cursor;if(!(snowballProgram.eq_s(1,"y"))){break lab1;}
snowballProgram.ket=snowballProgram.cursor;snowballProgram.slice_from("Y");B_Y_found=true;}while(false);snowballProgram.cursor=v_2;v_3=snowballProgram.cursor;replab3:while(true){v_4=snowballProgram.cursor;lab4:do{golab5:while(true){v_5=snowballProgram.cursor;lab6:do{if(!(snowballProgram.in_grouping(g_v,97,121))){break lab6;}
snowballProgram.bra=snowballProgram.cursor;if(!(snowballProgram.eq_s(1,"y"))){break lab6;}
snowballProgram.ket=snowballProgram.cursor;snowballProgram.cursor=v_5;break golab5;}while(false);snowballProgram.cursor=v_5;if(snowballProgram.cursor>=snowballProgram.limit){break lab4;}
snowballProgram.cursor++;}
snowballProgram.slice_from("Y");B_Y_found=true;continue replab3;}while(false);snowballProgram.cursor=v_4;break replab3;}
snowballProgram.cursor=v_3;return true;}
function r_mark_regions(){var v_1,v_2;I_p1=snowballProgram.limit;I_p2=snowballProgram.limit;v_1=snowballProgram.cursor;lab0:do{lab1:do{v_2=snowballProgram.cursor;lab2:do{if(snowballProgram.find_among(a_0,3)==0){break lab2;}
break lab1;}while(false);snowballProgram.cursor=v_2;golab3:while(true){lab4:do{if(!(snowballProgram.in_grouping(g_v,97,121))){break lab4;}
break golab3;}while(false);if(snowballProgram.cursor>=snowballProgram.limit){break lab0;}
snowballProgram.cursor++;}
golab5:while(true){lab6:do{if(!(snowballProgram.out_grouping(g_v,97,121))){break lab6;}
break golab5;}while(false);if(snowballProgram.cursor>=snowballProgram.limit){break lab0;}
snowballProgram.cursor++;}}while(false);I_p1=snowballProgram.cursor;golab7:while(true){lab8:do{if(!(snowballProgram.in_grouping(g_v,97,121))){break lab8;}
break golab7;}while(false);if(snowballProgram.cursor>=snowballProgram.limit){break lab0;}
snowballProgram.cursor++;}
golab9:while(true){lab10:do{if(!(snowballProgram.out_grouping(g_v,97,121))){break lab10;}
break golab9;}while(false);if(snowballProgram.cursor>=snowballProgram.limit){break lab0;}
snowballProgram.cursor++;}
I_p2=snowballProgram.cursor;}while(false);snowballProgram.cursor=v_1;return true;}
function r_shortv(){var v_1;lab0:do{v_1=snowballProgram.limit-snowballProgram.cursor;lab1:do{if(!(snowballProgram.out_grouping_b(g_v_WXY,89,121))){break lab1;}
if(!(snowballProgram.in_grouping_b(g_v,97,121))){break lab1;}
if(!(snowballProgram.out_grouping_b(g_v,97,121))){break lab1;}
break lab0;}while(false);snowballProgram.cursor=snowballProgram.limit-v_1;if(!(snowballProgram.out_grouping_b(g_v,97,121))){return false;}
if(!(snowballProgram.in_grouping_b(g_v,97,121))){return false;}
if(snowballProgram.cursor>snowballProgram.limit_backward){return false;}}while(false);return true;}
function r_R1(){if(!(I_p1<=snowballProgram.cursor)){return false;}
return true;}
function r_R2(){if(!(I_p2<=snowballProgram.cursor)){return false;}
return true;}
function r_Step_1a(){var among_var,v_1,v_2;v_1=snowballProgram.limit-snowballProgram.cursor;lab0:do{snowballProgram.ket=snowballProgram.cursor;among_var=snowballProgram.find_among_b(a_1,3);if(among_var==0){snowballProgram.cursor=snowballProgram.limit-v_1;break lab0;}
snowballProgram.bra=snowballProgram.cursor;switch(among_var){case 0:snowballProgram.cursor=snowballProgram.limit-v_1;break lab0;case 1:snowballProgram.slice_del();break;}}while(false);snowballProgram.ket=snowballProgram.cursor;among_var=snowballProgram.find_among_b(a_2,6);if(among_var==0){return false;}
snowballProgram.bra=snowballProgram.cursor;switch(among_var){case 0:return false;case 1:snowballProgram.slice_from("ss");break;case 2:lab1:do{v_2=snowballProgram.limit-snowballProgram.cursor;lab2:do{var c=snowballProgram.cursor-2;if(snowballProgram.limit_backward>c||c>snowballProgram.limit){break lab2;}
snowballProgram.cursor=c;snowballProgram.slice_from("i");break lab1;}while(false);snowballProgram.cursor=snowballProgram.limit-v_2;snowballProgram.slice_from("ie");}while(false);break;case 3:if(snowballProgram.cursor<=snowballProgram.limit_backward){return false;}
snowballProgram.cursor--;golab3:while(true){lab4:do{if(!(snowballProgram.in_grouping_b(g_v,97,121))){break lab4;}
break golab3;}while(false);if(snowballProgram.cursor<=snowballProgram.limit_backward){return false;}
snowballProgram.cursor--;}
snowballProgram.slice_del();break;}
return true;}
function r_Step_1b(){var among_var,v_1,v_3,v_4;snowballProgram.ket=snowballProgram.cursor;among_var=snowballProgram.find_among_b(a_4,6);if(among_var==0){return false;}
snowballProgram.bra=snowballProgram.cursor;switch(among_var){case 0:return false;case 1:if(!r_R1()){return false;}
snowballProgram.slice_from("ee");break;case 2:v_1=snowballProgram.limit-snowballProgram.cursor;golab0:while(true){lab1:do{if(!(snowballProgram.in_grouping_b(g_v,97,121))){break lab1;}
break golab0;}while(false);if(snowballProgram.cursor<=snowballProgram.limit_backward){return false;}
snowballProgram.cursor--;}
snowballProgram.cursor=snowballProgram.limit-v_1;snowballProgram.slice_del();v_3=snowballProgram.limit-snowballProgram.cursor;among_var=snowballProgram.find_among_b(a_3,13);if(among_var==0){return false;}
snowballProgram.cursor=snowballProgram.limit-v_3;switch(among_var){case 0:return false;case 1:var c=snowballProgram.cursor;snowballProgram.insert(snowballProgram.cursor,snowballProgram.cursor,"e");snowballProgram.cursor=c;break;case 2:snowballProgram.ket=snowballProgram.cursor;if(snowballProgram.cursor<=snowballProgram.limit_backward){return false;}
snowballProgram.cursor--;snowballProgram.bra=snowballProgram.cursor;snowballProgram.slice_del();break;case 3:if(snowballProgram.cursor!=I_p1){return false;}
v_4=snowballProgram.limit-snowballProgram.cursor;if(!r_shortv()){return false;}
snowballProgram.cursor=snowballProgram.limit-v_4;var c=snowballProgram.cursor;snowballProgram.insert(snowballProgram.cursor,snowballProgram.cursor,"e");snowballProgram.cursor=c;break;}
break;}
return true;}
function r_Step_1c(){var v_1,v_2;snowballProgram.ket=snowballProgram.cursor;lab0:do{v_1=snowballProgram.limit-snowballProgram.cursor;lab1:do{if(!(snowballProgram.eq_s_b(1,"y"))){break lab1;}
break lab0;}while(false);snowballProgram.cursor=snowballProgram.limit-v_1;if(!(snowballProgram.eq_s_b(1,"Y"))){return false;}}while(false);snowballProgram.bra=snowballProgram.cursor;if(!(snowballProgram.out_grouping_b(g_v,97,121))){return false;}
v_2=snowballProgram.limit-snowballProgram.cursor;lab2:do{if(snowballProgram.cursor>snowballProgram.limit_backward){break lab2;}
return false;}while(false);snowballProgram.cursor=snowballProgram.limit-v_2;snowballProgram.slice_from("i");return true;}
function r_Step_2(){var among_var;snowballProgram.ket=snowballProgram.cursor;among_var=snowballProgram.find_among_b(a_5,24);if(among_var==0){return false;}
snowballProgram.bra=snowballProgram.cursor;if(!r_R1()){return false;}
switch(among_var){case 0:return false;case 1:snowballProgram.slice_from("tion");break;case 2:snowballProgram.slice_from("ence");break;case 3:snowballProgram.slice_from("ance");break;case 4:snowballProgram.slice_from("able");break;case 5:snowballProgram.slice_from("ent");break;case 6:snowballProgram.slice_from("ize");break;case 7:snowballProgram.slice_from("ate");break;case 8:snowballProgram.slice_from("al");break;case 9:snowballProgram.slice_from("ful");break;case 10:snowballProgram.slice_from("ous");break;case 11:snowballProgram.slice_from("ive");break;case 12:snowballProgram.slice_from("ble");break;case 13:if(!(snowballProgram.eq_s_b(1,"l"))){return false;}
snowballProgram.slice_from("og");break;case 14:snowballProgram.slice_from("ful");break;case 15:snowballProgram.slice_from("less");break;case 16:if(!(snowballProgram.in_grouping_b(g_valid_LI,99,116))){return false;}
snowballProgram.slice_del();break;}
return true;}
function r_Step_3(){var among_var;snowballProgram.ket=snowballProgram.cursor;among_var=snowballProgram.find_among_b(a_6,9);if(among_var==0){return false;}
snowballProgram.bra=snowballProgram.cursor;if(!r_R1()){return false;}
switch(among_var){case 0:return false;case 1:snowballProgram.slice_from("tion");break;case 2:snowballProgram.slice_from("ate");break;case 3:snowballProgram.slice_from("al");break;case 4:snowballProgram.slice_from("ic");break;case 5:snowballProgram.slice_del();break;case 6:if(!r_R2()){return false;}
snowballProgram.slice_del();break;}
return true;}
function r_Step_4(){var among_var,v_1;snowballProgram.ket=snowballProgram.cursor;among_var=snowballProgram.find_among_b(a_7,18);if(among_var==0){return false;}
snowballProgram.bra=snowballProgram.cursor;if(!r_R2()){return false;}
switch(among_var){case 0:return false;case 1:snowballProgram.slice_del();break;case 2:lab0:do{v_1=snowballProgram.limit-snowballProgram.cursor;lab1:do{if(!(snowballProgram.eq_s_b(1,"s"))){break lab1;}
break lab0;}while(false);snowballProgram.cursor=snowballProgram.limit-v_1;if(!(snowballProgram.eq_s_b(1,"t"))){return false;}}while(false);snowballProgram.slice_del();break;}
return true;}
function r_Step_5(){var among_var,v_1,v_2;snowballProgram.ket=snowballProgram.cursor;among_var=snowballProgram.find_among_b(a_8,2);if(among_var==0){return false;}
snowballProgram.bra=snowballProgram.cursor;switch(among_var){case 0:return false;case 1:lab0:do{v_1=snowballProgram.limit-snowballProgram.cursor;lab1:do{if(!r_R2()){break lab1;}
break lab0;}while(false);snowballProgram.cursor=snowballProgram.limit-v_1;if(!r_R1()){return false;}
v_2=snowballProgram.limit-snowballProgram.cursor;lab2:do{if(!r_shortv()){break lab2;}
return false;}while(false);snowballProgram.cursor=snowballProgram.limit-v_2;}while(false);snowballProgram.slice_del();break;case 2:if(!r_R2()){return false;}
if(!(snowballProgram.eq_s_b(1,"l"))){return false;}
snowballProgram.slice_del();break;}
return true;}
function r_exception2(){snowballProgram.ket=snowballProgram.cursor;if(snowballProgram.find_among_b(a_9,8)==0){return false;}
snowballProgram.bra=snowballProgram.cursor;if(snowballProgram.cursor>snowballProgram.limit_backward){return false;}
return true;}
function r_exception1(){var among_var;snowballProgram.bra=snowballProgram.cursor;among_var=snowballProgram.find_among(a_10,18);if(among_var==0){return false;}
snowballProgram.ket=snowballProgram.cursor;if(snowballProgram.cursor<snowballProgram.limit){return false;}
switch(among_var){case 0:return false;case 1:snowballProgram.slice_from("ski");break;case 2:snowballProgram.slice_from("sky");break;case 3:snowballProgram.slice_from("die");break;case 4:snowballProgram.slice_from("lie");break;case 5:snowballProgram.slice_from("tie");break;case 6:snowballProgram.slice_from("idl");break;case 7:snowballProgram.slice_from("gentl");break;case 8:snowballProgram.slice_from("ugli");break;case 9:snowballProgram.slice_from("earli");break;case 10:snowballProgram.slice_from("onli");break;case 11:snowballProgram.slice_from("singl");break;}
return true;}
function r_postlude(){var v_1,v_2;if(!(B_Y_found)){return false;}
replab0:while(true){v_1=snowballProgram.cursor;lab1:do{golab2:while(true){v_2=snowballProgram.cursor;lab3:do{snowballProgram.bra=snowballProgram.cursor;if(!(snowballProgram.eq_s(1,"Y"))){break lab3;}
snowballProgram.ket=snowballProgram.cursor;snowballProgram.cursor=v_2;break golab2;}while(false);snowballProgram.cursor=v_2;if(snowballProgram.cursor>=snowballProgram.limit){break lab1;}
snowballProgram.cursor++;}
snowballProgram.slice_from("y");continue replab0;}while(false);snowballProgram.cursor=v_1;break replab0;}
return true;}}