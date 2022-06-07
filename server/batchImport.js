const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;
console.log(MONGO_URI);
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const users = require("./data/users.json");

// Import to database
const batchImport = async () => {
  // Creating a new client
  const client = new MongoClient(MONGO_URI, options);

  // Making a try
  try {
    // Connecting the client
    await client.connect();
    // Connecting to the database
    const db = client.db("HogwartsMore");
    console.log("connected!");
    await db.collection("users").deleteMany(); // revome it 

    // give a new_id with uuid
    users.forEach((existingUser) => {
      existingUser._id = uuidv4();
    });

    await db.collection("users").insertMany(users);
    // console.log(users);
    console.log(users);
  } catch (err) {
    // If fail
    console.log(err.stack);
    console.log("error has been catched.");
  }

  // Closing the connection to the database server
  client.close();
  console.log("disconnected!");
};

batchImport();
