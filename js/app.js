

const share = document.querySelector('#container-share');
const shareBtn = document.querySelector('#container-share svg path');
const cardShare = document.querySelector('.card__share');


share.addEventListener('click', () => {
    cardShare.classList.toggle('oculto');
    share.classList.toggle('activo');
    shareBtn.classList.toggle('arrow-white');

})


