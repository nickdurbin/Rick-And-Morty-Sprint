import React from "react";
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 40%;
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 0 5px 10px;
`;


const Button = styled.button`
  width: 50%;
  height: 30px;
  font-size: 1.1rem;
  font-wight: 600;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: blue;
  text-align: center;
  cursor: pointer;
  margin: 1rem 0;

  &:hover {
    transform: scale(1.05);
  }
`;


function EpisodeCard({ episodeList, deleteCard }) {
  return (
    <>
      {episodeList.map((card, index) => (
        <Card key={index} index={index}>
          <h2> {card.name} </h2>
          <h4> {card.air_date} </h4>
          <h4> {card.episode} </h4>
          <Button onClick={() => deleteCard(card.id)}>Delete</Button>
        </Card>
      ))}
    </>
  )
}

export default EpisodeCard;