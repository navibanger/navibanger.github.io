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
    events = [
    {"name": "Pizza Day", "dates": ["August 1", " August 3"]},
    {"name": "BBQ Day", "dates": ["August 5", " August 7"]},
    {"name": "Ice Cream Day", "dates": ["August 9", " August 11"]}
];
  </main>
</body>
<footer> &#x1f30c  &copy; 2020 FQ9429   &#x1f30c  </footer>

<script>
    function menuFunc() {
        document.getElementById("dropdown").classList.toggle("show");
    }
</script>

</html>
