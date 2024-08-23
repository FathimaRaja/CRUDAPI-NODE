import express from "express";
import productRoutes from "./routes/products.route.js"
import connectDb from "./lib/db.js";
const app= express();
const PORT=7000;
//Db connection
connectDb();
app.get('/',(req,res)=>{ res.json({msg:"Hello students ."});})
//CRUD functionality of Products
app.use('/products',productRoutes);




app.listen(PORT,()=>{console.log(`The server is running at http://localhost:${PORT}`);
});