import express from "express";
import productRoutes from "./routes/products.route.js"
const app= express();
const PORT=7000;
app.get('/',(req,res)=>{ res.json({msg:"Hello students ."});})
//CRUD functionality of Products
app.use('/products',productRoutes);




app.listen(PORT,()=>{console.log(`The server is running at http://localhost:${PORT}`);
});