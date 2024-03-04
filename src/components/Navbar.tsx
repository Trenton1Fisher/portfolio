export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 font-semibold flex items-center mt-4 mr-4 text-xl">
      <div className="max-md:hidden">
        <a href="#" className="relative group cursor-pointer mr-6 nav-link">
          <span className="relative">Projects</span>
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white mt-2 transition-all group-hover:w-full"></span>
        </a>
        <a href="#" className="relative group cursor-pointer mr-6 nav-link">
          <span className="relative">Download CV</span>
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white mt-2 transition-all group-hover:w-full"></span>
        </a>
        <a href="#" className="relative group cursor-pointer mr-6 nav-link">
          <span className="relative">About</span>
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white mt-2 transition-all group-hover:w-full"></span>
        </a>
        <a href="#" className="relative group cursor-pointer mr-6 nav-link">
          <span className="">Contact</span>
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white mt-2 transition-all group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  )
}
