const http = require("http");
const express = require("express");
const { allOwners, ownersById } = require("./controllers/owners");
const { allOwnedPets } = require('./controllers/pets')
const { fetchPetsByOwnerId } = require('./models/pets')

const app = express();
app.use(express.json());

app.get("/api/data/owners", allOwners);
app.get('/api/data/owners/:id', ownersById)
app.get('/api/data/pets/:owner', fetchPetsByOwnerId)

app.listen(9500, () => {
  console.log("listening...");
});
