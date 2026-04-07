let count = 0;
const countEl = document.getElementById("count");
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
  document.body.style.background = `radial-gradient(circle at top, #${Math.random().toString(16).slice(2, 8)}, #090b1a 55%, #05060d)`;
});