import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './assets/pages/Home';
import  "antd/dist/reset.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
