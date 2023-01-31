import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Auth0Provider
      domain='carobte-dev.us.auth0.com'
      clientId='aONrepUxVf9bOTZDI3hyhPNmd7YqhQ2B'
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </>
);

