import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutimage from "../images/night.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/Aboutus";
function About() {
    return (
        <>

            <Navbar />
            <Hero cName="hero-mid" 
            heroImg={aboutimage}
            title="About" 
            btnClass="hide" />
            <AboutUs/>
            <Footer/>
        </>
    )
}
export default About;