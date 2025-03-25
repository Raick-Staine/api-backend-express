import { list } from "../../models/userModel.js"

export default async function listProductsController(req, res) {

    const result = await list()

    return res.json(result)
}