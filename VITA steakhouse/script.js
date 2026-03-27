// script.js
document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 2. "Vezi Detalii" buttons for specialties
  const detailButtons = document.querySelectorAll('.btn-details');
  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemName = btn.getAttribute('data-item') || btn.closest('.special-card')?.querySelector('h3')?.innerText || 'specialitate';
      alert(`🍖 Detalii despre ${itemName}:\n\n✅ Carne premium din surse atent selecționate.\n✅ Gătit la temperatura perfectă, la comandă.\n✅ Recomandat cu vin roșu sec sau sosul nostru semnătură.\n✅ Disponibil și în variantă pentru două persoane.`);
    });
  });

  // 3. Reservation form handling
  const form = document.getElementById('bookingForm');
  const feedbackDiv = document.getElementById('reservationFeedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests').value;

    if (!name || !phone || !date || !guests) {
      feedbackDiv.innerHTML = '<span style="color:#e0a46b;">⚠️ Te rugăm să completezi toate câmpurile obligatorii.</span>';
      feedbackDiv.style.opacity = '1';
      setTimeout(() => {
        feedbackDiv.style.opacity = '0';
        setTimeout(() => feedbackDiv.innerHTML = '', 500);
      }, 3000);
      return;
    }

    // Simulate booking success
    const formattedDate = new Date(date).toLocaleDateString('ro-RO');
    feedbackDiv.innerHTML = `✅ Rezervare confirmată, ${name}! Așteptăm cu plăcere ${guests.toLowerCase()} pe ${formattedDate}. Vom confirma telefonic.`;
    feedbackDiv.style.opacity = '1';
    feedbackDiv.style.color = '#c38e5b';
    form.reset();
    
    setTimeout(() => {
      feedbackDiv.style.opacity = '0';
      setTimeout(() => feedbackDiv.innerHTML = '', 500);
    }, 4000);
  });

  // 4. Hero button (Vezi Meniul) -> smooth scroll to specialties
  const menuBtn = document.querySelector('.btn-hero');
  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const specialsSection = document.getElementById('specialitati');
      if (specialsSection) {
        specialsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // 5. Additional subtle hover effect for feature cards (just for fun)
  const cards = document.querySelectorAll('.feature-card, .special-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.2s, border-color 0.2s';
    });
  });
});