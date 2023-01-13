import { useState } from 'react'
import emailjs from '@emailjs/browser'
import github from '/github.png'
import linkdin from '/linkdin.png'

export default function contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handleFormChange(event) {
    const { name, value } = event.target

    setForm(prev => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  function sendEmail(event) {
    event.preventDefault()
    emailjs
      .send('service_fywxz7j', 'template_sqf512o', form, 'TrChl4GBeQCTVMLxW')
      .then(res => {
        setForm({ name: '', email: '', message: '' })
        alert('Message Sent')
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="bg-dark mt-5 contact--wrapper" id="cont" name="contactSec">
      <div className="container">
        <div className="row">
          <div className=" col-sm-6 about contact rounded me-5">
            <h2>Contact Me</h2>
            <p className="m-0">trenton0fisher@gmail.com</p>
            <a href="">
              <img src={linkdin} alt="Linkdin Logo" className="linkdin--logo" />
            </a>
            <a href="">
              <img src={github} alt="Github Logo" className="github--logo" />
            </a>
            <p>I am currently a third year studunt studying computer science</p>
          </div>

          <form className="py-3 col " onSubmit={sendEmail}>
            <div className="form-group my-3">
              <label htmlFor="textInput">Name:</label>
              <input
                type="text"
                className="form-control shadow-lg"
                id="textInput"
                onChange={handleFormChange}
                name="name"
                value={form.name}
              />
            </div>
            <div className="form-group my-3 shadow-lg">
              <label htmlFor="emailInput ">Email:</label>
              <input
                type="email"
                className="form-control "
                id="emailInput"
                onChange={handleFormChange}
                name="email"
                value={form.email}
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="textArea">Message:</label>
              <textarea
                className="form-control shadow-lg"
                id="textArea"
                rows="3"
                onChange={handleFormChange}
                name="message"
                value={form.message}
              ></textarea>
            </div>
            <button>Sumbit Email</button>
          </form>
        </div>
      </div>
    </div>
  )
}
