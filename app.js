const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// const postsRouter = require("./routes/posts");
// const usersRouter = require("./routes/users");

// app.use('/posts', postsRouter);
// app.use('/users', usersRouter);

module.exports = app