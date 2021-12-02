const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul'); //bar
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container')
const btnScrollToTop = document.querySelector("#btnScrollToTop");
const nameInput = document.querySelector("#name"); //getdata
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=> {
    var scroll_position = window.scrollY;
    if(scroll_position > 250)
    {
        header.style.backgroundColor = "#29323c";
    }
    else 
    {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})

btnScrollToTop.addEventListener("click", function() {
    //window.scrollTo(0,0);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    }); 


});

function validateForm()  {  // validate data

    clearMessages();

        let errorFlag = false;

        if (nameInput.value.length < 1) {
            errorNodes[0].innerText = "Name cannot be blank!";
            nameInput.classList.add("error-border");
            errorFlag = true;
        }
        if(!emailIsValid(email.value)) {
            errorNodes[1].innerText = "Invalid email address!";
            email.classList.add("error-border");
            errorFlag = true;
        }
        if(message.value.length <1){
            errorNodes[2].innerText = "Please enter your city";
            message.classList.add("error-border");
            errorFlag = true;
        }
        if(!errorFlag) {
            success.innerText = "Success!"; 
        } 
}

// clear Error & success messages
function clearMessages() {
    for(let i = 0; i < errorNodes.length; i++)
    {
        errorNodes[i].innerText = "";
    }
    //success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

// checking if valid email or not
function emailIsValid(email)
{
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}