import React, { useEffect, useState } from "react";
import Axios from 'axios';
import CharacterCard from './CharacterCard';

function CharacterList() {
  const [cardList, setCardList] = useState([]);

  const deleteCard = (id) => {
    const NewCards = cardList.filter((card) => card.id !== id)
    setCardList(NewCards);
  }

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results)
        setCardList(res.data.results)
      })
      .catch(err => {
        console.log(err, "You didn't get the data.")
      })
  }, []);

  return (
    <section className="character-list grid-view">
      <CharacterCard cardList={cardList} deleteCard={deleteCard} />
    </section>
  );
}

export default CharacterList;