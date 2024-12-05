const express = require("express");
const userRouter = require("./routes/user");
const { connectionMOngo } = require("./connection");
const { logReqRes } = require("./middleware/index");
const app = express();

connectionMOngo("mongodb://localhost:27017/restapi").then(() => {
  console.log("done");
});
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", userRouter);
app
  .use(logReqRes("log.txt"))

  .listen(5001);
