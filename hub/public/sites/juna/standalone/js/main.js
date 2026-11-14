/**
 * Juna Design — Interactive JS
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Drawer Menu
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  const openDrawer = () => {
    mobileDrawer.classList.add("open");
    mobileDrawer.setAttribute("aria-hidden", "false");
    burgerBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove("open");
    mobileDrawer.setAttribute("aria-hidden", "true");
    burgerBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  burgerBtn?.addEventListener("click", openDrawer);
  closeDrawerBtn?.addEventListener("click", closeDrawer);
  drawerLinks.forEach((l) => l.addEventListener("click", closeDrawer));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer?.classList.contains("open")) {
      closeDrawer();
    }
  });

  // 2. Header Hide on Scroll
  const header = document.getElementById("header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 120 && currentScrollY > lastScrollY && !mobileDrawer?.classList.contains("open")) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }
    lastScrollY = currentScrollY;
  }, { passive: true });

  // 3. Hero Video Sound Toggle & Autoplay
  const heroVideo = document.getElementById("heroVideo");
  const soundToggle = document.getElementById("soundToggle");
  const soundIcon = document.getElementById("soundIcon");
  const soundText = document.getElementById("soundText");

  if (heroVideo && soundToggle) {
    heroVideo.play().catch(() => {
      // Autoplay with sound restricted, muted fallback
      heroVideo.muted = true;
      heroVideo.play().catch(() => {});
    });

    soundToggle.addEventListener("click", () => {
      heroVideo.muted = !heroVideo.muted;
      if (heroVideo.muted) {
        soundIcon.textContent = "🔇";
        soundText.textContent = "الصوت مكتوم";
        soundToggle.style.background = "rgba(14, 21, 32, 0.7)";
      } else {
        soundIcon.textContent = "🔊";
        soundText.textContent = "الصوت يعمل";
        soundToggle.style.background = "rgba(44, 108, 164, 0.9)";
      }
    });
  }

  // 4. Featured Video & Background Video Audio Coordination
  const featuredVideo = document.getElementById("featuredVideo");
  if (featuredVideo && heroVideo) {
    featuredVideo.addEventListener("play", () => {
      // Mute background hero video when user starts watching the featured video
      if (!heroVideo.muted) {
        heroVideo.muted = true;
        if (soundIcon && soundText) {
          soundIcon.textContent = "🔇";
          soundText.textContent = "الصوت مكتوم";
        }
      }
    });
  }

  // 5. Ensure all looping video cards play smoothly
  const loopingVideos = document.querySelectorAll("video[autoplay]");
  loopingVideos.forEach((v) => {
    v.play().catch(() => {});
  });
});
