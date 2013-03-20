/* ======================================================================= 
                             The Curtain Effect
   ======================================================================= */

(function ( window, undefined ) {
    var document = window.document;
    var history = window.history;

    var curtains = {};

    // List of curtain nodes
    var crtns = document.getElementsByClassName('curtain'); 

    // Array with the cummulative heights of the curtains
    var hts = [0];

    // the current curtain on top
    var num = 1;

    /* Helper function to set the zIndex of elements. 
     *  @param e MAP Key: one of "className:" "tagName:" or "id:" 
     *                 value: corresponding class name, tag name, or id
     *               key: "zIndex:"
     *                 value: the zIndex value to be set.
     */
    function setZindex(e) {
	if (e.id) {
	    var elem = document.getElementById(e.id);
	    if (elem) {
		elem.style.zIndex = e.zIndex;
	    };
	} else if (e.tagName) {
	    var elems = document.getElementsByTagName(e.tagName);  
	    for (var i = 0; i < elems.length; i++) {
		elems[0].style.zIndex = e.zIndex;
	    };
	} else if (e.className) {
	    var elems = document.getElementsByClassName(e.className); 
	    for (var i = 0; i < elems.length; i++) {
		elems[0].style.zIndex = e.zIndex;
	    };
	};
    };

    /*Helper fn, returns outer height incl margin and padding of  element */
    function outerHeight(elem) {
	var style = window.getComputedStyle(elem, null);
	var h = (! style) ? 0 : parseInt(style.getPropertyValue("height"))
	    + parseInt(style.getPropertyValue("margin-top"))
	    + parseInt(style.getPropertyValue("margin-bottom"))
	    + parseInt(style.getPropertyValue("padding-top"))
	    + parseInt(style.getPropertyValue("padding-bottom"));
	return h;
    };

    /*Main initialization function, sets everything up*/
    function init() {
	var container, footer, fHeight = 0,
	t_or_b = [{className: 'top', zIndex: 100},
		 {tagName: 'header', zIndex: 100},
		 {className: 'header', zIndex: 100},
		 {id: 'header', zIndex: 100},
		 {tagName: 'nav', zIndex: 100},
		 {tagName: 'footer', zIndex: 0},
		 {ClassName: 'footer', zIndex: 0},
		 {id: 'footer', zIndex: 0}];
	// t_or_b are the elements that need to have zIndexes changed so as
	//  to be on top of the curtains or behind the curtains.
	
	// get container
	container =  document.getElementsByClassName('curtains')[0];
	// create container if it doesn't exist
	if ( ! container ) {
	    container = document.createElement("div");
	    container.className = "curtains"; // add class "curtains"
	    crtns[0].parentNode.insertBefore(container, crtns[0]); // put in DOM
	    // add curtain nodes inside container
	    for (var i = 0; i < crtns.length; i ++) {
		container.appendChild(crtns[i]);
	    };
	};
	// set zIndexes for t_or_b elements
	for (var i = 0; i < t_or_b.length; i++) {
	    setZindex(t_or_b[i]);
	};
	// get footer elements
	footer  = document.getElementsByTagName('footer');
	footer[footer.length] = document.getElementById('footer');
	var f = document.getElementsByClassName('footer');
	var l = footer.length;
	for ( var i = 0; i < f.length; i++ ) {
	    footer[l + i] = f[i];
	    footer.length = l + i;
	};
	// set style on footers and set fHeight to footer with max height
	if ( footer.length > 0 ) {
	    for ( var i = 0; i < footer.length; i++ ) {
		footer[i].style.position = 'fixed';
		footer[i].style.bottom = "0px";
		fHeight = Math.max(fHeight, outerHeight(footer[i]));
	    };
	};
	// set initial style on curtains
	for (var i = 0; i < crtns.length; i++) {
	    //stack curtains
	    crtns[i].style.zIndex = 99 - i; 
	    // set position to fixed for all except the top curtain
	    crtns[i].style.position = (i === 0) ? "relative" : "fixed";
	    // set top to 0px;
	    crtns[i].style.top = '0px';
	    // set the margin on the last curtain to deal with footers
	    if (i == crtns.length - 1) {
		crtns[i].style.marginBottom = fHeight + 'px';
	    };
	    // set the hts array with the cummulative heights
	    hts[i + 1] = hts[i] + outerHeight(crtns[i]);

	};
	// set the container's style
	container.style.height = hts[hts.length - 1] + 'px';
	container.style.position = "absolute";
	container.style.top = "0px";
	container.style.left = "0px";
    };

    /*curtain_listener is the event listener that fixes and unfixes
     * the curtains as the window is scrolled. */
    function curtain_listener(e) {
	var winY = window.scrollY; //scrollTop
	if (winY > hts[num] && num  < hts.length) { //scrolling down
	    // change current curtain to next one
	    num += 1;
	    // unfix next curtain
	    crtns[num - 1].style.position = "relative";
	    // update the history and change relative url
	    var id = num > 1 ? window.location.pathname + '#' 
		+ crtns[num - 1].id : window.location.pathname;
	    history.replaceState({home: id}, "curtain " + num, id);
	} else if (winY < hts[num - 1]) { //scrolling up
	    // fix the previous curtain
	    crtns[num - 1].style.position = "fixed";
	    // change current curtain to previous one
	    num -= 1;
	    // update the history and change relative url
	    var id = num > 1 ? window.location.pathname + '#' 
		+ crtns[num - 1].id : window.location.pathname;
	    history.replaceState({home: id}, "curtain " + num, id);
	};
    };

    // call init function
    init();
    // add listener to scroll event
    window.addEventListener('scroll', curtain_listener, false);

    // set up variables and functions to be accessed
    curtains.init = init;
    curtains.fn = curtain_listener;
    curtains.crtns = crtns;
    curtains.hts = hts;
    curtains.currentCurtain = num;

    window.curtains = curtains;

})(window);


