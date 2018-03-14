import {MAKE_GUESS, CHANGE_FEEDBACK, RESET_GAME} from "./actions/types";

const initialState = {
	guesses: [],
	feedback: 'Make your guess!',
};

export const reducer = (state=initialState, action) => {
	switch(action.type) {
		case MAKE_GUESS:
			return {
				...state,
				guesses: [...state.guesses, action.payload]
			};
		case CHANGE_FEEDBACK:
			return {
				...state,
				feedback: action.payload
			};
		case RESET_GAME:
			return {
				...initialState
			};
		default:
			return state;
	}
};