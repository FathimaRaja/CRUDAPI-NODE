import express from "express";
import { ProductIndex,ProductCreate,ProductUpdate,ProductDelete,ProductDetails } from "../controllers/product.controller.js";
const router=express.Router();
//Reading
router.get('/',ProductIndex);
//Reading by Specific Id
router.get('/:id',ProductDetails);
//Creating or Adding
router.post('/',ProductCreate);
//Updating
router.put('/:id',ProductUpdate);
//Deleting
router.delete('/:id',ProductDelete);
export default router;