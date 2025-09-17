export default function Footer() {
    return (
        <footer className="h-16 flex items-center">
            <div className="basis-2/2 lg:basis-1/3">
                <p className="font-k2d italic ">Design and develop by
                    <span className="text-[#91F900]"> Ferjo</span></p>
            </div>

            <div className="lg:basis-1/3 flex justify-center">
                <ul className=' hidden gap-10 lg:flex'>
                    <li className='hover:text-[#91F900] transition-all duration-500 ease-in-out'><a href="#Home">Home</a></li>
                    <li className='hover:text-[#91F900] transition-all duration-500 ease-in-out'><a href="#About me">About me</a></li>
                    <li className='hover:text-[#91F900] transition-all duration-500 ease-in-out'><a href="#Projects">Projects</a></li>
                    <li className='hover:text-[#91F900] transition-all duration-500 ease-in-out'><a href="#Contact">Contact</a></li>
                </ul>
            </div>

            <div className="grid justify-items-end basis-1/2 lg:basis-1/3 text-[#ffffff]">
                <div className=" flex gap-4">

                    <a href="https://github.com/FerjoByte" target="_blank" rel="noopener noreferrer">
                        <img src="/icon-cv-white.svg" alt="Github"
                            className="" />
                    </a>


                    <a href="https://github.com/FerjoByte" target="_blank" rel="noopener noreferrer">
                        <img src="/icon-github-white.svg" alt="Github"
                            className="" />
                    </a>

                    <a href="https://www.linkedin.com/in/jonathan-fernandez-6bab18213/" target="_blank" rel="noopener noreferrer">
                        <img src="/icon-linkedin-white.svg" alt="Linkedin" />
                    </a>
                </div>
            </div>
        </footer>
    )
}