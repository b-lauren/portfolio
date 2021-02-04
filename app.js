const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Nav Toggle
    nav.classList.toggle('nav-active');
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    // burger animation
    burger.classList.toggle('toggle');
  });
}

navSlide();


// navLinks.forEach(link => link.addEventListener('click', toggleMenu));

// function toggleMenu() {
//     nav.classList.remove('nav-active');
// }
