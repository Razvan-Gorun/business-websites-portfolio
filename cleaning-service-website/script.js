// DOM elements
const offerModal = document.getElementById('offerModal');
const openOfferBtn = document.getElementById('openOfferModalBtn');
const closeModal = document.querySelector('.modal-close');
const scheduleForm = document.getElementById('scheduleForm');
const offerForm = document.getElementById('offerForm');

// Funcție pentru afișare toast (notificare)
function showToast(message, duration = 3000) {
  // elimină orice toast existent
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Deschide modalul pentru ofertă
if (openOfferBtn) {
  openOfferBtn.addEventListener('click', () => {
    offerModal.style.display = 'flex';
  });
}

// Închide modalul
if (closeModal) {
  closeModal.addEventListener('click', () => {
    offerModal.style.display = 'none';
  });
}

// Închide modal la click pe fundal
window.addEventListener('click', (e) => {
  if (e.target === offerModal) {
    offerModal.style.display = 'none';
  }
});

// Validare și trimitere formular programare
if (scheduleForm) {
  scheduleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nume = document.getElementById('nume').value.trim();
    const telefon = document.getElementById('telefon').value.trim();
    const data = document.getElementById('dataDorita').value;

    if (!nume || !telefon || !data) {
      showToast('❌ Completează toate câmpurile!');
      return;
    }
    if (telefon.length < 9) {
      showToast('📞 Te rugăm să introduci un număr de telefon valid.');
      return;
    }

    // Simulare trimitere
    showToast(`✅ Mulțumim, ${nume}! Cererea ta pentru data ${data} a fost înregistrată. Te contactăm în curând.`);
    scheduleForm.reset();
  });
}

// Formular ofertă
if (offerForm) {
  offerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nume = document.getElementById('offerNume').value.trim();
    const telefon = document.getElementById('offerTelefon').value.trim();
    const email = document.getElementById('offerEmail').value.trim();
    const serviciu = document.getElementById('offerServiciu').value.trim();

    if (!nume || !telefon || !email) {
      showToast('📝 Te rugăm să completezi numele, telefonul și emailul.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      showToast('✉️ Introdu o adresă de email validă.');
      return;
    }

    showToast(`📩 Cererea ta de ofertă a fost trimisă! Te vom contacta în 24h, ${nume}.`);
    offerForm.reset();
    offerModal.style.display = 'none';
  });
}

// Smooth scroll pentru link-urile din navigație
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Opțional: butonul "Află Mai Mult" duce la secțiunea servicii
const learnMoreBtn = document.querySelector('.btn-outline[href="#servicii"]');
if (learnMoreBtn) {
  learnMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('servicii').scrollIntoView({ behavior: 'smooth' });
  });
}