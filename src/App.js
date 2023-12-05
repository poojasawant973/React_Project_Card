import { useState } from "react";
import PlacesCard from "./PlacesCard";
import placesApi from "./placesApi";
import "./style.css"
import Navbar from "./Navbar";

function App() {


  let [places, setPlaces] = useState(placesApi);

  let stateList = [...new Set(placesApi.map((item) => {
    return item.state
  })), "All"]

  // new set use for unique value and ... is a spread operator

  function filterItem(state) //when retrive specific data use filter
  {

    if (state == "All") {
      setPlaces(placesApi);
      return;
    }
    let updatedList = placesApi.filter((item) => {
      return item.state == state;
    })
    setPlaces(updatedList);
  }
  return (
    <>
      <Navbar filterItem={filterItem} stateList={stateList} />
      <PlacesCard places={places} />
    </>
  );
}

export default App;
