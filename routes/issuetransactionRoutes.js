const express = require("express");
const router = express.Router();
const Transaction = require("../models/bookTransaction");
const Book = require("../models/book");
const User = require("../models/user");

// create Issue transaction
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
router.post("/", async (req, res) => {
  try {
    // Check if book exists in database
    const book = await Book.findById(req.body.book);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    //Check if book is Out Of Stock
    if (book.stock === 0) {
      return res.status(400).json({ message: "Book is out of stock" });
    }

    // Check if user exists in database
    const user = await User.findById(req.body.user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if user already has the book
    const existTransaction = await Transaction.findOne({
      book: book._id,
      user: user._id,
      status: "issued",
    });

    if (existTransaction) {
      return res.status(400).json({ message: "User already has the book" });
    }

    // Create transaction
    const transaction = await Transaction.create({
      book: book._id,
      user: user._id,
      status: "issued",
    });

    // Update book stock in Library Catalog
    book.stock = book.stock - 1;
    await book.save();

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get issued books for a user
router.get("/", async (req, res) => {
  try {
    const { user, status } = req.query;
    //Find transaction with book details
    const transactions = await Transaction.find({
      user: user,
      status: status,
    }).populate("book"); //Populate book details

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
