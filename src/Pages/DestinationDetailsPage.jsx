import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DestinationService from '../Services/DestinationService';

const DestinationDetailsPage = () => {
    // entre les accolades doit être égale a ce qu'il y a après les : dans l'URL de App.js
    const {id} = useParams();
    const [destination, setDestination] = useState({});
    
    const fetchDestinationByID = async () => {
        try {
            const response = await DestinationService.fetchDestinationByID(id);
            setDestination(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchDestinationByID();
    }, [])

    return <>
        <h2 className='text-center text-secondary'>Destination Détails {id}</h2>
        <div className='d-flex flex-column align-items-center'>
            <h3 className='p-1'>Destination : {destination.DE_Libelle}</h3>
            <p className='p-1'>Description : {destination.DE_Description}</p>
            <p className='p-1'>Prix : {destination.DE_Prix}</p>
        </div>
        {/* Si destination.categorie existe j'affiche destination.categorie.CA_Libelle sinon je ne fais rien */}
        <h2 className='text-center text-secondary'>Catégorie {destination.categorie && destination.categorie.CA_Libelle}</h2>
        {destination.reservations && <>
            <h2 className='text-center text-secondary'>Réservations</h2>
            {destination.reservations.map((reservation) => {
                return <li key={"Reservation_"+reservation.RE_ID}>{reservation.RE_DateReservation}</li>
            })}
        </>}
    </>
}

export default DestinationDetailsPage;