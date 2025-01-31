require("dotenv").config();
const express = require("express");
//const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const conn = require("./config/db");
conn();

const starterBooks = require("./config/bookSeed");
const Book = require("./models/book");

const bookRoutes = require("./routes/bookRoutes");


/*const option = {
//  origin: "https://perscholas-capstone-library-frontend.onrender.com",
//  methods: "GET,PUT,PATCH,POST,DELETE",
//  credentials: true,
};
*/
//app.use(cors(option));
app.use(cors()); 
app.use(express.json());

//app.use((req, res, next) => { res.header("Access-Control-Allow-Origin", "https://perscholas-capstone-library-frontend.onrender.com"); res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); next(); });

app.use("/api/books", bookRoutes);

//home route
app.get("/", (req, res) => {
  res.send(" Library Management System");
});

//Seed the initial data for Books

app.get("/api/seed/books", async (req, res) => {
  try {
    //Clear existing data
    await Book.deleteMany({});

    //Insert new Book Data
    const seedBooks = await Book.create(starterBooks);
    console.log("Database seeded with Books Data successfully");
    res.json(seedBooks);
  } catch (error) {
    console.error("Seeding error", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
