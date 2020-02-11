const ownerRouter = require("express").Router();
const { allOwners, ownersById } = require("../controllers/owners");

ownerRouter.get("/", allOwners);
ownerRouter.get("/:id", ownersById);

module.exports = ownerRouter;
