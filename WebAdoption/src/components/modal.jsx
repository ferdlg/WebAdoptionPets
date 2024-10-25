import '../assets/styles/components/modal.css';

const Modal = ()=>{
    const name = 'Gatito';
    const breeds = 'Gatito';
    const temperament = 'Gatito';
    const origin = 'Gatito';
    const lifeSpan = 'Gatito';
    const moreInfo = 'Gatito';
    
    return(
    <>
        <div className="containt__modal">
            <div className="containt__modal-pet-name">
                <h3>{name}</h3>
            </div>
            <div className="containt__modal-pet-info">
                <p>{breeds}</p>
                <p>{temperament}</p>
                <p>{origin}</p>
                <p>{lifeSpan}</p>
                <p>{moreInfo}</p>
            </div>
        </div>
    </>
)
}

export default Modal;