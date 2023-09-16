import FloatingBubbles from "../components/Bubbles"
import Menu from "../components/Menu"
import Skills from "../components/Skills"
import IntroInformation from "../components/IntroInformation"
import IntroProjects from "../components/IntroProjects"
import Footer from "../components/Footer"

export default function Home() {
    return <div className="h-screen text-white">

        <div className="absolute w-full h-[70rem] z-10">
            <FloatingBubbles />
        </div>

        <Menu />

        <main className="flex flex-wrap justify-center">
            <IntroInformation />


            <Skills />

            <IntroProjects />

        </main>
        <Footer />
    </div >
}