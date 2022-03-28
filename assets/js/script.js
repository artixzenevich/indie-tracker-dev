document.addEventListener('DOMContentLoaded', () => {

    const meta = document.querySelectorAll('.metacritic__metascore');
    const scrollup = document.querySelector('.scrollup');
    const navbar = document.querySelector('.nav-header');

    var sticky = navbar.offsetTop;

    metascoreColors();

    window.addEventListener('scroll', navbarSticky);
    window.addEventListener('scroll', trackScroll);
    scrollup.addEventListener('click', backToTop);

    function navbarSticky() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('nav-header--sticky');
      } else {
        navbar.classList.remove('nav-header--sticky');
      }
    }

    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
      if (scrolled > coords) {
        scrollup.classList.add('show');
      }
      if (scrolled < coords) {
        scrollup.classList.remove('show');
      }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -80);
          setTimeout(backToTop, 0);
        }
      }  

    // изменение цвета у эелемента metascore
    function metascoreColors() {
        meta.forEach(element => {
            let score = Number(element.innerHTML);

            if (score >= 75) {
                element.style.backgroundColor = "#66CC33";
            } else {
                element.style.backgroundColor = "#ffcc33";
            }
        });
    }
});