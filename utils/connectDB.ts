import mongoose from 'mongoose';

const mongoConnection: string = process.env.NEXT_PUBLIC_MONGO_CONNECTION_STRING || '';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoConnection);
    console.log('Database Connected');
  } catch (error) {
    console.log('Error connecting to MongoDB');
  }
};

export default connectDB;
