import express from "express";
const app= express();
const PORT=7000;
app.get('/',(req,res)=>{ res.json({msg:"Hello students"});})
//CRUD functionality of Products
//Reading
app.get('/Products',()=>{});
//Creating or Adding
app.post('/Products',()=>{});
//Updating
app.put('/Products/:id',()=>{});
//Deleting
app.delete('/Products/:id',()=>{});



app.listen(PORT,()=>{console.log(`The server is running at http://localhost:${PORT}`);
});