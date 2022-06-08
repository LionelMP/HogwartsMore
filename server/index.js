const express = require('express');
const app = express();

const {
   signin,
   getUser,
   addUser,
   deleteUser
} = require("./handlers");

app.use(express.json())

app.get('/', (req, res) => {
   res.send('Hello World');
});

app.post(`/api/signin`, signin);

app.get(`/api/get-user`, getUser);

app.post(`/api/add-user`, addUser);

app.delete(`/api/delete-user/:_id`, deleteUser);


app.listen(8000);