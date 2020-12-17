import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import personIcon from '../images/person_outline-24px.svg'
import emailIcon from '../images/email-24px.svg'

const ModalInputs = ({ handleClose }) => {
  return (
    <form netlify className="inputs-wrapper" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1"><img src={personIcon} style={{marginBottom:0}} /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            placeholder="First Name"
            aria-label="firstname"
            aria-describedby="basic-addon1"
            />
        </InputGroup>
      
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1"><img src={personIcon} style={{marginBottom:0}} /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            placeholder="Last Name"
            aria-label="lastname"
            aria-describedby="basic-addon1"
            />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1"><img src={emailIcon} style={{marginBottom:0}} /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            placeholder="Email"
            aria-label="email"
            aria-describedby="basic-addon1"
            />
        </InputGroup>

        <button type="submit" class="np-btn full-width-btn" onClick={handleClose}>Submit</button>
    </form>
  );
};

export default ModalInputs;