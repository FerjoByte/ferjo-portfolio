export default function Projects() {
    return (
        <section className="my-12">
            <h2 className="font-k2d font-semibold text-3xl text-center py-12">MY DIGITAL <span className="text-[#91F900]">CREATIONS</span></h2>

            <div className="lg:flex items-center">
                <div className="basis-1/2">
                    <img src="project-img.png" alt="" />
                </div>

                <div className="basis-1/2">
                    <h3 className="font-k2d text-xl text-center py-4">PROJETC 1</h3>
                    <p className="font-inter font-light text-lg py-4">I’m passionate about design and digital solutions.
                        I study Computer Engineering and specialize in creating exceptional,
                        user-centered experiences. I’m currently working on web development
                        and app projects, always aiming to improve my skills and learn more
                        in technology.</p>
                    <div className="flex justify-center py-4">
                        <button> View full</button>
                    </div>
                </div>
            </div>
        </section>
    )
}