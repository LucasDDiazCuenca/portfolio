
export default function IntroProjects() {

    return <section className="w-10/12 mt-20 relative z-20 text-left text-md sm:text-lg flex justify-around xl:justify-center pointer-events-none gap-10">

        <h2 className="text-yellow-500 text-right font-black sm:text-2xl w-2/12">PROJECTS</h2>

        <div className="w-10/12 xl:w-8/12">

            <div className="mb-10">
                <div className="flex gap-10 xl:justify-center">
                    <img src="./isolink.png" alt="image of the app called isolink" className="rounded-3xl w-6/12 xl:w-4/12" />

                    <div className="w-6/12 xl:w-5/12">
                        <h3 className="text-xl text-yellow-200">Iso Link</h3>
                        <p>Social app that allows to interact with others by creating and customizing an avatar and entering into a 3D isometric room. I'ts an immersive way to communicate or even using it as a tool in workspaces. </p>
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <div className="flex gap-10 xl:justify-center">
                    <img src="./socialPortal.png" alt="image of the app called isolink" className="rounded-3xl w-6/12 xl:w-4/12" />
                    <div className="w-6/12 xl:w-5/12">
                        <h3 className="text-xl text-yellow-200">Social Portal</h3>
                        <p>Social app that allows to upload a picture, like another ones, save them, see all the posts by using custom filters, to delete, to create & update an own picture. It's more like a clone of an Instagram.</p>
                    </div>
                </div>
            </div>

        </div>

    </section>
}