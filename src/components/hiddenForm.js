import React from 'react'

export default function HiddenForm() {
    return (
        <form
        name="contact"
        method="post"
        className="hidden"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>
            First name:
            <br />
            <input className="mb-3" type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Last name:
            <br />
            <input className="mb-3" type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email:
            <br />
            <input className="mb-3" type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit" class="np-btn full-width-btn">Submit</button>
        </p>
      </form>
    )
}
