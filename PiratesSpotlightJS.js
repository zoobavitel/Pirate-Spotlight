// JavaScript Document

// Header Style
window.onscroll = function() {headerFunction()};

var header = document.getElementById("pageHeader");

var sticky = header.offsetTop;

function headerFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

// Header Style End