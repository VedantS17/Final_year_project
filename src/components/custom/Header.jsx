import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { UserButton, useUser } from "@clerk/clerk-react"
import { useState } from "react";
import { FiMenu, FiX } from 'react-icons/fi';


const Header = () => {
    const {isSignedIn} = useUser();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className='bg-black p-3 px-6 md:px-20 flex justify-between shadow-md items-center'>
      <img src='/logo.svg' width={100} height={150} alt="Logo" />

      <button className='md:hidden text-2xl' onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <div className={`absolute top-16 right-0 bg-black md:static md:flex md:flex-row md:w-auto ${isOpen ? 'flex' : 'hidden'} flex-col items-start md:items-center w-2/5 md:w-auto`}>
        <Link to={'/'} className="w-full">
          <li className='md:p-4 py-2 px-4 text-white block hover:text-purple-400'>Home</li>
        </Link>
        <Link to={'/about'} className="w-full">
          <li className='md:p-4 py-2 px-4 text-white block hover:text-purple-400'>About</li>
        </Link>
        <Link to={'/contact'} className="w-full">
          <li className='md:p-4 py-2 px-4 text-white block hover:text-purple-400'>Contact</li>
        </Link>
      </div>

      <div className={`absolute top-36 right-0 bg-black md:static md:flex md:flex-row md:w-auto ${isOpen ? 'flex' : 'hidden'} flex-col items-start md:items-center w-2/5 md:w-auto`}>
        {isSignedIn?(
          <>
            <div className="flex gap-4 items-center">
                <Link to={'/dashboard'}><Button className="w-full text-left px-4 rounded-full">Dashboard</Button></Link>
                <div className="px-4"><UserButton /></div>
            </div>
            </>)
            : 
            (
              <Link to={'/auth/sign-in'} className="w-full">
                <Button className="rounded-full px-7 py-5 w-full text-left">Login</Button>
              </Link>
            )}
        </div>
    </div>
  )
}

export default Header