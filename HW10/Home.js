import React from "react";
import photos from "./public/images/photos.jpg";
/*&#x1f30c    footer emoji*/

function Home() {
	return (
	<div>
	<body>
	<header>Club Projects Home Page</header>
	
	<img src={photos} />
	
	<p>Welcome to the home page of the Club Projects. We hope you enjoy all the site has to offer. Furthermore, 
	this website supports sports, computers, games, guitar playing, audiophile music equipment, and much more. </p>
	</body>
	<footer> &copy; 2020 FQ9429    </footer>
	</div>
	);
}

export default Home;

