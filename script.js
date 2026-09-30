const toast = document.getElementById("toast");

document.querySelectorAll("[data-toast]").forEach((button) => {
  button.addEventListener("click", () => {
    toast.textContent = button.dataset.toast;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 1800);
  });
});

const laptop = document.querySelector(".laptop");
const visual = document.querySelector(".visual");

if (laptop && visual) {
  visual.addEventListener("mousemove", (event) => {
    if (window.innerWidth < 900) return;

    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    laptop.style.transform =
      `perspective(1100px) rotateY(${-5 + x * 5}deg) rotateX(${2 - y * 4}deg)`;
  });

  visual.addEventListener("mouseleave", () => {
    laptop.style.transform =
      "perspective(1100px) rotateY(-5deg) rotateX(2deg)";
  });
});

const revealItems = document.querySelectorAll(".card, .case-list article, .contact");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(25px)";
  item.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(item);
});

const revealStyle = document.createElement("style");
revealStyle.textContent = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(revealStyle);

document.querySelectorAll(".btn, .nav-cta").forEach((button) => {
  button.addEventListener("click", () => {
    button.style.transform = "scale(.96)";

    setTimeout(() => {
      button.style.transform = "";
    }, 130);
  });
});
