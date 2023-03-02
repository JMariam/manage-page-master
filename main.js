const menu = document.querySelector('#menu');
const openBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

openBtn.addEventListener('click', function(){
    menu.style.display = 'flex';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
})

closeBtn.addEventListener('click', function(){
    menu.style.display = 'none';
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
})