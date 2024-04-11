'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import CustomButton from '@/components/common/CustomButton';
import { SessionProvider } from 'next-auth/react';
import { useStore } from '@/store/store';
import { useRouter } from 'next/navigation';

const Page = () => {
	const router = useRouter();
	const { userInfo } = useStore((state) => ({
		userInfo: state.userInfo
	}));
	useEffect(() => {
		if (userInfo.name) {
			router.push('/login');
		}
	}, []);
	return (
		<SessionProvider>
			<div className={styles.wrapper}>
				<div className={styles.topwrapper}>
					<div className={styles.img}>
						<Image
							src=""
							alt=""
							width={0}
							height={0}
							className={styles.image}
						/>
					</div>
					<h1 className={styles.title}>Whatsapp</h1>
				</div>
				<CustomButton />
			</div>
		</SessionProvider>
	);
};

export default Page;
