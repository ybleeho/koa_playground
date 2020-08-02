import mongoose from 'mongoose';

mongoose.connect(`${process.env.MONGODB_URL}`, {useNewUrlParser: true}).then(() =>
    console.log(`Connected to db! ${process.env.MONGODB_URL}`)
)

export default mongoose.connection;
