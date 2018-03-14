import { MAKE_GUESS, CHANGE_FEEDBACK, RESET_GAME} from "./types";

export const makeGuess = payload => ({
	type: MAKE_GUESS,
	payload
});

export const changeFeedback = payload => ({
	type: CHANGE_FEEDBACK,
	payload
});

export const resetGame = () => ({
	type: RESET_GAME
});