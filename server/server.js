import http from 'http';

import CORS from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

dotenv.config();

import ConnectMongoDB from './db/connectMongoDB.js';
import postRoutes from './routes/post.routes.js'

const app = express();
const server = http.createServer(app);

app.use(
	CORS({
		origin: 'http://localhost:5173',
	})
);
app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/v0/posts', postRoutes)

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5001;

server.listen(port, host, () => {
	ConnectMongoDB()
		.then(() => {
			console.log('Database connected');
		})
		.catch((error) => {
			console.log(error);
			process.exit(1);
		});
	console.log(`server is running: http://${host}:${port}`);
});
