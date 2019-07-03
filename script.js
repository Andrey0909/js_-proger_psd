var buttonHamburger = document.querySelector('.humburger_wrapper');
var openMenu = document.querySelector('.open_menu');
buttonHamburger.addEventListener('click', function(){
  if(openMenu.classList.contains("active")){
     openMenu.classList.remove("active");
  }
  else {
    openMenu.classList.add("active");
    console.log('yes');
  }


})
