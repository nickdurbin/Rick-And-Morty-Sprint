import React, { useEffect, useState } from "react";
import Axios from 'axios';
import LocationCard from './LocationCard';

function LocationList() {
  const [locationList, setLocationList] = useState([]);

  const deleteCard = (id) => {
    const NewCards = locationList.filter((card) => card.id !== id)
    setLocationList(NewCards);
  }

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/location/')
      .then(res => {
        console.log(res.data.results)
        setLocationList(res.data.results)
      })
      .catch(err => {
        console.log(err, "You didn't get the data.")
      })
  }, []);

  return (
    <section className="location-list grid-view">
      <LocationCard locationList={locationList} deleteCard={deleteCard}/>
    </section>
  );
}

export default LocationList;