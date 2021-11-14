/* Contact Form JS */
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
    let stringTemplate = `First Name:  ${first_name}Last Name:  ${last_name}Email:  ${email}Message:  ${message}`;
    
    return stringTemplate;
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
    div.innerHTML = `${data}`;
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

/*Carousel*/
// Activate Carousel
/* $("#myCarousel").carousel(); */

// Enable Carousel Indicators
/* $(".item").click(function(){
  $("#myCarousel").carousel(1);
}); */

// Enable Carousel Controls
/* $(".left").click(function(){
  $("#myCarousel").carousel("prev");
}); */