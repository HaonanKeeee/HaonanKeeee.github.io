export function initNavigation() {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });

    mobileMenu.querySelectorAll("[data-close]").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  const sections = document.querySelectorAll(".content-section[id]");
  const navItems = document.querySelectorAll(".side-nav__item");

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach((item) => {
          item.classList.toggle("is-active", item.dataset.section === id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -52% 0px", threshold: 0 });

  sections.forEach((section) => navObserver.observe(section));
}
