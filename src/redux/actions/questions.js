
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_ANSWER_TO_QUESTION = 'SAVE_ANSWER_TO_QUESTION';

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