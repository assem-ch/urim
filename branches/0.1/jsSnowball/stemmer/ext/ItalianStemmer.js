function ItalianStemmer(){var a_0=[new Among("",-1,7),new Among("qu",0,6),new Among("\u00E1",0,1),new Among("\u00E9",0,2),new Among("\u00ED",0,3),new Among("\u00F3",0,4),new Among("\u00FA",0,5)];var a_1=[new Among("",-1,3),new Among("I",0,1),new Among("U",0,2)];var a_2=[new Among("la",-1,-1),new Among("cela",0,-1),new Among("gliela",0,-1),new Among("mela",0,-1),new Among("tela",0,-1),new Among("vela",0,-1),new Among("le",-1,-1),new Among("cele",6,-1),new Among("gliele",6,-1),new Among("mele",6,-1),new Among("tele",6,-1),new Among("vele",6,-1),new Among("ne",-1,-1),new Among("cene",12,-1),new Among("gliene",12,-1),new Among("mene",12,-1),new Among("sene",12,-1),new Among("tene",12,-1),new Among("vene",12,-1),new Among("ci",-1,-1),new Among("li",-1,-1),new Among("celi",20,-1),new Among("glieli",20,-1),new Among("meli",20,-1),new Among("teli",20,-1),new Among("veli",20,-1),new Among("gli",20,-1),new Among("mi",-1,-1),new Among("si",-1,-1),new Among("ti",-1,-1),new Among("vi",-1,-1),new Among("lo",-1,-1),new Among("celo",31,-1),new Among("glielo",31,-1),new Among("melo",31,-1),new Among("telo",31,-1),new Among("velo",31,-1)];var a_3=[new Among("ando",-1,1),new Among("endo",-1,1),new Among("ar",-1,2),new Among("er",-1,2),new Among("ir",-1,2)];var a_4=[new Among("ic",-1,-1),new Among("abil",-1,-1),new Among("os",-1,-1),new Among("iv",-1,1)];var a_5=[new Among("ic",-1,1),new Among("abil",-1,1),new Among("iv",-1,1)];var a_6=[new Among("ica",-1,1),new Among("logia",-1,3),new Among("osa",-1,1),new Among("ista",-1,1),new Among("iva",-1,9),new Among("anza",-1,1),new Among("enza",-1,5),new Among("ice",-1,1),new Among("atrice",7,1),new Among("iche",-1,1),new Among("logie",-1,3),new Among("abile",-1,1),new Among("ibile",-1,1),new Among("usione",-1,4),new Among("azione",-1,2),new Among("uzione",-1,4),new Among("atore",-1,2),new Among("ose",-1,1),new Among("ante",-1,1),new Among("mente",-1,1),new Among("amente",19,7),new Among("iste",-1,1),new Among("ive",-1,9),new Among("anze",-1,1),new Among("enze",-1,5),new Among("ici",-1,1),new Among("atrici",25,1),new Among("ichi",-1,1),new Among("abili",-1,1),new Among("ibili",-1,1),new Among("ismi",-1,1),new Among("usioni",-1,4),new Among("azioni",-1,2),new Among("uzioni",-1,4),new Among("atori",-1,2),new Among("osi",-1,1),new Among("anti",-1,1),new Among("amenti",-1,6),new Among("imenti",-1,6),new Among("isti",-1,1),new Among("ivi",-1,9),new Among("ico",-1,1),new Among("ismo",-1,1),new Among("oso",-1,1),new Among("amento",-1,6),new Among("imento",-1,6),new Among("ivo",-1,9),new Among("it\u00E0",-1,8),new Among("ist\u00E0",-1,1),new Among("ist\u00E8",-1,1),new Among("ist\u00EC",-1,1)];var a_7=[new Among("isca",-1,1),new Among("enda",-1,1),new Among("ata",-1,1),new Among("ita",-1,1),new Among("uta",-1,1),new Among("ava",-1,1),new Among("eva",-1,1),new Among("iva",-1,1),new Among("erebbe",-1,1),new Among("irebbe",-1,1),new Among("isce",-1,1),new Among("ende",-1,1),new Among("are",-1,1),new Among("ere",-1,1),new Among("ire",-1,1),new Among("asse",-1,1),new Among("ate",-1,1),new Among("avate",16,1),new Among("evate",16,1),new Among("ivate",16,1),new Among("ete",-1,1),new Among("erete",20,1),new Among("irete",20,1),new Among("ite",-1,1),new Among("ereste",-1,1),new Among("ireste",-1,1),new Among("ute",-1,1),new Among("erai",-1,1),new Among("irai",-1,1),new Among("isci",-1,1),new Among("endi",-1,1),new Among("erei",-1,1),new Among("irei",-1,1),new Among("assi",-1,1),new Among("ati",-1,1),new Among("iti",-1,1),new Among("eresti",-1,1),new Among("iresti",-1,1),new Among("uti",-1,1),new Among("avi",-1,1),new Among("evi",-1,1),new Among("ivi",-1,1),new Among("isco",-1,1),new Among("ando",-1,1),new Among("endo",-1,1),new Among("Yamo",-1,1),new Among("iamo",-1,1),new Among("avamo",-1,1),new Among("evamo",-1,1),new Among("ivamo",-1,1),new Among("eremo",-1,1),new Among("iremo",-1,1),new Among("assimo",-1,1),new Among("ammo",-1,1),new Among("emmo",-1,1),new Among("eremmo",54,1),new Among("iremmo",54,1),new Among("immo",-1,1),new Among("ano",-1,1),new Among("iscano",58,1),new Among("avano",58,1),new Among("evano",58,1),new Among("ivano",58,1),new Among("eranno",-1,1),new Among("iranno",-1,1),new Among("ono",-1,1),new Among("iscono",65,1),new Among("arono",65,1),new Among("erono",65,1),new Among("irono",65,1),new Among("erebbero",-1,1),new Among("irebbero",-1,1),new Among("assero",-1,1),new Among("essero",-1,1),new Among("issero",-1,1),new Among("ato",-1,1),new Among("ito",-1,1),new Among("uto",-1,1),new Among("avo",-1,1),new Among("evo",-1,1),new Among("ivo",-1,1),new Among("ar",-1,1),new Among("ir",-1,1),new Among("er\u00E0",-1,1),new Among("ir\u00E0",-1,1),new Among("er\u00F2",-1,1),new Among("ir\u00F2",-1,1)];var g_v=[17,65,16,0,0,0,0,0,0,0,0,0,0,0,0,128,128,8,2,1];var g_AEIO=[17,65,0,0,0,0,0,0,0,0,0,0,0,0,0,128,128,8,2];var g_CG=[17];var I_p2,I_p1,I_pV;var snowballProgram=new SnowballProgram();this.setCurrent=function(word){snowballProgram.setCurrent(word);};this.getCurrent=function(){return snowballProgram.getCurrent()};function r_prelude(){var among_var,v_1,v_2,v_3,v_4,v_5;v_1=snowballProgram.cursor;replab0:while(true){v_2=snowballProgram.cursor;lab1:do{snowballProgram.bra=snowballProgram.cursor;among_var=snowballProgram.find_among(a_0,7);if(among_var==0){break lab1;}
snowballProgram.ket=snowballProgram.cursor;switch(among_var){case 0:break lab1;case 1:snowballProgram.slice_from("\u00E0");break;case 2:snowballProgram.slice_from("\u00E8");break;case 3:snowballProgram.slice_from("\u00EC");break;case 4:snowballProgram.slice_from("\u00F2");break;case 5:snowballProgram.slice_from("\u00F9");break;case 6:snowballProgram.slice_from("qU");break;case 7:if(snowballProgram.cursor>=snowballProgram.limit){break lab1;}
snowballProgram.cursor++;break;}
continue replab0;}while(false);snowballProgram.cursor=v_2;break replab0;}
snowballProgram.cursor=v_1;replab2:while(true){v_3=snowballProgram.cursor;lab3:do{golab4:while(true){v_4=snowballProgram.cursor;lab5:do{if(!(snowballProgram.in_grouping(g_v,97,249))){break lab5;}
snowballProgram.bra=snowballProgram.cursor;lab6:do{v_5=snowballProgram.cursor;lab7:do{if(!(snowballProgram.eq_s(1,"u"))){break lab7;}
snowballProgram.ket=snowballProgram.cursor;if(!(snowballProgram.in_grouping(g_v,97,249))){break lab7;}
snowballProgram.slice_from("U");break lab6;}while(false);snowballProgram.cursor=v_5;if(!(snowballProgram.eq_s(1,"i"))){break lab5;}
snowballProgram.ket=snowballProgram.cursor;if(!(snowballProgram.in_grouping(g_v,97,249))){break lab5;}
snowballProgram.slice_from("I");}while(false);snowballProgram.cursor=v_4;break golab4;}while(false);snowballProgram.cursor=v_4;if(snowballProgram.cursor>=snowballProgram.limit){break lab3;}
snowballProgram.cursor++;}
continue replab2;}while(false);snowballProgram.cursor=v_3;break replab2;}
return true;}
function r_mark_regions(){var v_1,v_2,v_3,v_6,v_8;I_pV=snowballProgram.limit;I_p1=snowballProgram.limit;I_p2=snowballProgram.limit;v_1=snowballProgram.cursor;lab0:do{lab1:do{v_2=snowballProgram.cursor;lab2:do{if(!(snowballProgram.in_grouping(g_v,97,249))){break lab2;}
lab3:do{v_3=snowballProgram.cursor;lab4:do{if(!(snowballProgram.out_grouping(g_v,97,249))){break lab4;}
golab5:while(true){lab6:do{if(!(snowballProgram.in_grouping(g_v,97,249))){break lab6;}
break golab5;}while(false);if(snowballProgram.cursor>=snowballProgram.limit){break lab4;}
snowballProgram.cursor++;}
break lab3;}while(false);snowballProgram.cursor=v_3;if(!(snowballProgram.in_grouping(g_v,97,249))){break lab2;}
golab7:while(true){lab8:do{if(!(snowballProgram.out_grouping(g_v,97,249))){break lab8;}
break golab7;}while(false);if(snowballProgram.cursor>=snowballProgram.limit){break lab2;}
snowballProgram.cursor++;}}while(false);break lab1;}while(false);snowballProgram.cursor=v_2;if(!(snowballProgram.out_grouping(g_v,97,249))){break lab0;}
lab9:do{v_6=snowballProgram.cursor;lab10:do{if(!(snowballProgram.out_grouping(g_v,97,249))){break lab10;}
golab11:while(true){lab12:do{if(!(snowballProgram.in_grouping(g_v,97,249))){break lab12;}
break golab11;}while(false);if(snowballProgram.cursor>=snowballProgram.limit){break lab10;}
snowballProgram.cursor++;}
break lab9;}while(false);snowballProgram.cursor=v_6;if(!(snowballProgram.in_grouping(g_v,97,249))){break lab0;}
if(snowballProgram.cursor>=snowballProgram.limit){break lab0;}
snowballProgram.cursor++;}while(false);}while(false);I_pV=snowballProgram.cursor;}while(false);snowballProgram.cursor=v_1;v_8=snowballProgram.cursor;lab13:do{golab14:while(true){lab15:do{if(!(snowballProgram.in_grouping(g_v,97,249))){break lab15;}
break golab14;}while(false);if(snowballProgram.cursor>=snowballProgram.limit){break lab13;}
snowballProgram.cursor++;}
golab16:while(true){lab17:do{if(!(snowballProgram.out_grouping(g_v,97,249))){break lab17;}
break golab16;}while(false);if(snowballProgram.cursor>=snowballProgram.limit){break lab13;}
snowballProgram.cursor++;}
I_p1=snowballProgram.cursor;golab18:while(true){lab19:do{if(!(snowballProgram.in_grouping(g_v,97,249))){break lab19;}
break golab18;}while(false);if(snowballProgram.cursor>=snowballProgram.limit){break lab13;}
snowballProgram.cursor++;}
golab20:while(true){lab21:do{if(!(snowballProgram.out_grouping(g_v,97,249))){break lab21;}
break golab20;}while(false);if(snowballProgram.cursor>=snowballProgram.limit){break lab13;}
snowballProgram.cursor++;}
I_p2=snowballProgram.cursor;}while(false);snowballProgram.cursor=v_8;return true;}
function r_postlude(){var among_var,v_1;replab0:while(true){v_1=snowballProgram.cursor;lab1:do{snowballProgram.bra=snowballProgram.cursor;among_var=snowballProgram.find_among(a_1,3);if(among_var==0){break lab1;}
snowballProgram.ket=snowballProgram.cursor;switch(among_var){case 0:break lab1;case 1:snowballProgram.slice_from("i");break;case 2:snowballProgram.slice_from("u");break;case 3:if(snowballProgram.cursor>=snowballProgram.limit){break lab1;}
snowballProgram.cursor++;break;}
continue replab0;}while(false);snowballProgram.cursor=v_1;break replab0;}
return true;}
function r_RV(){if(!(I_pV<=snowballProgram.cursor)){return false;}
return true;}
function r_R1(){if(!(I_p1<=snowballProgram.cursor)){return false;}
return true;}
function r_R2(){if(!(I_p2<=snowballProgram.cursor)){return false;}
return true;}
function r_attached_pronoun(){var among_var;snowballProgram.ket=snowballProgram.cursor;if(snowballProgram.find_among_b(a_2,37)==0){return false;}
snowballProgram.bra=snowballProgram.cursor;among_var=snowballProgram.find_among_b(a_3,5);if(among_var==0){return false;}
if(!r_RV()){return false;}
switch(among_var){case 0:return false;case 1:snowballProgram.slice_del();break;case 2:snowballProgram.slice_from("e");break;}
return true;}
function r_standard_suffix(){var among_var,v_1,v_2,v_3,v_4;snowballProgram.ket=snowballProgram.cursor;among_var=snowballProgram.find_among_b(a_6,51);if(among_var==0){return false;}
snowballProgram.bra=snowballProgram.cursor;switch(among_var){case 0:return false;case 1:if(!r_R2()){return false;}
snowballProgram.slice_del();break;case 2:if(!r_R2()){return false;}
snowballProgram.slice_del();v_1=snowballProgram.limit-snowballProgram.cursor;lab0:do{snowballProgram.ket=snowballProgram.cursor;if(!(snowballProgram.eq_s_b(2,"ic"))){snowballProgram.cursor=snowballProgram.limit-v_1;break lab0;}
snowballProgram.bra=snowballProgram.cursor;if(!r_R2()){snowballProgram.cursor=snowballProgram.limit-v_1;break lab0;}
snowballProgram.slice_del();}while(false);break;case 3:if(!r_R2()){return false;}
snowballProgram.slice_from("log");break;case 4:if(!r_R2()){return false;}
snowballProgram.slice_from("u");break;case 5:if(!r_R2()){return false;}
snowballProgram.slice_from("ente");break;case 6:if(!r_RV()){return false;}
snowballProgram.slice_del();break;case 7:if(!r_R1()){return false;}
snowballProgram.slice_del();v_2=snowballProgram.limit-snowballProgram.cursor;lab1:do{snowballProgram.ket=snowballProgram.cursor;among_var=snowballProgram.find_among_b(a_4,4);if(among_var==0){snowballProgram.cursor=snowballProgram.limit-v_2;break lab1;}
snowballProgram.bra=snowballProgram.cursor;if(!r_R2()){snowballProgram.cursor=snowballProgram.limit-v_2;break lab1;}
snowballProgram.slice_del();switch(among_var){case 0:snowballProgram.cursor=snowballProgram.limit
-v_2;break lab1;case 1:snowballProgram.ket=snowballProgram.cursor;if(!(snowballProgram.eq_s_b(2,"at"))){snowballProgram.cursor=snowballProgram.limit
-v_2;break lab1;}
snowballProgram.bra=snowballProgram.cursor;if(!r_R2()){snowballProgram.cursor=snowballProgram.limit
-v_2;break lab1;}
snowballProgram.slice_del();break;}}while(false);break;case 8:if(!r_R2()){return false;}
snowballProgram.slice_del();v_3=snowballProgram.limit-snowballProgram.cursor;lab2:do{snowballProgram.ket=snowballProgram.cursor;among_var=snowballProgram.find_among_b(a_5,3);if(among_var==0){snowballProgram.cursor=snowballProgram.limit-v_3;break lab2;}
snowballProgram.bra=snowballProgram.cursor;switch(among_var){case 0:snowballProgram.cursor=snowballProgram.limit
-v_3;break lab2;case 1:if(!r_R2()){snowballProgram.cursor=snowballProgram.limit
-v_3;break lab2;}
snowballProgram.slice_del();break;}}while(false);break;case 9:if(!r_R2()){return false;}
snowballProgram.slice_del();v_4=snowballProgram.limit-snowballProgram.cursor;lab3:do{snowballProgram.ket=snowballProgram.cursor;if(!(snowballProgram.eq_s_b(2,"at"))){snowballProgram.cursor=snowballProgram.limit-v_4;break lab3;}
snowballProgram.bra=snowballProgram.cursor;if(!r_R2()){snowballProgram.cursor=snowballProgram.limit-v_4;break lab3;}
snowballProgram.slice_del();snowballProgram.ket=snowballProgram.cursor;if(!(snowballProgram.eq_s_b(2,"ic"))){snowballProgram.cursor=snowballProgram.limit-v_4;break lab3;}
snowballProgram.bra=snowballProgram.cursor;if(!r_R2()){snowballProgram.cursor=snowballProgram.limit-v_4;break lab3;}
snowballProgram.slice_del();}while(false);break;}
return true;}
function r_verb_suffix(){var among_var,v_1,v_2;v_1=snowballProgram.limit-snowballProgram.cursor;if(snowballProgram.cursor<I_pV){return false;}
snowballProgram.cursor=I_pV;v_2=snowballProgram.limit_backward;snowballProgram.limit_backward=snowballProgram.cursor;snowballProgram.cursor=snowballProgram.limit-v_1;snowballProgram.ket=snowballProgram.cursor;among_var=snowballProgram.find_among_b(a_7,87);if(among_var==0){snowballProgram.limit_backward=v_2;return false;}
snowballProgram.bra=snowballProgram.cursor;switch(among_var){case 0:snowballProgram.limit_backward=v_2;return false;case 1:snowballProgram.slice_del();break;}
snowballProgram.limit_backward=v_2;return true;}
function r_vowel_suffix(){var v_1,v_2;v_1=snowballProgram.limit-snowballProgram.cursor;lab0:do{snowballProgram.ket=snowballProgram.cursor;if(!(snowballProgram.in_grouping_b(g_AEIO,97,242))){snowballProgram.cursor=snowballProgram.limit-v_1;break lab0;}
snowballProgram.bra=snowballProgram.cursor;if(!r_RV()){snowballProgram.cursor=snowballProgram.limit-v_1;break lab0;}
snowballProgram.slice_del();snowballProgram.ket=snowballProgram.cursor;if(!(snowballProgram.eq_s_b(1,"i"))){snowballProgram.cursor=snowballProgram.limit-v_1;break lab0;}
snowballProgram.bra=snowballProgram.cursor;if(!r_RV()){snowballProgram.cursor=snowballProgram.limit-v_1;break lab0;}
snowballProgram.slice_del();}while(false);v_2=snowballProgram.limit-snowballProgram.cursor;lab1:do{snowballProgram.ket=snowballProgram.cursor;if(!(snowballProgram.eq_s_b(1,"h"))){snowballProgram.cursor=snowballProgram.limit-v_2;break lab1;}
snowballProgram.bra=snowballProgram.cursor;if(!(snowballProgram.in_grouping_b(g_CG,99,103))){snowballProgram.cursor=snowballProgram.limit-v_2;break lab1;}
if(!r_RV()){snowballProgram.cursor=snowballProgram.limit-v_2;break lab1;}
snowballProgram.slice_del();}while(false);return true;}
this.stem=function(){var v_1,v_2,v_3,v_4,v_5,v_6,v_7;v_1=snowballProgram.cursor;lab0:do{if(!r_prelude()){break lab0;}}while(false);snowballProgram.cursor=v_1;v_2=snowballProgram.cursor;lab1:do{if(!r_mark_regions()){break lab1;}}while(false);snowballProgram.cursor=v_2;snowballProgram.limit_backward=snowballProgram.cursor;snowballProgram.cursor=snowballProgram.limit;v_3=snowballProgram.limit-snowballProgram.cursor;lab2:do{if(!r_attached_pronoun()){break lab2;}}while(false);snowballProgram.cursor=snowballProgram.limit-v_3;v_4=snowballProgram.limit-snowballProgram.cursor;lab3:do{lab4:do{v_5=snowballProgram.limit-snowballProgram.cursor;lab5:do{if(!r_standard_suffix()){break lab5;}
break lab4;}while(false);snowballProgram.cursor=snowballProgram.limit-v_5;if(!r_verb_suffix()){break lab3;}}while(false);}while(false);snowballProgram.cursor=snowballProgram.limit-v_4;v_6=snowballProgram.limit-snowballProgram.cursor;lab6:do{if(!r_vowel_suffix()){break lab6;}}while(false);snowballProgram.cursor=snowballProgram.limit-v_6;snowballProgram.cursor=snowballProgram.limit_backward;v_7=snowballProgram.cursor;lab7:do{if(!r_postlude()){break lab7;}}while(false);snowballProgram.cursor=v_7;return true;}}