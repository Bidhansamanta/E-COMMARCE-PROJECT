import { model, Schema } from "mongoose";

const productSchema = new Schema({
  title : {
    type : String,
    required : true
  },
  description :{
    type : String,
    required : true,
  },
  image : {
    type : String,
  },
  price : {
    type : Number,
    required : true
  },
  category : {
    type : String,
    required : true
  },
  sku : {
    type : String,
    unique : true
  }
},{timestamps : true});


const Product = model("product", productSchema);

export {Product};