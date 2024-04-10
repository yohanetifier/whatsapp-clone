import { create } from 'zustand';
import { types } from './types';

const reducer = (state, action) => {
	switch (action.type) {
		case types.LOGIN_SUCCESS:
			return {
				...state,
				userInfo: {
					...state.userInfo,
					email: action.userInfo.email
				}
			};
		default:
			return state;
	}
};

export const useStore = create((set) => ({
	userInfo: {},
	dispatch: (args) => set((state) => reducer(state, args))
}));
