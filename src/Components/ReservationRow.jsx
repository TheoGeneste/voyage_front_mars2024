import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReservationRow = ({reservation}) => {
    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate("/destination/"+reservation.DE_ID)
      }

    return <>
        <tr>
            <td>{reservation.RE_DateReservation}</td>
            <td>{reservation.RE_DateDebut}</td>
            <td>{reservation.RE_DateFin}</td>
            <td><button className='btn btn-primary' onClick={navigateToDetails}>Voir Destination</button></td>
        </tr>
    </>
}

export default ReservationRow