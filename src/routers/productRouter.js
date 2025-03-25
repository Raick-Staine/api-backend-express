import express from 'express'
import getProductsController from '../controllers/products/getProductsController.js'
import createProductsController from '../controllers/products/createProductsController.js'
import deleteProductsController from '../controllers/products/deleteProductsController.js'
import editNamreProductsController from '../controllers/products/editNameProductsController.js'
import updateProductsController from '../controllers/products/updateProductsController.js'
import listProductsController from '../controllers/products/listProductsController.js'

const products = express.Router()

products.get('/list', listProductsController)
products.get('/:id', getProductsController)
products.post('/', createProductsController)
products.put('/:id', updateProductsController)
products.delete('/:id', deleteProductsController)
products.patch('/nome/:id', editNamreProductsController)

export default products