require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const conn = require("./config/db");
conn(); // Establish database connection

// Import seed data and models for initial data population
const { starterBooks, refreshBookImages } = require("./config/bookSeed");

//const starterBooks = require("./config/bookSeed");
const Book = require("./models/book");

const starterUsers = require("./config/userSeed");
const User = require("./models/user");

const starterTransactions = require("./config/transactionSeed");
const bookTransaction = require("./models/bookTransaction");

// Import route handlers for different API endpoints
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");
const issuetransactionRoutes = require("./routes/issuetransactionRoutes");
const returntransactionRoutes = require("./routes/returntransactionRoutes");

const option = {
  origin: "https://perscholas-capstone-library-frontend.onrender.com",
  methods: "GET,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(option));
//app.use(cors());
app.use(express.json());

app.use((req, res, next) => { res.header("Access-Control-Allow-Origin", "https://perscholas-capstone-library-frontend.onrender.com"); res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); next(); });
// Define route handlers for different API endpoints
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/issuetransactions", issuetransactionRoutes);
app.use("/api/returntransactions", returntransactionRoutes);

//home route
app.get("/", (req, res) => {
  res.send(" Library Management System");
});

//Seed the initial data for Books
/*
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
*/

// Route to seed books with fresh images
app.get("/api/seed/books", async (req, res) => {
  try {
    console.log("Starting book seeding process...");

    // Get books with fresh images
    const bookImages = await refreshBookImages();

    // Clear existing data
    await Book.deleteMany({});

    // Insert new Book Data
    const seedBooks = await Book.create(bookImages);
    console.log(
      "Database seeded with Books Data and fresh images successfully"
    );
    res.json(seedBooks);
  } catch (error) {
    console.error("Seeding error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

//Seed the initial data for Users
/*
app.get("/api/seed/users", async (req, res) => {
   try {
    //Clear existing data
    await User.deleteMany({});

    //Insert new User Data
    const seedUsers = await User.create(starterUsers);
    console.log("Database seeded with Users Data successfully");
    res.json(seedUsers);
   } catch(error) {
    console.error("Sedding error", error.message);
    res.status(500).json({ error: error.message});
   }
});

*/

// Seed Users Route with Detailed Error Handling
app.get("/api/seed/users", async (req, res) => {
  try {
    // Validate starter users
    if (!starterUsers || starterUsers.length === 0) {
      return res.status(400).json({ message: "No users to seed" });
    }

    // Clear existing data
    await User.deleteMany({});

    // Insert new User Data
    const seedUsers = await User.create(starterUsers);

    console.log("Database seeded with Users Data successfully");
    res.json(seedUsers);
  } catch (error) {
    console.error("User Seeding error:", error);

    // Handle specific Mongoose validation errors
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation Error",
        errors: Object.values(error.errors).map((err) => err.message),
      });
    }

    // Generic error response
    res.status(500).json({
      message: "Failed to seed users",
      error: error.message,
      stack: error.stack,
    });
  }
});

//Seed Book Transaction
app.get("/api/seed/transactions", async (req, res) => {
  try {
    //Make sure Books and Users are seeded
    const bookCount = await Book.countDocuments();
    const userCount = await User.countDocuments();

    if (bookCount === 0 || userCount === 0) {
      return res.status(400).json({
        message: "Please seed data for Books and Users first",
      });
    }

    //Clear existing transaction
    await bookTransaction.deleteMany({});

    //Create new transactions
    const seedTransaction = await bookTransaction.create(starterTransactions);
    console.log("Database seeded with Book Transactions successfully");
    res.json(seedTransaction);
  } catch (error) {
    console.error("Book transaction seeding error", error.message);
    res.status(500).json({
      error: error.messgae,
    });
  }
});
//Start the server
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
