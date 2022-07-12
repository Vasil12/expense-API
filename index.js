const express = require('express');
const app = express();
const port = 4000;
const {auth} = require('./models');

app.use(express.json);
auth();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});