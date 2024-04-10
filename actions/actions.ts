'use server';
import { User } from '@/typings/User';
import { prismaInstance } from '@/utils/prismaClient';
import { PrismaClient } from '@prisma/client';

const prisma = prismaInstance();

export const checkUser = async (email: User['email'], name: User['name']) => {
	if (email) {
		try {
			const user = await prisma.user.findUnique({ where: { email } });
			if (user) {
				return user;
			} else {
				const user = await prisma.user.create({
					data: { email, name }
				});
				return user;
			}
		} catch {
			throw new Error('Something went wrong');
		}
	} else {
		console.log('Please provide an email');
	}
};
