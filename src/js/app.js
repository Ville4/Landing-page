import * as flsFunctions from './modules/functions.js';
//import * as noUiSlider from 'nouislider';

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const swiper = new Swiper();
// burger
let iconMenu = document.querySelector(".icon-menu");
if(iconMenu) {
    iconMenu.addEventListener('click', function (e) {  
        iconMenu.classList.toggle('menu-open');
        document.querySelector('.header__body').classList.toggle('_active');
        document.querySelector('body').classList.toggle('_lock');
    });
}

// slider

function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}

function initSliders () {
    bildSliders()

    if(document.querySelector('.slider-main__slider')) {
        new Swiper('.slider-main__slider', {
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 50,
            speed: 800,
            loop: true,
            pagination: {
                el: '.slider-main__dotts',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            },
        });
    }
    if(document.querySelector('.blog-main__slider')) {
        new Swiper('.blog-main__slider', {
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 50,
            speed: 800,
            loop: true,
            navigation: {
                nextEl: '.content-blog-main__button-next',
                prevEl: '.content-blog-main__button-prev',
            },
            pagination: {
                el: '.content-blog-main__dotts',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            },
        });
    }
    if(document.querySelector('.quotes-main__slider')) {
        new Swiper('.quotes-main__slider', {
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            spaceBetween: 64,
            speed: 800,
            loop: true,
            loopedSlides: 300,
            pagination: {
                el: '.quotes-main__dotts',
                clickable: true,
            },
        });
    }

}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
});

// spollers

const spollerBody = document.querySelectorAll('.content-questions-main__wrapper');
const question = document.querySelectorAll('.content-questions-main__question');


window.addEventListener("load", function (e) {
    load();
});
 function load() {
        spollerBody.forEach(spoller => {
        const answer = spoller.querySelector('.content-questions-main__answer');
        const question = spoller.querySelector('.content-questions-main__question');
        answer.classList.add('_active');
        spoller.style.height = `${window.getComputedStyle(question).height}`;
    });
}
question.forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        const answer = parent.querySelector('.content-questions-main__answer');
        if(!answer.classList.contains('_active')) {
            answer.classList.add('_active');
            parent.style.height = `${window.getComputedStyle(item).height}`;
            item.classList.remove('_open');
        } else {
            answer.classList.remove('_active');
            parent.style.removeProperty('height');
            item.classList.add('_open');
        }
    });
})