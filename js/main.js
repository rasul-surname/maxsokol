// Добавление и удаление класса
$(document).ready(function () {

	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
	});
	$('.header__link').click(function (event) {
		$('.header__link, .header__burger, .header__menu').removeClass('active');
	});
})

// Плавное перемещение по ссылке
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function (event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}
