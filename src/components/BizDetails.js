import React from 'react'
import { useParams } from 'react-router-dom';
import { Container} from '@mui/material';
// import Map from '../maps'

const BizDetails = (props) => {
    let { id } = useParams();
    console.log(id);
    const listing = props.listings.find(listing => listing.id === +id)

    return (
        <Container maxWidth="sm" className="list-container">
            <h1>{listing.name}</h1>
            <h2>{listing.address}</h2>
            <h2>{listing.hours}</h2>
            <p>{listing.description}</p>
            {/*<Map />*/}
        </Container>
    )
}

export default BizDetails