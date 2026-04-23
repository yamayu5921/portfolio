document.addEventListener("DOMContentLoaded", function () {
  /* =========================
     hamburger menu
  ========================= */
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("global-nav");
  const navLinks = document.querySelectorAll(".header__nav a");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      hamburger.classList.toggle("is-active");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        hamburger.classList.remove("is-active");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =========================
     fade up animation
  ========================= */
  const fadeTargets = document.querySelectorAll(".fade-up");

  if (fadeTargets.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    fadeTargets.forEach(function (target) {
      observer.observe(target);
    });
  }

  /* =========================
     work detail screenshot switch
  ========================= */
  const switchGroups = document.querySelectorAll(".workShot");

  if (switchGroups.length > 0) {
    switchGroups.forEach(function (group) {
      const buttons = group.querySelectorAll(".workShot__button");
      const panels = group.querySelectorAll(".workShot__panel");

      buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          const target = button.dataset.view;

          buttons.forEach(function (btn) {
            btn.classList.remove("is-active");
            btn.setAttribute("aria-selected", "false");
          });

          panels.forEach(function (panel) {
            panel.classList.remove("is-active");
          });

          button.classList.add("is-active");
          button.setAttribute("aria-selected", "true");

          const targetPanel = group.querySelector(`[data-panel="${target}"]`);
          if (targetPanel) {
            targetPanel.classList.add("is-active");
          }
        });
      });
    });
  }
});