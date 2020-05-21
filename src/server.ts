import app from './app';
import connectDatabase from './database';
const port = process.env.PORT || 3000;

(async () => {
    await connectDatabase()
    app.listen(port);
    console.info(`Listening to http://localhost:${port} 🚀`);
})()
