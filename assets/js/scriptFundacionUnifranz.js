function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    
    if (activeItemNewAnim.length > 0) {
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    } else {
        console.warn("No se encontró ningún elemento activo.");
    }

    $("#navbarSupportedContent").on("click", "li", function () {
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    });
}

jQuery(document).ready(function ($) {
	var path = window.location.pathname.split("/").pop();
	if (path == '') {
		path = 'index.html';
	}
	var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
	target.parent().addClass('active');
});

$(function () {
	var shrinkHeader = 300;
	$(window).scroll(function () {
		var scroll = getCurrentScroll();
		if (scroll >= shrinkHeader) {
			$('.header').addClass('shrink');
		}
		else {
			$('.header').removeClass('shrink');
		}
	});
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
});

// Escuchar el evento click en las imágenes y mover el carousel
document.querySelectorAll('.row img').forEach(function(img) {
    img.addEventListener('click', function() {
        var targetCarousel = document.querySelector(img.getAttribute('data-bs-target'));
        var slideToIndex = img.getAttribute('data-bs-slide-to');
        var carouselInstance = new bootstrap.Carousel(targetCarousel);
        carouselInstance.to(slideToIndex);
    });
});






