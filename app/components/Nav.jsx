var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
	onSearch: function (e) {
		e.preventDefault();
		
		var location = this.refs.search.value;
		var encodedLocation = encodeURIComponent(location);
		if (encodedLocation && encodedLocation.length > 0) {
			this.refs.search.value = '';
			window.location.hash = '#/?location=' + encodedLocation;
		}
	},
	render: function () {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React Weather App</li>
						<li>
							<IndexLink to="/" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
						</li>
						<li>
							<Link to="about" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
						</li>
						<li>
							<Link to="examples" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li><input type="search" ref="search" placeholder="City name ..." /></li>
							<li><button className="button hollow search-button">Get Weather</button></li>
						</ul>					
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Nav;