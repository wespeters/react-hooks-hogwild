import React, { useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const HogCard = ({ hog }) => {
  const [details, setDetails] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setDetails(!details);
  };

  if (hidden) return null;

  return (
    <Card onClick={handleClick}>
      <Image src={hog.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{hog.name}</Card.Header>
        {details && (
          <Card.Description>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
            <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
            <Button onClick={() => setHidden(true)}>Hide</Button>
          </Card.Description>
        )}
      </Card.Content>
    </Card>
  );
};

export default HogCard;
