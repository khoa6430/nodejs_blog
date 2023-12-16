const app = require("./app");
const { PORT } = require("../config/endpoints");

const port = PORT;

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
