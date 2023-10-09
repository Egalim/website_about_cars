import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header/Header'
import Cards from './Cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Cards />
    </>
  )
}

export default App
