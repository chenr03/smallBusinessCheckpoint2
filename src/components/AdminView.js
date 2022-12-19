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
import DeleteIcon from '@mui/icons-material/Delete'
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
                            <TableCell>Delete</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.listings.map((listings, idx) => {
                            // console.log('Listings inside Listing Prop: ', listings);
                            return( <TableRow key={listings.id}>
                                    <TableCell  scope="row">
                                        <Typography>
                                            <Link
                                                to={`/BizDetails/${listings.id}`}
                                                component="button"
                                                variant="header1"
                                                style={{ color: 'green'}}>
                                                {listings["name"]}
                                            </Link>
                                        </Typography>
                                    </TableCell>
                                    <TableCell  scope="row">{listings["description"]}</TableCell>
                                    <TableCell  scope="row">{listings["address"]}</TableCell>
                                    <TableCell  scope="row">{listings["hours"]}</TableCell>
                                    <DeleteIcon
                                        // add onClick method here
                                        onClick={() => props.removeListing(idx)}
                                        className="icon text-red" />

                                </TableRow>
                            )})}
                    </TableBody>
                </Table>
            </Container>
        </div>
    );
};

export default Listings;