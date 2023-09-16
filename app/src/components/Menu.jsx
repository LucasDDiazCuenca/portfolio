export default function Menu() {


    return <div className="relative z-20 w-full px-8 sm:px-24 text-white flex justify-between">
        <div>
            <p className="p-3 text-4xl pointer-events-none">Lucas Diaz</p>
        </div>
        <div className="flex mr-4">
            <ul className="w-full flex gap-8 items-center text-xl">
                <li className="cursor-pointer border-b border-transparent hover:border-yellow-500 hover:text-yellow-500 transition-all">Projects</li>
                <li className="cursor-pointer border-b border-transparent hover:border-yellow-500 hover:text-yellow-500 transition-all">3D</li>
                <li className="cursor-pointer border-b border-transparent hover:border-yellow-500 hover:text-yellow-500 transition-all">About me</li>
            </ul>
        </div>
    </div>
}