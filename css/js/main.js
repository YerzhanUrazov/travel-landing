
const header = document.querySelector('.header');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        ticking = true; 

        requestAnimationFrame(() => {
            if (window.pageYOffset > 300) {
                header.classList.add('header-active');
            }
            else {
                header.classList.remove('header-active');
            }
            ticking = false; 
        });
    }
});

// Burger

(function(){
    const BurgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const menuClose = document.querySelector('.header-nav-close');
    const menuLinks = document.querySelectorAll('.header-nav a');


    BurgerItem.addEventListener('click', () => {
        menu.classList.add('header-nav-active');
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
    });
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('header-nav-active');
        });
    });
}());




   