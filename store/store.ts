import { create } from 'zustand';
import { types } from './types';
import { persist } from 'zustand/middleware';

type Action = {
	type: string;
	userInfo: { email: string; name: string };
};

interface InitialState {
	userInfo: {
		email?: string;
		name?: string;
	};
}

type StoreActions = {
	// eslint-disable-next-line no-unused-vars
	dispatch: (action: Action) => void;
};

const reducer = (state: InitialState, action: Action) => {
	switch (action.type) {
		case types.LOGIN_SUCCESS:
			return {
				...state,
				userInfo: {
					...state.userInfo,
					email: action.userInfo.email,
					name: action.userInfo.name
				}
			};
		default:
			return state;
	}
};

export const useStore = create<InitialState & StoreActions>()(
	persist(
		(set) => ({
			userInfo: {},
			dispatch: (args) => set((state) => reducer(state, args))
		}),
		{ name: 'app-store' }
	)
);
