import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ClientCard = ({client}) => {
    const navigate = useNavigate();

    const navigateToClientDetails = () =>  {
        navigate("/client/"+client.CL_ID)
    }
    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" />
            <Card.Body>
                <Card.Title>{client.CL_Nom} {client.CL_Prenom}</Card.Title>
                <Card.Text>
                    Téléphone : {client.CL_Telephone}
                </Card.Text>
                <Card.Text>
                    Mail : {client.CL_Mail}
                </Card.Text>
                <Card.Text>
                    Adresse : {client.CL_Adresse}, {client.CL_CodePostal} {client.CL_Ville}
                </Card.Text>
                <Button variant="primary" onClick={navigateToClientDetails}>Voir Client</Button>
            </Card.Body>
        </Card>
    </>
}

export default ClientCard;