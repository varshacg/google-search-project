const express=require ('express');
const mongoose=require('mongoose');
const cors=require('cors');

const searchRoutes=require('./routes/searchRoutes');

const app=express();
app.use(cors());
app.use(express.json());
const port=5000;

require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.error("Connection error:",err));

app.use('/api/search',searchRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});