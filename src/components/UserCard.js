import React from 'react'
import {Card} from 'react-bootstrap'
function UserCard({user}) {
  return (
    <div>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>NAME: {user.name}</Card.Title>
    <Card.Title>USERNAME: {user.username}</Card.Title>
    <Card.Text>EMAIL: {user.email} </Card.Text>
    <Card.Text>PHONE: {user.phone} </Card.Text>
    <Card.Text>WEBSITE: {user.website} </Card.Text>
  </Card.Body>
</Card>
    </div>
  )
}

export default UserCard