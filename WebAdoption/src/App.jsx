import Card from './components/card'
import './App.css'
import Modal from './components/modal'


function App() {
 
  return (
    <>
    <div>
      <Card
        title="Tarjeta de adopcion a mascota"
        description=""
        imageUrl=""
        buttonLabel="Descripcion mascota"
        onClick={Modal}
      />
    </div>
    </>
  )
}

export default App
