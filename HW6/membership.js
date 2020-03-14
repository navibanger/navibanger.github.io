<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>
    
  </title>
  <link href="style.css" rel="stylesheet">
  
</head>

<body>
    <nav>
        <div class="Menu">
            <button onclick="menuFunc()" class="menubtn">Menu</button>
            <div id="dropdown" class="menuContent">
                <a> <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="activities.html">Activities</a></li>
    <li><a href="about.html">About</a></li>
	<li><a href="membership.html">Membership</a></li>
	<li><a href="login.html">Login</a></li>
</ul> </a>
            </div>
        </div>
    </nav>
  <main>
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
  </main>
</body>
<footer> &#x1f30c  &copy; 2020 FQ9429   &#x1f30c  </footer>

<script>
    function menuFunc() {
        document.getElementById("dropdown").classList.toggle("show");
    }
</script>

</html>
