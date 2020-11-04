import { saveQuestion } from '../../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_ANSWER_TO_QUESTION = 'SAVE_ANSWER_TO_QUESTION';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export function saveAnswerToQuestion({ authedUser, id, option }) {
  return {
    type: SAVE_ANSWER_TO_QUESTION,
    authedUser,
    id,
    option
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
      .then( () => dispatch(hideLoading()))
  }
}