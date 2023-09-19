
export default function Footer() {

    return <footer className="relative z-10 w-full md:px-20 sm:px-24 text-white flex flex-col sm:flex-row justify-between sm:p-5 mb-5 items-center gap-8 mt-20 sm:mt-0 pb-8">

        <div className="w-full text-center sm:text-left">
            <p>Web designed & Developed by <b className="text-yellow-500">Lucas Diaz</b> 🫰🏻 2023</p>
        </div>

        <div className="flex gap-8">

            <a href="mailto:lucasdamian30@gmail.com"><img className="w-8" src="./icons/gmail.png" alt="gmail icon" /></a>

            <a href="https://github.com/LucasDDiazCuenca/" target="_blank"><img className="w-8" src="./icons/gitHub.png" alt="linkdin icon" /></a>

            <a href="https://www.linkedin.com/in/lucas-diaz-cuenca/" target="_blank"><img className="w-8" src="./icons/linkedin.png" alt="linkedin icon" /></a>
        </div>
    </footer>
}