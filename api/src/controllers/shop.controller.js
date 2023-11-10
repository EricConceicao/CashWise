import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function purchaseIcon(req, res) {
    const { src } = req.body;

    
}

export default purchaseIcon