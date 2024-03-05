export default function Header() {
  return (
    <section className="text-center h-screen flex flex-col justify-center items-center">
      <div className="mt-[-250px]">
        <h1 className="text-7xl font-bold">Trenton Fisher</h1>
        <h2 className="text-5xl font-bold  bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] text-transparent bg-clip-text p-4 mb-8">
          Software Engineer
        </h2>
        <button className="glow-on-hover font-bold text-lg hover:text-xl">
          View My Work
        </button>
      </div>
    </section>
  )
}
