import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ReservationCard = ({reservation}) => {
    const navigate = useNavigate();

    const navigateToClientDetails = () => {
        navigate('/client/'+reservation.client.CL_ID)
    }

    const navigateToDestinationDetails = () => {
        navigate('/destination/'+reservation.destination.DE_ID)
    }

    const navigateToReservationDetails = () => {
        navigate('/reservation/'+reservation.RE_ID)
    }

    return <>
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVqdXk8Sc2iwbm_b3qmxA34x1LgbOxinaoA&s" />
            <Card.Body>
                <Card.Title>Réservation du {reservation.RE_DateDebut} à {reservation.RE_DateFin}</Card.Title>
                <Card.Text>Date de réservation : {reservation.RE_DateReservation}</Card.Text>
                <Card.Text className='d-flex justify-content-between'>Client : {reservation.client.CL_Nom} {reservation.client.CL_Prenom} 
                    <button className='btn btn-info' onClick={navigateToClientDetails}>Voir Client</button></Card.Text>
                <Card.Text className='d-flex justify-content-between'>Destination : {reservation.destination.DE_Libelle} 
                    <button className='btn btn-info' onClick={navigateToDestinationDetails}>Voir Destination</button></Card.Text>
                <Button variant="primary" className='col-12' onClick={navigateToReservationDetails}>Voir Réservation</Button>
            </Card.Body>
        </Card>
    </>
}

export default ReservationCard