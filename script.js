// Smooth Scrolling for Navigation Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // Prevent default anchor behavior
      e.preventDefault();
  
      // Scroll to the target section smoothly
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  