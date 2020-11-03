import { getInitialData, saveQuestionAnswer } from '../../utils/api'
import { getUsers, saveAnswerToUser } from './users'
import { getQuestions, saveAnswerToQuestion } from './questions'


export function handleInitialData() {
  return (dispatch) => (
    getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
      })
  )
}

export function handleSaveAnswer({ authedUser, id, option }) {
  return (dispatch) => {
    saveQuestionAnswer({ authedUser, id, option })
      .then(res => {
        dispatch(saveAnswerToUser({ authedUser, id, option }))
        dispatch(saveAnswerToQuestion({ authedUser, id, option }))
      })
      .catch(error => alert('error saving your answer'))
  }
}



