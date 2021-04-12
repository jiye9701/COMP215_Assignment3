 var wintimer;
    clearTimeout(wintimer);
    wintimer= setTimeout("closewin()",5000);
    
function closewin() {
        window.close();
 }
 window.onload=showWindow;