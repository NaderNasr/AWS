import React from 'react';
import './App.css';
import { Button, Card } from 'react-bootstrap';


import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div>
      <Authenticator className="App">
        {({ signOut, user }) => (
          <div  className="App">
            <Card>
              <Card.Body>
                <Card.Title>Hey {user.username}! welcome to my site</Card.Title>
                <Card.Text>
                <ul>
              <li>Username: {user.username}</li>
              <li>Email: {user.attributes.email}</li>
              <li>Verified: {user.attributes.email_verified ? 'Email has been verified :)' : 'Not yet verified :('}</li>
            </ul>
                </Card.Text>
              </Card.Body>
              <Button style={{display:'flex', alignItems:'center'}} variant="danger" onClick={signOut}>Sign out</Button>
            </Card>
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default App;
