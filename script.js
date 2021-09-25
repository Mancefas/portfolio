const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

const micBtn = document.getElementById("microphone");
const audio = document.getElementById("audio");
micBtn.addEventListener("click", () => {
  audio.play();
});

const dayBtn = document.getElementById("day");
const nightBtn = document.getElementById("night");
const body = document.querySelector("body");

dayBtn.addEventListener("click", () => {
  body.classList.add("bdLight");
  console.log("yea");
});

dayBtn.addEventListener("touchmove", (event) => {
  event.preventDefault();
  body.classList.add("bdLight");
  console.log("yea");
});

nightBtn.addEventListener("click", () => {
  body.classList.remove("bdLight");
  body.classList.add("bdDark");
});

nightBtn.addEventListener("touchmove", (event) => {
  event.preventDefault();
  body.classList.remove("bdLight");
  body.classList.add("bdDark");
});
