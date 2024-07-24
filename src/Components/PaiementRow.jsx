import React from 'react'

const PaiementRow = ({paiement}) => {
    return <>
        <tr>
            <td>{paiement.PA_ID}</td>
            <td>{paiement.PA_DatePaiement}</td>
            <td>{paiement.PA_Montant}</td>
            <td>{paiement.PA_Methode}</td>
            <td>{paiement.PA_Statut}</td>
        </tr>
    </>
}

export default PaiementRow