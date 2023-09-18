import Menu from "../components/Menu"
import { useNavigate } from "react-router-dom"

export default function UnderWork() {
    const navigate = useNavigate()

    const handleNavigateHome = () => {
        navigate("/")
    }

    return (
        <>
            <Menu />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  flex flex-col gap-10 w-8/12 text-xl items-center">
                <p className=" text-center">This Section is under work 🛠️</p>
                <p className=" text-center">please be patient ⏳...</p>
                <button className="border border-yellow-500 text-yellow-500 rounded-xl w-fit p-2" onClick={handleNavigateHome}>Go Back To home!😉</button>
            </div>
        </>
    )
}
