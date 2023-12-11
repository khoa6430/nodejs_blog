const { MongoClient, ObjectID } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// Create a new MongoClient
const client = new MongoClient(connectionUrl);

// Use connect method to connect to server
async function run() {
  try {
    // Connect client to server
    await client.connect();
    console.log("Connected successfully to server");
    // Connect to myproject database
    const db = client.db(databaseName);
    // Get users collection
    const users = db.collection("users");
    const tasks = db.collection("tasks");

    // const findResult = await users.findOne(
    //   {
    //     name: "Le Dang Khoa",
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(result);
    //   }
    // );
    // console.log(findResult);

    // const findManyResult = await users
    //   .find({
    //     age: 27,
    //   })
    //   .toArray((error, result) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(result);
    //   });
    // console.log(findManyResult);
    // const countResult = await users.countDocuments(
    //   { age: 27 },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(result);
    //   }
    // );

    // console.log(countResult);

    // // Insert a user document
    // const insertResult = await users.insertMany(
    //   [
    //     {
    //       name: "Le Dang Khoa",
    //       age: 24,
    //     },
    //     {
    //       name: "Le Dang Khoa",
    //       age: 27,
    //     },
    //     {
    //       name: "Le Dang Khoa",
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // const update = await users
    //   .updateMany(
    //     {
    //       name: "Le Dang Khoa",
    //     },
    //     {
    //       $set: {
    //         name: "Khoa Le",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const deleteUser = await users
    //   .deleteMany({
    //     age: 27,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}
// Run the async function
run().catch(console.dir);
