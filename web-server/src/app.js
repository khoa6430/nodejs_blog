const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Khoa Le",
  });
});
// app.get("", (req, res) => {
//   res.send("<h1>Hello express!</h1>");
// });
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Khoa Le",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Khoa Le",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});

// app.get("/help", (req, res) => {
//   res.send([
//     {
//       name: "Khoa",
//       age: 24,
//     },
//     {
//       name: "Khoa 2",
//       age: 24,
//     },
//   ]);
// });
app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Khoa Le",
    errorMessage: "Page not found.",
  });
});
// app.com
// app.com/help
// app.com/about
app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
