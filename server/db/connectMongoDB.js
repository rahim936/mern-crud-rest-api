import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.set('strictQuery', false);
mongoose.set('bufferTimeoutMS', 5000);

const connection_string = process.env.MONGO_DB_CONNECTION_STRING;

const ConnectMongoDB = async () => {
	await mongoose.connect(connection_string);
};

export default ConnectMongoDB;
