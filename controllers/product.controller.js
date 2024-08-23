export const ProductIndex = (req,res)=>{res.send("Get all Product List");}
//Create the product info id,name,desc
export const ProductCreate =(req,res)=>{console.log(req.body);
    return res.json(req.body);
}
export const ProductUpdate =(req,res)=>{res.send("Update Product by Id");}
export const ProductDelete =(req,res)=>{res.send("Delete Product by Id");}
