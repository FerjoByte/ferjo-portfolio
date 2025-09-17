import Button from "./Button"

export default function Projects() {
    return (
        <section className="mt-16">
            <h2 className="font-k2d font-semibold text-3xl text-center mb-16">MY DIGITAL <span className="text-[#91F900]">CREATIONS</span></h2>

            <div className="lg:flex items-center">
                <div className="basis-1/2 flex justify-center">
                    <img src="project-img.png" alt="" />
                </div>

                <div className="basis-1/2 flex items-center justify-center mt-10">
                  <div className="">
                    <h3 className="font-k2d text-xl text-center">My personal portfolio</h3>
                    <p className="font-inter font-light text-[#B1ABAB] py-4 lg:px-16">This portfolio was built using <span className="font-medium">Next.js</span>, <span className="font-medium">React</span>, and <span className="font-medium">Tailwind CSS</span>, creating a modern and responsive interface.
                        It includes form handling powered by <span className="font-medium">Python</span> and <span className="font-medium">FastAPI</span>, with validation and asynchronous responses.<br />
                        <br />
                        The design focuses on <span className="font-medium">user experience</span> and clear presentation of my projects.
                        It combines <span className="font-medium">frontend</span> and <span className="font-medium">backend</span> to showcase my fullstack development skills.
                        This is a <span className="font-medium">digital introduction</span> that evolves alongside my professional growth.
                    
                    </p>
                   
                    <div className="flex justify-center py-4">
                        <Button>
                            View full project
                        </Button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}