(() => {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  if (navToggle && navLinks) {
    const setOpen = (open) => {
      navLinks.dataset.open = open ? "true" : "false";
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    navToggle.addEventListener("click", () => {
      setOpen(navToggle.getAttribute("aria-expanded") !== "true");
    });

    for (const link of navLinks.querySelectorAll("a")) {
      link.addEventListener("click", () => setOpen(false));
    }

    document.addEventListener("click", (event) => {
      if (navToggle.getAttribute("aria-expanded") !== "true") return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (navLinks.contains(target) || navToggle.contains(target)) return;
      setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      if (navToggle.getAttribute("aria-expanded") !== "true") return;
      setOpen(false);
      navToggle.focus();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) setOpen(false);
    });
  }

  const tabs = Array.from(document.querySelectorAll("[data-demo-tab]"));
  const demo = document.getElementById("demo");

  if (tabs.length > 0 && demo) {
    const show = (tab, focus = false) => {
      const mode = tab.dataset.demoTab;
      if (!mode) return;

      for (const other of tabs) {
        const active = other === tab;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-selected", active ? "true" : "false");
        other.tabIndex = active ? 0 : -1;

        const panelId = other.getAttribute("aria-controls");
        const panel = panelId ? document.getElementById(panelId) : null;
        if (panel) panel.hidden = !active;
      }

      demo.dataset.mode = mode;
      if (focus) tab.focus();
    };

    for (const tab of tabs) {
      tab.addEventListener("click", () => show(tab));
      tab.addEventListener("keydown", (event) => {
        const index = tabs.indexOf(tab);
        let next = index;

        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = tabs.length - 1;
        else return;

        event.preventDefault();
        const target = tabs[next];
        if (target) show(target, true);
      });
    }
  }
})();
