document.addEventListener('DOMContentLoaded', () => {
    const beatButton = document.getElementById('beatButton');
    let isBeating = false;

    beatButton.addEventListener('click', () => {
        if (!isBeating) {
            beatButton.classList.add('beat-effect');
            beatButton.textContent = 'Stop Beat';
            isBeating = true;
        } else {
            beatButton.classList.remove('beat-effect');
            beatButton.textContent = 'Beat Effect';
            isBeating = false;
        }
    });
});