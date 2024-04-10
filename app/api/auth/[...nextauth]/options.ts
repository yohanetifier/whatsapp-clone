import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const options: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId:
				'598678747858-89if6pvkaglipdj8enfahaqappnm8954.apps.googleusercontent.com',
			clientSecret: process.env.GOOGLE_SECRET as string
		})
	],
	callbacks: {
		async signIn({ user }) {
			if (user.email) {
				return true;
			} else {
				return false;
			}
		},
		jwt: async ({ token }) => {
			return token;
		},
		session: async ({ session }) => {
			return session;
		}
	}
};
