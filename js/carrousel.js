//Carrousel
//Global variables

const track = document.querySelector('.carrousel_track');
const slides = Array.from(track.children).slice(0,6);

const rightBtn = document.querySelector('.carrousel_btn--right');
const leftBtn = document.querySelector('.carrousel_btn--left');
const dotNav = document.querySelector('.carrousel_nav-bar');
const dots = Array.from(dotNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

const setSlidePosition = (slide, index) => {
    slide.style.left= slideWidth * index + 'px'
}

slides.forEach(setSlidePosition);


const slideMove = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left; + ')';
    currentSlide.classList.remove('current-slide');  
    targetSlide.classList.add('current-slide');
    
}
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-dot');
    targetDot.classList.add('current-dot');
}

//left button
leftBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
   
    const currentDot = dotNav.querySelector('.current-dot');
    const prevDot = currentDot.previousElementSibling;
    slideMove(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
})

//right button
rightBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    
    const currentDot = dotNav.querySelector('.current-dot');
    const nextDot = currentDot.nextElementSibling;
    
    slideMove(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
})

//NavBar buttons

dotNav.addEventListener('click', e => {
    const targetDot = e.target.closest('.carrousel_nav-bar_dot');
    
    if(!targetDot) return;
    
    const currentSlide = track.querySelector('current-slide');
    const currentDot = dotNav.querySelector('current-dot');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    slideMove(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
})