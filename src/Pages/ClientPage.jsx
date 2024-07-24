import React, { useEffect, useState } from 'react'
import ClientService from '../Services/ClientService';
import ClientCard from '../Components/ClientCard';

const ClientPage = () => {
    const [clients, setClients] = useState([]);

    const fetchClients = async () => {
        try {
            const response = await ClientService.fetchClients();
            setClients(response.data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchClients();
    }, [])

    return <>
        <h2 className='text-center text-secondary'>Clients</h2>
        <div className='d-flex flex-wrap justify-content-center gap-3'>
            {clients.map((client) => {
                return <ClientCard client={client} key={"Client_Card_"+client.CL_ID}/>
            })}
        </div>

    </>
}

export default ClientPage   