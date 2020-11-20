var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
	return (
		<div>
			<Nav />
			<div className="row">
				<div className="columns medium-7 large-5 small-centered centered-box">
					{props.children}
				</div>
			</div>
		</div>
	)
};

module.exports = Main;