function PortugueseStemmer(){var a_0=[new Among("",-1,3),new Among("\u00E3",0,1),new Among("\u00F5",0,2)],a_1=[new Among("",-1,3),new Among("a~",0,1),new Among("o~",0,2)],a_2=[new Among("ic",-1,-1),new Among("ad",-1,-1),new Among("os",-1,-1),new Among("iv",-1,1)],a_3=[new Among("ante",-1,1),new Among("avel",-1,1),new Among("\u00EDvel",-1,1)],a_4=[new Among("ic",-1,1),new Among("abil",-1,1),new Among("iv",-1,1)],a_5=[new Among("ica",-1,1),new Among("\u00E2ncia",-1,1),new Among("\u00EAncia",-1,4),new Among("ira",-1,9),new Among("adora",-1,1),new Among("osa",-1,1),new Among("ista",-1,1),new Among("iva",-1,8),new Among("eza",-1,1),new Among("log\u00EDa",-1,2),new Among("idade",-1,7),new Among("ante",-1,1),new Among("mente",-1,6),new Among("amente",12,5),new Among("\u00E1vel",-1,1),new Among("\u00EDvel",-1,1),new Among("uci\u00F3n",-1,3),new Among("ico",-1,1),new Among("ismo",-1,1),new Among("oso",-1,1),new Among("amento",-1,1),new Among("imento",-1,1),new Among("ivo",-1,8),new Among("a\u00E7a~o",-1,1),new Among("ador",-1,1),new Among("icas",-1,1),new Among("\u00EAncias",-1,4),new Among("iras",-1,9),new Among("adoras",-1,1),new Among("osas",-1,1),new Among("istas",-1,1),new Among("ivas",-1,8),new Among("ezas",-1,1),new Among("log\u00EDas",-1,2),new Among("idades",-1,7),new Among("uciones",-1,3),new Among("adores",-1,1),new Among("antes",-1,1),new Among("a\u00E7o~es",-1,1),new Among("icos",-1,1),new Among("ismos",-1,1),new Among("osos",-1,1),new Among("amentos",-1,1),new Among("imentos",-1,1),new Among("ivos",-1,8)],a_6=[new Among("ada",-1,1),new Among("ida",-1,1),new Among("ia",-1,1),new Among("aria",2,1),new Among("eria",2,1),new Among("iria",2,1),new Among("ara",-1,1),new Among("era",-1,1),new Among("ira",-1,1),new Among("ava",-1,1),new Among("asse",-1,1),new Among("esse",-1,1),new Among("isse",-1,1),new Among("aste",-1,1),new Among("este",-1,1),new Among("iste",-1,1),new Among("ei",-1,1),new Among("arei",16,1),new Among("erei",16,1),new Among("irei",16,1),new Among("am",-1,1),new Among("iam",20,1),new Among("ariam",21,1),new Among("eriam",21,1),new Among("iriam",21,1),new Among("aram",20,1),new Among("eram",20,1),new Among("iram",20,1),new Among("avam",20,1),new Among("em",-1,1),new Among("arem",29,1),new Among("erem",29,1),new Among("irem",29,1),new Among("assem",29,1),new Among("essem",29,1),new Among("issem",29,1),new Among("ado",-1,1),new Among("ido",-1,1),new Among("ando",-1,1),new Among("endo",-1,1),new Among("indo",-1,1),new Among("ara~o",-1,1),new Among("era~o",-1,1),new Among("ira~o",-1,1),new Among("ar",-1,1),new Among("er",-1,1),new Among("ir",-1,1),new Among("as",-1,1),new Among("adas",47,1),new Among("idas",47,1),new Among("ias",47,1),new Among("arias",50,1),new Among("erias",50,1),new Among("irias",50,1),new Among("aras",47,1),new Among("eras",47,1),new Among("iras",47,1),new Among("avas",47,1),new Among("es",-1,1),new Among("ardes",58,1),new Among("erdes",58,1),new Among("irdes",58,1),new Among("ares",58,1),new Among("eres",58,1),new Among("ires",58,1),new Among("asses",58,1),new Among("esses",58,1),new Among("isses",58,1),new Among("astes",58,1),new Among("estes",58,1),new Among("istes",58,1),new Among("is",-1,1),new Among("ais",71,1),new Among("eis",71,1),new Among("areis",73,1),new Among("ereis",73,1),new Among("ireis",73,1),new Among("\u00E1reis",73,1),new Among("\u00E9reis",73,1),new Among("\u00EDreis",73,1),new Among("\u00E1sseis",73,1),new Among("\u00E9sseis",73,1),new Among("\u00EDsseis",73,1),new Among("\u00E1veis",73,1),new Among("\u00EDeis",73,1),new Among("ar\u00EDeis",84,1),new Among("er\u00EDeis",84,1),new Among("ir\u00EDeis",84,1),new Among("ados",-1,1),new Among("idos",-1,1),new Among("amos",-1,1),new Among("\u00E1ramos",90,1),new Among("\u00E9ramos",90,1),new Among("\u00EDramos",90,1),new Among("\u00E1vamos",90,1),new Among("\u00EDamos",90,1),new Among("ar\u00EDamos",95,1),new Among("er\u00EDamos",95,1),new Among("ir\u00EDamos",95,1),new Among("emos",-1,1),new Among("aremos",99,1),new Among("eremos",99,1),new Among("iremos",99,1),new Among("\u00E1ssemos",99,1),new Among("\u00EAssemos",99,1),new Among("\u00EDssemos",99,1),new Among("imos",-1,1),new Among("armos",-1,1),new Among("ermos",-1,1),new Among("irmos",-1,1),new Among("\u00E1mos",-1,1),new Among("ar\u00E1s",-1,1),new Among("er\u00E1s",-1,1),new Among("ir\u00E1s",-1,1),new Among("eu",-1,1),new Among("iu",-1,1),new Among("ou",-1,1),new Among("ar\u00E1",-1,1),new Among("er\u00E1",-1,1),new Among("ir\u00E1",-1,1)],a_7=[new Among("a",-1,1),new Among("i",-1,1),new Among("o",-1,1),new Among("os",-1,1),new Among("\u00E1",-1,1),new Among("\u00ED",-1,1),new Among("\u00F3",-1,1)],a_8=[new Among("e",-1,1),new Among("\u00E7",-1,2),new Among("\u00E9",-1,1),new Among("\u00EA",-1,1)],g_v=[17,65,16,0,0,0,0,0,0,0,0,0,0,0,0,0,3,19,12,2],I_p2,I_p1,I_pV,sbp=new SnowballProgram();this.setCurrent=function(word){sbp.setCurrent(word);};this.getCurrent=function(){return sbp.getCurrent();};function r_prelude(){var among_var;while(true){sbp.bra=sbp.cursor;among_var=sbp.find_among(a_0,3);if(among_var){sbp.ket=sbp.cursor;switch(among_var){case 1:sbp.slice_from("a~");continue;case 2:sbp.slice_from("o~");continue;case 3:if(sbp.cursor>=sbp.limit)
break;sbp.cursor++;continue;}}
break;}}
function habr2(){if(sbp.out_grouping(g_v,97,250)){while(!sbp.in_grouping(g_v,97,250)){if(sbp.cursor>=sbp.limit)
return true;sbp.cursor++;}
return false;}
return true;}
function habr3(){if(sbp.in_grouping(g_v,97,250)){while(!sbp.out_grouping(g_v,97,250)){if(sbp.cursor>=sbp.limit)
return false;sbp.cursor++;}}
I_pV=sbp.cursor;return true;}
function habr4(){var v_1=sbp.cursor,v_2,v_3;if(sbp.in_grouping(g_v,97,250)){v_2=sbp.cursor;if(habr2()){sbp.cursor=v_2;if(habr3())
return;}else
I_pV=sbp.cursor;}
sbp.cursor=v_1;if(sbp.out_grouping(g_v,97,250)){v_3=sbp.cursor;if(habr2()){sbp.cursor=v_3;if(!sbp.in_grouping(g_v,97,250)||sbp.cursor>=sbp.limit)
return;sbp.cursor++;}
I_pV=sbp.cursor;}}
function habr5(){while(!sbp.in_grouping(g_v,97,250)){if(sbp.cursor>=sbp.limit)
return false;sbp.cursor++;}
while(!sbp.out_grouping(g_v,97,250)){if(sbp.cursor>=sbp.limit)
return false;sbp.cursor++;}
return true;}
function r_mark_regions(){var v_1=sbp.cursor;I_pV=sbp.limit;I_p1=I_pV;I_p2=I_pV;habr4();sbp.cursor=v_1;if(habr5()){I_p1=sbp.cursor;if(habr5())
I_p2=sbp.cursor;}}
function r_postlude(){var among_var;while(true){sbp.bra=sbp.cursor;among_var=sbp.find_among(a_1,3);if(among_var){sbp.ket=sbp.cursor;switch(among_var){case 1:sbp.slice_from("\u00E3");continue;case 2:sbp.slice_from("\u00F5");continue;case 3:if(sbp.cursor>=sbp.limit)
break;sbp.cursor++;continue;}}
break;}}
function r_RV(){return I_pV<=sbp.cursor;}
function r_R1(){return I_p1<=sbp.cursor;}
function r_R2(){return I_p2<=sbp.cursor;}
function r_standard_suffix(){var among_var;sbp.ket=sbp.cursor;among_var=sbp.find_among_b(a_5,45);if(!among_var)
return false;sbp.bra=sbp.cursor;switch(among_var){case 1:if(!r_R2())
return false;sbp.slice_del();break;case 2:if(!r_R2())
return false;sbp.slice_from("log");break;case 3:if(!r_R2())
return false;sbp.slice_from("u");break;case 4:if(!r_R2())
return false;sbp.slice_from("ente");break;case 5:if(!r_R1())
return false;sbp.slice_del();sbp.ket=sbp.cursor;among_var=sbp.find_among_b(a_2,4);if(among_var){sbp.bra=sbp.cursor;if(r_R2()){sbp.slice_del();if(among_var==1){sbp.ket=sbp.cursor;if(sbp.eq_s_b(2,"at")){sbp.bra=sbp.cursor;if(r_R2())
sbp.slice_del();}}}}
break;case 6:if(!r_R2())
return false;sbp.slice_del();sbp.ket=sbp.cursor;among_var=sbp.find_among_b(a_3,3);if(among_var){sbp.bra=sbp.cursor;if(among_var==1)
if(r_R2())
sbp.slice_del();}
break;case 7:if(!r_R2())
return false;sbp.slice_del();sbp.ket=sbp.cursor;among_var=sbp.find_among_b(a_4,3);if(among_var){sbp.bra=sbp.cursor;if(among_var==1)
if(r_R2())
sbp.slice_del();}
break;case 8:if(!r_R2())
return false;sbp.slice_del();sbp.ket=sbp.cursor;if(sbp.eq_s_b(2,"at")){sbp.bra=sbp.cursor;if(r_R2())
sbp.slice_del();}
break;case 9:if(!r_RV()||!sbp.eq_s_b(1,"e"))
return false;sbp.slice_from("ir");break;}
return true;}
function r_verb_suffix(){var among_var,v_1;if(sbp.cursor>=I_pV){v_1=sbp.limit_backward;sbp.limit_backward=I_pV;sbp.ket=sbp.cursor;among_var=sbp.find_among_b(a_6,120);if(among_var){sbp.bra=sbp.cursor;if(among_var==1)
sbp.slice_del();sbp.limit_backward=v_1;return true;}
sbp.limit_backward=v_1;}
return false;}
function r_residual_suffix(){var among_var;sbp.ket=sbp.cursor;among_var=sbp.find_among_b(a_7,7);if(among_var){sbp.bra=sbp.cursor;if(among_var==1)
if(r_RV())
sbp.slice_del();}}
function habr6(c1,c2){if(sbp.eq_s_b(1,c1)){sbp.bra=sbp.cursor;var v_1=sbp.limit-sbp.cursor;if(sbp.eq_s_b(1,c2)){sbp.cursor=sbp.limit-v_1;if(r_RV())
sbp.slice_del();return false;}}
return true;}
function r_residual_form(){var among_var,v_1,v_2,v_3;sbp.ket=sbp.cursor;among_var=sbp.find_among_b(a_8,4);if(among_var){sbp.bra=sbp.cursor;switch(among_var){case 1:if(r_RV()){sbp.slice_del();sbp.ket=sbp.cursor;v_1=sbp.limit-sbp.cursor;if(habr6("u","g"))
habr6("i","c")}
break;case 2:sbp.slice_from("c");break;}}}
function habr1(){if(!r_standard_suffix()){sbp.cursor=sbp.limit;if(!r_verb_suffix()){sbp.cursor=sbp.limit;r_residual_suffix();return;}}
sbp.cursor=sbp.limit;sbp.ket=sbp.cursor;if(sbp.eq_s_b(1,"i")){sbp.bra=sbp.cursor;if(sbp.eq_s_b(1,"c")){sbp.cursor=sbp.limit;if(r_RV())
sbp.slice_del();}}}
this.stem=function(){var v_1=sbp.cursor;r_prelude();sbp.cursor=v_1;r_mark_regions();sbp.limit_backward=v_1;sbp.cursor=sbp.limit;habr1();sbp.cursor=sbp.limit;r_residual_form();sbp.cursor=sbp.limit_backward;r_postlude();return true;}}