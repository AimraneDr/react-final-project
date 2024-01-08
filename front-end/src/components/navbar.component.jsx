import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar(props){
    const {user} = props
    const  [showUserMenu, setShowUserMenu] = useState(false)

    return(
        <nav className="bg-teal-600 py-4 px-8 w-full top-0 shadow-lg">
        <div className="flex justify-between items-center">

          <a href="#" className="text-white text-2xl font-bold">Aimrane's React Project</a>
    
          <div className="space-x-16 text-lg">
            <Link to='/' className="text-white hover:text-gray-300 hover:underline-offset-4 hover:underline">Home</Link>
            <a href="#" className="text-white hover:text-gray-300 hover:underline-offset-4 hover:underline">About</a>

          </div>

          {user ? 
              <div className="relative">
                <div className="flex flex-row-reverse justify-center items-center gap-2
                                hover:bg-teal-400 p-4 py-1 rounded-xl transition-all ease-in-out duration-200"
                      onClick={() => setShowUserMenu(!showUserMenu)}>
                  <img src="#" 
                        className="w-11 aspect-square bg-teal-300 border-2 border-teal-700 rounded-full"/>
                  <span className="text-xl text-slate-100 font-semibold">
                    {user.name}
                  </span>
                </div>
                <div className={`absolute p-4 bg-teal-50 rounded-xl border-2 border-teal-700 top-full right-0 min-w-[150%]
                                flex flex-col justify-stretch gap-4
                                ${showUserMenu || 'hidden'}`}>
                  <Link to={'/logout'} onClick={() => setShowUserMenu(false)}
                        className="p-2 bg-slate-100 text-center text-xl font-semibold text-teal-600
                                  border-2 border-teal-800 rounded-xl transition-all ease-in-out duration-200
                                  hover:bg-teal-100">
                          Logout
                  </Link>
                  <select name="lang" id="" onChange={() => setShowUserMenu(false)}
                          className="bg-slate-100 text-center text-teal-600 font-semibold p-2 border-2 border-teal-700 rounded-xl outline-none shadow-md">
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                    <option value="ar">AR</option>
                  </select>
                </div>
              </div>
              :
              <div className="flex gap-4 justify-center items-center">
                <select name="lang" id=""
                        className="p-2 bg-slate-100  text-teal-600 font-semibold px-2 border-2 border-teal-600 rounded-lg outline-none shadow-md">
                  <option value="fr">FR</option>
                  <option value="en">EN</option>
                  <option value="ar">AR</option>
                </select>
                <Link to={'/login'} 
                      className="p-4 py-2 bg-teal-100 text-xl font-semibold text-teal-700
                                border-2 border-teal-800 rounded-3xl transition-all ease-in-out duration-200
                                hover:bg-teal-700 hover:text-teal-100 hover:border-teal-100 hover:rounded-xl">
                        Login
                </Link>
                <Link to={'/signup'} 
                      className="p-4 py-2 bg-teal-100 text-xl font-semibold text-teal-700
                                border-2 border-teal-800 rounded-3xl transition-all ease-in-out duration-200
                                hover:bg-teal-700 hover:text-teal-100 hover:border-teal-100 hover:rounded-xl">
                        Signup
                </Link>
              </div>
          }

        </div>
      </nav>
    )
}
