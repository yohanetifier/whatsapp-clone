import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDpUQn5QDFIQYaF5WKL1sUQ8rBrAegSAmA',
	authDomain: 'whatsapp-clone-621b7.firebaseapp.com',
	projectId: 'whatsapp-clone-621b7',
	storageBucket: 'whatsapp-clone-621b7.appspot.com',
	messagingSenderId: '801307123752',
	appId: '1:801307123752:web:2c2e7fa6a5e5c50a27951d'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
