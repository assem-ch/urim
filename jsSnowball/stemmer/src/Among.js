function Among(s,substring_i,result,method){if((!s&&s!="")||(!substring_i&&(substring_i!=0))||!result)
throw("Bad Among initialisation: s:"+s+", substring_i: "
+substring_i+", result: "+result);this.s_size=s.length;this.s=this.toCharArray(s);this.substring_i=substring_i;this.result=result;this.method=method;}
Among.prototype.toCharArray=function(s){var sLength=s.length;var charArr=new Array(sLength);for(var i=0;i<sLength;i++)
charArr[i]=s.charCodeAt(i);return charArr;}