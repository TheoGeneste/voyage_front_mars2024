import React from 'react'
import { Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CategorieBadge = ({categorie}) => {
  const navigate = useNavigate();
  
  const navigateToCategorieDetails = () => {
    navigate('/categorie/'+categorie.CA_ID)
  }

  return <>
    <h3>
        <Badge pill bg="primary" onClick={navigateToCategorieDetails}>
            {categorie.CA_Libelle}
        </Badge>
    </h3>
  </>
}

export default CategorieBadge