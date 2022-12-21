import React from 'react'
import { AppBar, Toolbar, IconButton, 
  Typography, Button
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'


const Navigation = (props) => {
    return (
        <AppBar position="relative" style={{ background: 'green' }}>
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    AfftonBusiness.com
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Button component={Link} to="/" sx={{color: 'white'}} >Listings</Button>
                    </li>
                    {props.online ? (
                        <li className="nav-list-item">
                            <Button onClick={()=> props.logout()} sx={{color: 'white'}}>Logout</Button>
                        </li>
                    ) : (
                        <li className="nav-list-item">
                            <Button component={Link} to="/Login" sx={{color: 'white'}}>Login</Button>
                        </li>
                    )}
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation