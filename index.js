const http = require("http");
const express = require("express");
const apiRouter = require("./routers/api.router");

const app = express();
app.use(express.json());

app.use("/api", apiRouter);
app.use((err, req, res, next) => {
  console.log(err)
  res.status(404).send({ msg: 'Not found' })
})

app.listen(9500, () => {
  console.log("listening...");
});
