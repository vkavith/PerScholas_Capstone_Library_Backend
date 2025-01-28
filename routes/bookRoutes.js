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

//create a new Book

router.post("/", async(req,res) => {
    console.log(req.body);

    try{
        const createBook = await Book.create(req.body);
        console.log(req.body);
        res.json(createBook);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
});


// Get 1 book based on ISBN or bookname

router.get("/:id", async(req,res) => {
    try{
        const singleBook = await Book.findById(req.params.id);
        res.json(singleBook);
    }catch(error) {
        res.status(500).json({error: error.message});
    }
});

