import React from 'react'
import '../App.css'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@mui/material'
import {
    Link,
    useParams
} from 'react-router-dom'

const Listings = (props) => {
    const {id} = useParams();

    const listing = props.listings.find((listing) => listing.id === +id);
    console.log(listing);

    return (
        <div className="main-listings">
            <Container>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Hours</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.listings.map((listings, idx) => {
                            return( <TableRow key={listings.id}>
                                    <TableCell  scope="row">
                                        <Typography>
                                            <Link
                                                to={`/BizDetails/${listings.id}`}
                                                component="button"
                                                variant="header1"
                                                style={{ color: 'green'}}>
                                                {listings["Name"]}
                                            </Link>
                                        </Typography>
                                    </TableCell>
                                    <TableCell  scope="row">{listings["Description"]}</TableCell>
                                    <TableCell  scope="row">{listings["Address"]}</TableCell>
                                    <TableCell  scope="row">{listings["Hours"]}</TableCell>
                                </TableRow>
                            )})}
                    </TableBody>
                </Table>
            </Container>
        </div>
    );
};

export default Listings;