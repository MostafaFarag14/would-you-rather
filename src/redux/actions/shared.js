import { getInitialData, saveQuestionAnswer } from '../../utils/api'
import { getUsers, saveAnswerToUser } from './users'
import { getQuestions, saveAnswerToQuestion } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion } from '../../utils/api'
export const SAVE_QUESTION = 'SAVE_QUESTION';

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

export function handleSaveAnswer(answer) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer(answer)
      .then(res => {
        dispatch(saveAnswerToUser(answer))
        dispatch(saveAnswerToQuestion(answer))
      })
      .then(() => dispatch(hideLoading()))
      .catch(error => alert('error saving your answer'))
  }
}

export function saveQuestionToStore(question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

export function handleSaveQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestion(question)
      .then(question => dispatch(saveQuestionToStore(question)))
      .then(() => dispatch(hideLoading()))
  }
}
