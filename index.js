const express = require('express');
const app = express();
<<<<<<< Updated upstream
const port = 4000;
const {auth} = require('./models');
=======
const port = 6000;
>>>>>>> Stashed changes

app.use(express.json);
auth();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});