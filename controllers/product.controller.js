import  Product from "../models/product.model.js"
export const ProductIndex = async (req,res)=>
{try
{
    const products=await Product.find();
    res.json(products);
}
catch(error)
{
    return res.status(500).json({message:error.message});
}
}
export const ProductDetails =async(req,res)=>
    {
    try
        {
           // Convert the ID to a object
        const product = await Product.findOne({ _id:req.params.id });
        if(!product)
            {return res.status(404).json({message:"Cannot Find Product"});
    }
        res.json(product);
        //const product =await Product.findById(parseInt(req.params.id));
        
}
catch(error){return res.status(500).json({message:error.message});}
}
//Create the product info id,name,desc
export const ProductCreate =async (req,res)=>
{
console.log(req.body);
    //Validate data
const newProduct= new Product({
    id:req.body.id,
    name:req.body.name,
    description:req.body.description,
    category:req.body.category
});
try
{
    const product=await newProduct.save();
    return res.status(201).json(product);
}
catch(error)
{
    return res.status(400).json({message:error.message});
}

}
export const ProductUpdate =async(req,res)=>
{
    try{
        const updatedProduct=await Product.findOneAndUpdate({_id:req.params.id},{name:req.body.name,description:req.body.description,category:req.body.category},{new:true});
        if (!updatedProduct) {
            return res.status(404).json({ message: "Cannot Find Product" });
          }
        res.status(200).json(updatedProduct);
    }
    catch(error)
    {return res.status(400).json({message:error.message});}
}

export const ProductDelete =async(req,res)=>{
    try{
        const productId=req.params.id;
        const deletedProduct=await Product.findByIdAndDelete(productId);
        if(!deletedProduct)
            {return res.status(404).json({message:"Cannot Find Product"});}
        res.status(200).json({message:"Product deleted Successfully",deletedProduct});
    }
catch(error){return res.status(400).json({message:error.message});}}
