import React, { useEffect, useState } from "react";
import Axios from 'axios';
import EpisodeCard from './EpisodeCard';

function EpisodeList() {
  const [episodeList, setEpisodeList] = useState([]);

  const deleteCard = (id) => {
    const NewCards = episodeList.filter((card) => card.id !== id)
    setEpisodeList(NewCards);
  }

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/episode/')
      .then(res => {
        console.log(res.data.results)
        setEpisodeList(res.data.results)
      })
      .catch(err => {
        console.log(err, "You didn't get the data.")
      })
  }, []);

  return (
    <section className="episode-list grid-view">
      <EpisodeCard episodeList={episodeList} deleteCard={deleteCard}/>
    </section>
  );
}

export default EpisodeList;