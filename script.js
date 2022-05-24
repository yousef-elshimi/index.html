let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

function validate() {
  var pass = document.getElementById('psw');
  var upp = document.getElementById('upper');
  var num = document.getElementById('number');
  var sp_char = document.getElementById('speci_char');
  var len = document.getElementById('length');
  pass.onfocus = function() {
document.getElementById("message").style.display = "block";
  }

pass.onblur = function() {
document.getElementById("message").style.display = "none";
  }


  if(pass.value.match(/[0-9]/)) {
    num.classList.remove("invalid");
    num.classList.add("valid");
  }
  else {
    num.classList.remove("valid");
    num.classList.add("invalid");          } 

  if(pass.value.match(/[A-Z]/)) {
    upp.classList.remove("invalid");
    upp.classList.add("valid")
  }
  else {
    upper.classList.remove("valid");
    upper.classList.add("invalid");          } 

  if(pass.value.match(/[!\-\_\#\&\*\@\!\$\^\(\)]/)) {
    sp_char.classList.remove("invalid");
    sp_char.classList.add("valid")

  }
  else {
    sp_char.classList.remove("valid");
    sp_char.classList.add("invalid");  
  } 

  if(pass.value.length < 9 && pass.value.length > 7) {
    len.classList.remove("invalid");
    len.classList.add("valid");
  }
  else {
    len.classList.remove("valid");
    len.classList.add("invalid");
  }

}


menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};



