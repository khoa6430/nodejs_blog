const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const { error } = require("console");

const app = express();
const port = process.env.PORT || 3000;

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
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!",
    });
  }
  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }
        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );

  // res.send({
  //   forecast: "It is snowing",
  //   location: "Philadelphia",
  //   address: req.query.address,
  // });
});

app.get("/products", (req, res) => {
  console.log("req.query:", req.query);

  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
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
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
