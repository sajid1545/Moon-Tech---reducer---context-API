import { actionTypes } from './actionTypes';

export const initialState = {
	loading: false,
	products: [],
	error: false,
	cart: [],
};

export const productReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.FETCH_START:
			return {
				...state,
				loading: true,
				error: false,
			};
		case actionTypes.FETCH_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload,
				error: false,
			};
		case actionTypes.FETCH_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
			};
		case actionTypes.ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		case actionTypes.REMOVE_FROM_CART:
			const id = action.payload._id;
			const newCart = state.cart.filter((item) => item._id !== id);

			return {
				...state,
				cart: newCart,
			};

		default:
			return state;
	}
};
