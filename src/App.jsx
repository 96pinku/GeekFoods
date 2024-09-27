import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Section3 from './Components/Section3/Section3'
import Footer from './Components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>

      <Footer></Footer>
    </>
  )
}

export default App
