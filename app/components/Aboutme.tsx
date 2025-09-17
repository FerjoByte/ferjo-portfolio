import Button from "./Button"

export default function Aboutme() {
    return (
        <section>
            <div className="lg:flex mt-16">
                <div className="lg:basis-1/3 lg:pl-20">
                    <h3 className="font-k2d font-extralight text-[#B1ABAB] mt-10 text-lg">ABOUT ME</h3>
                    <p className="font-inter font-medium text-lg mt-4 ">
                        I’M A SOFTWARE DEVELOPER. <br />
                        I ENJOY CREATING, LEARNING, <br />
                        AND OVERCOMING CHALLENGES</p>
                </div>
                <div className="flex justify-center lg:basis-1/3 my-12 lg:mt-28">
                    <img src="/profilePhoto.png" alt=""
                        className="shadow-lg" />
                </div>
                <div className="basis-1/3 lg:mt-44">
                    <h3 className="font-k2d font-normal text-lg text-center lg:text-left hidden lg:block">A LITTLE MORE
                        <span className="text-[#91F900]">ABOUT ME</span></h3>
                    <p className="font-inter font-light my-6 text-[#B1ABAB]">
                        I live in Montevideo, Uruguay, I’m a <span className="font-medium">Computer Engineering student
                        </span>, and I use <span className="font-medium">React</span> to develop intuitive and engaging
                        <span className="font-medium"> frontend interfaces. </span>
                        I have a solid background in <span className="font-medium">UX/UI</span>, which helps me create user-centered
                        experiences. Currently, I’m expanding my horizons by working on <span className="font-medium">backend projects 
                        with Python</span>  and other technologies.</p>
                    <div className="flex justify-center">
                        <Button>
                            <img src="/icon-download.svg" alt="icon-download"
                                className="inline mr-2 pb-1" />
                            Descargar CV
                        </Button>
                    </div>
                </div>
            </div>


        </section>
    )
}