require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("6576d4674e16783f61f6771d")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("6576d4674e16783f61f6771d")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
