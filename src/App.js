import React from 'react'
import Header from './components/SiteStructure/Header/Header'
import Routes from './router/Routes'
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  )
}

export default App
