let offset = 0;
let slider = document.querySelector('.slider-img');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
left.addEventListener('click', function MoveLeft() {
    offset += 550;
    slider.style.transition = '0.5s';
    if (offset > 0) {
        slider.style.transition = '0.2s';
        offset = -1100;
    }
    slider.style.left = offset + 'px';
})

right.addEventListener('click', function MoveRight() {
    offset += -550;
    slider.style.transition = '0.5s';
    if (offset < -1100) {
        slider.style.transition = '0.2s';
        offset = 0;
    }
    slider.style.left = offset + 'px';
})