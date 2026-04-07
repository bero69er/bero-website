let count = 0;
const countEl = document.getElementById("count");
const btn1 = document.getElementById("btn1");
const cursor = document.getElementById("cursor-dot");

// 1. Interactive Counter & Background Pop
btn1.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
  
  // Flash animation
  document.body.style.transition = "0.2s";
  document.body.style.backgroundColor = "rgba(124, 58, 237, 0.2)";
  setTimeout(() => {
    document.body.style.backgroundColor = "#05060d";
  }, 100);
});

// 2. Smooth Custom Cursor
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  
  // Animate cursor expansion on hover
  if (e.target.tagName === "BUTTON" || e.target.tagName === "A") {
    cursor.style.transform = "scale(6)";
    cursor.style.mixBlendMode = "difference";
  } else {
    cursor.style.transform = "scale(1)";
    cursor.style.mixBlendMode = "normal";
  }
});

// 3. Hover Tilt Effect for Card
const card = document.querySelector(".glass-card");
document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.clientX) / 25;
  let y = (window.innerHeight / 2 - e.clientY) / 25;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
