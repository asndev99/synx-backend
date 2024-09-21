const express = require("express");
const app = express();
const reqResInspector = require("express-req-res-inspector");

app.use(reqResInspector());
app.use(express.json());

module.exports = app;
