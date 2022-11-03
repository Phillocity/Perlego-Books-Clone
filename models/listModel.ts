import mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
});

const List = mongoose.models.List || mongoose.model('List', listSchema);

export default List;
