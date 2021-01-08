// import React from 'react';
// import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
// import personIcon from '../images/person_outline-24px.svg'
// import emailIcon from '../images/email-24px.svg'

// const ModalInputs = ({ handleClose }) => {
//   return (
//     <form netlify className="inputs-wrapper" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
//       <input type="hidden" name="form-name" value="contact" />
//         <InputGroup className="mb-3">
//             <InputGroup.Prepend>
//             <InputGroup.Text id="basic-addon1"><img src={personIcon} style={{marginBottom:0}} /></InputGroup.Text>
//             </InputGroup.Prepend>
//             <FormControl
//             placeholder="First Name"
//             aria-label="firstname"
//             aria-describedby="basic-addon1"
//             />
//         </InputGroup>
//         <InputGroup className="mb-3">
//             <InputGroup.Prepend>
//             <InputGroup.Text id="basic-addon1"><img src={personIcon} style={{marginBottom:0}} /></InputGroup.Text>
//             </InputGroup.Prepend>
//             <FormControl
//             placeholder="Last Name"
//             aria-label="lastname"
//             aria-describedby="basic-addon1"
//             />
//         </InputGroup>
//         <InputGroup className="mb-3">
//             <InputGroup.Prepend>
//             <InputGroup.Text id="basic-addon1"><img src={emailIcon} style={{marginBottom:0}} /></InputGroup.Text>
//             </InputGroup.Prepend>
//             <FormControl
//             placeholder="Email"
//             aria-label="email"
//             aria-describedby="basic-addon1"
//             />
//         </InputGroup>

//         <button type="submit" class="np-btn full-width-btn" onClick={handleClose}>Submit</button>
//     </form>
//   );
// };

// export default ModalInputs;
import React from 'react';
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ModalInputs() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
      <form
        name="contact"
        method="post"
        className="inputs-wrapper"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            First name:
            <br />
            <input className="mb-3" type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Last name:
            <br />
            <input className="mb-3" type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Email:
            <br />
            <input className="mb-3" type="email" name="email" onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit" class="np-btn full-width-btn">Submit</button>
        </p>
      </form>
  )
}