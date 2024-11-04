const profileImageWrapperEl = document.querySelector('.profile-image-wrapper');
const heroTextWrapperEl = document.querySelector('.hero-text-wrapper');
const navigationEl = document.querySelector('.navigation');
const techStackContentEl = document.querySelector('.tech-stack-content');


setTimeout(() => showProfileImage(), 1000);
setTimeout(() => showHeroText(), 1200);
setTimeout(() => showTechStack(), 1500);
setTimeout(() => showNavigation(), 2000);

function showProfileImage() {
  profileImageWrapperEl.classList.add('reset-opacity');
  profileImageWrapperEl.classList.add('reset-offset');
}

function showHeroText() {
  heroTextWrapperEl.classList.add('reset-opacity');
  heroTextWrapperEl.classList.add('reset-offset');
}

function showTechStack() {
  techStackContentEl.classList.add('reset-opacity');
  techStackContentEl.classList.add('reset-offset');
}

function showNavigation() {
  navigationEl.classList.add('reset-opacity');
  navigationEl.classList.add('reset-offset');
}
