const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");
const slideWrapper = document.querySelector('.slider-wrapper');
let currentSlide = 0;
let width = window.innerWidth;
let currentPage = 1;
let allPages = slides.length;
const pageNumber = document.querySelector('.slide-number');

pageNumber.innerHTML = currentPage + ' / ' + allPages;

console.log(currentSlide)

next.addEventListener("click", () => {
    prev.disabled = false;

    const changePageNum = () => {
        currentPage++;
        pageNumber.innerHTML = currentPage + ' / ' + allPages;
    }

    gsap.to(slides[currentSlide].querySelector('.title'), { opacity: 0, y: -20, duration: 0.3, ease: Power2.easeIn });
    gsap.to(slideWrapper, { x: '-=' + width, duration: 0.3, ease: Power2.easeIn, delay: 0.3, onComplete: changePageNum });

    currentSlide++;

    console.log(currentSlide)

    gsap.from(slides[currentSlide].querySelector('.title'), { opacity: 0, y: -20, duration: 0.3, ease: Power2.easeOut });
    
    if (currentSlide == slides.length - 1) {
        next.disabled = true;
    }
});

prev.addEventListener("click", () => {
    next.disabled = false;

    const changePageNum = () => {
        currentPage--;
        pageNumber.innerHTML = currentPage + ' / ' + allPages;
    }

    gsap.to(slides[currentSlide].querySelector('.title'), { opacity: 0, y: -20, duration: 0.3, ease: Power2.easeIn });
    gsap.to(slideWrapper, { x: '+=' + width, duration: 0.3, ease: Power2.easeIn, delay: 0.3, onComplete: changePageNum });

    currentSlide--;

    if (currentSlide == 0) {
        prev.disabled = true;
    }

    gsap.from(slides[currentSlide].querySelector('.title'), { opacity: 0, y: 20, duration: 0.3, ease: Power2.easeOut });
});