import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Image, Menu } from 'semantic-ui-react'
import { setAuthedUser } from '../redux/actions/authedUser'
class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }
  handleLogOut = () => {
    this.props.dispatch(setAuthedUser(null))

  }
  render() {
    const { activeItem } = this.state
    const { authedUser, users } = this.props
    return (
      <Menu >

        <Menu.Item as={Link} active={activeItem === 'home'} to='/' name='home'
          onClick={this.handleItemClick}>Home</Menu.Item>

        <Menu.Item as={Link} active={activeItem === 'add'} to='/add' name='add'
          onClick={this.handleItemClick}>New Question</Menu.Item>

        <Menu.Item as={Link} active={activeItem === 'leaderboard'} to='/leaderboard' name='leaderboard'
          onClick={this.handleItemClick}>Leader Board</Menu.Item>
        {
          authedUser === null ? null :
            <Menu.Menu position='right'>
              <Menu.Item>
                Hello, {users[authedUser].name}
              </Menu.Item>
              <Menu.Item>
                <Image src={users[authedUser].avatarURL} avatar />
              </Menu.Item>
              <Menu.Item >
                <Button color='red' onClick={this.handleLogOut}>Log Out</Button>
              </Menu.Item>
            </Menu.Menu>
        }
      </Menu>
    )
  }
}

export default connect(
  ({ authedUser, users }) => ({
    users,
    authedUser
  })
)(NavBar)