window.addEventListener('scroll', ()=> {
  var header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
})


let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.nav');

menu.addEventListener('click', ()=>{
   menu.classList.toggle('fa-times')
   navbar.classList.toggle('active')

   window.onscroll = () => {
      menu.classList.remove('fa-time')
      menu.classList.remove('active')
   }
})