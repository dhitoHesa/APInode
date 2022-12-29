const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse app.json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes
var routes = require('./routes')
routes(app);

app.listen(5500, () => {
    console.log(`Server started on http://localhost:5500`);
});