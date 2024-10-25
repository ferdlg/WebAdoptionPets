import Card from './components/card'
import './App.css'
import Modal from './components/modal'


function App() {
  const handleEvent = ()=>{
    alert("click")
  }

  return (
    <>
    <div>
      <Card
        title="Tarjeta de adopcion a mascota"
        description=""
        imageUrl=""
        buttonLabel="CLICK"
        onClick={handleEvent}
      />
      <Modal></Modal>
    </div>
    </>
  )
}

export default App
