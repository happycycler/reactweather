var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=90761174fedaf2733b1788f3ea6ae4d1';

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

		return axios.get(requestUrl).then(function (res) {
			if (res.data.cod && res.data.message) {
				// throw new Error(res.data.message);
				return res.data.message;
			} else {
        return res.data.main.temp;
      }
		}, function (err) {
				// throw new Error(err.response.data.message);
				throw new Error('Unable to fetch weather for that location!');
		});
	}
}