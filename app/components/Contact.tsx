export default function Contact() {
    return (
        <section className="md:flex items-center justify-center">
            <div className="font-k2d md:basis-1/2">
                <p className="text-xl">WANT TO COLLABORATE?</p>
                <h3 className="text-5xl font-medium ">LET'S <br />
                    <span className="text-[#91F900]">CONNECT</span>
                </h3>
            </div>
            <div className="bg-white md:basis-1/2">
                <h4>CONTACT
                    <span>FORN</span>
                </h4>
                <form action="/submit">
                    <label htmlFor="FullName">FULL NAME</label><br />
                    <input type="text"
                        id="FullName" name="FullName"
                        placeholder="Your name here" required /><br />

                    <label htmlFor="email">YOUR MAIL</label><br />
                    <input type="mail"
                        id="mail" name="mail"
                        placeholder="Your mail here" required /><br />

                    <label htmlFor="message">MESSAGE</label><br />
                    <textarea id="message" name="message" rows={5}
                        placeholder="Leave us your message"
                        required /><textarea /> <br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}