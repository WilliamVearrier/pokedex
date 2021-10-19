import React from 'react';
import styled from 'styled-components';

const DexCard = () => <Card>card</Card>;

const Card = styled.div`
  height: 75px;
  width: 110px;
  background-color: grey; /* For browsers that do not support gradients */
  background-image: linear-gradient(145deg, #fdcd3b 50%, #ffed4b 50%);
`;

export default DexCard;
