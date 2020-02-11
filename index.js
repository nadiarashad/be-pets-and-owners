const http = require("http");
const express = require("express");
const apiRouter = require("./routers/api.router");

const app = express();
app.use(express.json());

app.use("/api", apiRouter);

app.listen(9500, () => {
  console.log("listening...");
});
