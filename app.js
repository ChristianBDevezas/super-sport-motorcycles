const carouselSection = document.querySelector('.carousel');
const carouselList = carouselSection.querySelector('.carousel .carousel__list');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('prev');
const carouselthumbnail = document.querySelector('.carousel .carousel__thumbnail');
const thumbnailItems = carouselthumbnail.querySelectorAll('.carousel__thumbnail__item');
let displayTiming = 500;
let nextTrigger = 4800;

carouselthumbnail.appendChild(thumbnailItems[0]);

nextButton.addEventListener("click", () => {
    displaySlider("next");
});

previousButton.addEventListener("click", () => {
    displaySlider("previous");
});

let settleTimeOut;
let activeNextItem = setTimeout(() => {
    next.click();
}, nextTrigger);

function displaySlider(position) {
    let  SliderItemsDom = carouselList.querySelectorAll('.carousel .carousel__list .carousel__list__item');
    let thumbnailItems = document.querySelectorAll('.carousel .carousel__thumbnail .carousel__thumbnail__item');
    
    if(position === "next") {
        carouselList.appendChild(SliderItemsDom[0]);
        carouselthumbnail.appendChild(thumbnailItems[0]);
        carouselSection.classList.add("next");
    }
    else {
        carouselList.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        carouselthumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        carouselSection.classList.add("previous");
    }

    clearTimeout(settleTimeOut);
    settleTimeOut = setTimeout(() => {
        carouselSection.classList.remove("next");
        carouselSection.classList.remove("previous");
    }, displayTiming);

    clearTimeout(activeNextItem);
    activeNextItem = setTimeout(() => {
        next.click();
    }, nextTrigger);
}