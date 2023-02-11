const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * max - min + 1 + min);
};
const getRandomKey = function () {
  return keys[getRandomNumber(0, keys.length - 1)];
};
let selectedEl;
const targetRandomKey = function () {
  // Selecting Element
  const randomKey = document.querySelector(`[data-key="${getRandomKey()}"]`);
  randomKey.classList.add("jiggle");
};

document.addEventListener("keyup", function (event) {
  const keyPressed = event.key;
  const keyElement = document.querySelector(
    `[data-key="${keyPressed.toUpperCase()}"]`
  );
  const highLightedKey = document.querySelector(".jiggle");

  if (keyPressed.toUpperCase() !== highLightedKey.textContent) {
    keyElement.classList.add("wrong");
    const audio = new Audio("key-23.mp3");
    audio.play();
    keyElement.addEventListener("animationend", function () {
      this.classList.remove("wrong");
    });
  }

  if (keyPressed.toUpperCase() === highLightedKey.textContent) {
    // Animation
    keyElement.classList.add("hit");
    const audio = new Audio("key-2.mp3");
    audio.play();
    keyElement.addEventListener("animationend", function () {
      this.classList.remove("hit");
    });
    highLightedKey.classList.remove("jiggle");
    targetRandomKey();
  }
});
targetRandomKey();
