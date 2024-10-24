import { useState } from 'react'
import viteLogo from '/vite.svg'
import Card from './components/card'
import Button from './components/button'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const handleEvent=()=>{
    alert("boton activado");
  }

  return (
    <>
  
      <h1>t</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}
          count is {count}
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Card
        title="Tarjeta de adopcion a mascota"
        description=""
        imageUrl=""
        buttonLabel="CLICK"
        onClick={handleEvent}

        
      />
    </>
  )
}

export default App
