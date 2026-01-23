// Animacion pagina principal al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    // Animación de entrada (Fade-in) al hacer scroll
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

// Animacion para el zoom de las imagenes
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    const captionText = document.getElementById("modal-caption");

    // Seleccionamos todas las imágenes dentro de tus contenedores
    const images = document.querySelectorAll('.image-placeholder');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "flex"; // Abre el modal
            modalImg.src = img.src;      // Pasa la ruta de la imagen
            captionText.innerText = img.alt; // Usa el texto descriptivo
        });
    });

    // Función para cerrar el modal
    const closeModal = () => {
        modal.style.display = "none";
    };

    // Cerrar con la X, haciendo clic fuera o con la tecla Escape
    document.querySelector(".close-modal").onclick = closeModal;
    modal.onclick = (e) => { if(e.target === modal) closeModal(); };
    document.addEventListener('keydown', (e) => { if(e.key === "Escape") closeModal(); });
});