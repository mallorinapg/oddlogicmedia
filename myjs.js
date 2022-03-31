// Contact Form JS
function getData() {
    let allMsg = [];
    let first_name = document.contactMeForm.firstname.value;
    let last_name = document.contactMeForm.lastname.value;
    let email = document.contactMeForm.email.value;
    let message = document.contactMeForm.msg.value;
    let errorMessagediv = document.getElementById("errorMessage");
    if(errorMessagediv) {
        errorMessagediv.innerHTML ="";
    }
    if(validateEmail(email)) {
        allMsg.push(first_name);
        allMsg.push(last_name);
        allMsg.push(email);
        allMsg.push(message);
        //let stringTemplate = `First Name:  ${first_name} &nbsp; Last Name:  ${last_name} &nbsp; Email:  ${email} &nbsp; Message:  ${message}`;
        window.localStorage.setItem('users', JSON.stringify(`${first_name}   ${last_name}     ${email}      ${message}`));
        let user = JSON.parse(localStorage.getItem('users'));
        return user;
    }
    else {

        return "please enter a valid email";
    }
}

function validateEmail(email) {
    let regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
    console.log(regex.test(email));
}

function preview() {
    let data = getData();
    let previewMsg = document.getElementById("previewMsg");
    let div = document.createElement("div");
    div.id = "errorMessage";
    div.innerHTML = `Local Storage: ${data}`;
    previewMsg.appendChild(div);
    document.contactMeForm.reset();
}

/* Hamburger Btn Animation */
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navMenu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        nav.classList.remove('navMenu');
        nav.classList.add('active');

    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        nav.classList.remove('active');
        nav.classList.add('navMenu');
    }
});
//*Countdown*//
var countDownDate = new Date("Oct 1, 2022 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);