const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv=require("dotenv");
const PORT = 5000;
const categoryRoute=require("./routes/categories.js");
const ProductRoute=require("./routes/products.js");
const BillRoute=require("./routes/bills.js");
const AuthRoute=require("./routes/auth.js");
const cors=require("cors");
const userRoute = require("./routes/users.js");


dotenv.config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected");
    } catch (error) {
        throw error;
    }
};

//middlewares
app.use(express.json());
app.use(cors());

app.use("/api/categories",categoryRoute);
app.use("/api/products",ProductRoute);
app.use("/api/bills",BillRoute);
app.use("/api/auth",AuthRoute);
app.use("/api/users", userRoute);


app.listen(PORT, () => { connect();     console.log(`App listening ${PORT}`); });
