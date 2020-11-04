import React from 'react'
import { connect } from 'react-redux'
import { Grid, Container } from 'semantic-ui-react'
import LeaderBoardField from './leaderBoardField'
function LeaderBoard({ userIDs }) {
  return (
    <Container textAlign='center'>
      <Grid celled='internally' >
        {
          userIDs.map(id => (<LeaderBoardField key={id} id={id}/>))
        }
      </Grid>
    </Container >
  )
}

export default connect(
  ({users}) => ({
    userIDs: Object.keys(users).sort((a,b) => {
      const totalOfA = Object.keys(users[a].answers).length + users[a].questions.length
      const totalOfB = Object.keys(users[b].answers).length + users[b].questions.length
      return totalOfB - totalOfA
    })
  })
)(LeaderBoard)