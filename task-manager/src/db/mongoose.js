const mongoose = require("mongoose");
const validator = require("validator");
const { MONGODB_URL } = require("../../config/endpoints");
mongoose.connect(MONGODB_URL);

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 7,
//     trim: true,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error('Password cannot contain "password"');
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be a positive number");
//       }
//     },
//   },
// });

// async function run() {
//   const me = new User({
//     name: " Khoa   ",
//     email: "KHOA6030@GMAIL.COM",
//     password: "phone098!",
//   });

//   await me
//     .save()
//     .then(() => {
//       console.log(me);
//     })
//     .catch((error) => {
//       console.log("Error!", error);
//     });
// }

// run();

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// async function runTask() {
//   const task = new Task({
//     description: "  Eat lunch",
//   });

//   await task
//     .save()
//     .then(() => {
//       console.log(task);
//     })
//     .catch((error) => {
//       console.log("Error!", error);
//     });
// }

// runTask();
