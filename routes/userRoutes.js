const express = require("express");
const router = express.Router();
const User = require("../models/user");



//create a new User 

router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const createUser = await User.create(req.body);
    console.log(req.body);
    res.json(createUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get all users from database
router.get('/', async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
