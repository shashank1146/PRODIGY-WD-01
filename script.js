// Change Navbar Style on Scroll
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Smooth Scrolling for Menu Items
const menuItems = document.querySelectorAll('#navbar a');
menuItems.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const section = document.querySelector(item.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mobile Menu Toggle (Optional Enhancement)
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.getElementById('navbar').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    const navUl = document.querySelector('#navbar ul');
    navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
});
