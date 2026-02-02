// Toggle Web Form
function toggleWebForm() {
    const formContainer = document.getElementById('web-form-container');
    if (formContainer) {
        formContainer.classList.toggle('active');
        if (formContainer.classList.contains('active')) {
            formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// Handle Form Submit
function handleSubmit(event) {
    event.preventDefault();
    
    if (!document.getElementById('accetta-statuto').checked || !document.getElementById('privacy').checked) {
        alert('Devi accettare lo statuto e il trattamento dei dati.');
        return;
    }

    const btn = event.target.querySelector('button[type="submit"]');
    btn.textContent = "Invio in corso...";
    btn.disabled = true;

    // Sostituisci i codici qui sotto con quelli del tuo account EmailJS
    emailjs.sendForm('service_5jsq4qt', 'template_7wfnh5s', event.target)
        .then(() => {
            document.getElementById('success-message').classList.add('show');
            event.target.reset();
            setTimeout(() => {
                document.getElementById('success-message').classList.remove('show');
                toggleWebForm();
                btn.textContent = "Invia Adesione";
                btn.disabled = false;
            }, 3000);
        }, (error) => {
            alert("Errore nell'invio: " + JSON.stringify(error));
            btn.textContent = "Invia Adesione";
            btn.disabled = false;
        });
}

// Lightbox functions
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox && lightboxImg) {
        lightbox.classList.add('active');
        lightboxImg.src = src;
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navigation
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    }
});
