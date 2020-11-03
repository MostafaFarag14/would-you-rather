import { _getQuestions, _getUsers, _saveQuestionAnswer } from './_DATA'

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ])
    .then(([users, questions]) => ({
      users,
      questions
    }))
}

export function saveQuestionAnswer({ authedUser, id, option }) {
  return _saveQuestionAnswer({ authedUser, qid: id, answer: option })
}

export function formatDate(timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}