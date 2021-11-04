import React from 'react'
import { Card, Form, Button, Alert} from 'react-bootstrap'
// import app from '../utils/Auth/firebase'

import 'bootstrap/dist/css/bootstrap.css'

function Login() {
    return (
        <div>
        <Card style={{ display:'flex', width: '40vw', margin:'100px auto', padding: '30px'}}>
        <h1 style={{ margin:'auto'}}>Login</h1>
            <Form>
                <Form.Group style={{margin:'2rem auto'}}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your Email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="email" placeholder="Enter your Password"/>
                </Form.Group>
                <Button style={{display:'flex', margin:'1rem auto', width:'30%', textAlign: 'center'}} size="lg" variant="primary" type="submit">Sign-In</Button>
                <Alert variant="secondary"> Don't have an account? Sign up <a href="/signup">here!</a> </Alert>
            </Form>
        </Card>
        </div>
    )
}

export default Login
