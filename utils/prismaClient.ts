import { PrismaClient } from '@prisma/client';

export const prismaInstance = () => {
	const prisma = new PrismaClient();
	return prisma;
};
