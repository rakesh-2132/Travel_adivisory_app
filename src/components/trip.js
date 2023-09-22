import "./Tripstyles.css";
import TripData from "./tripData";
import Trip1 from "../images/4.jpg"
import Trip2 from "../images/10.jpg"
import Trip3 from "../images/3.jpg"
function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Trip in Indeonesia"
                    text="Indonesia, officially the Republic of Indonesia, is a  country in Southeast Asia and i Oceania between the Indian and pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"

                />
                <TripData
                    image={Trip2}
                    heading="Trip in Malesiya"
                    text="Moalaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
                />

                <TripData 
                image={Trip3} 
                heading="Trip in France" 
                text="Fance, In Western Europe, encompasses leval cities, olpine vilages and Mediterranean beaches. Poris, its capital, is famed for its fashion houses, classicol ort museums including the Louvre and ‘monuments like the Eiffel Tower." 
                />
            </div>
        </div>
    );
}
export default Trip;