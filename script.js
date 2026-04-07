// 🔥 SNAPCHAT BUTTON (öffnet einmal pro Gerät)
function openSnap() {
  // Prüfe ob schon geklickt
  if (!localStorage.getItem('snapClicked')) {
    localStorage.setItem('snapClicked', 'true');
    snaps = parseInt(localStorage.getItem('totalSnaps') || '0') + 1;
    localStorage.setItem('totalSnaps', snaps.toString());
    document.getElementById('snaps').textContent = snaps;
  }
}

// 🔥 VISITORS (1 pro Gerät/Session)
if (!localStorage.getItem('visitedToday')) {
  localStorage.setItem('visitedToday', 'true');
  visits = parseInt(localStorage.getItem('totalVisitors') || '0') + 1;
  localStorage.setItem('totalVisitors', visits.toString());
} 
document.getElementById('visits').textContent = visits.toLocaleString();

// 🔥 SNAP COUNTER laden
let snaps = parseInt(localStorage.getItem('totalSnaps') || '0');
let visits = parseInt(localStorage.getItem('totalVisitors') || '0');

// 🔥 Typing
const title = document.querySelector('.typing-title');
const text = "Bero's Website";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    title.textContent = text.slice(0, i + 1);
    i++;
    setTimeout(typeWriter, 100);
  }
}
setTimeout(typeWriter, 500);

// 🔥 Glitch
const subtitle = document.querySelector('.subtitle');
setInterval(() => {
  subtitle.style.transform = `translate(${Math.random()*2-1}px, ${Math.random()*2-1}px)`;
}, 2000);

// 🔥 Trails
function createTrail(x, y, color) {
  const trail = document.createElement('div');
  trail.style.cssText = `
    position:fixed;left:${x}px;top:${y}px;width:8px;height:8px;
    background:radial-gradient(circle,${color},transparent);border-radius:50%;
    pointer-events:none;z-index:999;animation:trailFade .5s ease-out forwards;
  `;
  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 500);
}

document.addEventListener('mousemove', e => window.innerWidth > 480 && createTrail(e.clientX, e.clientY, '#a855f7'));
document.addEventListener('touchmove', e => {
  const touch = e.touches[0];
  createTrail(touch.clientX, touch.clientY, '#06b6d4');
}, { passive: true });

// CSS Trail
const style = document.createElement('style');
style.textContent = '@keyframes trailFade{to{opacity:0;transform:scale(0) translateY(-15px);}}';
document.head.appendChild(style);
