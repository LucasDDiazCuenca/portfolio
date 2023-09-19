import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"

export default function Menu() {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: 640 }) 

    const handleNavigateUnderWork = () => {
        navigate("/under-work")
        setShowMenu(false)
    }

    const handleNavigateHome = () => {
        navigate("/")
        setShowMenu(false)
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu) 
    }

    return (
        <div className="relative z-20 w-full px-8 sm:px-24 text-white flex justify-between">
            <div className="cursor-pointer" onClick={handleNavigateHome}>
                <h1 className="p-3 text-4xl border-b border-transparent hover:border-yellow-500 hover:text-yellow-500 transition-all">Lucas Diaz</h1>
            </div>
            {isMobile ? ( // Comprueba si estamos en un dispositivo móvil
                <div className="flex mr-4 mt-6">
                    <div className="cursor-pointer" onClick={toggleMenu}>
                        <img className="w-8" src="./icons/menu.png" alt="menu icon" />
                    </div>
                </div>
            ) : (
                <div className="flex mr-4">
                    <ul className="w-full flex gap-8 items-center text-xl">
                        <li className="cursor-pointer border-b border-transparent hover:border-yellow-500 hover:text-yellow-500 transition-all" onClick={handleNavigateUnderWork}>Projects</li>
                        <li className="cursor-pointer border-b border-transparent hover:border-yellow-500 hover:text-yellow-500 transition-all" onClick={handleNavigateUnderWork}>3D</li>
                        <li className="cursor-pointer border-b border-transparent hover:border-yellow-500 hover:text-yellow-500 transition-all" onClick={handleNavigateUnderWork}>About me</li>
                    </ul>
                </div>
            )}

            {isMobile && showMenu && (
                <div className="fixed top-0 right-0 w-52 h-full bg-gray-200 z-20">
                    <ul className="text-2xl text-gray-800 pt-6 pl-4">
                        <li className="mb-4 cursor-pointer" onClick={handleNavigateUnderWork}>Projects</li>
                        <li className="mb-4 cursor-pointer" onClick={handleNavigateUnderWork}>3D</li>
                        <li className="cursor-pointer" onClick={handleNavigateUnderWork}>About me</li>
                    </ul>

                    <button className="text-yellow-600 text-lg ml-4 pt-10 border border-b-yellow-700" onClick={toggleMenu}>Close</button>
                </div>
            )}
        </div>
    );
}
