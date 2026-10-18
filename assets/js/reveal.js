export function initReveal() {
  const reveals = document.querySelectorAll(".reveal");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let revealObserver;

  function revealAll() {
    reveals.forEach((element) => element.classList.add("is-visible"));
    revealObserver?.disconnect();
  }

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealAll();
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0 });

  reveals.forEach((element) => {
    if (!element.classList.contains("is-visible")) revealObserver.observe(element);
  });

  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) revealAll();
  });

  document.addEventListener("focusin", (event) => {
    const element = event.target.closest?.(".reveal");
    if (element) {
      element.classList.add("is-visible");
      revealObserver.unobserve(element);
    }
  });
}
