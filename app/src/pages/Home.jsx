import FloatingBubbles from "../components/Bubbles"
import Menu from "../components/Menu"
import Skills from "../components/Skills"
import IntroInformation from "../components/IntroInformation"

export default function Home() {
    return <div className="h-screen text-white">
        
        <div className="absolute w-full h-[60rem] z-10">
            <FloatingBubbles />
        </div>

        <Menu />

        <IntroInformation/>

        <Skills/>

        <p className="w-full mt-10 px-8 sm:px-36 relative z-20 text-left text-md sm:text-lg flex gap-3 justify-between pointer-events-none">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta aspernatur cumque aliquam, quae, nostrum vel culpa alias possimus, eaque ad maxime? Ea enim labore dolorem voluptate incidunt eius animi!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit error dolor veritatis eum totam dolorum quidem sint. Repellendus, maiores perspiciatis! Deleniti exercitationem illo eius excepturi, debitis nostrum nemo qui consequatur?
            Reiciendis necessitatibus quam expedita esse deserunt laboriosam quibusdam, mollitia perspiciatis vero blanditiis. Harum omnis deleniti quam, optio ullam nesciunt pariatur velit, beatae cumque necessitatibus cupiditate soluta provident cum, ipsam labore?
            Et, ipsum. Voluptatum aliquid repellendus reiciendis saepe quae accusantium at aspernatur sunt officiis voluptatem est nulla accusamus, modi suscipit tenetur nobis facere velit voluptates excepturi quas earum fugit natus architecto?
            Provident molestiae facilis nam voluptatem quaerat, enim vitae magnam quas aut unde possimus qui reprehenderit nemo velit odio quasi maxime? Deserunt, minima nobis corporis natus neque fugit ad ab vel!
            At, facere. Eveniet facere aperiam reiciendis obcaecati officiis delectus nostrum, quia a, commodi accusantium deserunt enim omnis facilis adipisci eligendi? Unde, eius. Odit omnis eum rem perferendis reprehenderit quod est.
            Beatae accusamus deserunt accusantium voluptatem aspernatur eveniet cum eaque obcaecati dolorum ut commodi nisi praesentium porro nam debitis distinctio quibusdam ad id doloribus, fugit provident officia. Quod delectus consequuntur quo.
            Dolore tempore rerum error iusto veniam impedit. Fuga aut quos possimus labore minus, blanditiis officiis a dolorum sapiente quae quod alias molestiae dolorem soluta impedit in odit animi dicta eius.
            Adipisci enim at nesciunt optio? Nemo non sed odio quidem id. Vero, tenetur. Blanditiis quod enim esse repellat error sint saepe nisi illo quia magni harum, tenetur, voluptatum minus! Dignissimos!
        
        </p>

    </div >
}