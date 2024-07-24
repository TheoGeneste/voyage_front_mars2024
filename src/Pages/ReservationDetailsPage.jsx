import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReservationService from '../Services/ReservationService';
import ClientCard from '../Components/ClientCard';
import DestinationCard from '../Components/DestinationCard';
import PaiementTable from '../Components/PaiementTable';

const ReservationDetailsPage = () => {
    const { id } = useParams();
    const [reservation, setReservation] = useState({});

    const fetchReservationByID = async () => {
        try {
            const response = await ReservationService.fetchReservationByID(id);
            console.log(response);
            setReservation(response.data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchReservationByID();
    }, [])

    return <>
        <h2 className='text-center text-secondary'>Reservation {id}</h2>
        <div className='d-flex flex-column align-items-center'>
            <p>Date Début : {reservation.RE_DateDebut}</p>
            <p>Date Fin : {reservation.RE_DateFin}</p>
            <p>Date Reservation : {reservation.RE_DateReservation}</p>
            <h2 className='text-secondary m-3'>Client</h2>
            {reservation.client && <>
                <ClientCard client={reservation.client} />
            </>}
            <h2 className='text-secondary m-3'>Destination</h2>
            {reservation.destination && <>
                <DestinationCard destination={reservation.destination} />
            </>}
            {reservation.paiements && <>
                <PaiementTable paiements={reservation.paiements} />
            </>}
        </div>


    </>
}

export default ReservationDetailsPage