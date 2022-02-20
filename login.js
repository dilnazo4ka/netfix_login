const sign_in_btn = document.querySelector("#sign-in-button");
const sign_up_btn = document.querySelector("#sign-up-button");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})
 function checkInputs(){
   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();

   if (usernameValue === ''){
       set
   }
   else{

   }
 }

