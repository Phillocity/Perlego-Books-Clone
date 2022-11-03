import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  unique_url: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: String,
  img: String,
  publisher: String,
  category: String,
  topic: String,
  year: Number,
  pages: Number,
  language: String,
});

/* ---------------------------------------------------------------------------------------------- */
/*                 If the model exists after compilation, you can use it directly                 */
/* ---------------------------------------------------------------------------------------------- */

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

export default Book;
