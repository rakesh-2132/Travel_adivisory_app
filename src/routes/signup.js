import { useState } from "react";
import LoggedIn from "../components/LoggedIn";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import "../components/jh.css"
import car from "../images/12.jpg"
import Navbar from "../components/Navbar";

function Signup() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
        <Navbar />
        <div className="pos">
            {/* <img alt="im" src={car}/>  */}
            <div className="jh">
                {isLoggedIn ?
                    (<LoggedIn setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />
                    )
                }
               

            </div>
            </div>
            <Footer />
        </>
    );
}
export default Signup;