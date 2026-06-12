// Interactive letter — open on click / keyboard, with a calm reveal.
const envelope = document.getElementById("envelope");
const hint = document.getElementById("hint");

function openLetter() {
  if (envelope.classList.contains("open")) return;
  envelope.classList.add("open");
  hint.classList.add("hidden");
}

envelope.addEventListener("click", openLetter);

// Accessibility: open with Enter or Space when focused.
envelope.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openLetter();
  }
});
