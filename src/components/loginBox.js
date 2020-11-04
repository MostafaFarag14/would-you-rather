import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Dropdown, Button, Container } from 'semantic-ui-react'
import { setAuthedUser } from '../redux/actions/authedUser'


function LoginBox({ dispatch, users }) {
  const friendOptions = Object.keys(users).map(id => (
    {
      key: id,
      text: users[id].name,
      value: id,
      image: { avatar: true, src: users[id].avatarURL }
    }
  ))

  const [user, setUser] = useState('')

  const handleChange = (e, dropDownProps) => {
    const { value } = dropDownProps
    setUser(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setAuthedUser(user))
  }
  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <form className='signin-form' onSubmit={handleSubmit}>
        <Dropdown
          placeholder='Select User'
          selection
          options={friendOptions}
          value={user}
          onChange={handleChange}
        />
        <Button color='green' disabled={user === ''} style={{ margin: '20px' }}>Sign In</Button>
      </form>
    </Container>
  )
}

export default connect(
  (state) => ({
    users: state.users
  })
)(LoginBox);