export default function Menu(){


    return <div className="relative z-20 w-full px-8 sm:px-24 text-white flex justify-between">
        <div>
            <p className="p-3 text-4xl pointer-events-none">Lucas Diaz</p>
        </div>
        <div className="flex mr-4">
            <ul className="w-full flex  gap-8 items-center">
                <li>Projects</li>
                <li>3D</li>
                <li>About me</li>
            </ul>
        </div>
    </div>
}