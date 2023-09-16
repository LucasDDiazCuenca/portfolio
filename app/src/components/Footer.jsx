export default function Footer() {



    return <footer className="relative z-20 w-full px-20 sm:px-24 text-white flex justify-between p-5 mb-5 items-center">
        <div>
            <p>Designed & Developed by <b className="text-yellow-500">Lucas Diaz</b> 🫰🏻 2023</p>
        </div>
        <div className="flex  gap-8">
            <button className="cursor-pointer" onClick={() => { console.log("hola") }}>
                <img className="w-8" src="./icons/gmail.png" alt="linkdin icon" />
            </button>

            <button className="cursor-pointer" onClick={() => { console.log("hola") }}>
                <img className="w-8" src="./icons/gitHub.png" alt="linkdin icon" />
            </button>

            <button className="cursor-pointer" onClick={() => { console.log("hola") }}>
                <img className="w-8" src="./icons/linkedin.png" alt="linkdin icon" />
            </button>

            <button className="cursor-pointer" onClick={() => { console.log("hola") }}>
                <img className="w-8" src="./icons/infoJobs.png" alt="linkdin icon" />
            </button>

        </div>
    </footer>
}