import Card from './components/card'
import Dogs from './pages/dogs/dogs';
import Cats from './pages/cats/cats';
import './App.css'
import Modal from './components/modal'


function App() {
  const handleEvent = ()=>{
    alert("click")
  }

  return (
    <>
      <h1>Hola mundo</h1>
      <Dogs></Dogs>
      <Cats></Cats>
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

export default App;
