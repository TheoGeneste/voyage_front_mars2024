import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DestinationCard = ({destination}) => {
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate("/destination/"+destination.DE_ID)
  }

    return <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVqdXk8Sc2iwbm_b3qmxA34x1LgbOxinaoA&s" />
          <Card.Body>
            <Card.Title>{destination.DE_Libelle}</Card.Title>
            <Card.Text>
              {destination.DE_Description}
            </Card.Text>
            <Card.Text>
              {destination.DE_Prix}€
            </Card.Text>
            <Button variant="primary" onClick={navigateToDetails}>Voir plus</Button>
          </Card.Body>
        </Card>
    </>
}

export default DestinationCard;