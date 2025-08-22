export default function Contact() {
    return (
        <section className="md:flex items-center">
            <div className="font-k2d basis-1/2 grid justify-items-center">
                <p className="text-xl">WANT TO COLLABORATE?</p>
                <h3 className="text-5xl font-medium ">LET'S <br />
                    <span className="text-[#91F900]">CONNECT</span>
                </h3>
            </div>
            <div className="bg-white md:basis-1/2 grid justify-items-center">
                <h4 className="font-k2d font-semibold text-lg text-black ">CONTACT
                    <span className="text-[#91F900] bg-black"> FORM </span>
                </h4>
                <form action="/submit"
                    className="font-inter md:1/3">
                    <label htmlFor="FullName"
                        className="font-medium text-black"
                    >Name</label><br />
                    <input type="text"
                        id="FullName" name="FullName"
                        placeholder="Your name here" required
                        className="lg:w-full border-b-2 border-[#C0C0C0]
                        placeholder:text-sm placeholder:font-light" /><br />

                    <label htmlFor="email"
                        className="font-medium text-black"
                    >Your mail</label><br />
                    <input type="mail"
                        id="mail" name="mail"
                        placeholder="Your mail here" required
                        className="lg:w-full border-b-2 border-[#C0C0C0]
                        placeholder:text-sm placeholder:font-light" /><br />

                    <label htmlFor="message"
                        className="font-medium text-black"
                    >Message</label><br />
                    <textarea id="message" name="message" rows={3}
                        placeholder="Leave us your message"
                        required
                        className="lg:w-full border-b-2 border-[#C0C0C0]
                        placeholder:text-sm placeholder:font-light"
                    /><textarea /> <br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}