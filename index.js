const http = require("http");
const express = require("express");
const { allOwners } = require("./controllers/owners");

const app = express();
app.use(express.json());

app.get("/api/data/owners", allOwners);

app.listen(9500, () => {
  console.log("listening...");
});
