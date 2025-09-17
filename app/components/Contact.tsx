import Button from "./Button"

export default function Contact() {
    return (
        <section className="md:flex items-center mt-24">
            <div className="font-k2d basis-1/2 grid justify-items-center pb-24">
                <p className="text-xl">WANT TO COLLABORATE?</p>
                <h3 className="text-5xl font-medium ">LET`S <br />
                    <span className="text-[#91F900]">CONNECT</span>
                </h3>
            </div>
            <div className="bg-white md:basis-1/2 px-6 py-18 lg:px-32 lg:py-20">
                <h4 className="font-k2d font-semibold text-lg text-black py-8 text-center">CONTACT
                    <span className="text-[#91F900] bg-black"> FORM </span>
                </h4>

                <form action="/submit"
                    className="font-inter">
                    <label htmlFor="FullName"
                        className="font-medium text-black"
                    >Name</label><br />
                    <input type="text"
                        id="FullName" name="FullName"
                        placeholder="Your name here" required
                        className="w-full border-b-2 border-[#C0C0C0]
                        placeholder:text-sm placeholder:font-light" /><br />

                    <label htmlFor="email"
                        className="font-medium text-black"
                    >Your mail</label><br />
                    <input type="mail"
                        id="mail" name="mail"
                        placeholder="Your mail here" required
                        className="w-full  border-b-2 border-[#C0C0C0]
                        placeholder:text-sm placeholder:font-light" /><br />

                    <label htmlFor="message"
                        className="font-medium text-black"
                    >Message</label><br />
                    <textarea id="message" name="message" rows={3}
                        placeholder="Leave us your message"
                        required
                        className="w-full border-b-2 border-[#C0C0C0]
                        placeholder:text-sm placeholder:font-light resize-none"
                    /> <br />
                    <div className="flex justify-center py-8">
                        <button
                            className="h-10 px-4 text-[#0A0917] border border-[#0A0917] rounded-xl hover:bg-[#91F900] transition-all duration-300 ease-in-out font-medium"
                        >
                            Send Message
                        </button>
                    </div>
                </form>


            </div>
        </section>
    )
}