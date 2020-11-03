export const GET_USERS = 'GET_USERS';
export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER'

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  }
}

export function saveAnswerToUser({ authedUser, id, option }) {
  return {
    type: SAVE_ANSWER_TO_USER,
    authedUser,
    id,
    option
  }
}