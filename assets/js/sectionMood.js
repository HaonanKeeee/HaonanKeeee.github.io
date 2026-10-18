export function initSectionMood() {
  const firstArtSection = document.querySelector("#beyond, #gallery, #studio");
  if (!firstArtSection) return;

  function updateMood() {
    const artHasReachedViewport = firstArtSection.getBoundingClientRect().top <= window.innerHeight * 0.45;
    document.body.classList.toggle("is-art-section", artHasReachedViewport);
  }

  let scheduledFrame = 0;
  function scheduleUpdate() {
    if (scheduledFrame) return;
    scheduledFrame = window.requestAnimationFrame(() => {
      scheduledFrame = 0;
      updateMood();
    });
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("pageshow", scheduleUpdate);
  document.addEventListener("site:languagechange", scheduleUpdate);
  if ("ResizeObserver" in window) {
    const layoutObserver = new ResizeObserver(scheduleUpdate);
    layoutObserver.observe(document.querySelector(".content") || document.documentElement);
  }
  updateMood();
}
