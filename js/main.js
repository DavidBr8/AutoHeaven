document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const wrap = document.querySelector('.wrapper');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');
	const buttonCheck = document.querySelector('.navbar-toggler');

	function scrollAddShadow() {
		if (window.scrollY >= 50) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}
	function clickAddShadow() {
		if (buttonCheck.classList.contains('collapsed') && window.scrollY < 50) {
			nav.classList.remove('shadow-bg');
		} else {
			nav.classList.add('shadow-bg');
		}
	}

	allNavItems.forEach((item) =>
		item.addEventListener('click', () => navList.classList.remove('show'))
	);

	window.addEventListener('scroll', scrollAddShadow);
	buttonCheck.addEventListener('click', clickAddShadow);
});
