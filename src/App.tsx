import React from 'react'
import { Link, Router } from '@reach/router'
import Fish from './app/Fish'

function App() {
  return (
    <div className="App">
      <Router>
        <Fish path="/fish" />
      </Router>
    </div>
  )
}

export default App
