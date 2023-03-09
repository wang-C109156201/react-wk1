import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './assets/pages/Home';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home></Home>
    </div>
  )
}

export default App
