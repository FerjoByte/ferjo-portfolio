export default function Hero(){
    return(
        <section className="font-inter">
            <div className="flex items-center justify-center my-62 lg:my-70">
            <div className="text-center">
            <h1 className=" text-2xl md:text-2xl font-k2d font-extralight">HELLO THERE!</h1>
            <h2 className="text-6xl lg:text-7xl font-semibold py-1">I'M <span className="text-[#91F900]">FERJO</span></h2>
            
               <p className="font-k2d text-2xl font-extralight text-[#DBCFCF]">FULL STACK DEVELOPER</p>
           </div>
           </div>
          
           <div className=" flex gap-4 items-center justify-end py-4">

                    <a href="https://github.com/FerjoByte" target="_blank" rel="noopener noreferrer">
                        <img src="/icon-cv-white.svg" alt="Github"
                            className="" />
                    </a>


                    <a href="https://github.com/FerjoByte" target="_blank" rel="noopener noreferrer">
                        <img src="/icon-github-white.svg" alt="Github"
                            className="" />
                    </a>

                    <a href="https://www.linkedin.com/in/jonathan-fernandez-6bab18213/" target="_blank" rel="noopener noreferrer">
                        <img src="/icon-linkedin-white.svg" alt="Linkedin"
                        className="" />
                    </a>
                </div>
           
        </section>
    )
}