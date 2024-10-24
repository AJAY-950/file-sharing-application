
import mongoose from 'mongoose';

const DBConnection = async () => {
    const mongo_url = 'mongodb://127.0.0.1:27017/CRUD';
    try {
        await mongoose.connect(mongo_url, { useNewUrlParser: true });
        console.log("DataBase connected succesfully ..");
    }
    catch (error) {
        console.log("error during dayabase coonection ", error.message);
    }
}

export default DBConnection;