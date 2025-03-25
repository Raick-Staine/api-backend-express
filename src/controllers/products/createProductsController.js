import { create } from "../../models/productsModel.js"

export default async function (req, res){
    const product = req.body
    
    //TODO: Validar os dados do usuário
    const result = await create(product)

    if(!result){
        return res.status(500).json({
            message: "Erro ao adicionar produto!"
        })
    }

    return res.json({
        message: "Produto adicionado com sucesso!",
        product: result
    })
}