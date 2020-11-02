import { Route } from 'react-router-dom';
import React from 'react'
import './App.css';
import LoginBox from './loginBox/loginBox'
import { connect } from 'react-redux'
import {handleInitialData} from '../redux/actions/shared'
class App extends React.Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    const authed = null
    return (
      <div >
        {
          authed === null ?
            <LoginBox />
            :
            <Route exact path='/' render={() => <div>welcome to board</div>} />
        }
      </div>
    )
  }
}

export default connect()(App);
