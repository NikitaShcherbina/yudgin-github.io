$(document).ready(function(){
	new WOW().init();
	$(".brif .radio label").click(function(){
		if($(".load").hasClass("load3")) {
			$(".load").addClass("load4");
			$(".brif .contant1").css("margin-left", "-300%")
		} else if ($(".load").hasClass("load2")) {
			$(".load").addClass("load3");
			$(".brif .contant1").css("margin-left", "-200%")
		} else {
			$(".load").addClass("load2");
			$(".brif .contant1").css("margin-left", "-100%")
		}
	});
	$(".form-trigger").click(function(){
		$(".popup-forma").addClass("active");
		$("body").toggleClass("scroll");
	});
	$(".popup-forma .close-bg, .popup-forma .close").click(function(){
		$(".popup-forma").removeClass("active");
		$("body").toggleClass("scroll");
	});
	$(".form-trigger2").click(function(){
		$(".popup-contact").addClass("active");
		$("body").toggleClass("scroll");
	});
	$(".popup-contact .close-bg, .popup-contact .close").click(function(){
		$(".popup-contact").removeClass("active");
		$("body").toggleClass("scroll");
	});
	$("input[name='phone']").intlTelInput(
	{
		utilsScript       : 'utils.js',
		defaultCountry    : 'auto',
		separateDialCode  : false,
		nationalMode      : false,
		initialCountry    : 'auto',
		geoIpLookup       : function (callback) {
			$.get("https://ipinfo.io", function () {
			}, "jsonp").always(function (resp) {
				var countryCode = (resp && resp.country) ? resp.country : "";
				callback(countryCode);
			});
		},
		preferredCountries: ['ru', 'ua', 'by', 'kz']
	});

});