const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));

module.exports = app;
