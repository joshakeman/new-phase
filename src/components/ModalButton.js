import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalInputs from './ModalInputs'

import npfLogo from '../images/npf_logo.png'

function ModalButton({ isHeader }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
      <div class={isHeader? "np-btn big-btn header-btn":"np-btn big-btn"} onClick={handleShow}>Free Consultation</div>
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <div className="modal-content-wrap">
                <div className="modal-head">
                    <h1 className="festivo nf-modal-header">Free Consultation</h1>
                </div>
                <Modal.Body>
                <p>
                In-home or virtual sessions available via 
                Zoom, Google Hangouts, or Facebook.
                </p>
                <h4 className="festivo">
                    in-home $52 per session <br></br> 
                    virtual $44 per session
                </h4>
                <h2 className="amienne speak-with-annie">
                Speak with Annie today <br></br>
                About Getting Started
                </h2>
                
                <ModalInputs 
                  handleClose={handleClose}
                  />

                </Modal.Body>
                {/* <Modal.Footer>
                <div class="np-btn" onClick={handleClose}>Close</div>
                </Modal.Footer> */}
                {/* <div class="np-btn" onClick={handleClose}>Close</div> */}
                <div className="modal-foot">
                  <p onClick={handleClose} className="close-btn">close</p>
                </div>
                <img src={npfLogo} className="modal-logo" />
            </div>
        </Modal>
      </>
    );
  }

export default ModalButton
    
