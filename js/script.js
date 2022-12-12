let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let age = document.querySelector('#age');
var birthDate = new Date(2003, 1, 18, 0, 0, 0, 0);
var currentDate = new Date();
var birthYear = new Date().getFullYear() - birthDate.getFullYear(); 

var month = currentDate.getMonth() - birthDate.getMonth();

var day = currentDate.getDate() - birthDate.getDate();
if (month < 0 || (month == 0 && day < 0)) {
  birthYear--;
}

age.innerHTML = birthYear;
menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   header.classList.toggle('active');
   document.body.classList.toggle('active');
}

window.onscroll = () =>{
   if(window.innerWidth < 991){
      menu.classList.remove('fa-times');
      header.classList.remove('active');
      document.body.classList.remove('active');
   }

   document.querySelectorAll('section').forEach(sec =>{

      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
         document.querySelectorAll('.header .navbar a').forEach(links =>{
            links.classList.remove('active');
            document.querySelector('.header .navbar a[href*='+ id +']').classList.add('active')
         });
      };

   });

}