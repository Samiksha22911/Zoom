import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Router>


     <Routes>

       {/* <Route path='/home' element= /> */}
        <Route path='/' element= {<LandingPage></LandingPage>} />
     </Routes>
    </Router>
    </>
  )
}

// export default App
