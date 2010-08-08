/* generated javascript */
var skin = 'vector';
var stylepath = 'http://bits.wikimedia.org/skins-1.5';

/* MediaWiki:Common.js */
//See http://ru.wikipedia.org/wiki/project:code

importScript_ = importScript
importScript = function (page, proj){
 if (!proj) importScript_(page)
 else {
   if (proj.indexOf('.')==-1) proj += '.wikipedia.org'
   importScriptURI('http://'+proj+'/w/index.php?action=raw&ctype=text/javascript&title='+encodeURIComponent(page.replace(/ /g,'_')))
 }
}

function LinkFA(){
 var pLang = document.getElementById('p-lang')
 if (!pLang) return
 var list = {
 'fa':'Эта статья является избранной',
 'fl':'Этот список или портал является избранным',
 'ga':'Эта статья является хорошей'}
 var iw = pLang.getElementsByTagName('li')
 for (var i=0; i<iw.length; i++)
   for (var s in list)
     if (document.getElementById(iw[i].className+'-'+s)){
       iw[i].className += ' ' + s.toUpperCase()
       iw[i].title = list[s] + ' в другом языковом разделе'
     }
}


function icqIcons(){
 var a, spans = document.getElementById('content').getElementsByTagName('span')
 for (var i=0; a=spans[i]; i++)
   if (a.className == 'ICQ') 
     a.style.backgroundImage = "url('http://status.icq.com/online.gif?icq="+a.id+"&img=5&randseed="+Math.floor(Math.random()*10000000)+"')"
}


function newSectionLink(){
 var plus = document.getElementById('ca-addsection')
 if (!plus) return
 var custom = document.getElementById('add-custom-section')
 if (!custom) return
 plus.firstChild.setAttribute('href', custom.getElementsByTagName('a')[0].href)
}


function editZeroSection(){
 var body = document.getElementById('bodyContent')
 if (!body) return
 var h2s = body.getElementsByTagName('H2')
 var h2 = h2s[0]
 if (!h2) return
 if (h2.parentNode.id == 'toctitle') h2 = h2s[1]
 if (!h2) return
 var span = h2.firstChild
 if (!span || span.className != 'editsection') return
 var zero = span.cloneNode(true)
 body.insertBefore(zero, body.firstChild)
 var a = zero.getElementsByTagName('a')[0]
 if (a.href.indexOf('&section=T') == -1 )  a.title = a.title.replace(/:.*$/,': 0')
 else a.title = 'Править секцию: 0'
 a.setAttribute('href', wgScript + '?title='+encodeURIComponent(wgPageName) + '&action=edit&section=0')
}




//Collapsiblе: [[ВП:СБ]]

var NavigationBarShowDefault = 2
var NavigationBarHide = '[скрыть]'
var NavigationBarShow = '[показать]'

var hasClass = (function (){
 var reCache = {}
 return function (element, className){
   return (reCache[className] ? reCache[className] : (reCache[className] = new RegExp("(?:\\s|^)" + className + "(?:\\s|$)"))).test(element.className)
  }
})()

function collapsibleTables(){
 var Table, HRow,  HCell, btn, a, tblIdx = 0, colTables = []
 var allTables = document.getElementsByTagName('table')
 for (var i=0; Table = allTables[i]; i++){
   if (!hasClass(Table, 'collapsible')) continue
   if (!(HRow=Table.rows[0])) continue
   if (!(HCell=HRow.getElementsByTagName('th')[0])) continue
   Table.id = 'collapsibleTable' + tblIdx
   btn = document.createElement('span')
   btn.style.cssText = 'float:right; font-weight:normal; font-size:smaller'
   a = document.createElement('a')
   a.id = 'collapseButton' + tblIdx
   a.href = 'javascript:collapseTable(' + tblIdx + ');' 
   a.style.color = HCell.style.color
   a.appendChild(document.createTextNode(NavigationBarHide))
   btn.appendChild(a)
   HCell.insertBefore(btn, HCell.childNodes[0])
   colTables[tblIdx++] = Table
 }
 for (var i=0; i < tblIdx; i++)
   if ((tblIdx > NavigationBarShowDefault && hasClass(colTables[i], 'autocollapse')) || hasClass(colTables[i], 'collapsed'))
     collapseTable(i)
}

function collapseTable (idx){
 var Table = document.getElementById('collapsibleTable' + idx)
 var btn = document.getElementById('collapseButton' + idx)
 if (!Table || !btn) return false
 var Rows = Table.rows
 var isShown = (btn.firstChild.data == NavigationBarHide)
 btn.firstChild.data = isShown ?  NavigationBarShow : NavigationBarHide
 var disp = isShown ? 'none' : Rows[0].style.display
 for (var i=1; i < Rows.length; i++) 
    Rows[i].style.display = disp
}

function collapsibleDivs(){
 var navIdx = 0, colNavs = [], i, NavFrame
 var divs = document.getElementById('content').getElementsByTagName('div')
 for (i=0; NavFrame = divs[i]; i++) {
   if (!hasClass(NavFrame, 'NavFrame')) continue
   NavFrame.id = 'NavFrame' + navIdx
   var a = document.createElement('a')
   a.className = 'NavToggle'
   a.id = 'NavToggle' + navIdx
   a.href = 'javascript:collapseDiv(' + navIdx + ');'
   a.appendChild(document.createTextNode(NavigationBarHide))
   for (var j=0; j < NavFrame.childNodes.length; j++)
     if (hasClass(NavFrame.childNodes[j], 'NavHead'))
       NavFrame.childNodes[j].appendChild(a)
   colNavs[navIdx++] = NavFrame
 }
 for (i=0; i < navIdx; i++)
  if ((navIdx > NavigationBarShowDefault && !hasClass(colNavs[i], 'expanded')) || hasClass(colNavs[i], 'collapsed'))
     collapseDiv(i)
}

function collapseDiv(idx) {
 var div = document.getElementById('NavFrame' + idx)
 var btn = document.getElementById('NavToggle' + idx)
 if (!div || !btn) return false
 var isShown = (btn.firstChild.data == NavigationBarHide)
 btn.firstChild.data = isShown ? NavigationBarShow : NavigationBarHide 
 var disp = isShown ? 'none' : 'block'
 for (var child = div.firstChild;  child != null;  child = child.nextSibling)
   if (hasClass(child, 'NavPic') || hasClass(child, 'NavContent')) 
      child.style.display = disp
}


//Execution
if (wgCanonicalNamespace == 'Special'){
   if (/^(Uplo|Sear|Stat|Spec|Abus)/i.test(wgCanonicalSpecialPageName))
    importScript_('MediaWiki:'+wgCanonicalSpecialPageName+'.js')
}else if (wgAction != 'history'){
  addOnloadHook(editZeroSection)
  addOnloadHook(collapsibleDivs)
  addOnloadHook(collapsibleTables)
  importScript('MediaWiki:Wikiminiatlas.js', 'meta.wikimedia.org')
  if (navigator.appName=='Microsoft Internet Explorer' && document.createStyleSheet)
    document.createStyleSheet().addRule('.IPA', 'font-family: "Doulos SIL", "Charis SIL", Gentium, "DejaVu Sans", Code2000, "TITUS Cyberbit Basic", "Arial Unicode MS", "Lucida Sans Unicode", "Chrysanthi Unicode";')
  if (wgNamespaceNumber==0 || wgNamespaceNumber==100)
    addOnloadHook(LinkFA)
    importScript_('MediaWiki:Collapserefs.js')
    if (wgArticleId==4401) importScript_('MediaWiki:Mainpage.js')
  else {
    if (wgNamespaceNumber==4 && /^(Мастер статей|Инкубатор)/.test(wgTitle))
      importScript_('MediaWiki:Incubator.js')
    addOnloadHook(icqIcons)
    addOnloadHook(newSectionLink)
  }
  if (wgAction=='edit' || wgAction=='submit') importScript_('MediaWiki:Editpage.js')
  
}


if (wgUserGroups){
  for (var i=0; i<wgUserGroups.length; i++) switch (wgUserGroups[i]){
   case 'autoconfirmed': importStylesheet('MediaWiki:Gadget-FlaggedRevs.css'); break
   case 'sysop': importScript_('MediaWiki:Sysop.js'); break
 }
 if (wgNamespaceNumber==2 && wgTitle.indexOf(wgUserName)==0 && wgArticleId==0 && /\/skin\.(js|css)$/.test(wgTitle))
   window.location.href = window.location.href.replace(/skin\.(css|js)$/, skin+'.$1')
}


// ВП:СО, кроме статей  В Контакте, Одноклассники и Facebook
if (wgArticleId!=639373 && wgArticleId!=932117 && wgArticleId!=1297302 && wgArticleId!=25133866)
 importScript_('MediaWiki:Wikibugs.js')


// iwiki sorting
 if (!wgUserName
     || (wgUserName
         && (((typeof wgLangPrefs == 'undefined') ? false : true)
             || ((typeof wgAddLangHints == 'undefined') ? false : wgAddLangHints)
             || ((typeof wgUseUserLanguage == 'undefined') ? false : wgUseUserLanguage))))
     importScript_('MediaWiki:Interwiki-links.js');

var withJS = document.URL.match(/[&?]withjs=((mediawiki:)?([^&#]+))/i)
if (withJS) importScript_('MediaWiki:'+withJS[3])

/* MediaWiki:Vector.js */
/* Any JavaScript here will be loaded for users using the Vector skin */