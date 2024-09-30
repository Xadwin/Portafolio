// Toggle Menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll Animations for Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Form Validation (opcional)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    // Aquí podrías agregar lógica para enviar los datos del formulario a través de AJAX o a un servidor
    alert('Mensaje enviado correctamente');
});
