// Inițializare hartă Leaflet cu locația cabinetului (Str. Ion Câmpineanu 12, București)
document.addEventListener('DOMContentLoaded', function() {
    // Coordonate aproximative pentru Strada Ion Câmpineanu 12, București
    const officeLat = 44.4398;
    const officeLng = 26.0972;
    
    // Verificăm dacă elementul mapă există
    const mapElement = document.getElementById('lawyerMap');
    if (mapElement) {
        // Inițializare hartă
        const map = L.map('lawyerMap').setView([officeLat, officeLng], 17);
        
        // Strat de hartă de la OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contribuitori',
            maxZoom: 19,
        }).addTo(map);
        
        // Adăugare marker cu popup
        const marker = L.marker([officeLat, officeLng]).addTo(map);
        marker.bindPopup(`
            <b>Alexandru Popescu - Avocat</b><br>
            Str. Ion Campineanu nr. 12<br>
            București, sector 1
        `).openPopup();
        
        // Optional: pentru o experiență mai plăcută, adăugăm un efect de zoom la click pe marker
        marker.on('click', () => {
            map.setView([officeLat, officeLng], 18);
        });
    } else {
        console.warn("Elementul hartă nu a fost găsit în DOM.");
    }
    
    // Actualizare an în footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // mică animație / efect subtil pentru chenarul imaginii
    const photoFrame = document.querySelector('.photo-frame');
    if (photoFrame) {
        photoFrame.addEventListener('mouseenter', () => {
            photoFrame.style.borderColor = '#b68b40';
        });
        photoFrame.addEventListener('mouseleave', () => {
            photoFrame.style.borderColor = '#d4af7a';
        });
    }
});