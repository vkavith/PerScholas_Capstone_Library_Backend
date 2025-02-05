const express = require("express");
const router = express.Router();
const Transaction = require("../models/bookTransaction");
const Book = require("../models/book");

// create Return transaction
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
router.post("/", async (req, res) => {
  try {
    const { transactionId, returnDate } = req.body;

    //Find the transaction

    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    if (transaction.status === "returned") {
      return res.status(400).json({ message: "Book already returned" });
    }

    //Update transaction
    transaction.returnDate = returnDate;
    transaction.status = "returned";
    await transaction.save();

    // Update book stock in Library catalog, increase count by 1, if book is returned
    const book = await Book.findById(transaction.book);
    if (book) {
      book.stock = book.stock + 1;
      await book.save();
    }

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
