const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const imageRoute = require('./routes/images');
const commentsRoute = require('./routes/comments');

app.use("/posts", postsRoute);
app.use("/user",userRoute);
app.use("/images", imageRoute);
app.use("/comment",commentsRoute);

app.listen(3000);