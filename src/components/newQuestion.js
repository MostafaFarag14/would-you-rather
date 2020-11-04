import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Header, Form } from 'semantic-ui-react'
import { handleSaveQuestion } from '../redux/actions/shared'
import { useHistory } from 'react-router-dom'
function NewQuestion({ dispatch, authedUser }) {

  const [options, setOptions] = useState({ optionOne: '', optionTwo: '' })
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSaveQuestion(
      {
        optionOneText: options.optionOne,
        optionTwoText: options.optionTwo,
        author: authedUser
      }))
    setOptions({ optionOne: '', optionTwo: '' })
    history.push('/')
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form onSubmit={handleSubmit} style={{
        width: '50%', textAlign: 'center',
        border: '2px solid #b4b7ca26', padding: '20px'
      }} >
        <Header size='huge'>Create New Question</Header>
        <Header>Would you rather..</Header>
        <Form.Input placeholder='Enter Option One Text'
          value={options.optionOne}
          onChange={(e, { value }) => setOptions({ ...options, optionOne: value })}
        />

        <Header>OR</Header>
        <Form.Input placeholder='Enter Option Two Text'
          value={options.optionTwo}
          onChange={(e, { value }) => setOptions({ ...options, optionTwo: value })}
        />
        <Button disabled={(options.optionOne === '' || options.optionTwo === '')}
          primary>Submit</Button>
      </Form>

    </div>
  )
}

export default connect(
  ({ authedUser }) => ({
    authedUser,

  })
)(NewQuestion)