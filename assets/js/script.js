document.addEventListener('DOMContentLoaded', () => {

    const meta = document.querySelectorAll('.metascore');
    const scrollup = document.querySelector('.scrollup');

    metascoreColors();

    window.addEventListener('scroll', trackScroll);
    scrollup.addEventListener('click', backToTop);

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