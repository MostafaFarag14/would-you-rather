import { GET_USERS, SAVE_ANSWER_TO_USER } from '../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, ...action.users }
    case SAVE_ANSWER_TO_USER:
      return {
        ...state,
        [action.authedUser]:
        {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.id]: action.option
          }
        }
      }
    default:
      return state
  }
}
