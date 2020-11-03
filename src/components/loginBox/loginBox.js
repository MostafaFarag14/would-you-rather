import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Dropdown, Button } from 'semantic-ui-react'
import { setAuthedUser } from '../../redux/actions/authedUser'

// const friendOptions = [
//   {
//     key: 'sarahedo',
//     text: 'Sarah Edo',
//     value: 'sarahedo',
//     image: { avatar: true, src: 'https://iili.io/38O2s9.png' },
//   },
//   {
//     key: 'tylermcginnis',
//     text: 'Tyler McGinnis',
//     value: 'tylermcginnis',
//     image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
//   },
//   {
//     key: 'johndoe',
//     text: 'John Doe',
//     value: 'johndoe',
//     image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
//   }
// ]

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
    // history.push('/')
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form
        style={{
          display: 'flex', justifyContent: 'center',
          flexDirection: 'column', height: '50vh', width: '30vw'
        }}
        onSubmit={handleSubmit}
      >
        <Dropdown
          placeholder='Select User'
          selection
          options={friendOptions}
          value={user}
          onChange={handleChange}
        />
        <Button color='green' disabled={user === ''} style={{ margin: '20px' }}>Sign In</Button>
      </form>
    </div>
  )
}

export default connect(
  (state) => ({
    users: state.users
  })
)(LoginBox);