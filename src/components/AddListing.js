import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@mui/material'

class AddListing extends Component {
    state = {
        open: false,
        name: '',
        description: '',
        address: '',
        hours: '',
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.listingTotal + 1
        delete payload.open
        // console.log("THE Listing", payload)
        // add this.props.addCar function here
        // also add this.setState to close the dialog
        this.props.addListing(payload)
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                description: '',
                address: '',
                hours: ''
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        className="add-listing"
                        onClick={this.toggleDialog}
                    >
                        Add Listing
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Listing</DialogTitle>
                        <DialogContent>
                            <form
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField
                                    id="name"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="description"
                                    placeholder="Description"
                                    value={this.state.description}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="address"
                                    placeholder="Address"
                                    value={this.state.cylinders}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="hours"
                                    placeholder="Hours"
                                    value={this.state.horsepower}
                                    onChange={this.handleTextChange}
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddListing