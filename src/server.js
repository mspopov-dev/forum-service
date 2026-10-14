import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/post.routes.js';
import config from './configuration/config.js';

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use('/forum', postRoutes);
app.use((req, res) => res.status(404).type('text/plain; charset=utf-8').send('Not found'));

async function startServer() {
    try {
        await mongoose.connect(config.mongodb.uri, {dbName: config.mongodb.db});
        console.log('Connected to MongoDB');
        app.listen(port, () => console.log(`Server running on port ${port}. Press Ctrl+C to stop.`));
    } catch (e) {
        console.error('Failed to connect to database', e);
        process.exit(1);
    }
}

startServer();