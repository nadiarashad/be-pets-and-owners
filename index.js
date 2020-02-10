const http = require("http");
const express = require("express");
const { allOwners, ownersById } = require("./controllers/owners");

const app = express();
app.use(express.json());

app.get("/api/data/owners", allOwners);
app.get('/api/data/owners/:id', ownersById)

app.listen(9500, () => {
  console.log("listening...");
});
