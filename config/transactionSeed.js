const mongoose = require("mongoose");

const starterTransactions = [
  {
    //  valid ObjectIds from  Book and User collection
    book: new mongoose.Types.ObjectId("6799440059d18ea54c655785"), // Specific Book ID
    user: new mongoose.Types.ObjectId("679e820af7976ba55eae7426"), // Specific User ID
    issueDate: new Date(),
    dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),     // 14 days from now
    returnDate: null,
    status: "issued",
  },
  {
    book: new mongoose.Types.ObjectId("6799440059d18ea54c655789"),
    user: new mongoose.Types.ObjectId("679e820af7976ba55eae7426"),
    issueDate: new Date("2023-06-15"),
    dueDate: new Date("2023-06-29"),
    returnDate: new Date("2023-06-28"),
    status: "returned",
  },
  {
    book: new mongoose.Types.ObjectId("6799440059d18ea54c65578a"),
    user: new mongoose.Types.ObjectId("679e820af7976ba55eae7429"),
    issueDate: new Date("2023-07-01"),
    dueDate: new Date("2023-07-15"),
    returnDate: null,
    status: "issued",
  },
  {
    book: new mongoose.Types.ObjectId("6799440059d18ea54c65578c"),
    user: new mongoose.Types.ObjectId("679e820af7976ba55eae7429"),
    issueDate: new Date("2023-06-10"),
    dueDate: new Date("2023-06-24"),
    returnDate: new Date("2023-06-22"),
    status: "returned",
  },
  {
    book: new mongoose.Types.ObjectId("6799440059d18ea54c655787"),
    user: new mongoose.Types.ObjectId("679e820af7976ba55eae7428"),
    issueDate: new Date(),
    dueDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),       // 21 days from now
    returnDate: null,
    status: "issued",
  },
  {
    book: new mongoose.Types.ObjectId("6799440059d18ea54c655796"),
    user: new mongoose.Types.ObjectId("679e820af7976ba55eae7428"),
    issueDate: new Date("2023-06-20"),
    dueDate: new Date("2023-07-04"),
    returnDate: null,
    status: "issued",
  },
];

module.exports = starterTransactions;
