const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Getting data from data folder
const users = require("./data/users.json"); // Users
// HouseFeeds
const HouseFeeds = require("./data/HouseFeeds.json"); // Feeds

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
    await db.collection("users").deleteMany(); // Remove duplicate

    // give a new_id with uuid
    users.forEach((existingUser) => {
      existingUser._id = uuidv4();
      existingUser.email = (existingUser.name.toLowerCase() + "@gmail.com");
    });

    await db.collection("users").insertMany(users); // Adding to db
    
    // Common rooms post
    // Gryffindor
    await db.collection("HouseFeeds").deleteMany(); // Remove duplicate
    await db.collection("HouseFeeds").insertMany(HouseFeeds); // Adding to db   

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
