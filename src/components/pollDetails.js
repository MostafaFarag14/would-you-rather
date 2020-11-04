import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Form, Radio, Image, Header, Button } from 'semantic-ui-react';
import AnsweredPoll from './answeredPoll'
import { formatPollResult } from '../utils/api'
import { handleSaveAnswer } from '../redux/actions/shared'


function PollDetails({ authedUser, questions, users, dispatch }) {
  const [option, setOption] = useState('optionOne')
  const { id } = useParams();
  if (Object.keys(questions).includes(id) === false) { return <p>Question doesn't exist</p> }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(handleSaveAnswer({ authedUser, id, option }))
  }

  const answeredByAuthedUser = Object.keys(users[authedUser].answers).includes(id)
  const result = formatPollResult(users, questions, authedUser, id)

  return (
    < div style={{ display: 'flex', justifyContent: 'center' }}>
      {answeredByAuthedUser ?
        <AnsweredPoll result={result} />
        :
        <Form onSubmit={handleSubmit}>
          <div style={{
            display: "flex", flexDirection: 'column', alignItems: 'center', width: '500px',
            border: '1px solid #0000001a', padding: '20px'
          }}>
            <Header textAlign='center'>{result.name}</Header>
            <Image centered bordered size='small' circular src={result.avatarURL} />
            <Header>Would You Rather..</Header>

            {
              [{ label: result.optionOneText, value: 'optionOne' },
              { label: result.optionTwoText, value: 'optionTwo' }].map((object, index) => (
                <Form.Field key={index}>
                  <Radio
                    style={{ fontSize: '20px', marginTop: '20px' }}
                    label={object.label}
                    name='radioGroup'
                    value={object.value}
                    checked={option === object.value}
                    onChange={(e, { value }) => setOption(value)}
                  />
                </Form.Field >
              ))
            }

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