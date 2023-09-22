import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutimage from "../images/2.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/Contactus";
function Contact() {
    return (
        <>
       <Navbar/>
       <Hero cName="hero-mid" 
            heroImg={aboutimage}
            title="Contact" 
            btnClass="hide" />
            <ContactForm/>
           <Footer />
        </>
    )
}
export default Contact;