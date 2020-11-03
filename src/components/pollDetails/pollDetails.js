import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { Form, Radio, Image, Header, Button } from 'semantic-ui-react';
import AnsweredPoll from '../answeredPoll/answeredPoll'
import { handleSaveAnswer } from '../../redux/actions/shared'
function PollDetails({ authedUser, questions, users, dispatch }) {
  const [option, setOption] = useState('optionOne')
  const { id } = useParams();
  if (Object.keys(questions).includes(id) === false) { return <p>Question doesn't exist</p> }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ authedUser, id, option })
    dispatch(handleSaveAnswer({ authedUser, id, option }))
  }

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

  return (
    < div style={{ display: 'flex', justifyContent: 'center' }}>
      {answeredByAuthedUser ?
        <AnsweredPoll result={result} />
        :
        <Form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: 'column' , alignItems:'center', width:'500px',
           border:'1px solid rgba(0,0,0,0.1)', padding:'20px'}}>
            <Header textAlign='center'>{result.name}</Header>
            <Image centered bordered size='small' circular src={result.avatarURL} />
            <Header>Would You Rather..</Header>
            <Form.Field>
              <Radio
                style={{ fontSize: '20px', marginTop: '20px' }}
                label={result.optionOneText}
                name='radioGroup'
                value='optionOne'
                checked={option === 'optionOne'}
                onChange={(e, { value }) => setOption(value)}
              />
            </Form.Field >
            <Form.Field>
              <Radio
                style={{ fontSize: '20px', marginTop: '20px' }}
                label={result.optionTwoText}
                name='radioGroup'
                value='optionTwo'
                checked={option === 'optionTwo'}
                onChange={(e, { value }) => setOption(value)}
              />
            </Form.Field>
            <Form.Field style={{ textAlign: 'center' }}>
              <Button primary>Submit Answer</Button>
            </Form.Field>
          </div>
        </Form>
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