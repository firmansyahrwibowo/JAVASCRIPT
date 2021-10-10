const express = require("express");
const router = express.Router();

//GET
router.get("/", (req, res) => {
  res.send("Show Users data");
});

router.get("/new", (req, res) => {
  res.send("Create New Users");
});

router.post("/", (req, res) => {
  res.send("Post New User");
});

//POST
router
  .get("/:id", (req, res) => {
    res.send(`User Get ${req.params.id}`);
  })
  .put("/:id", (req, res) => {
    res.send(`Update User ${req.params.id}`);
  })
  .delete("/:id", (req, res) => {
    res.send(`Delete User ${req.params.id}`);
  });

module.exports = router;
