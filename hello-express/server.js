const express = require("express");
const app = express();
const port = 3000;

app
  .set("view engine", "ejs")
  .use(express.static("public"))
  .use(express.urlencoded({ extended: true }))
  .use(express.json());

// app.get("/", (req, res) => {
//   //   res.status(500).send("something error with your request");
//   //   res.download("server.js");
//   res.render("index", {
//     text: "ejs run on server",
//   });
// });

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
