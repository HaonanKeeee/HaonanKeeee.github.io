export function initSectionMood() {
  const artSections = document.querySelectorAll("#beyond, #gallery, #studio");
  if (!artSections.length) return;

  if (!("IntersectionObserver" in window)) {
    document.body.classList.toggle("is-art-section", ["#beyond", "#gallery", "#studio"].includes(window.location.hash));
    return;
  }

  const visibleSections = new Set();

  const moodObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visibleSections.add(entry.target.id);
      } else {
        visibleSections.delete(entry.target.id);
      }
    });

    document.body.classList.toggle("is-art-section", visibleSections.size > 0);
  }, { rootMargin: "-26% 0px -38% 0px", threshold: 0 });

  artSections.forEach((section) => moodObserver.observe(section));
}
