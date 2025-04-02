import { updateName } from "../../models/productsModel.js";

export default async function (req, res) {
    const { id } = req.params;
    const { quantidade } = req.body;

    // Converte quantidade para número inteiro
    const parsedQuantidade = parseInt(quantidade, 10);
    if (isNaN(parsedQuantidade)) {
        return res.status(400).json({
            error: "O valor de quantidade é inválido. Deve ser um número inteiro.",
        });
    }

    try {
        const result = await updateName(+id, parsedQuantidade);

        if (!result) {
            return res.status(404).json({
                error: "Produto não encontrado",
            });
        }

        return res.json({
            message: "Quantidade do produto atualizada com sucesso",
            product: result,
        });
    } catch (error) {
        console.error("Erro ao atualizar a quantidade do produto:", error.message);
        return res.status(500).json({
            error: "Erro interno no servidor",
        });
    }
}