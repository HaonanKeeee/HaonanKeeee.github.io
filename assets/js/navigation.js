export function initNavigation() {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (burger && mobileMenu) {
    const mobileViewport = window.matchMedia("(max-width: 1100px)");

    function setMenuOpen(open, returnFocus = false) {
      const nextOpen = open && mobileViewport.matches;
      mobileMenu.classList.toggle("is-open", nextOpen);
      mobileMenu.inert = !nextOpen;
      burger.setAttribute("aria-expanded", String(nextOpen));
      if (!nextOpen && returnFocus && mobileViewport.matches) {
        burger.focus({ preventScroll: true });
      }
    }

    burger.addEventListener("click", () => {
      setMenuOpen(!mobileMenu.classList.contains("is-open"));
    });

    mobileMenu.querySelectorAll("[data-close]").forEach((link) => {
      link.addEventListener("click", () => {
        setMenuOpen(false);
        const section = document.getElementById(link.hash.slice(1));
        if (section) {
          const temporaryTabIndex = !section.hasAttribute("tabindex");
          if (temporaryTabIndex) section.setAttribute("tabindex", "-1");
          section.focus({ preventScroll: true });
          if (temporaryTabIndex) {
            section.addEventListener("blur", () => section.removeAttribute("tabindex"), { once: true });
          }
        }
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
        event.preventDefault();
        setMenuOpen(false, true);
      }
    });

    document.addEventListener("click", (event) => {
      if (mobileMenu.classList.contains("is-open") && !mobileMenu.contains(event.target) && !burger.contains(event.target)) {
        setMenuOpen(false, mobileMenu.contains(document.activeElement));
      }
    });

    document.addEventListener("focusin", (event) => {
      if (mobileMenu.classList.contains("is-open") && !mobileMenu.contains(event.target) && !burger.contains(event.target)) {
        setMenuOpen(false);
      }
    });

    mobileViewport.addEventListener("change", () => {
      const focus = document.activeElement;
      const focusWasMobile = mobileMenu.contains(focus) || focus === burger;
      const focusWasSidebar = focus?.closest(".sidebar");
      setMenuOpen(false);

      if (!mobileViewport.matches && focusWasMobile) {
        const desktopLink = document.querySelector('.side-nav__item[aria-current="location"]')
          || document.querySelector(".side-nav__item.is-active")
          || document.querySelector(".side-nav__item");
        desktopLink?.focus({ preventScroll: true });
      } else if (mobileViewport.matches && focusWasSidebar) {
        burger.focus({ preventScroll: true });
      }
    });

    setMenuOpen(false);
  }

  const sections = [...document.querySelectorAll(".content-section[id]")];
  const navItems = document.querySelectorAll(".side-nav__item");
  if (!sections.length || !navItems.length) return;

  function updateActiveSection() {
    const anchor = window.innerHeight * 0.4;
    let activeSection = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= anchor) activeSection = section;
    });
    const page = document.scrollingElement || document.documentElement;
    const atPageBottom = page.scrollHeight > window.innerHeight + 2
      && page.scrollTop + window.innerHeight >= page.scrollHeight - 2;
    if (atPageBottom) activeSection = sections[sections.length - 1];

    navItems.forEach((item) => {
      const current = item.dataset.section === activeSection.id;
      const children = (item.dataset.children || "").split(" ").filter(Boolean);
      item.classList.toggle("is-active", current || children.includes(activeSection.id));
      if (current) item.setAttribute("aria-current", "location");
      else item.removeAttribute("aria-current");
    });
  }

  let scheduledFrame = 0;
  function scheduleUpdate() {
    if (scheduledFrame) return;
    scheduledFrame = window.requestAnimationFrame(() => {
      scheduledFrame = 0;
      updateActiveSection();
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
  updateActiveSection();
}
