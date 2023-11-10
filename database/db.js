import mongoose from "mongoose";

const Connection = () => {
    const DB_URI = `mongodb://sagarkumarmohapatra5:oRKBXbSf1vGmxfO8@ac-k1sgagh-shard-00-00.nwothgl.mongodb.net:27017,ac-k1sgagh-shard-00-01.nwothgl.mongodb.net:27017,ac-k1sgagh-shard-00-02.nwothgl.mongodb.net:27017/?ssl=true&replicaSet=atlas-tg8kyd-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        mongoose.connect(DB_URI);
        console.log("database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the database", error.message);
    }
}
export default Connection