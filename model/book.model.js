const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    user_id: { type: mongoose.Types.ObjectId, ref:'user'},
    title: { type: String, required: true },
    author: { type: String, required: true },
    summary: { type: String, required: true }
  },
  { timestamps: true }
);

const Book = mongoose.model("book", bookSchema);
module.exports = Book