(function() {
  var cx = '012971019331610648934:m2tou3_miwy';
  var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
      '//www.google.com/cse/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
})();

function searchfield_focus(obj)
{
obj.style.color=""
obj.style.fontStyle=""
if (obj.value=="Search w3schools.com")
	{obj.value=""}
}
var addr=document.location.href;
function displayError()
{
document.getElementById("err_url").value=addr;
document.getElementById("err_form").style.display="block";
document.getElementById("err_desc").focus();
hideSent();
}
function hideError()
{
document.getElementById("err_form").style.display="none";
}
function hideSent()
{
document.getElementById("err_sent").style.display="none";
}
function sendErr()
{
var xmlhttp;
var err_url=document.getElementById("err_url").value;
var err_email=document.getElementById("err_email").value;
var err_desc=document.getElementById("err_desc").value;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("POST","/err_sup.asp",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("err_url=" + err_url + "&err_email=" + err_email + "&err_desc=" + escape(err_desc));
document.getElementById("err_desc").value="";
hideError();
document.getElementById("err_sent").style.display="block";
}
function googleTranslateElementInit() {
	new google.translate.TranslateElement({
		pageLanguage: 'en',
		autoDisplay: false,    
		gaTrack: true,
		layout: google.translate.TranslateElement.InlineLayout.SIMPLE
	}, 'google_translate_element');
}

function printPage()
{
content=document.getElementById("main").innerHTML;
head=document.getElementsByTagName("head")[0].innerHTML;
var myWindow=window.open('','','');
myWindow.document.write("<html><head>"+head+"<style>#div-gpt-ad-1379506098645-3,#div-gpt-ad-1379506098645-1,#div-gpt-ad-1379506098645-0{display:none}body{background-color:white}</style></head><body>"+content+"<p><a href='/about/about_copyright.asp'>Copyright 1999-2013</a> by Refsnes Data. All Rights Reserved.</p></body></html>");
myWindow.document.close();
myWindow.print();
}

document.getElementById("menuDIV").onclick = function () {
	if (document.getElementById("leftcolumn").style.display == "block") {
		hideMenu();
	} else {
		showMenu();
	}
}

document.getElementById("leftcolumn").onclick = function () {
	if (document.getElementById("leftcolumn").style.display == "block") {
		hideMenu();
	}
}

if (document.addEventListener) {
	document.addEventListener('touchstart', w3TS, false);
	document.addEventListener('touchmove', w3TM, false);
}

var clientX1 = null;
var clientY1 = null;

function w3TS(e) {
    clientX1 = e.touches[0].clientX;
    clientY1 = e.touches[0].clientY;
}       

function w3TM(e) {
    if ( !clientX1 || !clientY1 ) {
        return;
    }
    var clientX2 = e.touches[0].clientX;
    var clientY2 = e.touches[0].clientY;
    var diffX = clientX1 - clientX2;
    var diffY = clientY1 - clientY2;
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0 ) {hideMenu(); }
	}
    clientX1 = null;
    clientY1 = null;
}
function showMenu() {
	document.getElementById("leftcolumn").style.display = "block";
}

function hideMenu() {
	document.getElementById("leftcolumn").style.display = "none";
}

if (document.getElementById("menuSearchDIV")) {
	document.getElementById("menuSearchDIV").onclick = function () {
		if (document.getElementById("searchSection").style.display == "block") {
			hideSearch();
		} else {
			showSearch();
		}
	}
}
function showSearch() {
	document.getElementById("searchSection").style.display = "block";
	document.getElementById("closeSearchBTN").style.display = "block";
}

function hideSearch() {
	document.getElementById("searchSection").style.display = "none";
	document.getElementById("closeSearchBTN").style.display = "none";
}
(function () {

var x, y, z, i, j, c, ch, text, status, ele;
y = document.getElementsByClassName("htmlHigh");
for (j = 0; j < y.length; j++) {
z = y[j];
ele = "";
text = "";
status = "TAGW";
x = z.innerHTML;

for (i = 0; i < x.length; i++) {
    c = x.charAt(i);
    ch = c.charCodeAt(0);  
    if (status == "ANG") {
        if (c == "}") {
            if (lookAhead(x, i, 2) == "}}") {
                text += "}}" + "</span>";
                i++;
                status = "TAGW";
                continue;
            }
        }

    } 
    if (status == "TAGW") {
        if (c == "&") {
            if (lookAhead(x, i, 7) == "&LT;!--") {
                text += "<span class='highCOM'>" + c;
                status = "COM";
                continue;
            }
            if (lookAhead(x, i, 4) == "&LT;") {
                text += "<span class='highLT'>" + c;
                status = "LT";
                continue;
            }         
        }
        if (c == "{") {
            if (lookAhead(x, i, 2) == "{{") {
                text += "<span class='highATT'>" + c;
                status = "ANG";
                continue;
            }
        }    
    }          
    if (status == "ELEW") {
        if (ch != 32 && ch != 10 && ch != 13 && ch != 9) {
            text += "<span class='highELE'>" + c;
            ele = c;
            status = "ELE";
            continue;
        }
    } 
    if (status == "ELE") {
        if (ch == 32 || ch == 10 || ch == 13 || ch == 9) {
            text += "</span>";
            status = "ATTW"; 
        }
        if (c == "&") {
            if (lookAhead(x, i, 4) == "&GT;") {
                text += "</span><span class='highGT'>" + c;
                status = "GT";
                continue;
            }
        }
        ele += c;
    }        
    if (status == "ATTW") {
        if (c == "&")
            if (lookAhead(x, i, 4) == "&GT;") {
                text += "<span class='highGT'>" + c;
                status = "GT";
                continue;
            }
        if (ch != 32 && ch != 10 && ch != 13 && ch != 9) {
            text += "<span class='highATT'>" + c;
            status = "ATT";
            continue;
         }
    } 
    if (status == "ATT") {
        if (c == "=") {
            text += c + "</span><span class='highVAL'>";
            status = "VALW";
            continue;
        }
        if (c == "&") {
            if (lookAhead(x, i, 4) == "&GT;") {
                text += "</span><span class='highGT'>" + c;
                status = "GT";
                continue;
            }
        }       
    }
    if (status == "COM") {
        if (c == "-") {
            if (lookAhead(x, i, 6) == "--&GT;") {
                text += c;
                status = "COMW";
                continue;
            }

        }
    }       
    if (status == "COMW") {
        if (c == "&") {
            if (lookAhead(x, i, 4) == "&GT;") {
                text += c;
                status = "GT";
                continue;
            }

        }
    }       
    if (status == "VALS") {
        if (c == "'") {
            text += c + "</span>";
            status = "ATTW";
            continue;
        }
    }
    if (status == "VALD") {
        if (c == '"') {
            text += c + "</span>";
            status = "ATTW";
            continue;
        }
    }
    if (status == "VALW") {
        if (c == "'") {
            status = "VALS";
            text += c;
            continue;
        }
        if (c == '"') {
            status = "VALD";
            text += c;
            continue;
        }    
    }  
    if (status == "LT") {
        if (c == ";") {
            text += c + "</span>";
            status = "ELEW";
            continue;
        }
    } 
    if (status == "GT") {
        if (c == ";") {
            text += c + "</span>";
            status = "TAGW";
            continue;
        }
    } 
    text += c;
}
z.innerHTML = text;

function lookAhead(x, ipos, n) {
    var i, c, text;
    text = "";
    for (i = ipos; i < ipos + n; i++) {
        if (i < x.length) {
            c = x.charAt(i);
            text += c;
        }
    }
    return text.toUpperCase();
}


}
})();

(function () {
var x, y, z, i, j, c, ch, text, status, temp, span;
y = document.getElementsByClassName("cssHigh");
for (j = 0; j < y.length; j++) {
z = y[j];
text = "";
temp = "";
span = false;
status = "SELW";
x = z.innerHTML;
for (i = 0; i < x.length; i++) {
    c = x.charAt(i);
    ch = c.charCodeAt(0);  
    if (c == "<") {
        text += c;
        temp = status;
        status = "TAG";
        continue;
    }
    if (c == "/") {
        if (lookAhead(x, i, 2) == "/*") {
            text += "<span class='highCOM'>";
            span = true;
            temp = status;
            status = "COM";
        }     
        text += c;
        continue;   
    } 
    if (status == "COM" ) {
        if (c == "*") {
            if (lookAhead(x, i, 2) == "*/") {
                if (span) {
                    text += c;
                    i++;
                    text += x.charAt(i);
                    text += "</span>";
                    span = false;
                    status = temp;
                }
            } else {
                text += c;
            }    
        continue;   
        }    
    } 
    if (status == "MED") {
        if (c == "{") {
            text += "</span>" + c;
            span = false;
            status = "SELW";
            continue;
        }
    }           
    if (status == "SELW") {
        if (c == "@") {
            if (lookAhead(x,i,5) == "@FONT") {
                text += "<span class='highELE'>" + c;
                span = true;
                status = "SEL";
                continue;
            } else {
                text += "<span class='highELE'>" + c;
                span = true;
                status = "MED";
                continue;
            }
        }
        if (c == "}") {
            text += c;
            continue;
        }
        if (ch != 32 && ch != 10 && ch != 13 && ch != 9) {
            text += "<span class='highELE'>" + c;
            span = true;
            status = "SEL";
            continue;
        }
    }           
    if (status == "TAG") {
        text += c;
        if (c == ">") {
            status = temp;
        }        
        continue;
    }
    if (c == "&") {
        text += c;
        if (lookAhead(x, i, 6) == "&NBSP;") {
            temp = status;
            status = "NBSP";
        }
        continue; 
    }
    if (status == "NBSP") {
        text += c;
        if (c == ";") {
            status = temp;
        }        
        continue;
    }
    if (status == "SEL") {
        if (c == "{") {
            if (span) {
                text += "</span>";
                span = false;
            }
            text += c;
            status = "PROW"; 
            continue;
        }
    }        
    if (status == "PROW") {
        if (c == "}") {
            if (span) {
                text += "</span>";
                span = false;
            }
            text += c;
            status = "SELW"; 
            continue;
        } 
        if (ch != 32 && ch != 10 && ch != 13 && ch != 9) {
            text += "<span class='highATT'>" + c;
            span = true;
            status = "VALW"; 
            continue;
        }
    }        
    if (status == "VALW") {
       if (c == ":") {
            text += c; 
            if (span) {
                text += "</span>";
                span = false;
            }
            text += "<span class='highVAL'>";
            span = true;
            status = "VAL"; 
            continue;
        }
    }        
    if (status == "VAL") {
        if (c == "}") {
            if (span) {
                text += "</span>";
                span = false;
            }
            text += c;
            status = "SELW"; 
            continue;
        }
        if (c == ";") {
            text += c;
            if (span) {
                text += "</span>";
                span = false;
            }
            status = "PROW"; 
            continue;
        }
    }        
    text += c;
}

z.innerHTML = text;

function lookAhead(x, ipos, n) {
    var i, c, text;
    text = "";
    for (i = ipos; i < ipos + n; i++) {
        if (i < x.length) {
            c = x.charAt(i);
            text += c;
        }
    }
    return text.toUpperCase();
}

}

})();


(function () {

var x, y, z, i, j, k, c, text, status, ele;
jsArr = ["var"];
y = document.getElementsByClassName("jsHigh");
for (j = 0; j < y.length; j++) {
z = y[j];
ele = "";
text = "";
status = "JSW";
x = z.innerHTML;
for (i = 0; i < x.length; i++) {
    c = x.charAt(i);
    if (status == "ATTS") {
        if (c == "'") {
            text += c + "</span>";
            status = "JSW";
            continue;
        }
    }  
    if (status == "ATTD") {
        if (c == '"') {
            text += c + "</span>";
            status = "JSW";
            continue;
        }
    }
    if (c == "'") {
        text += "<span class='highATT'>" + c;
        status = "ATTS";
        continue;          
    }
    if (c == '"') {
        text += "<span class='highATT'>" + c;
        status = "ATTD";
        continue;          
    }
    if (status == "JSW") {
        ch = c.charCodeAt(0);  
        if (ch != 32 && ch != 10 && ch != 13 && ch != 9) {    
            for (k = 0; k < jsArr.length; k++) {
                ele = jsArr[k];
                if (lookAhead(x, i, ele.length) == ele) {
                    text += "<span class='highVAL'>" + c;  
                    status = "SPW";
                    continue;
                }
            }
        }
        if (status == "SPW") {continue;}    
    }
    if (status == "SPW") {
        ch = c.charCodeAt(0);  
        if (ch == 32 || ch == 10 || ch == 13 || ch == 9) {    
            text += "</span>" + c;  
            status = "JSW";
            continue;
        }    
    }

    text += c;
}
z.innerHTML = text;

function lookAhead(x, ipos, n) {
    var i, c, text;
    text = "";
    for (i = ipos; i < ipos + n; i++) {
        if (i < x.length) {
            c = x.charAt(i);
            text += c;
        }
    }
    return text;
}

}
})();


