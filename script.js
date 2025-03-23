// Exercise 1
// Write a function that mimics the behaviour of a typewriter.
// Using setInterval display the word Wozniak one character at a time (one letter per second).
// Once the word is written on the screen clear the interval.
const typewriterButton = document.createElement("button");
typewriterButton.textContent = "Press me";
typewriterButton.classList.add("typewriter-btn");
document.body.appendChild(typewriterButton);
const output = document.createElement("div");
output.classList.add("typewriter-output");
document.body.appendChild(output);

function typewriterEffect(text, targetElement, speed = 500) {
  targetElement.textContent = "";
  let chars = text.split("");
  let interval = setInterval(() => {
    targetElement.textContent += chars.shift();
    if (!chars.length) {
      clearInterval(interval);
    }
  }, speed);
}

typewriterButton.addEventListener("click", () => {
  typewriterEffect("Wozniak", output);
});

// Exercise 2
// Write a function that displays every second that has passed on the page since it was opened.
// The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed",
// then "2 minutes have passed" (for 120 seconds and more), etc.
const timerButton = document.createElement("button");
timerButton.textContent = "Start the timer";
timerButton.className = "timer-btn";
document.body.appendChild(timerButton);
const timerOutput = document.createElement("div");
timerOutput.className = "timer-display";
document.body.appendChild(timerOutput);

const displayTime = () => {
  let current = 0;
  timerButton.disabled = true;

  setInterval(() => {
    current++;
    const minutes = Math.floor(current / 60);
    const seconds = current % 60;
    let parts = [];

    if (minutes > 0) {
      parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
    }

    if (seconds > 0 || minutes === 0) {
      parts.push(`${seconds} second${seconds === 1 ? "" : "s"}`);
    }

    timerOutput.textContent = `${parts.join(" ")} have passed`;
  }, 1000);
};

timerButton.addEventListener("click", displayTime);
