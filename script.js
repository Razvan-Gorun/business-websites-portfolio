// DOM Elements
const modal = document.getElementById('contactModal');
const closeModalBtn = document.querySelector('.close-modal');
const solicitaBtn = document.getElementById('solicitaOfertaBtn');
const contacteazaBtn = document.getElementById('contacteazaBtn');
const aflaMaiMultBtn = document.getElementById('aflaMaiMultBtn');
const veziToateServiciileBtn = document.getElementById('veziToateServiciileBtn');
const contactForm = document.getElementById('contactForm');
const modalTitle = document.getElementById('modalTitle');
const formFeedback = document.getElementById('formFeedback');

// Helper: open modal with custom title
function openModal(title = 'Solicită Ofertă') {
  if (modalTitle) modalTitle.innerText = title;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  if (formFeedback) formFeedback.innerText = '';
  if (contactForm) contactForm.reset();
}

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Event listeners for opening modal
if (solicitaBtn) {
  solicitaBtn.addEventListener('click', () => openModal('Solicită Ofertă'));
}
if (contacteazaBtn) {
  contacteazaBtn.addEventListener('click', () => openModal('Contactează-ne'));
}

// Close modal with X or clicking outside
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeModal);
}
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// "Află Mai Mult" button -> smooth scroll to servicii
if (aflaMaiMultBtn) {
  aflaMaiMultBtn.addEventListener('click', () => {
    const servicesSection = document.getElementById('servicii');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// "Vezi Toate Serviciile" -> smooth scroll to why-us (sau servicii, dar merge la secțiunea avantaje)
if (veziToateServiciileBtn) {
  veziToateServiciileBtn.addEventListener('click', () => {
    const despreSection = document.getElementById('despre');
    if (despreSection) {
      despreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // fallback
      document.querySelector('.why-us')?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Form submission handler (simulated, but with validation + feedback)
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    let isValid = true;
    if (!nameInput.value.trim()) {
      showFormFeedback('Te rugăm să introduci numele complet.', 'error');
      isValid = false;
      return;
    }
    if (!phoneInput.value.trim()) {
      showFormFeedback('Te rugăm să introduci un număr de telefon.', 'error');
      isValid = false;
      return;
    }
    // optional email format check
    if (emailInput.value.trim() && !isValidEmail(emailInput.value.trim())) {
      showFormFeedback('Te rugăm să introduci un email valid (ex: nume@domeniu.ro).', 'error');
      isValid = false;
      return;
    }

    if (isValid) {
      // Simulate sending data (demo)
      showFormFeedback('✅ Cererea ta a fost trimisă cu succes! Un electrician te va contacta în curând.', 'success');
      contactForm.reset();
      // optionally close modal after 2 sec
      setTimeout(() => {
        closeModal();
      }, 2000);
    }
  });
}

function showFormFeedback(msg, type) {
  if (formFeedback) {
    formFeedback.innerText = msg;
    formFeedback.className = `feedback-msg ${type === 'success' ? 'success-feedback' : 'error-feedback'}`;
    if (type === 'success') {
      setTimeout(() => {
        if (formFeedback) formFeedback.innerText = '';
      }, 3000);
    }
  }
}

function isValidEmail(email) {
  const re = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
  return re.test(email);
}

// Optional: adăugare efect de intrare pe scroll (doar pentru confort vizual)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .service-card, .reason-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(el);
});

// apply visible class
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .fade-in-visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(styleSheet);