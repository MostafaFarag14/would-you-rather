import { _getQuestions, _getUsers, _saveQuestionAnswer, _saveQuestion } from './_DATA'

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

export function saveQuestion({ optionOneText, optionTwoText, author }) {
  return _saveQuestion({ optionOneText, optionTwoText, author })
}

export function formatPollResult(users, questions, authedUser, id) {
  return {
    name: users[questions[id].author].name,
    avatarURL: users[questions[id].author].avatarURL,
    optionOneText: questions[id].optionOne.text,
    optionTwoText: questions[id].optionTwo.text,
    all: questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length,
    optionOne: questions[id].optionOne.votes.length,
    optionTwo: questions[id].optionTwo.votes.length,
    authedUserChoice: questions[id].optionOne.votes.includes(authedUser) ?
      1 :
      questions[id].optionTwo.votes.includes(authedUser) ? 2 : 0
  }
}