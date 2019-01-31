import React from 'react'
import {Router} from '@reach/router'

import GlobalStyles from './shared/styles/GlobalStyles'

import Home from './pages/Home'
import Join from './pages/Join'
import ApiProvider from './api/client'

function App() {
  return (
    <ApiProvider>
      <div>
        <GlobalStyles />
        <Router>
          <Home path="/" />
          <Join path="/join" />
        </Router>
      </div>
    </ApiProvider>
  )
}

export default App
