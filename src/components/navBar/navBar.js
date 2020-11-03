import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Image, Menu } from 'semantic-ui-react'
import { setAuthedUser } from '../../redux/actions/authedUser'
class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    name === 'logout' ?
      this.props.dispatch(setAuthedUser(null))
      :
      this.setState({ activeItem: name })
  }
  render() {
    const { activeItem } = this.state
    const { authedUser, users } = this.props
    return (
      <Menu secondary>

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
                <Image src='https://iili.io/38O2s9.png' avatar />
              </Menu.Item>
              <Menu.Item as={Button} name='logout' active={activeItem === 'logout'}
                onClick={this.handleItemClick} />
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