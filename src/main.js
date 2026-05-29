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

// ── Animate elements on scroll ───────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".feature-card, .pricing-card, .step, .faq-item, .contact-form").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});

// ── Pricing plan buttons — pre-fill contact subject ──────────────────────────
document.querySelectorAll("[data-plan]").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const plan = btn.getAttribute("data-plan");
    const subjectInput = document.getElementById("contact-subject");
    if (subjectInput) {
      subjectInput.value = `Subscription enquiry: ${plan}`;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    // Focus the name field after scroll
    setTimeout(() => document.getElementById("contact-name")?.focus(), 600);
  });
});

// ── Contact form success message ─────────────────────────────────────────────
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  // Formspree redirects back with ?submitted=true on success
  if (new URLSearchParams(window.location.search).get("submitted") === "true") {
    contactForm.innerHTML = `
      <div style="text-align:center; padding: 40px 20px;">
        <div style="font-size: 48px; margin-bottom: 16px;">✅</div>
        <h3 style="color: #f0f4ff; font-size: 20px; margin-bottom: 8px;">Message sent!</h3>
        <p style="color: #94a3b8; font-size: 14px;">We'll get back to you within 24 hours.</p>
      </div>`;
  }
}
