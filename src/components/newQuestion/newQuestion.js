import React, { useState } from 'react'
import { Button, Header, Input, Form } from 'semantic-ui-react'
export default function NewQuestion() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>


      <Form style={{ width: '50%', textAlign: 'center' }} >
        <Header>Create New Question</Header>
        <Header>Complete the question</Header>
        <Header>Would you rather..</Header>
        <Form.Field>
          <Input placeholder='Enter Option One Text' />
        </Form.Field>
        <Header>OR</Header>
        <Form.Field>
          <Input placeholder='Enter Option Two Text' />
        </Form.Field>

        <Button color='instagram'>Submit</Button>
      </Form>

    </div>
  )
}
