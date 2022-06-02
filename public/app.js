'use strict';

const card_1 = document.querySelector('.card');
const card_2 = document.querySelector('.card-thanks');
const submitBtns = document.querySelector('.submit-btn');
let ratingBtns = document.querySelectorAll('.rating-btn');
let stateBtns = [];

submitBtns.addEventListener('click', onSubmit);

for(let btn of ratingBtns){
    btn.addEventListener('click', () => {
        if(stateBtns == false){
            stateBtns.push(btn);
            btn.style.color = '#ffffff';
            btn.style.backgroundColor = 'hsl(217, 12%, 63%)';
        }
        else{
            stateBtns.map(btn =>{
                btn.style.color = '#ffffff';
                btn.style.backgroundColor = 'hsla(216, 12%, 54%, .1)';
            });
            stateBtns = [];
            stateBtns.push(btn);
            btn.style.color = '#ffffff';
            btn.style.backgroundColor = 'hsl(217, 12%, 63%)';
        }
    });
}

function onSubmit(){
    card_1.classList.add('hidden');
    card_2.classList.remove('hidden');
}