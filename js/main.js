/**
 * VEXORA DIGITAL — Master Frontend Script
 * Professional, Dependency-Free Vanilla JavaScript
 * Personal Name: HAFIZ | Brand: Vexora Digital
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Application Modules
  initBrandAndProfile();
  initNavigation();
  initPortfolio();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   1. Brand & Profile Initialization
   ========================================================================== */
function initBrandAndProfile() {
  const cfg = window.VEXORA_CONFIG || {};
  const profile = cfg.profile || {};
  const contact = cfg.contact || {};

  // Populate Name & Title
  const nameEls = document.querySelectorAll("[data-bind='profile-name']");
  nameEls.forEach(el => el.textContent = profile.name || "HAFIZ");

  const titleEls = document.querySelectorAll("[data-bind='profile-title']");
  titleEls.forEach(el => el.textContent = profile.title || "AI Creator & Web Developer");

  const locationEls = document.querySelectorAll("[data-bind='profile-location']");
  locationEls.forEach(el => el.textContent = profile.location || "Remote Worldwide");

  // Profile Avatar
  const avatarEl = document.getElementById("about-avatar-img");
  if (avatarEl && profile.avatar) {
    avatarEl.src = profile.avatar;
    avatarEl.alt = profile.altText || "Hafiz — Vexora Digital";
  }

  // Populate Contact & WhatsApp Elements
  const emailEls = document.querySelectorAll("[data-bind='contact-email']");
  emailEls.forEach(el => {
    el.textContent = contact.email || "vexoradigital00@gmail.com";
    if (el.tagName === "A") {
      el.href = `mailto:${contact.email || 'vexoradigital00@gmail.com'}`;
    }
  });

  // Direct WhatsApp Links (Always point to https://wa.me/923262126950)
  const whatsappUrl = contact.whatsappUrl || "https://wa.me/923262126950";
  const whatsappPrefilled = contact.whatsappPrefilledUrl || "https://wa.me/923262126950?text=Hello%20Hafiz!%20I%20am%20interested%20in%20your%20digital%20services.%20I%20would%20like%20to%20discuss%20a%20project.";
  
  const whatsappBtns = document.querySelectorAll("[data-bind='whatsapp-btn']");
  whatsappBtns.forEach(btn => {
    btn.href = whatsappPrefilled;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
  });

  const whatsappDisplayEls = document.querySelectorAll("[data-bind='contact-whatsapp-display']");
  whatsappDisplayEls.forEach(el => {
    el.textContent = "03262126950";
    if (el.tagName === "A") {
      el.href = whatsappUrl;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  });

  const whatsappIntlEls = document.querySelectorAll("[data-bind='contact-whatsapp-intl']");
  whatsappIntlEls.forEach(el => {
    el.textContent = "+923262126950";
    if (el.tagName === "A") {
      el.href = whatsappUrl;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  });

  // Social URLs
  bindLink("social-linkedin", contact.linkedin);
  bindLink("social-instagram", contact.instagram);
  bindLink("social-github", contact.github);

  // Set current year in copyright notice
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function bindLink(id, url) {
  const el = document.getElementById(id);
  if (el && url) {
    el.href = url;
  }
}

/* ==========================================================================
   2. Navigation & Scroll Spy
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mobileDrawer = document.querySelector(".mobile-drawer");
  const mobileBackdrop = document.querySelector(".mobile-drawer-backdrop");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  // Sticky Header Scroll Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
    updateActiveNavLink();
  }, { passive: true });

  // Mobile Drawer Toggle
  function toggleMobileMenu(open) {
    const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains("open");
    mobileDrawer.classList.toggle("open", isOpen);
    mobileBackdrop.classList.toggle("open", isOpen);
    mobileToggle.classList.toggle("open", isOpen);
    mobileToggle.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => toggleMobileMenu());
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener("click", () => toggleMobileMenu(false));
  }

  // Smooth Scroll & Close Drawer
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          e.preventDefault();
          toggleMobileMenu(false);
          const headerOffset = 76;
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // Scroll Spy for Nav Links
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }
}

/* ==========================================================================
   3. Portfolio Rendering & Filter Logic
   ========================================================================== */
let activeFilter = "all";

function initPortfolio() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioGrid = document.getElementById("portfolio-grid");

  if (!portfolioGrid) return;

  renderProjects(activeFilter);

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter") || "all";
      renderProjects(activeFilter);
    });
  });

  initProjectModal();
}

function renderProjects(filter) {
  const portfolioGrid = document.getElementById("portfolio-grid");
  const projects = window.VEXORA_PROJECTS || [];

  const filtered = filter === "all" 
    ? projects 
    : projects.filter(p => p.filterCategories && p.filterCategories.includes(filter));

  if (filtered.length === 0) {
    portfolioGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-weight: 600;">No concept projects match the selected category.</p>
      </div>
    `;
    return;
  }

  portfolioGrid.innerHTML = filtered.map(p => `
    <article class="project-card" data-id="${p.id}" tabindex="0" role="button" aria-label="View details for ${p.title}">
      <div class="project-media-wrapper">
        <img src="${p.thumbnail}" alt="${p.title}" loading="lazy" />
        <span class="project-overlay-badge demo-badge">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
            <circle cx="5" cy="5" r="4"/>
          </svg>
          ${p.label}
        </span>
        <span class="project-category-tag">${p.category}</span>
      </div>
      <div class="project-card-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>
        <div class="project-meta-pills">
          ${p.tools.slice(0, 3).map(tool => `<span class="project-pill">${tool}</span>`).join('')}
        </div>
        <div class="project-footer-btn">
          <span>View Project</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </article>
  `).join('');

  // Attach click listeners to cards
  portfolioGrid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openProjectModal(id);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const id = card.getAttribute("data-id");
        openProjectModal(id);
      }
    });
  });
}

/* ==========================================================================
   4. Project Detail Modal & Interactive Previews
   ========================================================================== */
function initProjectModal() {
  const modalBackdrop = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  if (!modalBackdrop) return;

  modalCloseBtn?.addEventListener("click", closeProjectModal);

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeProjectModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const projects = window.VEXORA_PROJECTS || [];
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-project-content");
  if (!modalBackdrop || !modalBody) return;

  // Build Interactive Demo or Storyboard if applicable
  let interactivePreviewSection = "";
  
  if (project.id === "project-3") {
    // Project 3: Modern Business Website with Live Interactive Preview Frame
    interactivePreviewSection = `
      <div class="modal-section" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 24px; margin-bottom: 28px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
          <h4 style="font-size: 1.05rem; font-weight: 800; color: #0f172a; margin: 0;">🌐 Interactive Live Concept View</h4>
          <span style="font-size: 0.75rem; font-weight: 700; background: #eff6ff; color: #1d4ed8; padding: 4px 10px; border-radius: 999px; border: 1px solid #bfdbfe;">
            SIMULATED DEMO PREVIEW
          </span>
        </div>
        <p style="font-size: 0.88rem; color: #475569; margin-bottom: 16px;">
          Below is a working simulated viewport demonstrating the microservice dashboard and landing page architecture:
        </p>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; box-shadow: 0 4px 12px rgba(15,23,42,0.04);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; margin-bottom: 16px;">
            <div style="font-weight: 800; color: #0f172a; font-size: 0.95rem;">APEX CLOUD // SYSTEM STATUS: <span style="color: #10b981;">ALL EDGE NODES NOMINAL</span></div>
            <button class="btn btn-sm btn-primary" onclick="alert('Apex Cloud Live Interaction: Simulating cluster auto-scaling across 45 edge data centers.')" style="padding: 6px 14px; font-size: 0.78rem;">
              Simulate Traffic Spike
            </button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px;">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 6px;">
              <div style="font-size: 0.75rem; color: #64748b;">Global Latency</div>
              <div style="font-size: 1.2rem; font-weight: 800; color: #0284c7;">4.2 ms</div>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 6px;">
              <div style="font-size: 0.75rem; color: #64748b;">Active Replicas</div>
              <div style="font-size: 1.2rem; font-weight: 800; color: #0f172a;">14,280</div>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 6px;">
              <div style="font-size: 0.75rem; color: #64748b;">Uptime SLA</div>
              <div style="font-size: 1.2rem; font-weight: 800; color: #10b981;">99.998%</div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (project.id === "project-2" || project.id === "project-4") {
    // Project 2 & 4: Commercial Video Storyboard Breakdown (honestly labeled concept)
    interactivePreviewSection = `
      <div class="modal-section" style="background: #0f172a; color: #ffffff; border-radius: 12px; padding: 24px; margin-bottom: 28px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <h4 style="font-size: 1.05rem; font-weight: 800; color: #ffffff; margin: 0;">🎬 Commercial Sequence &amp; Storyboard Beats</h4>
          <span style="font-size: 0.75rem; font-weight: 700; background: #1e293b; color: #38bdf8; padding: 4px 10px; border-radius: 999px;">
            AI VIDEO STORYBOARD CONCEPT
          </span>
        </div>
        <p style="font-size: 0.88rem; color: #94a3b8; margin-bottom: 16px;">
          Keyframe timing breakdown utilized for AI motion generation and visual pacing:
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
          <div style="background: #1e293b; padding: 14px; border-radius: 8px; border-left: 3px solid #38bdf8;">
            <div style="font-size: 0.75rem; color: #38bdf8; font-weight: 700;">BEAT 01: VISUAL HOOK (0:00 - 0:08)</div>
            <div style="font-size: 0.86rem; color: #e2e8f0; margin-top: 4px;">Extreme slow-motion surface fluid reaction and cinematic lighting crescendo.</div>
          </div>
          <div style="background: #1e293b; padding: 14px; border-radius: 8px; border-left: 3px solid #2563eb;">
            <div style="font-size: 0.75rem; color: #60a5fa; font-weight: 700;">BEAT 02: PRODUCT REVEAL (0:08 - 0:22)</div>
            <div style="font-size: 0.86rem; color: #e2e8f0; margin-top: 4px;">Dynamic camera pan highlighting physical contours and aesthetic texture.</div>
          </div>
          <div style="background: #1e293b; padding: 14px; border-radius: 8px; border-left: 3px solid #10b981;">
            <div style="font-size: 0.75rem; color: #34d399; font-weight: 700;">BEAT 03: BRAND CTA (0:22 - 0:30)</div>
            <div style="font-size: 0.86rem; color: #e2e8f0; margin-top: 4px;">Lockup resolution, clean typography, sound logo release, and clear CTA.</div>
          </div>
        </div>
      </div>
    `;
  }

  modalBody.innerHTML = `
    <div class="modal-header-image">
      <img src="${project.thumbnail}" alt="${project.title}" />
    </div>
    
    <div class="modal-content-body">
      <div class="modal-badge-row">
        <span class="project-overlay-badge demo-badge" style="position: static;">
          ${project.label}
        </span>
        <span class="section-tag" style="margin-bottom: 0;">${project.category}</span>
        <span style="font-size: 0.82rem; font-weight: 600; color: var(--text-muted);">${project.clientType}</span>
      </div>

      <h2 class="modal-project-title">${project.title}</h2>
      <p class="modal-project-subtitle">${project.subtitle}</p>

      <div class="modal-meta-grid">
        <div>
          <div class="meta-field-label">Category</div>
          <div class="meta-field-val">${project.category}</div>
        </div>
        <div>
          <div class="meta-field-label">Project Status</div>
          <div class="meta-field-val" style="color: var(--primary);">Concept Demonstration</div>
        </div>
        <div>
          <div class="meta-field-label">Deliverables</div>
          <div class="meta-field-val">${project.deliverables.length} Asset Files</div>
        </div>
        <div>
          <div class="meta-field-label">Primary Tools</div>
          <div class="meta-field-val">${project.tools.slice(0, 2).join(", ")}</div>
        </div>
      </div>

      <!-- Project Objective -->
      <div class="modal-section">
        <h4 class="modal-section-title">🎯 Project Objective</h4>
        <p>${project.objective}</p>
      </div>

      <!-- Problem Addressed -->
      <div class="modal-section">
        <h4 class="modal-section-title">⚠️ The Challenge</h4>
        <p>${project.challenge}</p>
      </div>

      <!-- Creative Solution -->
      <div class="modal-section">
        <h4 class="modal-section-title">💡 The Creative Solution</h4>
        <p>${project.solution}</p>
      </div>

      <!-- Interactive Preview or Storyboard -->
      ${interactivePreviewSection}

      <!-- Deliverables List -->
      <div class="modal-section">
        <h4 class="modal-section-title">📦 Deliverables &amp; Asset Breakdown</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
          ${project.deliverables.map(del => `
            <li style="display: flex; align-items: center; gap: 10px; font-size: 0.94rem; color: var(--text-body);">
              <span style="color: var(--primary); font-weight: 800;">✓</span>
              ${del}
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Tools Used -->
      <div class="modal-section">
        <h4 class="modal-section-title">🛠️ Software &amp; Technologies Used</h4>
        <div class="modal-pill-list">
          ${project.tools.map(tool => `<span class="modal-pill">${tool}</span>`).join('')}
        </div>
      </div>

      <!-- Modal Footer CTA -->
      <div class="modal-footer-actions">
        <div>
          <span style="font-size: 0.85rem; color: var(--text-muted);">Interested in a tailored concept for your brand?</span>
        </div>
        <button class="btn btn-primary" onclick="inquireFromProject('${project.category}', '${project.title.replace(/'/g, "\\'")}')">
          Inquire About Similar Project →
        </button>
      </div>
    </div>
  `;

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modalBackdrop = document.getElementById("project-modal");
  if (modalBackdrop) {
    modalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// Inquire directly from a project case study
window.inquireFromProject = function(category, projectTitle) {
  closeProjectModal();
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }

  // Pre-fill service selector (Only 4 approved skills)
  const serviceSelect = document.getElementById("inquiry-service");
  if (serviceSelect) {
    if (category.toLowerCase().includes("video")) {
      serviceSelect.value = "AI Video Creation";
    } else if (category.toLowerCase().includes("web")) {
      serviceSelect.value = "Website Development";
    } else if (category.toLowerCase().includes("graphic")) {
      serviceSelect.value = "AI Graphic Design";
    } else if (category.toLowerCase().includes("advert")) {
      serviceSelect.value = "AI Advertising & Promotional Content";
    }
  }

  // Pre-fill message placeholder
  const msgEl = document.getElementById("inquiry-message");
  if (msgEl && !msgEl.value) {
    msgEl.value = `Hello Hafiz, I saw your concept project "${projectTitle}" and would love to discuss a similar project for my brand.`;
  }
};

// Inquire directly from a service card
window.inquireFromService = function(serviceName) {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }

  const serviceSelect = document.getElementById("inquiry-service");
  if (serviceSelect) {
    serviceSelect.value = serviceName;
  }

  const msgEl = document.getElementById("inquiry-message");
  if (msgEl && !msgEl.value) {
    msgEl.value = `Hello Hafiz, I would like to inquire about your "${serviceName}" service for my business.`;
  }
};

/* ==========================================================================
   5. Contact Form Validation & Real Submission
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-inquiry-form");
  const statusEl = document.getElementById("form-status-msg");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelector("#inquiry-name")?.value.trim();
    const email = form.querySelector("#inquiry-email")?.value.trim();
    const service = form.querySelector("#inquiry-service")?.value;
    const budget = form.querySelector("#inquiry-budget")?.value;
    const message = form.querySelector("#inquiry-message")?.value.trim();
    const submitBtn = form.querySelector("#submit-btn");

    // Validation
    if (!name || !email || !service || !message) {
      showFormStatus("Please fill in all required fields (Name, Email, Service, and Project Details).", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormStatus("Please enter a valid email address.", "error");
      return;
    }

    // Set Loading State
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spin-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2 A10 10 0 0 1 22 12"></path>
      </svg>
      Sending Inquiry...
    `;

    const cfg = window.VEXORA_CONFIG || {};
    const formspreeEndpoint = cfg.contact?.formspreeEndpoint;
    const recipientEmail = cfg.contact?.email || "vexoradigital00@gmail.com";

    if (formspreeEndpoint && formspreeEndpoint.startsWith("http")) {
      // Real API Submission via Formspree or custom webhook
      try {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            service,
            budget,
            message
          })
        });

        if (response.ok) {
          showFormStatus("✓ Inquiry sent successfully! Hafiz will get back to you within 24 hours.", "success");
          form.reset();
          showToast("Message Sent", "Thank you for contacting Hafiz at Vexora Digital. We will respond promptly.");
        } else {
          showFormStatus("Unable to submit directly to endpoint. Opening your email client to send your inquiry directly.", "info");
          triggerMailto(recipientEmail, name, service, budget, message);
        }
      } catch (err) {
        showFormStatus("Network connection failed. Opening your default email client to send your message directly.", "info");
        triggerMailto(recipientEmail, name, service, budget, message);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    } else {
      // Transparent direct fallback with mailto so user is never misled
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      showFormStatus(
        `ℹ️ To ensure your message is delivered directly, an email draft has been prepared for <strong>${recipientEmail}</strong>. (You can also reach Hafiz instantly via WhatsApp: <strong>03262126950</strong>).`,
        "info"
      );

      triggerMailto(recipientEmail, name, service, budget, message);
      showToast("Email Draft Prepared", "Your default email application has opened with your project inquiry.");
    }
  });

  function showFormStatus(htmlMessage, type) {
    if (!statusEl) return;
    statusEl.className = `form-status ${type}`;
    statusEl.innerHTML = htmlMessage;
    statusEl.style.display = "block";
    statusEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function triggerMailto(recipient, name, service, budget, message) {
    const subject = encodeURIComponent(`Project Inquiry: ${service} - from ${name}`);
    const body = encodeURIComponent(
      `Hello Hafiz,\n\n` +
      `Name: ${name}\n` +
      `Requested Service: ${service}\n` +
      `Estimated Budget: ${budget || 'Not specified'}\n\n` +
      `Project Details:\n${message}\n\n` +
      `Sent via Vexora Digital Portfolio Inquiry Form`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }
}

/* ==========================================================================
   6. Toast Notification Helper
   ========================================================================== */
function showToast(title, message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div class="toast-icon" style="color: var(--primary);">ℹ️</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-closing");
    setTimeout(() => toast.remove(), 300);
  }, 4200);
}

/* ==========================================================================
   7. Back to Top Smooth Scroll
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}
