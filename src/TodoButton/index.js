import './TodoButton.css';

function TodoButton({setOpenModal}){
    return(
        <button className='TodoButton' onClick={ () =>{ setOpenModal(state => !state)
        }
    }
    >+</button>
    )
}

export {TodoButton}