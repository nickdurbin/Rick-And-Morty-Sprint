import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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
  padding: 1rem;
`;

const Span = styled.span`
  color: gray;
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

function CharacterCard({ cardList, deleteCard }) {
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
            <Link to='/episodes'><Span>Episodes</Span></Link>
            <Button onClick={() => deleteCard(card.id)}>Delete</Button>
          </Details>
        </Card>
      ))}
    </>
  )
}

export default CharacterCard;