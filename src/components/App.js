import { Route, Switch } from 'react-router-dom';
import React from 'react'
import './App.css';
import LoginBox from './loginBox/loginBox'
import NavBar from './navBar/navBar'
import Home from './home/home'
import PollDetails from './pollDetails/pollDetails'
import { connect } from 'react-redux'
import { handleInitialData } from '../redux/actions/shared'
class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props
    return (
      <div className='app'>
        <NavBar />
        {
          authedUser === null ?
            <LoginBox />
            :
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/add' render={() => <div>welcome , add a question</div>} />
              <Route path='/leaderboard' render={() => <div>welcome to leader board</div>} />
              <Route path='/question/:id' component={PollDetails} />
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
