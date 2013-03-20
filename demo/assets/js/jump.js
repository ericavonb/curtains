

function outerHeight(elem) {
    var style = window.getComputedStyle(elem, null);
    var h = (! style) ? 0 : parseInt(style.getPropertyValue("height"))
	+ parseInt(style.getPropertyValue("margin-top"))
	    + parseInt(style.getPropertyValue("margin-bottom"))
	+ parseInt(style.getPropertyValue("padding-top"))
	+ parseInt(style.getPropertyValue("padding-bottom"));
    return h;
};

function bounce(x) {
    return (Math.sin(10 * Math.PI * x) * (1 -  x));
};

function jump(e) {
    var arrow = document.getElementsByClassName('jumpDown')[0];
    var h = window.innerHeight;

    var fHeight = outerHeight(document.getElementsByTagName('footer')[0]);
    var per = (window.scrollY - outerHeight(arrow))/ (curtains.hts[5] - h - fHeight);

    arrow.style.opacity = 1 - (per * per);
    per = bounce(per);
    arrow.style.bottom = (window.innerHeight * 0.1) +  (per * window.innerHeight * 0.1) + 'px';
};

function jump_0(e) {

}

document.getElementsByClassName('jumpDown')[0].style.bottom = (window.innerHeight * 0.1) + 'px';

document.getElementsByClassName('jumpDown')[0].style.top = "";

window.addEventListener('scroll', jump, false);

var full = document.getElementsByClassName('full');

for (var i = 0; i < full.length; i++) {
    full[i].style.height = window.innerHeight + 'px';
};

