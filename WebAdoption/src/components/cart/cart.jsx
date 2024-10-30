import '../../assets/styles/components/_cart.css'
import { useSelector } from 'react-redux';
import { setPets } from '../../redux/Slices/cartSlice';

const Cart =({onClose})=>{

    const pets = useSelector(state => state.cart.pets);
    console.log('Pets',pets)

    const handleClose =()=>{
        onClose();
    }
    
    return(
        <>
        <div className='cart__overlay' onClick={handleClose}>
        <div className="cart__container" onClick={(e) => e.stopPropagation()}>
            <div className="cart__header">
                <img className='cart__header--image--cat' src="https://i.pinimg.com/736x/e7/71/83/e77183e399b9b6754f3f5a29f365c1db.jpg" alt="" />
                <h2 className='cart__header--title'>Conoce a tus nuevos amigos de 4 patas</h2>
                
            </div>
            <div className="cart__body">
                <ul className='cart__body--listpets'>
                {pets.length > 0 ? (
                    pets.map(pet => (
                        <li key={pet.id} className="cart__body--listpets-pet">
                            <img src={pet.url} />
                            <p>{pet.name || 'Nombre no disponible'}</p>
                            <p>{pet.life_span || 'Edad no disponible'}</p>
                        </li>
                    ))
                ) : (
                    <p>No hay mascotas en el carrito.</p>
                )}
                </ul>
            </div>
            <div className="cart__footer--actions">
                    <button className='cart__footer--btn-adoption'>Adoptar</button>
                    <button className='cart__footer--btn-continue' onClick={handleClose}>Seguir explorando</button>
            </div>
        </div>
        </div>
        </>
    )
};
export default Cart;