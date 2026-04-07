let count = 0;
const countEl = document.getElementById("count");
const settingsBtn = document.getElementById("settingsToggle");
const settingsMenu = document.getElementById("settingsMenu");
const orb1 = document.getElementById("orb1");
const mainCard = document.getElementById("mainCard");

// 1. Settings Menu Toggle
settingsBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  settingsMenu.classList.toggle("active");
});

// 2. Theme Engine
function setTheme(color) {
  document.documentElement.style.setProperty('--accent', color);
  orb1.style.background = color;
  countEl.style.color = color;
  
  // Bonus points for changing theme
  count += 5;
  updateCounter();
}

function resetTheme() {
  setTheme('#7c3aed');
}

// 3. Vibe Click (Tap anywhere on screen)
document.addEventListener("click", (e) => {
  // Don't count clicks if user is using the settings menu
  if (settingsMenu.classList.contains("active") && settingsMenu.contains(e.target)) return;
  if (settingsBtn.contains(e.target)) return;

  count++;
  updateCounter();
  
  // Visual feedback on card
  mainCard.style.transform = "scale(0.98)";
  setTimeout(() => mainCard.style.transform = "scale(1)", 100);
});

function updateCounter() {
  countEl.textContent = count;
}

// Close settings when clicking outside
window.addEventListener("click", () => {
  settingsMenu.classList.remove("active");
});
