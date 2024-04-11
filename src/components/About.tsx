import { Element } from 'react-scroll'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Alert from '@mui/material/Alert'
import { Button } from '@mui/material'

export default function About() {
  const [emailLoading, setEmailLoading] = useState(false)
  const [emailSuccess, setEmailSuccess] = useState(false)
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    message: '',
  })

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEmailLoading(true)
    try {
      const res = await emailjs.send(
        'service_uzpfdbd',
        'template_sqf512o',
        formData,
        {
          publicKey: 'TrChl4GBeQCTVMLxW',
        }
      )
      if (res.status === 200) {
        setEmailSuccess(true)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setEmailLoading(false)
    }
  }

  return (
    <section className="flex max-md:flex-col md:h-screen items-center justify-center py-24 md:py-12">
      <div className="flex max-md:flex-col foggy-glass shadow-xl z-[400] p-12 rounded-xl">
        <div className=" md:w-3/5 md:mr-4 max-md:mb-4">
          <Element name="about">
            <h3 className="text-4xl font-bold mb-4">About Me</h3>
          </Element>
          <p className="md:text-left md:text-lg">
            Hi there! I'm Trenton Fisher, a passionate student pursuing a degree
            in Computer Science at Oregon State University. Technology has
            always fascinated me, and studying computer science has provided me
            with the perfect avenue to explore and continuously learn through
            coding. Beyond the screen, I find joy in a couple of personal
            hobbies as well. I'm an avid esports enthusiast, drawn to the
            competitive and strategic nature of gaming. When I'm not immersed in
            the digital world, you'll likely find me glued to the screen,
            following NFL and NBA games, cheering for my favorite teams and
            enjoying the thrill of the game.
          </p>
        </div>
        <div className=" flex flex-col md:w-3/5">
          <Element name="contact">
            <h3 className="text-4xl font-bold mb-4">Contact</h3>
          </Element>
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col mb-4 sm:flex-row">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-2">
                <label htmlFor="name" className="block text-left mb-1">
                  Name
                </label>
                <input
                  id="name"
                  className="w-full px-4 py-2 border text-white bg-[#2D2D2D] border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  value={formData.name}
                  name="name"
                  placeholder="Enter your name"
                  onChange={e =>
                    setFormData(prev => ({ ...prev, name: e.target.value }))
                  }
                  required
                  disabled={emailLoading}
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label htmlFor="email" className="block text-left mb-1">
                  Email
                </label>
                <input
                  id="email"
                  className="w-full px-4 py-2 border text-white bg-[#2D2D2D] border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  type="email"
                  value={formData.email}
                  placeholder="Enter your email"
                  name="email"
                  onChange={e =>
                    setFormData(prev => ({ ...prev, email: e.target.value }))
                  }
                  required
                  disabled={emailLoading}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-left mb-1">
                Subject
              </label>
              <input
                id="subject"
                className="w-full px-4 py-2 text-white bg-[#2D2D2D] border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                value={formData.subject}
                name="subject"
                placeholder="Enter the subject"
                onChange={e =>
                  setFormData(prev => ({ ...prev, subject: e.target.value }))
                }
                disabled={emailLoading}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-left mb-1">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 text-white bg-[#2D2D2D] py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                name="message"
                value={formData.message}
                cols={30}
                rows={10}
                placeholder="Enter your message"
                onChange={e =>
                  setFormData(prev => ({ ...prev, message: e.target.value }))
                }
                disabled={emailLoading}
              ></textarea>
            </div>
            {emailSuccess ? (
              <Alert
                variant="filled"
                severity="success"
                action={
                  <Button
                    onClick={() => setEmailSuccess(false)}
                    color="inherit"
                    size="small"
                  >
                    Close
                  </Button>
                }
              >
                Email Succsessfully Sent
              </Alert>
            ) : (
              <button className="border rounded-lg font-semibold p-2 transition duration-300 ease-in-out hover:bg-white hover:text-black">
                {emailLoading ? 'Sending...' : 'Submit'}
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
