// Menú móvil
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

const toggleNav = () => {
    nav.classList.toggle('active');
    const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
    burger.setAttribute('aria-expanded', !expanded);
}

burger.addEventListener('click', toggleNav);
burger.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') toggleNav();
});

// Botón "Volver arriba"
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Función genérica para IntersectionObserver
const observeElements = (selector, className) => {
    const elements = document.querySelectorAll(selector);
    const observerOptions = {
        threshold: 0.2
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    elements.forEach(element => observer.observe(element));
};

document.addEventListener('DOMContentLoaded', () => {
    observeElements('.project-card', 'show');
    observeElements('.animate-on-scroll', 'show');
});

// Validación del formulario
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    let valid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Limpia mensajes de error previos
    document.querySelectorAll('.error').forEach(el => el.remove());

    // Validar Nombre
    if (!name.value.trim()) {
        showError(name, 'Por favor, ingresa tu nombre.');
        valid = false;
    }

    // Validar Correo Electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError(email, 'Por favor, ingresa tu correo electrónico.');
        valid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        showError(email, 'Por favor, ingresa un correo electrónico válido.');
        valid = false;
    }

    // Validar Mensaje
    if (!message.value.trim()) {
        showError(message, 'Por favor, ingresa tu mensaje.');
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
    }
});

const showError = (input, message) => {
    const error = document.createElement('span');
    error.className = 'error';
    error.style.color = 'red';
    error.style.fontSize = '0.9rem';
    error.textContent = message;
    input.parentElement.appendChild(error);
}

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
    card.classList.add('show');
});