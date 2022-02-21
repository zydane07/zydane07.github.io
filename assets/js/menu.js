// scroll

const nav = document.querySelector("nav");

nav.addEventListener("click", function (e) {
    if (e.target.className !== "nav__menu") return;
    const target_name = e.target.dataset.target;
    const target = document.getElementById(target_name);
    scroll(document.body, target.offsetTop - 100);
});

function scroll(element, to) {
    window.scrollTo(0, to);
}

const nav__menu = document.querySelectorAll("[data-target]");

// active menu
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const target = entry.target.dataset.intersection;
            const temp = document.querySelector("[data-target=" + target + "]");
            temp.classList.toggle("active_nav", entry.isIntersecting);
        });
    },
    {
        threshold: 1,
    }
);

const active = document.querySelectorAll("[data-intersection]");

active.forEach((element) => {
    observer.observe(element);
});

// halaman dalam pengembangan
function develop() {
    var audio = document.getElementById("audio");
    audio.play();
    alert("Masih dalam tahap pengembangan");
}
