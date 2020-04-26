import React from "react";
import photos from "./public/images/photos.jpg";

function About() {
	return (
		<div>
		 <body>
			<header>About Us</header>
			<img src={photos} />
			<p> Welcome to the About Page. This site is made by Navneet Banger FQ9429 under the guidance and teachings of Dr. Bernstein. </p>
		 </body>
		 <footer> &copy; 2020 FQ9429    </footer>	
		</div>
	);
}

export default About;