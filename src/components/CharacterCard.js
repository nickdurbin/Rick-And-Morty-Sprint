import React from "react";

function CharacterCard({cardList}) {
  return (
    <>
      {cardList.map((card, index) => (
        <div key={index} index={index}>
          <img src={card.image} alt={card.name} />
        </div>
      ))}
    </>
  )
}

export default CharacterCard;