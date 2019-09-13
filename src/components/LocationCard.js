import React from "react";
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 40%;
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 0 5px 10px;
`;

function LocationCard({ locationList }) {
  return (
    <>
      {locationList.map((card, index) => (
        <Card key={index} index={index}>
          <h2> {card.name} </h2>
          <h4> {card.type} </h4>
          <h4> {card.dimension} </h4>
        </Card>
      ))}
    </>
  )
}

export default LocationCard;