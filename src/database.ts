import mongoose from 'mongoose';

mongoose.connect(`${process.env.MONGODB_URL}`, {useNewUrlParser: true}).then(r =>
    console.log('Connected to db!')
)

export default mongoose.connection;
