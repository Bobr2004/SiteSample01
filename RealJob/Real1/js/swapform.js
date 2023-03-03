document.querySelector(".login").onclick = Login;
let last_func = null
function Login() {
    document.querySelector(".log").hidden = false;
    document.querySelector(".reg").hidden = true;
    document.querySelector(".forgot").hidden = true;
    document.querySelector(".changeForm span:nth-child(1)").hidden = true;
    document.querySelector(".changeForm span:nth-child(2)").hidden = false;
    document.querySelector(".changeForm span:nth-child(3)").hidden = true;
    last_func = Login;
}

document.querySelector(".regin").onclick = Regin;

function Regin() {
    document.querySelector(".log").hidden = true;
    document.querySelector(".reg").hidden = false;
    document.querySelector(".forgot").hidden = true;
    document.querySelector(".changeForm span:nth-child(1)").hidden = false;
    document.querySelector(".changeForm span:nth-child(2)").hidden = true;
    document.querySelector(".changeForm span:nth-child(3)").hidden = true;
    last_func = Regin;
}

document.querySelector(".forgot_pass").onclick = Forgot;

function Forgot() {
    document.querySelector(".log").hidden = true;
    document.querySelector(".reg").hidden = true;
    document.querySelector(".forgot").hidden = false;
    document.querySelector(".changeForm span:nth-child(1)").hidden = true;
    document.querySelector(".changeForm span:nth-child(2)").hidden = true;
    document.querySelector(".changeForm span:nth-child(3)").hidden = false;
}

document.querySelector(".back").onclick = Back;

function Back() {
    last_func();
}