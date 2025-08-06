export default function Aboutme() {
    return (
        <section>
            <div className="lg:flex mt-16">
                <div>
                    <h3 className="font-k2d font-extralight text-[#B1ABAB] mt-10 text-xl ">ABOUT ME</h3>
                    <p className="font-inter font-medium text-xl mt-4 md:text-2xl ">
                        I’M A SOFTWARE DEVELOPER. <br />
                        I ENJOY CREATING, LEARNING, <br />
                        AND OVERCOMING CHALLENGES</p>
                </div>
                <div className="flex justify-center lg:mx-36 my-12 lg:mt-22 ">
                    <img src="/profilePhoto.png" alt=""
                        className="shadow-lg" />
                </div>
                <div className="basis-1/3 lg:mt-44">
                    <h3 className="font-k2d font-normal text-xl">A LITTLE MORE
                        <span className="text-[#91F900]">ABOUT ME</span></h3>
                    <p className="font-inter font-light text-lg my-6 text-[#B1ABAB]">I live in Montevideo, Uruguay, I’m a Computer Engineering student,
                        and I use React to develop intuitive and engaging frontend interfaces.
                        I have a solid background in UX/UI, which helps me create user-centered
                        experiences. Currently, I’m expanding my horizons and working on projects
                        with C# and other technologies.</p>
                    <div className="flex justify-center gap-6">
                        <button className="px-4 py-2"> SEE PROJECTS</button>
                        <button>DOWNLOAD MY CV</button>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <a href="">
                    <img src="/icon-github.svg" alt="Github" />
                </a>
                <a href="">
                    <img src="/icon-linkedin.svg" alt="Linkedin" />
                </a>
            </div>


        </section>
    )
}