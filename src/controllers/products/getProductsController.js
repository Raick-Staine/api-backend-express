import { getById } from "../../models/productsModel.js"

export default async function getProductsController(req, res) {

    const { id } = req.params

    const result = await getById(+id)

    if(!result){
        return res.status(404).json({
            error: 'Produto não encontrado'
        })
    }

    return res.json({
        message: "Produto encontrado com sucesso",
        product: result
    })
}