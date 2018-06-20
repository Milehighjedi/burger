const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const router = require("./controllers/burgersController.js");
app.use(router);

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});