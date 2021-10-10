const express = require("express");
const router = express.Router();

const users = [{ name: "kyle" }, { name: "sally" }];

router.use(logger);
//GET
router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User Data");
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({
      firstName: req.body.firstName,
    });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", {
      firstName: req.body.firstName,
    });
  }
});

router
  .get("/:id", (req, res) => {
    console.log(req.user);
    res.send(`User Get ${req.params.id}`);
  })
  .put("/:id", (req, res) => {
    res.send(`Update User ${req.params.id}`);
  })
  .delete("/:id", (req, res) => {
    res.send(`Delete User ${req.params.id}`);
  });

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
module.exports = router;
