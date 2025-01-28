const express = require("express");
const router = express.Router();
const Book = require("../models/book");

//get all books

router.get("/", async(req, res) => {
    try{
        const allBooks = await Book.find({});
        res.json(allBooks);
    }catch(error) {
        res.status(500).json({error: error.message});
    }
});

