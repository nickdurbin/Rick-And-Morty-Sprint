import React from "react";
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 0 5px 10px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  color: gray;
`;

function CharacterCard({ cardList }) {
  return (
    <>
      {cardList.map((card, index) => (
        <Card key={index} index={index}>
          <img src={card.image} alt={card.name} />
          <Details>
            <h2> {card.name} </h2>
            <h4> <Span>{card.species} {card.status} </Span> </h4>
            <h3> {card.location.name} </h3>
            <h4> {card.origin.name} </h4>
          </Details>
        </Card>
      ))}
    </>
  )
}

export default CharacterCard;