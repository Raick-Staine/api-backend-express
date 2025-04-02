import { list } from "../../models/productsModel.js"

export default async function listProductsController(req, res) {

    const result = await list()

    return res.json(result)
}