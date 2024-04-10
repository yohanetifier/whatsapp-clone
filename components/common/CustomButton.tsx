'use client';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import styles from './CustomButton.module.scss';
import { firebaseAuth } from '@/lib/FirebaseConfig';
import { checkUser } from '@/actions/actions';
import { useStore } from '@/store/store';
import { types } from '@/store/types';
import { SessionProvider, signIn } from 'next-auth/react';

interface Props {}

const CustomButton = (props: Props) => {
	const dispatch = useStore((state) => state.dispatch);
	const userInfo = useStore((state) => state.userInfo);
	// const handleLogin = async () => {
	// 			if (email) {
	// 		const user = await checkUser(email, name!);
	// 		if (user) {
	// 		}
	// 		dispatch({
	// 			type: types.LOGIN_SUCCESS,
	// 			userInfo: { email }
	// 		});
	// 	}
	// };

	return (
		<SessionProvider>
			<button className={styles.button} onClick={() => signIn('google')}>
				<FcGoogle className={styles.icon} />
				<p>Login with Google </p>
			</button>
		</SessionProvider>
	);
};

export default CustomButton;
