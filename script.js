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
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Validate required checkboxes
    if (!document.getElementById('accetta-statuto').checked || !document.getElementById('privacy').checked) {
        alert('Devi accettare lo statuto e il trattamento dei dati personali per procedere.');
        return;
    }

    // Create email body
    const emailBody = `
Nuova adesione al Comitato Genitori IC Bagnera

Tipo: ${data.tipo}
Nome: ${data.nome}
Cognome: ${data.cognome}
Email: ${data.email}
Telefono: ${data.telefono}
Plesso: ${data.plesso}
Classe: ${data.classe}
Sezione: ${data.sezione}
Alunno/a: ${data.alunno}

Comunicazioni email: ${data['comunicazioni-email'] ? 'Sì' : 'No'}

Il genitore dichiara di:
- Aver accettato lo Statuto
- Aver fornito il consenso al trattamento dei dati personali
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:comitato.genitori.icbagnera@gmail.com?subject=Nuova Adesione - ${data.nome} ${data.cognome}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    const successMsg = document.getElementById('success-message');
    if (successMsg) {
        successMsg.classList.add('show');
        
        // Reset form after 3 seconds
        setTimeout(() => {
            event.target.reset();
            successMsg.classList.remove('show');
            toggleWebForm();
        }, 3000);
    }
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