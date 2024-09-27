document.addEventListener("DOMContentLoaded", function() {
    // Animação de Fade-In
    const projectsTitle = document.getElementById('projects-title');
    const projectsRow = document.getElementById('projects-row');

    projectsTitle.style.opacity = 0;
    projectsRow.style.opacity = 0;

    setTimeout(() => {
        fadeIn(projectsTitle, 1000);
        fadeIn(projectsRow, 2000);
    }, 500);

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
});
