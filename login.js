const sign_in_btn = document.querySelector("#sign-in-button");
const sign_up_btn = document.querySelector("#sign-up-button");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

$(document).ready(function(){
    $("button").click(function(){
        alert("Welcome to NetFix");
    });
});

    function Validate() {
    var name = document.getElementById("Username").vallue;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    alert("Registration submitted successfully!");
    }
    

    function Method(){
        const d = new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var month = months[d.getMonth()];
        alert("Date: Month- " + d.getMonth() + " day "+ d.getDate());
    }

    
