export const SEARCH_BEGIN = 'SEARCH_BEGIN'
export const SEARCH_SUCESSFULL = 'SEARCH_SUCESSFULL'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'

const searchBegin = () => ({
  type: SEARCH_BEGIN,
})

const searchSucessFull = (character) => ({
  type: SEARCH_SUCESSFULL,
  character,
})

const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  error,
})

export function fetchCharacter(name) {
  return async (dispatch) => {
    dispatch(searchBegin())
    try {
      const url = `https://anapioficeandfire.com/api/characters?name=${name}`
      const response = await fetch(url)
      const data = await response.json();
      dispatch(searchSucessFull(data[0]))
    } catch (error) {
      dispatch(searchFailure(error))
    }
  }
}