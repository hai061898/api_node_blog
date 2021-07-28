const express = require('express');

const app = express();

const postsRoute = require('./routes/posts');
// app.use("/posts",postRoutes);
app.use("/posts", postsRoute);

app.listen(3000);