import JSConfetti from "js-confetti";

const confetti = new JSConfetti();

/**
 * @type {HTMLButtonElement}
 */
const button = document.querySelector("#dont-do-it");

button.addEventListener("click", () => {
  setInterval(() => {
    confetti.addConfetti({
      emojis: ["😈", "🥸", "🤡", "🥵"],
      emojiSize: 30,
    });
  }, 250);
  button.style.display = "none";
  document.body.style.backgroundColor = "black";
});
