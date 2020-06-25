import 'dotenv/config';
import app from './app';
import './database'

const port = process.env.PORT || 3333;
const server = app.listen(port, () => console.info(`Listening to http://localhost:${port} 🚀`));

process.on("SIGTERM", () => {
    console.info('SIGTERM signal received.');
    server.close(() => {
        console.log('Http server closed.');
    });
})
