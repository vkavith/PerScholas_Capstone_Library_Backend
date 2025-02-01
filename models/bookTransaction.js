// models/bookTransaction.js
const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  /* user: {
      type: String,
      required: true,
  },*/
  issueDate: {
    type: Date,
    default: Date.now,
  },
  dueDate: {
    type: Date,
    //required: true,
  },
  returnDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["issued", "returned"],
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
