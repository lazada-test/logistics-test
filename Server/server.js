const express = require('express');
const app = express();
const port = process.env.PORT || 807;
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);
app.get('/', function(req, res) {
  res.json('test');
});