import t1 from "../images/Taal_lake.jpg"
import t2 from "../images/download.jpeg"
import t3 from "../images/67.jpg"
import t4 from "../images/99.jpg"
import "./Destination.css";
import DestinationData from "./DestinationData";
const Destinations = () => {
    return (
        <div className="destination">
            <h1>Poupular Destinations</h1>
            <p>Tours gives you the oppurtunity to learn new things</p>
            <DestinationData
            className="first-des"
                heading="Tall Volcano,Batangas"
                text="Taal Volcano is the second most active volcano found in the province of Batangas.  A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation.  It offers a very a spectacular view seen from Tagaytay Ridge.  Taal volcano is located around 50 kilometers away from Manila, capital of the Philippines"
                img1={t1}
                img2={t2}
            />
            <DestinationData 
            className="first-des-reverse"
            heading="Phuket" 
            text="Tropical beaches, hidden temples, local markets, and a thumping club scene. Phuket draws those who mellow in the sun and thrive at night. Further inland, Phuket Town’s eateries allow you to dip into chili and blue ginger-spiced dishes, and a stroll through the old quarter opens a window into the layers of its past. Despite its size and geography, there’s plenty of dining, accommodations, and adventure to satisfy luxury travellers and budget-conscious trip takers all year long." 
            img1={t3} 
            img2={t4} />
        </div>

    )
}
export default Destinations;