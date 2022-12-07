import { SEARCH_BEGIN, SEARCH_SUCESSFULL, SEARCH_FAILURE } from "../actions";

const INITIAL_STATE = {
	  name: '',
	gender: '',
	culture: '',
  titles: [],
  aliases: [],
	isLoading: false,
}

function appReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SEARCH_BEGIN:
			return {
				...state,
				isLoading: true,
			}
		case SEARCH_SUCESSFULL:
			return {
				...state,
				isLoading: false,
				name: action.character.name,
				gender: action.character.gender,
				culture: action.character.culture,
				titles: action.character.titles,
				aliases: action.character.aliases,
			}
			case SEARCH_FAILURE:
				return {
					...state,
					isLoading: false,
					errorMessage: action.error,
				}
		default:
			return state;
	}
}

export default appReducer;