const { _book } = require("../model/book.model");
const User = require("../model/user.model");
const Book = require("../model/book.model");

// add a book
const addBook = async (req, res) => {
  const { user_id } = req.query;
  const { title, author, summary } = req.body;
  try {
    const user = await Book.findOne({ user_id: user_id }).lean();

    if (user) {
      console.log("line 13:", user);
      const book = await Book.create({
        user_id: user.user_id,
        title: title,
        author: author,
        summary: summary,
      });
      return res.status(200).json({ message: "User added a book", data: book });
    } else {
      const user = await User.create({});
      const book = await Book.create({
        user_id: user._id,
        title: title,
        author: author,
        summary: summary,
      });
      return res.status(200).json({ message: "User added a book", data: book });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// read all book
const readAllBooks = async (req, res) => {
  try {
    const book = await Book.find({}).lean();
    return res.status(200).json({
      message: "Listing all books",
      no_of_books: book.length,
      data: book,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// view book by its id
const bookByItsId = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await Book.findById({ _id: bookId }).lean();
    return res.status(200).json({ message: "Listing books", data: book });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a book
const updateBook = async (req, res) => {
  const { book_id, user_id } = req.query;
  const { title, author, summary } = req.body;
  try {
    const filter = {
      $and: [{ _id: book_id }, { user_id: user_id }],
    };

    const book = await Book.findOneAndUpdate(
      filter,
      {
        title: title,
        author: author,
        summary: summary,
      },
      { new: true }
    );
    return res.status(200).json({ message: "User updated a book", data: book });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a book
const deleteBook = async (req, res) => {
  const { book_id, user_id } = req.query;
  try {
    const filter = {
      $and: [{ _id: book_id }, { user_id: user_id }],
    };

    const book = await Book.findOneAndDelete(filter);
    const user = await User.findOneAndDelete({ _id: user_id });
    if ((book, user)) {
      return res.status(200).json({ message: "User deleted a book" });
    } else if (!book && !user) {
      return res.status(200).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addBook, readAllBooks, bookByItsId, updateBook, deleteBook };
