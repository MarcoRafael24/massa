// 2372010 Marco A
document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.getElementById("typing");
  const texts = [
    "Awaken the Spirit, One Sip of Coffee at the Right Time!",
    "Sip by Sip, Brewing Moments of Bliss.",
  ];
  let textIndex = 0;
  let charIndex = 0;

  function typeText() {
    if (charIndex < texts[textIndex].length) {
      typingElement.innerHTML += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100);
    } else {
      setTimeout(resetText, 2000);
    }
  }

  function resetText() {
    typingElement.innerHTML = "";
    charIndex = 0;
    textIndex = (textIndex + 1) % texts.length;
    typeText();
  }

  typeText();
});

