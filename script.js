function toggleMenu() {
  document.querySelector("#navbar ul").classList.toggle("show");
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

const typedText = "I’m Rohit Kumar – a passionate software engineer exploring Web Dev, ML & Data Science!";
let index = 0;
function typeEffect() {
  if (index < typedText.length) {
    document.getElementById("typed-text").innerHTML += typedText.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}
window.onload = typeEffect;
