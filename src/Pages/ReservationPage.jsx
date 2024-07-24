import React, { useEffect, useState } from 'react'
import ReservationService from '../Services/ReservationService';
import ReservationCard from '../Components/ReservationCard';

const ReservationPage = () => {
    const [reservations, setReservations] = useState([]);

    const fetchReservations = async () => {
        try {
            const response = await ReservationService.fetchReservations();
            setReservations(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        fetchReservations();
    }, [])
    return <>
        <h2 className='text-center text-secondary'>Réservations</h2>
        <div className='d-flex flex-wrap justify-content-center gap-3'>
            {reservations.map((reservation) => {
                return <ReservationCard reservation={reservation} key={"Reservation_Card_"+reservation.RE_ID} />
            })}
        </div>

    </>
}

export default ReservationPage