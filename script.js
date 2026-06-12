// =========================================================
//  Một lá thư cho Vịt Thơm — interaction
//  Mở phong thư, rồi nhẹ nhàng hiện lá thư ở chính giữa.
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

  // Let the flap open slowly and gently before the card glides in.
  const delay = reduceMotion ? 0 : 1150;
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
//  Floating dust / light particles — soft and slow
// =========================================================
(function spawnParticles() {
  const layer = document.getElementById("particles");
  if (!layer || reduceMotion) return;

  const COUNT = 28;
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    const size = 2 + Math.random() * 6;
    p.style.width = p.style.height = size + "px";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = 20 + Math.random() * 22 + "s"; // slow drift
    p.style.animationDelay = -Math.random() * 40 + "s";
    layer.appendChild(p);
  }
})();
