const express = require("express");
const router = express.Router();

const { addBook, readAllBooks, bookByItsId, updateBook, deleteBook } = require("../controller/booksController");

router.post("/add", addBook);
router.get("/list", readAllBooks);
router.get("/list/:bookId", bookByItsId);
router.patch("/update", updateBook);
router.delete("/delete", deleteBook);

module.exports = router;