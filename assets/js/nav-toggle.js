const navigationOverlayEl = document.getElementById('overlay');
const navToggleBtnEl = document.getElementById('nav-toggle-btn');

navigationOverlayEl.style.display = 'none';


navToggleBtnEl.addEventListener('click', (e) => toggleOverlay(e));

function toggleOverlay(e) {
  e.preventDefault;
  if (navigationOverlayEl.style.display === 'none') {
    navigationOverlayEl.style.display = 'flex';
    setTimeout(() => {navigationOverlayEl.classList.add('reset-offset')}, 10);
  } else {
    navigationOverlayEl.classList.remove('reset-offset');
    setTimeout(() => navigationOverlayEl.style.display = 'none', 500);
  }
}

