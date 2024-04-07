
export default function About() {
  return (
    <section className="flex max-md:flex-col h-screen items-center justify-center">
      <div className=" rounded-xl border w-3/5 md:mr-4 max-md:mb-4 p-4 h-[450px]">
        <h3 className="text-xl font-bold mb-2">About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          lorem ut nulla commodo, vel varius dolor fermentum. Nulla facilisi.
          Morbi at nunc ultrices, tempor lectus sed, condimentum mauris.
        </p>
      </div>
      <div className="border rounded-xl flex flex-col w-3/5 h-[450px]">
        <h3 className="text-4xl font-bold mb-4">Contact</h3>
        <form action="">
          <div className="flex flex-col sm:flex-row">
            {' '}
            {/* Added sm:flex-col to make them stack on small screens */}
            <input
              className="w-full sm:w-1/2 px-2 py-1 mb-2 sm:mb-0 sm:mr-2"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full sm:w-1/2 px-2 py-1 mb-2"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <input
            className="w-full px-2 py-1 mb-2"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="w-full px-2 py-1 mb-2"
            name="body"
            id="body"
            cols={30}
            rows={10}
          ></textarea>
        </form>
      </div>
    </section>
  )
}
