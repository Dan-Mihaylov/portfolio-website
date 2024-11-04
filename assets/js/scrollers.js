const overlayEl = document.getElementById('overlay');

const toTopBtn = document.querySelector('.to-top');
const aboutBtn = document.getElementById('to-about');
const portfolioBtn = document.getElementById('to-portfolio');
const certificatesBtn = document.getElementById('to-certificates');

const toAboutMobileBtn = document.getElementById('to-about-mobile');
const toPortfolioMobileBtn = document.getElementById('to-portfolio-mobile');
const toCertificatesMobileBtn = document.getElementById('to-certificates-mobile');

const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const certificatesSection = document.getElementById('certificates');
const contactSection = document.getElementById('contact');

toTopBtn.addEventListener('click', (event) => toTop(event));
aboutBtn.addEventListener('click', (event) => toAboutSection(event));
portfolioBtn.addEventListener('click', (event) => toPortfolioSection(event));
certificatesBtn.addEventListener('click', (event) => toCertificatesSection(event));

toAboutMobileBtn.addEventListener('click', (event) => toAboutMobileSection(event));
toPortfolioMobileBtn.addEventListener('click', (event) => toPortfolioMobileSection(event));
toCertificatesMobileBtn.addEventListener('click', (event) => toCertificatesMobileSection(event));

function toTop(event) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function toAboutSection(event) {
  aboutSection.scrollIntoView({
    behavior: 'smooth'
  });
}

function toPortfolioSection(event) {
  portfolioSection.scrollIntoView({
    behavior: 'smooth'
  });
}

function toCertificatesSection(event) {
  certificatesSection.scrollIntoView({
    behavior: 'smooth'
  });
}

function toContactSection(event) {
  contactSection.scrollIntoView({
    behavior: 'smooth'
  });
}

function toAboutMobileSection(event) {
  overlayEl.classList.remove('reset-offset');
  setTimeout(() => {toAboutSection(event); overlayEl.style.display = 'none';}, 600);
}

function toPortfolioMobileSection(event) {
  overlayEl.classList.remove('reset-offset');
  setTimeout(() => {toPortfolioSection(event); overlayEl.style.display = 'none';}, 600);
}

function toCertificatesMobileSection(event) {
  overlayEl.classList.remove('reset-offset');
  setTimeout(() => {toCertificatesSection(event); overlayEl.style.display = 'none';}, 600);
}

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop >= 600) {
    toTopBtn.classList.remove('not-visible');
  } else if (document.documentElement.scrollTop < 600 && !toTopBtn.classList.contains('not-visible')) {
    toTopBtn.classList.add('not-visible');
  }
})



