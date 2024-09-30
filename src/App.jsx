import { useState } from 'react'
import {ToDoWrapper} from './components/ToDoWrapper.jsx'
function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <ToDoWrapper/>
      </div>
     
    </>
  )
}

export default App
