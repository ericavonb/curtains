/* ======================================================================= 
                             The Curtain Effect
   ======================================================================= */


var topCurtains = [{className: 'top', zIndex: 100},
		{tagName: 'header', zIndex: 100},
		{tagName: 'nav', zIndex: 100},
	       {tagName: 'footer', zIndex: 0}];


var curtains = document.getElementsByClassName('curtain');

var heights = [0];

var curtainNum = 1;



function setZindex(e) {
    var z = e.zIndex;

    if (e.id) {
	document.getElementById(e.id).style.zIndex = z;
    } else {
	if (e.tagName) {
	    var elems = document.getElementsByTagName(e.tagName);  
	    for (var i = 0; i < elems.length; i++) {
		elems[0].style.zIndex = z;
	    };
	} else {
	     if (e.className) {
		 var elems = document.getElementsByClassName(e.className); 
		 for (var i = 0; i < elems.length; i++) {
		     elems[0].style.zIndex = z;
		 };
	     };
	};
    };
};

function outerHeight(elem) {
    var style = window.getComputedStyle(elem, null);
    var h = parseInt(style.getPropertyValue("height"))
	+ parseInt(style.getPropertyValue("margin-top"))
	+ parseInt(style.getPropertyValue("margin-bottom"))
	+ parseInt(style.getPropertyValue("padding-top"))
	+ parseInt(style.getPropertyValue("padding-bottom"));
    return h;
};

function init() {

    var curtainCont =  document.getElementsByClassName('curtains')[0];
    var header = document.getElementsByTagName('header')[0];
    var footer = document.getElementsByTagName('footer')[0];

    for (var i = 0; i < topCurtains.length; i++) {
	setZindex(topCurtains[i]);
    };
    
    for (var i = 0; i < curtains.length; i++) {
	curtain = curtains[i];
	curtain.style.zIndex = 99 - i;
	curtain.style.position = (i === 0) ? "relative" : "fixed";
	curtain.style.top = '0px';
	if (i == curtains.length - 1)
	    curtain.style.marginBottom = outerHeight(footer) + 'px';
	heights[i + 1] = heights[i] + outerHeight(curtain);
    };

    curtainCont.style.height = heights[heights.length - 1] + 'px';
    
    curtainCont.style.position = "absolute";
    curtainCont.style.top = "0px";
    curtainCont.style.left = "0px";

    header.style.position = 'relative';
    header.style.top = "0px";

    footer.style.position = 'fixed';
    footer.style.bottom = "0px";


};


init();


function curtain(e) {
    var winY = window.scrollY;

    if (winY > heights[curtainNum] && curtainNum  < heights.length) {
	curtainNum += 1;
	curtains[curtainNum - 1].style.position = "relative";
	var id = curtainNum > 1 ? window.location.pathname + '#' + curtains[curtainNum - 1].id : window.location.pathname;
	history.replaceState({home: id}, "curtain " + curtainNum, id);
    } else {
	if (winY < heights[curtainNum - 1]) {
	    curtains[curtainNum - 1].style.position = "fixed";
	    curtainNum -= 1;
	    var id = curtainNum > 1 ? window.location.pathname + '#' + curtains[curtainNum - 1].id : window.location.pathname;
	    history.replaceState({home: id}, "curtain " + curtainNum, id);
	};
    };


};



window.addEventListener('scroll', curtain, false);


