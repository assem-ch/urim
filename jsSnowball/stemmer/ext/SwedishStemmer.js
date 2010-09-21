function SwedishStemmer(){var a_0=[new Among("a",-1,1),new Among("arna",0,1),new Among("erna",0,1),new Among("heterna",2,1),new Among("orna",0,1),new Among("ad",-1,1),new Among("e",-1,1),new Among("ade",6,1),new Among("ande",6,1),new Among("arne",6,1),new Among("are",6,1),new Among("aste",6,1),new Among("en",-1,1),new Among("anden",12,1),new Among("aren",12,1),new Among("heten",12,1),new Among("ern",-1,1),new Among("ar",-1,1),new Among("er",-1,1),new Among("heter",18,1),new Among("or",-1,1),new Among("s",-1,2),new Among("as",21,1),new Among("arnas",22,1),new Among("ernas",22,1),new Among("ornas",22,1),new Among("es",21,1),new Among("ades",26,1),new Among("andes",26,1),new Among("ens",21,1),new Among("arens",29,1),new Among("hetens",29,1),new Among("erns",21,1),new Among("at",-1,1),new Among("andet",-1,1),new Among("het",-1,1),new Among("ast",-1,1)];var a_1=[new Among("dd",-1,-1),new Among("gd",-1,-1),new Among("nn",-1,-1),new Among("dt",-1,-1),new Among("gt",-1,-1),new Among("kt",-1,-1),new Among("tt",-1,-1)];var a_2=[new Among("ig",-1,1),new Among("lig",0,1),new Among("els",-1,1),new Among("fullt",-1,3),new Among("l\u00F6st",-1,2)];var g_v=[17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,24,0,32];var g_s_ending=[119,127,149];var I_x,I_p1;var sbp=new SnowballProgram();this.setCurrent=function(word){sbp.setCurrent(word);};this.getCurrent=function(){return sbp.getCurrent()};function r_mark_regions(){var v_1,v_2;I_p1=sbp.limit;v_1=sbp.cursor;var c=sbp.cursor+3;if(0>c||c>sbp.limit){return false;}
sbp.cursor=c;I_x=sbp.cursor;sbp.cursor=v_1;golab0:while(true){v_2=sbp.cursor;lab1:do{if(!(sbp.in_grouping(g_v,97,246))){break lab1;}
sbp.cursor=v_2;break golab0;}while(false);sbp.cursor=v_2;if(sbp.cursor>=sbp.limit){return false;}
sbp.cursor++;}
golab2:while(true){lab3:do{if(!(sbp.out_grouping(g_v,97,246))){break lab3;}
break golab2;}while(false);if(sbp.cursor>=sbp.limit){return false;}
sbp.cursor++;}
I_p1=sbp.cursor;lab4:do{if(!(I_p1<I_x)){break lab4;}
I_p1=I_x;}while(false);return true;}
function r_main_suffix(){var among_var,v_1,v_2;v_1=sbp.limit-sbp.cursor;if(sbp.cursor<I_p1){return false;}
sbp.cursor=I_p1;v_2=sbp.limit_backward;sbp.limit_backward=sbp.cursor;sbp.cursor=sbp.limit-v_1;sbp.ket=sbp.cursor;among_var=sbp.find_among_b(a_0,37);if(among_var==0){sbp.limit_backward=v_2;return false;}
sbp.bra=sbp.cursor;sbp.limit_backward=v_2;switch(among_var){case 0:return false;case 1:sbp.slice_del();break;case 2:if(!(sbp.in_grouping_b(g_s_ending,98,121))){return false;}
sbp.slice_del();break;}
return true;}
function r_consonant_pair(){var v_1,v_2,v_3;v_1=sbp.limit-sbp.cursor;if(sbp.cursor<I_p1){return false;}
sbp.cursor=I_p1;v_2=sbp.limit_backward;sbp.limit_backward=sbp.cursor;sbp.cursor=sbp.limit-v_1;v_3=sbp.limit-sbp.cursor;if(sbp.find_among_b(a_1,7)==0){sbp.limit_backward=v_2;return false;}
sbp.cursor=sbp.limit-v_3;sbp.ket=sbp.cursor;if(sbp.cursor<=sbp.limit_backward){sbp.limit_backward=v_2;return false;}
sbp.cursor--;sbp.bra=sbp.cursor;sbp.slice_del();sbp.limit_backward=v_2;return true;}
function r_other_suffix(){var among_var,v_1,v_2;v_1=sbp.limit-sbp.cursor;if(sbp.cursor<I_p1){return false;}
sbp.cursor=I_p1;v_2=sbp.limit_backward;sbp.limit_backward=sbp.cursor;sbp.cursor=sbp.limit-v_1;sbp.ket=sbp.cursor;among_var=sbp.find_among_b(a_2,5);if(among_var==0){sbp.limit_backward=v_2;return false;}
sbp.bra=sbp.cursor;switch(among_var){case 0:sbp.limit_backward=v_2;return false;case 1:sbp.slice_del();break;case 2:sbp.slice_from("l\u00F6s");break;case 3:sbp.slice_from("full");break;}
sbp.limit_backward=v_2;return true;}
this.stem=function(){var v_1,v_2,v_3,v_4;v_1=sbp.cursor;lab0:do{if(!r_mark_regions()){break lab0;}}while(false);sbp.cursor=v_1;sbp.limit_backward=sbp.cursor;sbp.cursor=sbp.limit;v_2=sbp.limit-sbp.cursor;lab1:do{if(!r_main_suffix()){break lab1;}}while(false);sbp.cursor=sbp.limit-v_2;v_3=sbp.limit-sbp.cursor;lab2:do{if(!r_consonant_pair()){break lab2;}}while(false);sbp.cursor=sbp.limit-v_3;v_4=sbp.limit-sbp.cursor;lab3:do{if(!r_other_suffix()){break lab3;}}while(false);sbp.cursor=sbp.limit-v_4;sbp.cursor=sbp.limit_backward;return true;}}