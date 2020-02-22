function Apply() {
    var email = document.getElementById("eMail");
    var name = document.getElementById("uName");
    var skill= document.getElementById("skill");
    let header = document.querySelector("#ThanksDialog h2");
    let par = document.querySelector("#ThanksDialog p");
    header.textContent = "Thanks for Applying";
    par.textContent = "Name: " + name.value + "    Email: " + email.value + "    Skill: " + skill.value;
    var b = document.createElement("BUTTON");
    var t = document.createTextNode("Close");
    b.appendChild(t);
    b.addEventListener("click", closeDialog);
    par.appendChild(b);
}

function closeDialog() {
    let header = document.querySelector("#ThanksDialog h2");
    let par = document.querySelector("#ThanksDialog p");
    header.textContent = "";
    par.textContent = "";
}