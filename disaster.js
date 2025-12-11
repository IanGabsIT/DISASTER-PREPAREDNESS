const animatedElements = document.querySelectorAll("header .badge, header h1, header p, section, .card");
const addRevealTargets = () => animatedElements.forEach((el) => el.classList.add("reveal-target"));
addRevealTargets();

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
);
animatedElements.forEach((el) => revealObserver.observe(el));

// Handle training input if it exists (for main DISASTER.html page)
const trainingInput = document.getElementById("training");
const trainingOutput = document.getElementById("trainingOutput");
if (trainingInput && trainingOutput) {
  trainingInput.addEventListener("input", () => {
    trainingOutput.textContent = trainingInput.value + "%";
  });
}

// Handle assessment forms (works for all disaster pages)
const form = document.getElementById("assessmentForm");
const resultPanel = document.getElementById("assessmentResult");
const scoreValue = document.getElementById("scoreValue");
const scoreMessage = document.getElementById("scoreMessage");

if (form && resultPanel && scoreValue && scoreMessage) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Get all select elements in the form
    const selects = form.querySelectorAll("select");
    let total = 0;
    
    selects.forEach((select) => {
      const value = Number(select.value || 0);
      total += value;
    });
    
    // Handle training input if it exists (for main page)
    if (trainingInput) {
      const trainingScore = Math.round((trainingInput.value / 100) * 4);
      total += trainingScore;
    }
    
    // Handle radio buttons if they exist (for main page)
    const radioGroups = form.querySelectorAll('input[type="radio"]:checked');
    radioGroups.forEach((radio) => {
      total += Number(radio.value || 0);
    });
    
    scoreValue.textContent = total.toString();
    let message = "";
    const maxScore = selects.length * 3 + (trainingInput ? 4 : 0) + (radioGroups.length > 0 ? 3 : 0);
    
    if (total >= maxScore * 0.75) {
      message = "Excellent readiness! You are well-prepared. Continue maintaining your preparedness measures and help others in your community.";
    } else if (total >= maxScore * 0.5) {
      message = "Moderate readiness. You have some preparation, but there's room for improvement. Review the checklist and preparedness sections to enhance your readiness.";
    } else {
      message = "At-risk status. Immediate action needed. Please review the checklist, preparedness strategies, and work on improving your disaster readiness. Consider coordinating with your barangay DRRM office.";
    }
    
    scoreMessage.textContent = message;
    resultPanel.style.display = "flex";
    resultPanel.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

// Handle checklist progress (works for all pages)
const checkboxes = document.querySelectorAll(".check-item");
const progressBar = document.getElementById("checkProgress");
const progressLabel = document.getElementById("progressLabel");

if (checkboxes.length > 0 && progressBar && progressLabel) {
  const updateChecklist = () => {
    const total = checkboxes.length;
    const done = Array.from(checkboxes).filter((cb) => cb.checked).length;
    const percent = Math.round((done / total) * 100);
    progressBar.style.width = percent + "%";
    progressLabel.textContent = percent + "% complete";
    progressLabel.style.color = percent >= 80 ? "var(--clr-success)" : "var(--clr-warning)";
  };
  
  checkboxes.forEach((cb) => cb.addEventListener("change", updateChecklist));
  updateChecklist();
}

const statCards = document.querySelectorAll(".stat-card");
const animateStats = () => {
  statCards.forEach((card) => {
    const value = Number(card.dataset.value);
    const trend = Number(card.dataset.trend);
    const counter = card.querySelector(".stat-value");
    const spark = card.querySelector(".spark span");
    const duration = 1200;
    const step = (timestamp) => {
      if (!card.startTime) card.startTime = timestamp;
      const progress = Math.min((timestamp - card.startTime) / duration, 1);
      counter.textContent = (value * progress).toFixed(value % 1 === 0 ? 0 : 1);
      spark.style.width = trend * progress + "%";
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  });
};
// Observe statistics section for animation
const statsSection = document.getElementById("statistics");
if (statsSection && statCards.length > 0) {
  const statsObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );
  statsObserver.observe(statsSection);
}

const navLinks = document.querySelectorAll("nav[aria-label='Primary'] a");
const sections = document.querySelectorAll("main section");

// Only handle main navigation links, not breadcrumb links
document.querySelectorAll("nav[aria-label='Primary'] a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    // Only prevent default for anchor links (starting with #)
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    // For external links (like main-page.html), let them work normally
  });
});

const setActiveNav = () => {
  let currentId = "";
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
      currentId = `#${section.id}`;
    }
  });
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentId) {
      link.classList.add("is-active");
    } else {
      link.classList.remove("is-active");
    }
  });
};

// Only set up navigation if nav links and sections exist
if (navLinks.length > 0 && sections.length > 0) {
  setActiveNav();
  window.addEventListener("scroll", setActiveNav);
}

// Add hover effects for disaster cards on main page
const disasterCards = document.querySelectorAll(".disaster-card[data-disaster]");
disasterCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px) scale(1.02)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});


