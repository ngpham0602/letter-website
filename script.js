// =========================================================
//  A Letter For You — interaction
//  Open the envelope, then reveal the centered reading card.
// =========================================================

const envelope = document.getElementById("envelope");
const reader   = document.getElementById("reader");
const backdrop = document.getElementById("backdrop");
const closeBtn = document.getElementById("close");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lastFocus = null;

function openLetter() {
  if (envelope.classList.contains("is-open")) return;
  lastFocus = document.activeElement;

  envelope.classList.add("is-open");

  // Let the envelope finish opening before the card glides in.
  const delay = reduceMotion ? 0 : 760;
  setTimeout(() => {
    reader.classList.add("is-active");
    reader.setAttribute("aria-hidden", "false");
    closeBtn.focus({ preventScroll: true });
  }, delay);
}

function closeLetter() {
  reader.classList.remove("is-active");
  reader.setAttribute("aria-hidden", "true");
  envelope.classList.remove("is-open");
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}

envelope.addEventListener("click", openLetter);
closeBtn.addEventListener("click", closeLetter);
backdrop.addEventListener("click", closeLetter);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && reader.classList.contains("is-active")) closeLetter();
});

// =========================================================
//  Gentle drifting dust motes for a calm, dreamy backdrop
// =========================================================
(function spawnMotes() {
  const layer = document.getElementById("motes");
  if (!layer || reduceMotion) return;

  const COUNT = 22;
  for (let i = 0; i < COUNT; i++) {
    const m = document.createElement("span");
    m.className = "mote";
    const size = 2 + Math.random() * 5;
    m.style.width = m.style.height = size + "px";
    m.style.left = Math.random() * 100 + "vw";
    m.style.animationDuration = 14 + Math.random() * 16 + "s";
    m.style.animationDelay = -Math.random() * 30 + "s";
    layer.appendChild(m);
  }
})();
