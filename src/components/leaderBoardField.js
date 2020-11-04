import React from 'react'
import { connect } from 'react-redux'
import { Grid, Image, Header } from 'semantic-ui-react'

function LeaderBoardField({ id, users }) {

  const answeredQuestionsCount = Object.keys(users[id].answers).length
  const QuestionsCount = users[id].questions.length

  return (
    <Grid.Row style={{ border: '1px solid #0000001a' }}>

      <Grid.Column width='2' verticalAlign='middle'>
        <Image size='small' circular src={users[id].avatarURL} />
      </Grid.Column>

      <Grid.Column width='10'>
        <Header size='large'>{users[id].name}</Header>

        <Grid celled='internally'>
          {[{ name: 'Answered questions', value: answeredQuestionsCount },
          { name: 'Created questions', value: QuestionsCount }].map((object, index) => (
            <Grid.Row key={index}>
              <Grid.Column width='6'>
                <Header floated='left'>{object.name}</Header>
              </Grid.Column>
              <Grid.Column floated='right'>
                <Header>{object.value}</Header>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>

      </Grid.Column >

      <Grid.Column width='3' floated='right'>
        <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #0000001a' }}>
          <div style={{ padding: '10px 20px', backgroundColor: '#e2e2e2', borderBottom: '1px solid #0000001a' }}>
            <Header>Score</Header>
          </div>

          <div style={{ padding: '15%' }}>
            <Header size='huge' color='teal'>{answeredQuestionsCount + QuestionsCount}</Header>
          </div>

        </div>
      </Grid.Column>

    </Grid.Row>
  )
}

export default connect(
  ({ users }) => (
    {
      users
    }
  )
)(LeaderBoardField)