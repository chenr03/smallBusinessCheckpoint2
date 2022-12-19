import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";

const Login = (props) => {
    console.log('Props inside of Login Comp: ', props)
    const navigate = useNavigate();

    const [state, setState] = useState({
        username: "",
        password: "",
    });

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const login = (e) => {
        e.preventDefault();
        props.login();
        // SEND POST REQ TO SERVER FOR USER

        // set cookie here
        document.cookie = "loggedin=true;max-age=60*1000";
        // set loggedIn = true and max-age = 60*1000 (one minute)

        navigate("/");
    };

    return (
        <div className="App">
            <Container maxWidth="sm">
                <form className="login-form" onSubmit={login}>
                    <TextField
                        required
                        onChange={handleTextChange}
                        value={state.username}
                        name="username"
                        label="Username"
                        type="text"
                    />
                    <TextField
                        style={{color: 'green'}}
                        required
                        onChange={handleTextChange}
                        value={state.password}
                        name="password"
                        label="Password"
                        type="password"
                    />
                    <Button
                        style={{background: 'green'}}
                        type="submit"
                        className="login-button"
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default Login;