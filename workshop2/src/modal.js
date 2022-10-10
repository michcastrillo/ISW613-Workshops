import React from "react";
import Modal from 'react-modal';
import './modal.css';

Modal.setAppElement(document.getElementById('root')); 

const customStyles = {
    content: {
        width: '30%',
        height: '25%',
        background: 'rgb(173 39 185 / 75%)',
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '93px'
    },
  };
function App() {

        const [modalIsOpen, setIsOpen] = React.useState(false);
      
        function openModal() {
          setIsOpen(true);
        }
        
  
        function closeModal() {
          setIsOpen(false);
        }
   

        return (
          <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
              isOpen={modalIsOpen}
            
              onRequestClose={closeModal}
              className="w_modal"
              style={customStyles}
             
            >
              <h2>I am a modal</h2>
              <form>
                <input className="i_modal"/> 
                <button className="b_modal">Aceptar</button>
                <button onClick={closeModal} className="b_modal">Cerrar</button>
              </form>
              
            </Modal>
          </div>
        );
    }
export default App;