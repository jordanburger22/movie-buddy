import { useState } from "react"
import RandomMovie from "./components/RandomMovie"
import Navbar from "./components/Navbar"


function App() {

  const [theme, setTheme] = useState('light')

  function toggleTheme(){
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`${theme} main`}>
      <Navbar toggleTheme={toggleTheme}/>
      <RandomMovie />
    </div>
  )
}

export default App