document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById("theme-switch");

    // Verifica se o tema foi salvo anteriormente
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-theme");
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("light-theme");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.remove("light-theme");
            localStorage.setItem("theme", "dark");
        }
    });

    // Animação de Fade-In
    const projectsTitle = document.getElementById('projects-title');
    const projectsRow = document.getElementById('projects-row');

    if (projectsTitle && projectsRow) {
        projectsTitle.style.opacity = 0;
        projectsRow.style.opacity = 0;

        setTimeout(() => {
            fadeIn(projectsTitle, 1000);
            fadeIn(projectsRow, 2000);
        }, 500);
    }

    // Função de Fade-In
    function fadeIn(element, duration) {
        let opacity = 0;
        const interval = 50;
        const gap = interval / duration;

        function increase() {
            opacity += gap;
            if (opacity >= 1) {
                opacity = 1;
                clearInterval(fading);
            }
            element.style.opacity = opacity;
        }

        const fading = setInterval(increase, interval);
    }

    // Animação Bounce nos Botões
    const bounceButtons = document.querySelectorAll('.bounce');

    bounceButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.classList.add('animate__animated', 'animate__bounce');
        });

        button.addEventListener('animationend', function() {
            this.classList.remove('animate__animated', 'animate__bounce');
        });
    });

    // Animação de deslize
    const slideElements = document.querySelectorAll('.appear');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    slideElements.forEach(slideElement => {
        appearOnScroll.observe(slideElement);
    });
});
