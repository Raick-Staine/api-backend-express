import { remove } from "../../models/productsModel.js"

export default async function(req, res) {
    const { id } = req.params

    const result = await remove(+id)

    if(!result){
        return res.status(404).json({
            error: 'Produto não encontrado'
        })
    }

    return res.json({
        message: "Produto deletado com sucesso",
        product: result
    })
}