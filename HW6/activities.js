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
    
    function actTable() {
        let tbody = document.querySelector("#ActivityTable tbody");
        events.forEach(function(event) {
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${event.name}</td><td>${event.dates}</td>`;
            tbody.appendChild(tr);
        })
    }
    actTable();

  </main>
</body>
<footer> &#x1f30c  &copy; 2020 FQ9429   &#x1f30c  </footer>

<script>
    function menuFunc() {
        document.getElementById("dropdown").classList.toggle("show");
    }
</script>

</html>
