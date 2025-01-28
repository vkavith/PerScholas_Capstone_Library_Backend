const express = require("express");
const router = express.Router();
const Book = require("../models/book");

//get all books

router.get("/", async (req, res) => {
  try {
    const allBooks = await Book.find({});
    res.json(allBooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//create a new Book

router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const createBook = await Book.create(req.body);
    console.log(req.body);
    res.json(createBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get 1 book based on ISBN or bookname

router.get("/:id", async (req, res) => {
  try {
    const singleBook = await Book.findById(req.params.id);
    res.json(singleBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Book Details including the Stock

router.put("/:id", async (req, res) => {
  try {
    const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body);
    res.json(updateBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Delete a Book

router.delete("/:id", async (req, res) => {
  try {
    const deleteBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deleteBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
