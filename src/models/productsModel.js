import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function create(product) {
    try {
        const result = await prisma.product.create({
            data: product
        });
        return result;
    } catch (error) {
        console.error("Error creating product:", error.message);
        throw error;
    }
}

export async function list(){
    const result = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            preco: true,
            quantidade: true,
            avatar: true
        }
    })
    return result
}

export async function getById(id){
    const result = await prisma.product.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            description: true,
            preco: true,
            quantidade: true,
            avatar: true
        }
    })
    return result
}

export async function remove(id){
    const result = await prisma.product.delete({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            description: true,
            preco: true,
            quantidade: true,
            avatar: true
        }
    })
    return result
}

export async function update(id, product){
    const result = await prisma.product.update({
        where: {
            id: id
        },
        data: product,
        select: {
            id: true,
            name: true,
            description: true,
            preco: true,
            quantidade: true,
            avatar: true
        }
    })
    return result
}

export async function updateName(id, quantidade){
    const result = await prisma.product.update({
        where: {
            id: id
        },
        data: {
            quantidade: quantidade
        },
        select: {
            id: true,
            name: true,
            description: true,
            preco: true,
            quantidade: true,
            avatar: true
        }
    })
    return result
}