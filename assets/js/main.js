(function () {
    // ====== Set current year in footer ======
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
    // ====== Mobile nav ======
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => {
        const open = navLinks.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
  
      // close on click
      navLinks.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
          navLinks.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  
    // ====== Telegram link placeholder handling ======
    const TELEGRAM_URL = "https://t.me/Karam_Mahfod";
  
    const tg1 = document.getElementById("tgLink");
    const tg2 = document.getElementById("tgLink2");
    [tg1, tg2].forEach(el => {
      if (!el) return;
      el.setAttribute("href", TELEGRAM_URL);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  
    // ====== Back to top smooth scroll ======
    document.querySelectorAll('a[href="#top"]').forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  })();
  