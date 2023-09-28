import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactComp1 from './components/ReactComp1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Talwid Test</h1>
      <ReactComp1 username="Aman" btnVal="Click Me"/>
      <ReactComp1 username="Raj" btnVal="Visit me"/>
    </>
  )
}

export default App
