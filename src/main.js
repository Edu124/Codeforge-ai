// ── Smooth nav hide/show on scroll ───────────────────────────────────────────
let lastScroll = 0;
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  const current = window.scrollY;
  if (current > 80 && current > lastScroll) {
    nav.style.transform = "translateY(-100%)";
    nav.style.transition = "transform 0.3s ease";
  } else {
    nav.style.transform = "translateY(0)";
  }
  lastScroll = current;
});

// ── Animate features on scroll ───────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".feature-card, .pricing-card, .step, .faq-item").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});

// ── Download button — replace with actual release URL ────────────────────────
document.getElementById("download-btn")?.addEventListener("click", (e) => {
  e.preventDefault();
  // TODO: Replace with actual GitHub release / R2 / S3 download URL
  const downloadUrl = "https://github.com/yourusername/codeforge/releases/latest";
  window.open(downloadUrl, "_blank");
});
