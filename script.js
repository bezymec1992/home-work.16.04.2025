document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  const navLinks = document.querySelectorAll('.header__nav-link');

  burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('header__burger--active');
      nav.classList.toggle('header__nav--active');
      document.body.classList.toggle('menu-open');
  });
  
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          burgerMenu.classList.remove('header__burger--active');
          nav.classList.remove('header__nav--active');
          document.body.classList.remove('menu-open');
      });
  });

  // Theme switcher functionality
  const themeButton = document.querySelector('.theme__button');
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') document.body.setAttribute('data-theme', 'dark');
  themeButton.addEventListener('click', () => {
    const isDark = document.body.hasAttribute('data-theme');
    const newTheme = isDark ? 'light' : 'dark';
    if (isDark) {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
    localStorage.setItem('theme', newTheme);
  });

  // Ripple effect
  const rippleButtons = document.querySelectorAll("[data-ripple]");
  rippleButtons.forEach(button => {
      button.addEventListener('mousemove', (e) => {
          let x = e.pageX - button.offsetLeft;
          let y = e.pageY - button.offsetTop;
          button.style.setProperty("--x", x + 'px');
          button.style.setProperty("--y", y + 'px');
      });
  });

  // Accordion
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach(accordion => {
    accordion.addEventListener("click", function() {
      // Close all other accordions
      const allAccordions = document.querySelectorAll(".accordion");
      allAccordions.forEach(item => {
        if (item !== this) {
          item.classList.remove("active");
          const panel = item.nextElementSibling;
          panel.style.maxHeight = null;
        }
      });
      
      // Toggle current accordion
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}); 