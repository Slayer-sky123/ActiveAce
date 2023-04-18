import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
  domain="dev-wr5qtpiri0xw2wn2.us.auth0.com"
  clientId="L4HU3rjRqWNHtpF8a3JpjtAVXl6PiZZR"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <App />
    </Auth0Provider>
 
)
