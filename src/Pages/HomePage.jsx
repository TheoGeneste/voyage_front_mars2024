import React, { useEffect, useState } from 'react'
import DestinationService from '../Services/DestinationService';
import DestinationCard from '../Components/DestinationCard';

function HomePage() {
  // Constante
  const [destinations, setDestinations] = useState([]);

  //Traitements
  const fetchDestinations = async () => {
    try {
      // Appeler la function qui fait le fetch a l'API
      const response = await DestinationService.fetchDestinations();
      setDestinations(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchDestinations();
  }, [])

  //Affichage
  return <>
    <h1 className='text-center fw-bold p-3 text-primary'>Voyage Mars</h1>
    <h2 className='text-center text-secondary'>Destinations</h2>
    <div className='d-flex flex-wrap gap-3 justify-content-center'>
      {destinations.map((destination) => {
        return <DestinationCard destination={destination} key={"Destination_"+destination.DE_ID}/>
      })}
    </div>

  </>
}

export default HomePage