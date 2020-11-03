import React from 'react'
import { Card, Header, Icon, Image, Progress } from 'semantic-ui-react'

const AnsweredPoll = ({ result }) => {
  const { name, avatarURL, all, authedUserChoice, optionOne, optionOneText, optionTwo, optionTwoText } = result
  return (
    <Card style={{ minWidth: '500px' }}>

      <Card.Content textAlign='center'>
        <Card.Header>Asked By {name}</Card.Header>
      </Card.Content>
      <Image centered src={avatarURL} size='small' bordered circular />

      <Header textAlign='center' size='medium'>Results</Header>
      <Card.Content>

        <div style={{ display: 'flex', justifyContent: 'space-between' , margin:'10px 0'}}>
          <Header size='small'>would you rather {optionOneText} ?</Header>
          {
            authedUserChoice === 1 && <Icon name='pointing left' size='big' floated='right' />
          }
        </div>
        <Progress percent={Math.round((optionOne / all) * 100)} progress indicating>
          {optionOne} of {all} votes
          </Progress>

      </Card.Content>
      <Card.Content>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin:'10px 0'}}>
          <Header size='small'>would you rather {optionTwoText} ?</Header>
          {
            authedUserChoice === 2 && <Icon name='pointing left' size='big' floated='right' />
          }
        </div>
        <Progress percent={Math.round((optionTwo / all) * 100)} progress indicating>
          {optionTwo} of {all} votes
          </Progress>
      </Card.Content>

    </Card>
  )

}
export default AnsweredPoll