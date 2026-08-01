import { useState } from 'react'
import example from './assets/img.webp'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './navbar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h3>Apna Video Call</h3> */}
      <Navbar Name="Welcome Samiksha!" />
      <h1>Connect with your loved ones</h1>
      <h3>Cover a distance by apna video call</h3>
      <button>Get Started</button>
      <example/>
    </>
  )
}

export default App
