import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destinations from "../components/destination";
import Trip from "../components/trip";
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import "../components/home.css"

function Home() {
  return (
    <>

      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        title="Your Journey Your Story"
        text="Chosse Your Favourite Destination"
        btntext="Travel Plan"
        url="/"
        btnClass=
        "show"
      />
       <div>
        <h2>Search your Holidays</h2>
        <p>Our packages</p>
      </div>




        <div className="post">
          <div className="cardDiv grid">
            <div className="destinationlnput">
              <label htmlFor="city">search your destination</label>
              <div className="input flex">
                <input type="text" placeholder="Enter name here..." />
                <GrLocation className="icon" />
              </div>
            </div >

            <div className="dateInput">          <label htmlFor="date">Select your date</label>          <div className="input flex">           <input type="date" />                    </div>         </div >
            <div className="pricelnput">
              <div className="label_toal flex">
                <label htmlFor="price">Max price:</label>
                <h3 className="total">$5000</h3>

              </div>
              <div className="input flex">
                <input type="range" max={5000} min={1000} />
              </div>
            </div >
            <div className="searchoption flex">
              <HiFilter  className="icon"/>
              <span >More Filters</span>
            </div>
          </div >

        </div>







        <Destinations />
        <Trip />
        <Footer />
      </>
      )
}
      export default Home;