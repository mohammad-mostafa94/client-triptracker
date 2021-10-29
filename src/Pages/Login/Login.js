import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

export default function Login() {

    const { signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const  handleSubmit = (event)  => {
        event.preventDefault();
    }

    return (
        <div className="Login">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
                Login
            </Button>
            <br />
            <br />
            <Button onClick={signInUsingGoogle} block size="lg" >
                Google SignIn
            </Button>

        </Form>
        </div>
    );
}