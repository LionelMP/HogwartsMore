const express = require('express');
const app = express();

const {
   signin,
   getUser,
   addUser,
   deleteUser,
   getHouseFeed,
   addPost
} = require("./handlers");

app.use(express.json())

app.get('/', (req, res) => {
   res.send('Hello World');
});

app.post(`/api/signin`, signin);

app.get(`/api/get-user/:id`, getUser);

app.post(`/api/add-user`, addUser);

app.delete(`/api/delete-user/:_id`, deleteUser);

app.get(`/api/get-houseFeed/:house`, getHouseFeed); 

// Add a post but update the feed
app.patch(`/api/add-post/:house/:_id`, addPost);


app.listen(8000);