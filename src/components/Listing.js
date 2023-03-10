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
import DeleteIcon from "@mui/icons-material/Delete";
import AddListing from '../containers/AddListing'

const Listings = (props) => {
    const {id} = useParams();

    const listing = props.listings.find((listing) => listing.id === +id);
    console.log(listing);
    console.log('Currently online: ', props.online)


    return (
        <div className="main-listings">
            {props.online && (
                <AddListing
                    // listings = {props.listings}
                />
            )}

            <Container>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Hours</TableCell>
                            {
                                props.online && (
                                    <TableCell>
                                        Delete
                                    </TableCell>
                                )
                            }

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
                                    {
                                        props.online && (
                                            <TableCell>
                                                <DeleteIcon
                                                    // add onClick method here
                                                    onClick={() => props.removeListing(listings.id)}
                                                    className="icon text-red" />
                                            </TableCell>
                                        )
                                    }
                                </TableRow>
                            )})}
                    </TableBody>
                </Table>
            </Container>
        </div>
    );
};

export default Listings;