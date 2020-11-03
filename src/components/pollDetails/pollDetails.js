import React from 'react'
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { Icon } from 'semantic-ui-react';
import AnsweredPoll from '../answeredPoll/answeredPoll'

function PollDetails({ authedUser, questions, users }) {
  const { id } = useParams();
  if (Object.keys(questions).includes(id) === false) { return <p>Question doesn't exist</p> }

  const answeredByAuthedUser = Object.keys(users[authedUser].answers).includes(id)

  const result = {
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

  console.log(result.authedUserChoice)

  return (
    < div style={{ display: 'flex', justifyContent: 'center' }}>
      {
        answeredByAuthedUser ?
          <AnsweredPoll result={result} />
          :
          <div>

          </div>
      }
    </div >
  )
}

export default connect(
  (state) => ({
    authedUser: state.authedUser,
    questions: state.questions,
    users: state.users
  })
)(PollDetails)