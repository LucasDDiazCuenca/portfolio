import FloatingBubbles from "../components/Bubbles"
import Menu from "../components/Menu"
import Skills from "../components/Skills"
import IntroInformation from "../components/IntroInformation"

export default function Home() {
    return <div className="w-screen h-screen text-white">
        
        <div className="absolute w-full h-full z-10">
            <FloatingBubbles />
        </div>

        <Menu />

        <IntroInformation/>

        <Skills/>

    </div >
}