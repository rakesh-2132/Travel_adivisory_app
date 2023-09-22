import "./Contactusstyles.css"
function ContactForm() {
    return (
        <div className="from-container">
            <h1>
                Send a message to Us!
            </h1>

            <form> <input placeholder="Name" /> </form>
            <form> <input placeholder="E-mail" /> </form>
            <form> <input placeholder="Subject" /> </form>

            <textarea placeholder="Message" rows="4"></textarea>
            <button>Send Message</button>
        </div>
    )
}
export default ContactForm