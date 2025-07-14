import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
  },
  year: {
    type: Number,
    required: [true, 'Year is required'],
  },
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
