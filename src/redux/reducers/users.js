import { GET_USERS, SAVE_ANSWER_TO_USER } from '../actions/users'
import { SAVE_QUESTION} from '../actions/shared'
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
      case SAVE_QUESTION:
        return {
          ...state,
          [action.question.author] : {...state[action.question.author], questions: state[action.question.author].questions.concat(action.question.id)}

        }
    default:
      return state
  }
}


