const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({
   name:{
    type: String,
        required: true

   },
    
   quantity:{
    type:Number,
    required:true
   },
});




const Products = mongoose.model('Products', productsSchema);


module.exports = {
  
    Products: Products
};