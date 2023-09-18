import { useAppContext } from "../hooks"
import { useNavigate } from "react-router-dom"

export default function Menu() {
    const navigate = useNavigate()

    const handleNavigateUnderWork = () => {
        navigate("/under-work")
    }

    const handleNavigateHome = () => {
        navigate("/")
    }

    return <div className="relative z-20 w-full px-8 sm:px-24 text-white flex justify-between">
        <div className="cursor-pointer" onClick={handleNavigateHome}>
            <h1 className="p-3 text-4xl border-b border-transparent hover:border-yellow-500 hover:text-yellow-500 transition-all" >Lucas Diaz</h1>
        </div>
        <div className="flex mr-4">
            <ul className="w-full flex gap-8 items-center text-xl">
                <li className="cursor-pointer border-b border-transparent hover:border-yellow-500 hover:text-yellow-500 transition-all" onClick={handleNavigateUnderWork}>Projects</li>
                <li className="cursor-pointer border-b border-transparent hover:border-yellow-500 hover:text-yellow-500 transition-all" onClick={handleNavigateUnderWork}>3D</li>
                <li className="cursor-pointer border-b border-transparent hover:border-yellow-500 hover:text-yellow-500 transition-all" onClick={handleNavigateUnderWork}>About me</li>
            </ul>
        </div>
    </div>
}