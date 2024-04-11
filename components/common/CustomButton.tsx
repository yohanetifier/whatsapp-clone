'use client';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import styles from './CustomButton.module.scss';
import { signIn, useSession } from 'next-auth/react';
import { checkUser } from '@/actions/actions';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/store';
import { types } from '@/store/types';

const CustomButton = () => {
	const { dispatch } = useStore((state) => ({
		dispatch: state.dispatch
	}));
	const router = useRouter();
	const { data } = useSession();
	if (data?.user) {
		const handleLogin = async () => {
			const user = await checkUser(data!.user!.email!, data!.user!.name!);
			if (user) {
				dispatch({
					type: types.LOGIN_SUCCESS,
					userInfo: {
						email: data!.user!.email,
						name: data!.user!.name
					}
				});
				router.push('/login');
			}
		};
		handleLogin();
	}
	return (
		<button className={styles.button} onClick={() => signIn('google')}>
			<FcGoogle className={styles.icon} />
			<p>Login with Google </p>
		</button>
	);
};

export default CustomButton;
