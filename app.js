const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const postsRoute = require('./routes/posts');
// app.use("/posts",postRoutes);
app.use("/posts", postsRoute);

app.listen(3000);