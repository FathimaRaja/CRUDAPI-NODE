import { Schema,model } from "mongoose";

const schema=new Schema({
    id:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
});
const Product =model("Product",schema);
export default Product;