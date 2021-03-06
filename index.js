const express = require('express');

const app = express();
const port = 5000;

app.use(express.json());

const routes = require('./router');

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
