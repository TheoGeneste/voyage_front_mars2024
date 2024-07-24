import React from 'react'
import PaiementRow from './PaiementRow'

const PaiementTable = ({paiements}) => {
    return <>
        <table className='mt-3'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Montant</th>
                    <th>Méthode</th>
                    <th>Statut</th>
                </tr>
            </thead>
            <tbody>
                {paiements.map((paiement) => {
                    return <PaiementRow paiement={paiement} key={"Paiement_Row_"+paiement.PA_ID} />
                })}
            </tbody>
        </table>
    </>
}

export default PaiementTable