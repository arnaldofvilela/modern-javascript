// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');


const paras = document.querySelectorAll('p');
console.log(paras);

paras.forEach(p => {
    // all the text that is visible
    // console.log(p.innerText);
    // console.log(p.textContent);

if(p.textContent.includes('error')){
    p.classList.add('error');
}
if(p.innerText.includes('success')){
    p.classList.add('success');
}
});

const title = document.querySelector('.title');

title.classList.toggle('test'); 
title.classList.toggle('test'); 