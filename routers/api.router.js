const apiRouter = require("express").Router();
const ownerRouter = require("./owner.router");
const petRouter = require("./pet.router");

apiRouter.use("/data/owners", ownerRouter);
apiRouter.use("/data/pets", petRouter);

module.exports = apiRouter;
