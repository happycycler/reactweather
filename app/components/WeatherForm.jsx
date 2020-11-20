var React = require('react');

var WeatherForm = React.createClass({
	onFormSubmit: function (e) {
		e.preventDefault();

		var location = this.refs.location.value;

		if (location.length > 0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	},
	render: function () {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div className="row">
					<input type="text" ref="location" placeholder="Location name ..." />
					<div className="text-center">
						<button className="button">Get Weather</button>		
					</div>
				</div>
			</form>
		);
	}
});

module.exports = WeatherForm;