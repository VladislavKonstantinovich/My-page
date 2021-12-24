let toggle = document.querySelector('#toggle');
let body = document.querySelector('body');

let modal = document.querySelector('#modal');
let open = document.querySelector('#open');
let close = document.querySelector('#close');

toggle.onclick = function() {
    body.classList.toggle("move");
}

open.onclick = function() {
    modal.classList.add('show-modal');
}

close.onclick = function() {
    modal.classList.remove ('show-modal');
}