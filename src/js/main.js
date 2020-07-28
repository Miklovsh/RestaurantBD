$(".about__accordeon dd").hide().prev().click(function() {
	$(this).parents(".about__accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
});
