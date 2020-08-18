

const share = document.getElementById('container-share')


share.addEventListener('click', () => {
    const cardShare = document.querySelector('.card__share');

    if (cardShare.style.visibility === '' || cardShare.style.visibility === 'hidden') {
        cardShare.style.visibility = 'visible'
        
    } else{
        cardShare.style.visibility = 'hidden'
        
    }
})


