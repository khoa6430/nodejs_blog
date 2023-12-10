const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=df45ec35d0d2ba710a77a306964f7702&query=${latitude},${longitude}$units=f`;

  request({ url, json: true }, (error, { body }) => {
    console.log("body:", body);
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " It is currently " +
          body.current.temperature +
          " degress out. This high today is " +
          body.current.feelslike +
          " degress out.The humidity is " +
          body.current.humidity +
          " %"
      );
    }
  });
};

module.exports = forecast;
