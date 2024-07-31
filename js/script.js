document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('flipped');
                }
            });
            card.classList.toggle('flipped');
        });
    });
});
