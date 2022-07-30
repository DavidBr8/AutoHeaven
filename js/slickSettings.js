$('.team-carousel').slick({
	autoplay: true,
	arrows: false,
	infinite: true,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 576,
			settings: { slidesToShow: 2 },
		},
		{
			breakpoint: 992,
			settings: { slidesToShow: 3 },
		},
	],
});
