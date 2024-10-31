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

animateTechStack(currIndex);
