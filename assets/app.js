/* ==========================================================================
   FARMORA — INTERACTIVE APPLICATION SCRIPT
   Powering Rulebase-Style Live Cards, Diagnostic Consoles & Enterprise SSO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeroTyping();
  initFeaturesTabs();
  initWorkforceTabs();
  initConsoleLayers();
  initEnterpriseModal();
  initMobileDrawer();
  initScrollNav();
});

/* --------------------------------------------------------------------------
   1. HERO FLOATING TELEMETRY CARD TYPING SIMULATION
   -------------------------------------------------------------------------- */
function initHeroTyping() {
  const typingElement = document.getElementById('heroTypingText');
  if (!typingElement) return;

  const phrases = [
    "Leaf wetness 9.2h: Early blight risk acute",
    "Nitrogen deficit detected: Sector 14B Maize",
    "Soil moisture probe #04: Below refill point",
    "Sentinel-2 pass: NDVI 0.32 anomaly confirmed"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 65;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 30;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 65;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2200; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 1000);
}

/* --------------------------------------------------------------------------
   2. SECTION 1: FEATURES TABS SWITCHER
   -------------------------------------------------------------------------- */
function initFeaturesTabs() {
  const tabs = document.querySelectorAll('.feat-tab');
  const panel = document.getElementById('featuresPanelGrid');
  if (!tabs.length || !panel) return;

  const tabData = {
    crop: {
      card1Title: "Real-time crop vigor on every hectare",
      card1Desc: "Every parcel observed and scored automatically against historic NDVI baselines. Fungal stress, emergence failures, and leaf wilting checked together.",
      card2Title: "Autonomous agronomic prescription",
      card2Desc: "Turn sensor anomalies into actionable variable-rate field directives instantly. No more slow manual spreadsheet scouting.",
      card3Title: "Early disease & pest intake",
      card3Desc: "Catch pathogen pressure, armyworm defoliation, and moisture stress the exact day they develop."
    },
    moisture: {
      card1Title: "Continuous root-zone moisture tracking",
      card1Desc: "Multi-depth capacitive probes telemetry mapped against daily evapotranspiration curves. Never under- or over-irrigate.",
      card2Title: "Center pivot & drip automation",
      card2Desc: "Trigger automated pivot cycles precisely when root tension crosses the critical refill boundary.",
      card3Title: "Salinity & drainage alerting",
      card3Desc: "Detect perched water tables, soil crusting, and salt accumulation before roots suffocate."
    },
    nutrient: {
      card1Title: "Dynamic N-P-K canopy chlorophyll mapping",
      card1Desc: "High-resolution red-edge reflectance pinpoints nitrogen leaching across sandy soil corridors.",
      card2Title: "Variable-rate prescription export",
      card2Desc: "Export georeferenced ISO-XML shapefiles directly into John Deere, Case IH, and drone sprayers.",
      card3Title: "Carbon & soil organic matter trend",
      card3Desc: "Track sequestered organic carbon and regenerative soil health over successive cropping seasons."
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active-feat-tab');
        t.classList.add('dim');
      });
      tab.classList.add('active-feat-tab');
      tab.classList.remove('dim');

      const tabKey = tab.dataset.tab;
      const data = tabData[tabKey];
      if (data) {
        document.getElementById('featCard1Title').textContent = data.card1Title;
        document.getElementById('featCard1Desc').textContent = data.card1Desc;
        document.getElementById('featCard2Title').textContent = data.card2Title;
        document.getElementById('featCard2Desc').textContent = data.card2Desc;
        document.getElementById('featCard3Title').textContent = data.card3Title;
        document.getElementById('featCard3Desc').textContent = data.card3Desc;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. SECTION 3: WORKFORCE DEEP-DIVE TABS & ACCORDION
   -------------------------------------------------------------------------- */
function initWorkforceTabs() {
  const outerTabs = document.querySelectorAll('.wf-outer-tab-btn');
  const accordionItems = document.querySelectorAll('.wf-accordion-item');

  outerTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      outerTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  const accordionDetails = {
    "drone": {
      score: "96",
      scoreTitle: "Autonomous Scout Coverage",
      scoreSub: "DJI Agras T40 coordinated flight plan — 480ha scanned in 3.4 hrs.",
      checks: [
        { label: "Canopy thermal envelope within normal range?", status: "Passed 98/100" },
        { label: "Edge weed infestation below 4% threshold?", status: "Passed" },
        { label: "Emergence stand count matches seed plan?", status: "Passed 97%" }
      ]
    },
    "nutrient": {
      score: "91",
      scoreTitle: "Canopy Chlorophyll Index",
      scoreSub: "Red-edge index mapped to 120kg/ha urea variable rate top-dressing.",
      checks: [
        { label: "Nitrogen sufficiency index above 0.88?", status: "Passed 94/100" },
        { label: "Micro-nutrient boron & zinc balanced?", status: "Passed" },
        { label: "Foliar burn risk index low?", status: "Passed" }
      ]
    },
    "harvest": {
      score: "89",
      scoreTitle: "Grain Moisture Prediction",
      scoreSub: "Projected kernel moisture at 14.2% within 5-day dry down window.",
      checks: [
        { label: "Lodging vulnerability score below 12%?", status: "Passed" },
        { label: "Aflatoxin environmental risk low?", status: "Passed" },
        { label: "Combine harvester route optimized for fuel?", status: "Passed" }
      ]
    }
  };

  accordionItems.forEach(item => {
    item.addEventListener('click', () => {
      accordionItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const accKey = item.dataset.acc;
      const data = accordionDetails[accKey];
      if (data) {
        document.getElementById('diagScoreNumber').textContent = data.score;
        document.getElementById('diagScoreTitle').textContent = data.scoreTitle;
        document.getElementById('diagScoreSub').textContent = data.scoreSub;

        const checkList = document.getElementById('diagCheckList');
        if (checkList) {
          checkList.innerHTML = data.checks.map(c => `
            <div class="diag-check-item">
              <span class="diag-check-label">${c.label}</span>
              <span class="diag-check-pill">${c.status}</span>
            </div>
          `).join('');
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. CONSOLE MAP INTERACTIVE LAYERS
   -------------------------------------------------------------------------- */
function initConsoleLayers() {
  const layerBtns = document.querySelectorAll('.map-layer-btn');
  const satelliteImg = document.getElementById('consoleSatelliteImg');
  if (!layerBtns.length || !satelliteImg) return;

  layerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      layerBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const layer = btn.dataset.layer;
      if (layer === 'ndvi') {
        satelliteImg.style.filter = 'contrast(1.2) saturate(1.4)';
      } else if (layer === 'truecolor') {
        satelliteImg.style.filter = 'contrast(1.0) saturate(0.8) hue-rotate(40deg)';
      } else if (layer === 'moisture') {
        satelliteImg.style.filter = 'contrast(1.3) hue-rotate(180deg) saturate(1.2)';
      } else if (layer === 'stress') {
        satelliteImg.style.filter = 'contrast(1.5) hue-rotate(320deg) saturate(2)';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. ENTERPRISE SSO & AZURE PROVISIONING MODAL
   -------------------------------------------------------------------------- */
function initEnterpriseModal() {
  const modal = document.getElementById('enterpriseModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const openBtns = document.querySelectorAll('.trigger-modal, .nav-cta, .btn-demo-light, .bottom-cta-actions .btn-demo-light');
  const pwdInput = document.getElementById('modalPassword');
  const pwdToggle = document.getElementById('pwdToggle');
  const strengthBars = document.querySelectorAll('.pwd-meter-bar');
  const strengthText = document.getElementById('pwdStrengthText');
  const form = document.getElementById('enterpriseForm');
  const provisionWrap = document.getElementById('provisionProgressWrap');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Password Visibility Toggle
  if (pwdToggle && pwdInput) {
    pwdToggle.addEventListener('click', () => {
      const isPassword = pwdInput.type === 'password';
      pwdInput.type = isPassword ? 'text' : 'password';
      pwdToggle.innerHTML = isPassword 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/></svg>`;
    });
  }

  // 4-State Password Strength Meter
  if (pwdInput && strengthBars.length && strengthText) {
    pwdInput.addEventListener('input', () => {
      const val = pwdInput.value;
      let score = 0;

      if (val.length >= 8) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[A-Z]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      strengthBars.forEach((bar, idx) => {
        if (idx < score) {
          if (score === 1) bar.style.backgroundColor = '#E11D48';
          else if (score === 2) bar.style.backgroundColor = '#F59E0B';
          else if (score === 3) bar.style.backgroundColor = '#3B82F6';
          else bar.style.backgroundColor = '#16A34A';
        } else {
          bar.style.backgroundColor = '#E8E5DF';
        }
      });

      const labels = ['Enter a work password', 'Weak password', 'Fair security', 'Good security', 'Enterprise strong (Entra verified)'];
      strengthText.textContent = labels[score];
      strengthText.style.color = score === 4 ? '#16A34A' : (score > 1 ? '#4B5563' : '#9CA3AF');
    });
  }

  // Simulated 3-Step Azure Sandbox Provisioning
  if (form && provisionWrap) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('btnSubmitProvision');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Initiating Azure Sandbox...";
      }

      provisionWrap.style.display = 'block';

      const step1 = document.getElementById('provStep1');
      const step2 = document.getElementById('provStep2');
      const step3 = document.getElementById('provStep3');

      setTimeout(() => {
        if (step1) {
          step1.innerHTML = `<span class="prov-done-icon">✓</span> Tenant workspace provisioned in Azure South Africa West`;
          step1.style.color = '#16A34A';
        }
      }, 1200);

      setTimeout(() => {
        if (step2) {
          step2.innerHTML = `<span class="prov-done-icon">✓</span> Sentinel-2 & PlanetScope satellite pipelines calibrated`;
          step2.style.color = '#16A34A';
        }
      }, 2500);

      setTimeout(() => {
        if (step3) {
          step3.innerHTML = `<span class="prov-done-icon">✓</span> Nigerian soil moisture & crop phenology cluster initialized!`;
          step3.style.color = '#16A34A';
        }
        if (submitBtn) {
          submitBtn.textContent = "Ready — Entering Console...";
          submitBtn.style.background = "#16A34A";
        }
        setTimeout(() => {
          alert("Enterprise tenant sandbox successfully provisioned! Logging into Farmora Agrisystems Console.");
          closeModal();
        }, 1200);
      }, 3800);
    });
  }
}

/* --------------------------------------------------------------------------
   6. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const burger = document.getElementById('navBurger');
  const drawer = document.getElementById('mobileDrawer');
  const closeDrawer = document.getElementById('mobileDrawerClose');

  if (!burger || !drawer) return;

  burger.addEventListener('click', () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  if (closeDrawer) {
    closeDrawer.addEventListener('click', () => {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  const drawerLinks = drawer.querySelectorAll('a, button');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* --------------------------------------------------------------------------
   7. SCROLL NAV BACKGROUND
   -------------------------------------------------------------------------- */
function initScrollNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  });
}
