import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategorieService from '../Services/CategorieService';
import DestinationCard from '../Components/DestinationCard';

const CategorieDetailsPage = () => {
    const { id } = useParams();
    const [categorie, setCategorie] = useState({});

    const fetchCategorieByID = async () => {
        try {
            const response = await CategorieService.fetchCategorieByID(id);
            setCategorie(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCategorieByID();
    }, [])

    return <>
        <h2 className='text-center text-secondary'>Détail Catégorie {id}</h2>
        <h3 className='text-center'>{categorie.CA_Libelle}</h3>
        <div className='d-flex flex-wrap justify-content-center gap-3'>
            {categorie.destinations && categorie.destinations.map((destination) => {
                return <DestinationCard destination={destination} key={"Destination_By_Categorie_" + destination.DE_ID} />
            })}
        </div>
    </>
}

export default CategorieDetailsPage