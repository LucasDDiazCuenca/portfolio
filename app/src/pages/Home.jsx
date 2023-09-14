import FloatingBubbles from "../components/Bubbles";
import Menu from "../components/Menu";

export default function Home() {
    return <div className="w-screen h-screen">
        <div className="absolute w-full h-full z-10">
            <FloatingBubbles />
        </div>
        <Menu />
    </div>
}