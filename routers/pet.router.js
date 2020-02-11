const petRouter = require("express").Router();
const { allOwnedPets } = require("../controllers/pets");

petRouter.get("/:owner", allOwnedPets);

module.exports = petRouter;
