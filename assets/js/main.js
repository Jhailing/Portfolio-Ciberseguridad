document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animación de entrada (Fade-in) al hacer scroll
    const sections = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 2. Feedback al botón de PDF
    const pdfBtn = document.getElementById('pdf-btn');
    pdfBtn.addEventListener('click', () => {
        pdfBtn.innerText = "Abriendo Reporte...";
        setTimeout(() => {
            pdfBtn.innerText = "Descargar Informe Técnico (PDF)";
        }, 2000);
    });

    // 3. Scroll suave para los links de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// 4. Función simple para "expandir" imágenes (simulada)
function toggleImage(element) {
    element.style.transition = "all 0.3s ease";
    if (element.style.height === "auto") {
        element.style.height = "150px";
        element.style.borderColor = "var(--text-dim)";
    } else {
        element.style.height = "auto";
        element.style.padding = "50px 10px";
        element.style.borderColor = "var(--accent-color)";
    }
}

// Animacion de cards de Practicas
const cards = document.querySelectorAll('.practice-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
