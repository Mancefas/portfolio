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
const card = document.querySelectorAll(".card");
const link = document.querySelectorAll("a");
const borderAroundLang = document.querySelectorAll(".border");

console.log(link);

dayBtn.addEventListener("click", () => {
  body.classList.add("bdLight");
  card.forEach((el) => el.classList.remove("text-white-50"));
  card.forEach((el) => el.classList.remove("bg-dark"));
  link.forEach((el) => el.classList.remove("text-white-50"));
});

dayBtn.addEventListener("touchmove", (event) => {
  event.preventDefault();
  body.classList.add("bdLight");
  card.forEach((el) => el.classList.remove("text-white-50"));
  card.forEach((el) => el.classList.remove("bg-dark"));
  link.forEach((el) => el.classList.remove("text-white-50"));
});

nightBtn.addEventListener("click", () => {
  body.classList.remove("bdLight");
  body.classList.add("bdDark");
  card.forEach((el) => el.classList.add("text-white-50"));
  card.forEach((el) => el.classList.add("bg-dark"));
  link.forEach((el) => el.classList.add("text-white-50"));
  borderAroundLang.forEach((el) => el.classList.add("border-dark"));
});

nightBtn.addEventListener("touchmove", (event) => {
  event.preventDefault();
  body.classList.remove("bdLight");
  body.classList.add("bdDark");
  card.forEach((el) => el.classList.add("text-white-50"));
  card.forEach((el) => el.classList.add("bg-dark"));
  link.forEach((el) => el.classList.add("text-white-50"));
});
