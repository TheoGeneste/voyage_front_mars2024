import React, { useEffect, useState } from 'react'
import CategorieService from '../Services/CategorieService';
import Stack from 'react-bootstrap/Stack';
import CategorieBadge from '../Components/CategorieBadge';


const CategoriePage = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
        const response = await CategorieService.fetchCategories();
        setCategories(response.data);
    } catch (error) {
        
    }
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  return <>
    <h2 className='text-center text-secondary'>Catégories</h2>
    <Stack direction="horizontal" gap={2} className='d-flex justify-content-center mt-3 flex-wrap'>
        {categories.map((categorie) => {
            return <CategorieBadge categorie={categorie} key={"Categorie_Badge_"+categorie.CA_ID}/>
        })}
    </Stack>
</>
}

export default CategoriePage;