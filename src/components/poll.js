import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Image, Button, Header } from 'semantic-ui-react'
import { formatDate } from '../utils/api'
function Poll({ id, users, questions }) {

  const name = users[questions[id].author].name
  const avatarURL = users[questions[id].author].avatarURL

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          avatar
          src={avatarURL}
        />
        <Card.Header >{name} asks:</Card.Header>
        <Card.Meta>{formatDate(questions[id].timestamp)}</Card.Meta>
        <Card.Description>
          <Header size='small'>would you rather</Header>
          {questions[id].optionOne.text}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui'>
          <Link to={`questions/${id}`} style={{ width: '100%' }}>
            <Button basic color='green' fluid>
              View Poll
          </Button>
          </Link>
        </div>
      </Card.Content>
    </Card>
  )
}

export default connect(
  (state) => ({
    users: state.users,
    questions: state.questions
  })
)(Poll)