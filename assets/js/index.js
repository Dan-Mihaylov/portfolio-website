const images = document.querySelectorAll('.tech-stack-images');
let currIndex = 0;


function animateTechStack(index) {
  const img = images[index];
  img.style.transform = 'translateY(-2rem)';

  img.addEventListener('transitionend', () => {
    img.style.transform = 'translateY(0)';
    img.addEventListener('transitionend', () => {
      currIndex = (currIndex + 1) % images.length;
      animateTechStack(currIndex);
    }, { once:true });
  }, { once:true });
}

setTimeout(() => animateTechStack(currIndex), 3000);

// Opacity Regulator
const zeroOpacityItems = document.querySelectorAll('.zero-opacity');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('zero-opacity');
    } else {
      entry.target.classList.add('zero-opacity');
    }
  });
});

zeroOpacityItems.forEach(item => {
  observer.observe(item);
});
