import React from 'react';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <p>
              Hey {user.username}! welcome to my site, with auth!
            </p>
            <ul>
              <li>Username: {user.username}</li>
              <li>Email: {user.attributes.email}</li>
              <li>Verified: {user.attributes.email_verified ? 'Email has been verified :)' : 'Not yet verified :('}</li>
            </ul>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default App;
