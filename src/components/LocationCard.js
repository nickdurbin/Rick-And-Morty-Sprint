import React from "react";
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  margin: 10px 0;
  border-shadow: 0 19px 38px;
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