// models/book.js - Model for Book schema

const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    unique: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },

  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Book", BookSchema);
