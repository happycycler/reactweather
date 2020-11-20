var React = require('react');
var { Link } = require('react-router');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>
				This is a weather application built on React. I have built this
				for The Complete React Web App Developer Course avaiulable on UDEMY.
			</p>
			<p>
				Here are some the tools used to build this app.
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react" target="_blank">React</a> - This was the JavaScript framework used.
				</li>
				<li>
					<a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - This is the API used to search for weather data by city name.
				</li>
				<li>
					<a href="https://github.com/happycycler/reactweather" target="_blank">GitHub Repo</a> - This is the GitHub repo for the app.
				</li>
				<li>
					<a href="https://www.udemy.com/course/the-complete-react-web-app-developer-course/" target="_blank">Udemy Course</a> - This is the course which is available on Udemy.com.
				</li>
			</ul>
			<Link to='/'></Link>
		</div>
	)
};

module.exports = About;