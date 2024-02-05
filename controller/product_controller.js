const mongoose = require('mongoose');

const {Products }= require('../model/products');

module.exports.home= (req,res)=>{
    console.log("hello");
return res.json(200,
    {message:'home'}
)
};


//create product
module.exports.create = async (req, res) => {
    try {
        const existingProduct = await Products.findOne({ name: req.body.name });
        if (!existingProduct) {
            const newProduct = await Products.create(req.body);
            console.log("Product created", newProduct);
            return res.status(200).json({ message: "Product created", data:{name: newProduct.name,quantity:newProduct.quantity} });
        } else {
            console.log('Product is already there');
            return res.status(400).json({ error: 'Product is already there' ,data:{name: newProduct.name,quantity:newProduct.quantity}});
        }
    } catch (err) {
        console.log('Error in creating the product:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

//fetch products
module.exports.products = async (req, res) => {
    try {
        const products =await Products.find({}, { _id: 1, name: 1, quantity: 1 });
        
        return res.status(200).json({data:products});
        
    } catch (error) {
        console.log('Error in fetching the product:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
        
    }


}

//delete product
module.exports.delete = async (req, res) => {
    try {
        const existingProduct =await Products.findById( req.params.id );
        
        if (existingProduct) {
            const deleteProduct = await Products.deleteOne({_id:req.params.id});
            console.log("Product created",deleteProduct);
            return res.status(200).json({ message: "Product deleted",  });
        } else {
            console.log('Product is not there');
            return res.status(400).json({ error: 'Product is not there' });
        }
        
    } catch (error) {
        console.log('Error in fetching the product:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
        
    }


}

//update product
module.exports.update = async (req, res) => {
    try {
        const existingProduct =await Products.findById( req.params.id );
        
        if (existingProduct) {
            const updateProduct = await Products.updateOne({quantity:req.query.number});
            const update =await Products.findById( req.params.id );
            console.log("Product updated",update);
            
            return res.status(200).json({ message: "Product updated",data:{product:{id:update._id ,name: update.name,quantity:update.quantity} } });
        } else {
            console.log('Product is not there');
            return res.status(400).json({ error: 'Product is not there' });
        }
        
    } catch (error) {
        console.log('Error in fetching the product:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
        
    }


}