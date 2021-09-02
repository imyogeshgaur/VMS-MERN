const express = require('express');
const app = express();
const PORT = process.env.PORT||8000;
const connectDB = require('./Database/connection')

connectDB();

app.use(express.json());

app.use(require("./Routes/userRoute.js"))
app.use(require("./Routes/adminRoute.js"))


app.listen(PORT);