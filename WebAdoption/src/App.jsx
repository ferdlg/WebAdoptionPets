import Card from './components/card'
import './App.css'


function App() {
  const handleEvent = ()=>{
    alert("click")
  }

  return (
    <>
  
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
