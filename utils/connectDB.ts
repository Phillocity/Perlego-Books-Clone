import mongoose from 'mongoose';

// const mongoConnection: string = process.env.NEXT_PUBLIC_MONGO_CONNECTION_STRING || '';
const mongoConnection: string = 'mongodb+srv://perlego:perlego@perlego.qs1nlhv.mongodb.net/booksDB?retryWrites=true&w=majority';
/* ---------------------------------------------------------------------------------------------- */
/*           Connection normally kept in .env file but hardcoding for easy local testing          */
/* ---------------------------------------------------------------------------------------------- */

const connectDB = async () => {
  try {
    await mongoose.connect(mongoConnection);
  } catch (error) {
    console.log('Error connecting to MongoDB');
  }
};

export default connectDB;
