const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const copyButton = document.querySelector(".copy-btn");
const copyText = document.querySelector("#copyText");
if (copyButton && copyText) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyText.textContent || "");
      copyButton.textContent = "コピーしました";
      setTimeout(() => {
        copyButton.textContent = "コピー";
      }, 2000);
    } catch (error) {
      copyButton.textContent = "コピー失敗";
      setTimeout(() => {
        copyButton.textContent = "コピー";
      }, 2000);
    }
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade").forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.04}s`;
  observer.observe(el);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-active");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".section").forEach((section, index) => {
  section.style.transitionDelay = `${index * 0.05}s`;
  sectionObserver.observe(section);
});

const metricEl = document.querySelector("#metricCount");
if (metricEl) {
  const target = Number(metricEl.getAttribute("data-target")) || 0;
  const duration = 2800;
  const start = performance.now();

  const animate = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    metricEl.textContent = `${value}`;
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      metricEl.textContent = `${target}`;
    }
  };

  requestAnimationFrame(animate);
}
