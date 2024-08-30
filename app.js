const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const dotenv = require('dotenv');
const middlewares = require('./middlewares');
const app = express();
const PORT = 4000;

dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));




middlewares.setupApp(app);

routes.setup(app);

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });