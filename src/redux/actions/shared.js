import { getInitialData, saveQuestionAnswer } from '../../utils/api'
import { getUsers, saveAnswerToUser } from './users'
import { getQuestions, saveAnswerToQuestion } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
      })
      .then(() => dispatch(hideLoading()))
  }
}

export function handleSaveAnswer({ authedUser, id, option }) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer({ authedUser, id, option })
      .then(res => {
        dispatch(saveAnswerToUser({ authedUser, id, option }))
        dispatch(saveAnswerToQuestion({ authedUser, id, option }))
      })
      .then(() => dispatch(hideLoading()))
      .catch(error => alert('error saving your answer'))
  }
}



