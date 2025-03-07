document.addEventListener("DOMContentLoaded", function() {
    console.log("La web está lista!");
});

document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    // Lista de imágenes (puedes agregar más)
    const images = [
        "assets/obra1.jpg",
        "assets/obra2.jpg",
        "assets/obra3.jpg",
        "assets/obra4.jpg",
        "assets/obra5.jpg",
        "assets/obra6.jpg",
        "assets/obra7.jpg",
        "assets/obra8.jpg",
        "assets/obra9.jpg",
        "assets/obra10.jpg"
    ];

let currentIndex = 0; // Índice de la imagen activa

    // Crear imágenes en la galería
    images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Obra de arte";
        img.addEventListener("click", () => openLightbox(index));
        gallery.appendChild(img);
    });

    // Abrir la Lightbox
    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex];
        lightbox.style.display = "flex";
    }

    // Cerrar la Lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Cerrar si se hace clic fuera de la imagen
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Navegar entre imágenes
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex];
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];
    });
});

//Formulario
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Mensaje enviado con éxito. Nos pondremos en contacto pronto.");
        contactForm.reset();
    });
});
