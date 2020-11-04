import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { handleInitialData } from '../redux/actions/shared'

import LoginBox from './loginBox'
import NavBar from './navBar'
import Home from './home'
import PollDetails from './pollDetails'
import LeaderBoard from './leaderBoard'
import NewQuestion from './newQuestion'
import LoadingBar from 'react-redux-loading';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props
    return (
      <div className='app'>
        <NavBar />
        <LoadingBar />
        {
          authedUser === null ?
            <LoginBox />
            :
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/leaderboard' component={LeaderBoard} />
              <Route path='/questions/:id' component={PollDetails} />
              <Route render={() => <div>Page Not Found</div>} />
            </Switch>
        }
      </div>
    )
  }
}

export default connect(
  (state) => ({
    authedUser: state.authedUser
  }))(App);
