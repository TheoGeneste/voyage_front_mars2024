import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ClientService from '../Services/ClientService';
import ReservationTable from '../Components/ReservationTable';

const ClientDetailsPage = () => {
  const { id } = useParams();
  const [client, setClient] = useState({});

  const fetchClientByID = async () => {
    try {
      const response = await ClientService.fetchClientByID(id);
      setClient(response.data)
      console.log(response);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchClientByID();
  }, [])

  return <>
    <h2 className='text-center text-secondary'>Client {id}</h2>
    <p className='text-center'>{client.CL_Nom} {client.CL_Prenom} </p>
    <p className='text-center'>Téléphone {client.CL_Telephone}</p>
    <p className='text-center'>Mail : {client.CL_Mail}</p>
    <p className='text-center'>Adresse : {client.CL_Adresse}, {client.CL_CodePostal} {client.CL_Ville} </p>
    <h2 className='text-center text-secondary mt-3'>Réservations</h2>
    {client.reservations && <div className='d-flex justify-content-center'>
      <ReservationTable reservations={client.reservations} />
    </div>}

  </>
}

export default ClientDetailsPage;