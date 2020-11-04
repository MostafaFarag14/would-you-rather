import React from 'react'
import { Card, Header, Icon, Image, Progress } from 'semantic-ui-react'

const styles = {
  questionDiv: {
    display: 'flex', justifyContent: 'space-between', margin: '10px 0',
  }
}

const AnsweredPoll = ({ result }) => {
  const { name, avatarURL, all, authedUserChoice, optionOne, optionOneText, optionTwo, optionTwoText } = result
  const options = [
    {
      count: optionOne,
      text: optionOneText,
      number: 1
    },
    {
      count: optionTwo,
      text: optionTwoText,
      number: 2
    }
  ]
  return (
    <Card style={{ minWidth: '500px' }}>

      <Card.Content textAlign='center'>
        <Card.Header>Asked By {name}</Card.Header>
      </Card.Content>
      <Image centered src={avatarURL} size='small' bordered circular />
      <Header textAlign='center' size='medium'>Results</Header>

      {options.map((value, index) => {
        return (<Card.Content key={index} style={{ backgroundColor: authedUserChoice === value.number ? '#bfcee866' : '' }}>

          <div style={styles.questionDiv}>
            <Header size='small'>would you rather {value.text} ?</Header>
            {authedUserChoice === value.number && <Icon name='pointing left' size='big' floated='right' />}
          </div>

          <Progress percent={Math.round((value.count / all) * 100)} progress indicating>
            {value.count} of {all} votes</Progress>

        </Card.Content>)
      })}

    </Card>
  )

}
export default AnsweredPoll