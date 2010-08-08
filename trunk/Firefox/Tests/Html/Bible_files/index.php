var collapseCSSmin, collapseCSSmax, collapseState

function collapseRefs() {
    if (navigator.userAgent.match(/MSIE [1-6]\./)) return // makes no sense (max-height)
    if (document.URL.match(/(\?|&)printable=yes/)) return
    
    function done() {
        collapseState = collapseState == 'min' ? 'max' : 'min'
        document.cookie = 'refcoll=' + collapseState
        
        if (collapseState == 'min') {
            collapseCSSmax.disabled = true
            collapseCSSmin.disabled = false
            text = '&darr; Показывать полностью' // when minimized
        } else {
            collapseCSSmax.disabled = false
            collapseCSSmin.disabled = true
            text = '&uarr; Показывать компактно' // when maximized
        }
        
        for (var i = 0; i < links.length; i++)
            links[i].innerHTML = text
        
        return false
    }
    
    divs = document.getElementsByTagName('div')
    var reflists = []
    for (i = 0; i < divs.length; i++)
        if (divs[i].className.match(/\bref(list\d?|erences-(small|scroll))\b/))
            if (divs[i].clientHeight >= ((divs[i].style.maxHeight && divs[i].style.maxHeight.replace(/[^0-9]+/g, '')) ||
                                          divs[i].style.height.replace(/[^0-9]+/g, '') || 300))
                                          reflists[reflists.length] = divs[i]
    if (reflists.length == 0) return
    
    var cookie = document.cookie.match(/(^|; )refcoll=(.*?)(;|$)/)
    // will be changed later by done()
    if (cookie)
        collapseState = unescape(cookie[2]) == 'max' ? 'min' : 'max'
    else
        collapseState = 'min'
    
    var links = []
    for (i = 0; i < reflists.length; i++) {
        var p = document.createElement('p')
        p.className = 'collapse-refs-p'
        var a = document.createElement('a')
        a.href = '#'
        a.onclick = done
        a.className = 'collapse-refs-link'
        a.title = 'Большие блоки с примечаниями можно уменьшать'
        p.appendChild(a)
        reflists[i].parentNode.insertBefore(p, reflists[i])
        links[links.length] = a
    }
    
    function myAppendCSS(text) {
        var s = appendCSS(text) // wikibits version
        return s.sheet || s // webkit compatibility
    }
    
    myAppendCSS('.reflist  p.collapse-refs-p, .reflist1 p.collapse-refs-p,\
                 .reflist2 p.collapse-refs-p, .reflist3 p.collapse-refs-p,\
                 .reflist4 p.collapse-refs-p { display: none }\
                 .collapse-refs-p { font-size: 80%; width: 30%; margin: 1em 2em }\
                 * html .reflist, * html .reflist1, * html .reflist2, * html .reflist3, \
                 * html .reflist4, * html .references-scroll, * html .references-small \
                 { display: inline-block /* for clientHeight in IE */ }')
    collapseCSSmin = myAppendCSS('.reflist, .reflist1, .reflist2, .reflist3, \
                                   .reflist4, .references-scroll, .references-small \
                                   { max-height: 300px; overflow: auto; margin: 0 !important; padding: 0 !important }')
    collapseCSSmax = myAppendCSS('.reflist, .reflist1, .reflist2, .reflist3, \
                                   .reflist4, .references-scroll \
                                   { height: auto !important;  max-height: none !important; \
                                   overflow: visible !important; margin: 0 !important; padding: 0 !important }')
    collapseCSSmin.disabled = collapseCSSmax.disabled = true

    done()
}

addOnloadHook(collapseRefs)