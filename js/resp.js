let burger =  document.querySelector('.burger')
let navbar = document.querySelector('.navbar')
let rightnav = document.querySelector('.rightNav');
let navlist = document.querySelector('.navlist');

burger.addEventListener('click', ()=> {
        rightnav.classList.toggle('vclass');
        navlist.classList.toggle('vclass');
        navbar.classList.toggle('hnav');
})