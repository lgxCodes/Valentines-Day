const noBtn = document.getElementById('noBtn');
const yesScreen = document.getElementById('yesScreen');

const DODGE_DISTANCE = 150;
const BUTTON_MARGIN = 20;

noBtn.addEventListener('mouseover', dodge);
noBtn.addEventListener('mouseenter', dodge);
noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    dodge();
});
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    dodge();
});

function dodge() {
    noBtn.classList.add('dodging');

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth - BUTTON_MARGIN;
    const maxY = window.innerHeight - btnHeight - BUTTON_MARGIN;

    let newX, newY;
    const currentX = noBtn.offsetLeft;
    const currentY = noBtn.offsetTop;

    do {
        newX = Math.random() * maxX + BUTTON_MARGIN;
        newY = Math.random() * maxY + BUTTON_MARGIN;
    } while (
        Math.abs(newX - currentX) < DODGE_DISTANCE &&
        Math.abs(newY - currentY) < DODGE_DISTANCE
    );

    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
}

function sayYes() {
    yesScreen.classList.add('active');
}
