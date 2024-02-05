const express =require('express');
const router =express.Router();
const productController = require('../controller/product_controller');


router.get('/',productController.home);
router.get('/products',productController.products);
router.post('/products/create',productController.create);
router.delete('/products/:id',productController.delete);
router.post('/products/:id/update_quantity',productController.update);

module.exports =router;