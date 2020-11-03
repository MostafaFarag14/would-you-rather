import { GET_QUESTIONS, SAVE_ANSWER_TO_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, ...action.questions }
    case SAVE_ANSWER_TO_QUESTION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.option]: {
            ...state[action.id][action.option],
            votes: state[action.id][action.option].votes.concat(action.authedUser)
          }
        }
      }
      
    default:
      return state
  }
}