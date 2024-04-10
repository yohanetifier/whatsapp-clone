'use client';
import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import CustomButton from '@/components/common/CustomButton';

interface Props {}

const page = (props: Props) => {
	return (
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
	);
};

export default page;
