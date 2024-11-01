// import mongoose from "mongoose";

// const connectDB = async () => {
//     console.log('MONGO_URL:', process.env.MONGO_URL)
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log('mongodb connected successfully');
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default connectDB;


import mongoose from "mongoose";

const connectDB = async () => {
    console.log('MONGO_URL:', process.env.MONGO_URL);
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
}

export default connectDB;
