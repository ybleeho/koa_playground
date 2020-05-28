import app from './app';
import Db from './database';

const port = process.env.PORT || 3000;

Db.connect().then();
app.listen(port);
console.info(`Listening to http://localhost:${port} 🚀`);
