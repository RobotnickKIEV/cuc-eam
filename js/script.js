const wrapper = document.querySelector('.competence__flex-wrapper')
const blocks = document.querySelectorAll('.competence__item');

const func = (e) => {
    blocks.forEach( e => {
        e.classList.remove('active');
    })  
    e.target.classList.add('active');
}

wrapper.addEventListener('click', func);




