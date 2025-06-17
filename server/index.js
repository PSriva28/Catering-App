const express = require("express");
const env = require("dotenv").config();
const cors = require('cors');
const dbConnect = require('../server/config/dbConnect.js');
dbConnect();
const userRoutes = require('../server/routes/authRoutes.js');
const foodRoutes = require('../server/routes/foodRoutes.js')
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", userRoutes);
app.use("/food", foodRoutes);

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server started on ${port}`)
});