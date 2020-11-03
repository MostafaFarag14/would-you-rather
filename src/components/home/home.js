import React from 'react'
import { connect } from 'react-redux'
import Poll from '../poll/poll'
import { Tab } from 'semantic-ui-react'
function Home({ authedUser, questions, users }) {

  const unansweredQuestionsIDs = Object.keys(questions).filter(questionID => {
    return !Object.keys(users[authedUser].answers).includes(questionID)
  })

  const answeredQuestionsIDs = Object.keys(users[authedUser].answers)

  const panes = [
    {
      menuItem: 'Answered Questions',
      render: () => <Tab.Pane >{
        answeredQuestionsIDs.map(id => <Poll key={id} id={id} />)
      }
      </Tab.Pane>
    },
    {
      menuItem: 'Unanswered Questions',
      render: () => <Tab.Pane>
        {
          unansweredQuestionsIDs.map(id => <Poll key={id} id={id} />)
        }
      </Tab.Pane>
    }

  ]
  return (

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Tab style={{ minWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        menu={{ pointing: true }} panes={panes} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authedUser: state.authedUser,
    questions: state.questions,
    users: state.users
  }
}
export default connect(mapStateToProps)(Home) 