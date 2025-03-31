import { useState } from 'react'
import './App.css'
import Footer from './components/Footer.jsx'
import Control from './components/Control.jsx'
import Header from './components/Header.jsx'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Header /> 
        <Control />
        <Footer />
      </div>
    </>
  )
}

export default App
