// Closes the sidebar menu
$("#menu-close").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// Fade out some stuff on scrolling
$(window).scroll(function () {
    let top_section_height = $('#top').height();
    if ($(window).scrollTop() < top_section_height) {
        $("#header-arrow-down").css("opacity", 1 - $(window).scrollTop() / top_section_height);
    }
});

// Carousel

function isVisible(el) {
	while (el) {
		if (el === document) {
			return true;
		}

		var $style = window.getComputedStyle(el, null);

		if (!el) {
			return false;
		} else if (!$style) {
			return false;
		} else if ($style.display === 'none') {
			return false;
		} else if ($style.visibility === 'hidden') {
			return false;
		} else if (+$style.opacity === 0) {
			return false;
		} else if (($style.display === 'block' || $style.display === 'inline-block') &&
			$style.height === '0px' && $style.overflow === 'hidden') {
			return false;
		} else {
			return $style.position === 'fixed' || isVisible(el.parentNode);
		}
	}
}

setInterval(function(){
var j=0;
var elements = document.querySelectorAll('.carousel__control--forward');
for(i=(elements.length - 1);i>-1;i--) {
  if(isVisible(elements[i])) j=i;
}
elements[j].click();
},5000);

