/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Loader animation
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const loaderLogo = document.querySelector('.loader-logo');
    const loaderGear = document.querySelector('.loader-gear');
    const liquid = document.querySelector('.liquid');

    // After 3 seconds (when liquid animation ends)
    setTimeout(() => {
        loaderLogo.classList.add('show');
        // After showing logo, wait 1 second and fade out
        setTimeout(() => {
            // Detener la animación del engranaje
            loaderGear.style.animation = 'none';
            // Esperar 1 segundo antes de comenzar el fade out
            setTimeout(() => {
                loaderWrapper.classList.add('fade-out');
                // Esperar 1.5 segundos para el fade out
                setTimeout(() => {
                    loaderWrapper.style.display = 'none';
                }, 1500);
            }, 1000);
        }, 1000);
    }, 3000);
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Función para controlar la reproducción del himno
    window.togglePlay = function() {
        const audio = document.getElementById('himnoAudio');
        const btn = document.getElementById('playPauseBtn');
        const icon = btn.querySelector('i');
        
        if (audio.paused) {
            audio.play();
            icon.className = 'fas fa-pause';
            btn.classList.add('playing');
        } else {
            audio.pause();
            icon.className = 'fas fa-play';
            btn.classList.remove('playing');
        }
    };

    // Evento para cuando termina la reproducción del himno
    document.addEventListener('DOMContentLoaded', function() {
        const himnoAudio = document.getElementById('himnoAudio');
        if (himnoAudio) {
            himnoAudio.addEventListener('ended', function() {
                const btn = document.getElementById('playPauseBtn');
                const icon = btn.querySelector('i');
                icon.className = 'fas fa-play';
                btn.classList.remove('playing');
            });
        }
    });



    // Shrink the navbar 
    navbarShrink();

    // Control de animación del masthead
    const masthead = document.querySelector('header.masthead');
    if (masthead) {
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            
            if (scrollPercent > 30) {
                masthead.classList.add('scrolled');
                
                if (scrollPercent > 70) {
                    masthead.classList.add('scrolled-top');
                } else {
                    masthead.classList.remove('scrolled-top');
                }
            } else {
                masthead.classList.remove('scrolled');
                masthead.classList.remove('scrolled-top');
            }
        });
    }

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Manejar el comportamiento del menú desplegable y submenús
    const handleDropdowns = () => {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            if (toggle && menu) {
                toggle.addEventListener('click', (e) => {
                    if (window.innerWidth < 992) {
                        e.preventDefault();
                        e.stopPropagation();
                        menu.classList.toggle('show');
                    }
                });
                
                // Prevenir cierre al hacer clic dentro del menú
                menu.addEventListener('click', (e) => {
                    if (window.innerWidth < 992) {
                        e.stopPropagation();
                    }
                });
            }
        });
    };
    
    // Inicializar el manejo de dropdowns
    handleDropdowns();

    // Asegurar que el toggler funcione correctamente
    navbarToggler.addEventListener('click', () => {
        const navbarResponsive = document.querySelector('#navbarResponsive');
        if (navbarResponsive) {
            navbarResponsive.classList.toggle('show');
        }
    });
});