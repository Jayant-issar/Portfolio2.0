import { useState } from "react"
import { navLinks } from "../constants"
const NavItems = ()=>{
    
    return (
       <ul className=" nav-ul">
        {
            navLinks.map((item)=>{
                return (
                    <li key={item.id} className="text-neutral-400 hover:text-white max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
                        <a href={item.href} className="nav-li_a"
                        onClick={()=>{}}
                        >{item.name}</a>
                    </li>
                )
            })
        }

       </ul>
    )
}

const Navbar = () => {
    const [isMenuBarOpen, setIsMenuBarOpen] = useState(false)
  return (
    <header className=' text-white fixed top-0 left-0 right-0 z-50 bg-black/90'>
        <div className=' max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-5 c-space'>
                <a href="/" className=' text-neutral-400 font-bold text-xl hover:text-white transition-colors'>Jayant Issar</a>
                <button onClick={() => setIsMenuBarOpen(!isMenuBarOpen)}
                    className=" text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu">
                    <img src={isMenuBarOpen? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className=' h-6 w-6' />
                </button>
                <nav className=" sm:flex hidden">
                    <NavItems/>
                </nav>
            </div>
        </div>
        <div className={`absolute left-0 right-0 bg-zinc-900/80 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isMenuBarOpen ? "max-h-screen" : "hidden"}`}>
            <nav className=" p-5">
                <NavItems/>
            </nav>
        </div>
    </header>
  )
}

export default Navbar