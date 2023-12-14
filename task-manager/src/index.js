const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 3000;
//without middleware : new request -> run route handler
//with middleware : new request -> do something -> run route handler

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  const task = await Task.findById("6579cf17e0cad5ed5fb723ce");
  // await task.populate([{ path: "owner" }]);
  // console.log(task.owner);
  // user.populate
  const user = await User.findById("6579cf09e0cad5ed5fb723c3");
  // await user.populate("tasks");
  // console.log(user.tasks);
};

main();
