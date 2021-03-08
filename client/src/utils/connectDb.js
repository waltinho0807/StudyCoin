import mongoose from 'mongoose';
const connection = {}

const connectDb = async () => {
    if(connection.isConnected){
        // Using existing database connection
        // console.log("Using existing connection")
        return;
    }
    //Use new database connection
    const db = await mongoose.connect("mongodb+srv://waltinhocalegari:andrezaamor4@cluster0.mf0st.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

     console.log("DB Connected");

    connection.isConnected = db.connections[0].isReadyState;
} 

export default connectDb;