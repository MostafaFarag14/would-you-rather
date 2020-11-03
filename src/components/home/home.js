import React from 'react'
import { connect } from 'react-redux'
import Poll from '../poll/poll'
import { Tab } from 'semantic-ui-react'
function Home({ authedUser, questions, questionIDs, users }) {

  const unansweredQuestionsIDs = questionIDs.filter(questionID => {
    return !Object.keys(users[authedUser].answers).includes(questionID)
  })

  const answeredQuestionsIDs = Object.keys(users[authedUser].answers).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  const panes = [{ name: 'Unanswered Questions', value: unansweredQuestionsIDs },
  { name: 'Answered Questions', value: answeredQuestionsIDs }].map(object => ({
    menuItem: object.name,
    render: () => <Tab.Pane >{
      object.value.map(id => <Poll key={id} id={id} />)
    }
    </Tab.Pane>
  }))

  return (

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Tab style={{ minWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        menu={{ pointing: true }} panes={panes} />
    </div>
  )
}

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authedUser,
    users,
    questions,
    questionIDs: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}
export default connect(mapStateToProps)(Home) 