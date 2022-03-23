const mobile_nav = document.querySelector('.mobile_icon');
const navbar_header = document.querySelector('.header');
const toggleNavbar = () => {
  navbar_header.classList.toggle('bar');
};

mobile_nav.addEventListener('click', () => toggleNavbar());
