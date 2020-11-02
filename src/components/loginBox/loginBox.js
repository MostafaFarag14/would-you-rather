import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Sarah Edo',
    value: 'sarahedo',
    image: { avatar: true, src: 'https://iili.io/38O2s9.png' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
  }
]
export default function LoginBox() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <Dropdown
        placeholder='Select Friend'
        selection
        options={friendOptions}
        onChange={(e, props) => console.log(props.value)}
      />
    </div>
  )
}
