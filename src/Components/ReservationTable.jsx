import React from 'react'
import ReservationRow from './ReservationRow'

const ReservationTable = ({reservations}) => {
    return <>
        <table>
            <thead>
                <tr>
                    <th>Date Réservation</th>
                    <th>Date début</th>
                    <th>Date Fin</th>
                    <th>Destination</th>
                </tr>
            </thead>
            <tbody>
                {reservations.map((reservation) => {
                    return <ReservationRow reservation={reservation} key={"Reservation_Row_" + reservation.RE_ID} />
                })}
            </tbody>
        </table>
    </>
}

export default ReservationTable