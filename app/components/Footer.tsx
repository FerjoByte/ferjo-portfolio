export default function Footer() {
    return (
        <footer className="h-16 flex items-center">
            <div className="md:basis-1/3">
                <p className="font-k2d italic ">Design and develop by
                    <span className="text-[#91F900]"> Ferjo</span></p>
            </div>

            <div className="justify-items-center md:basis-1/3">
                <ul className=' md:gap-4 lg:gap-10 hidden sm:flex'>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About me">About me</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>

            <div className="grid justify-items-end md:basis-1/3 text-[fffff]">
             <div className="flex gap-4">
                <a href="">
                    <img src="/icon-github-white.svg" alt="Github"
                        className="" />
                </a>
                <a href="">
                    <img src="/icon-linkedin-white.svg" alt="Linkedin" />
                </a>
                </div>
            </div>
        </footer>
    )
}