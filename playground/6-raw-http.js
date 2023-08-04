const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=df45ec35d0d2ba710a77a306964f7702&query=40,-75&units=f";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
    console.log("chunk:", chunk);
  });
  response.on("data", (end) => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});
request.end();
