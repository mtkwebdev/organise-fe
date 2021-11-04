import React, {useCallback} from 'react'
// eslint-disable-next-line 
import { withRouter } from 'react-router'
import app from '../utils/Auth/firebase'
import { Card, Form, Button, Alert } from 'react-bootstrap'
// eslint-disable-next-line 
const SignUp = ({history}) => {
    const handleSignUp = useCallback (async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await app.auth().createUserWithEmailAndPassword(email.value, password.value)
            history.push('/')
        } catch(error){
            console.log(error)
        }
    }, [history])

return (
    <div>
    <Card style={{ display:'flex', width: '40vw', margin:'100px auto', padding: '30px'}}>
    <h1 style={{ margin:'auto'}}>Sign Up</h1>
        <Form onSubmit={handleSignUp}>
            <Form.Group style={{margin:'2rem auto'}}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your Email"/>
            </Form.Group>

            <Form.Group style={{margin:'2rem auto'}}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="email" placeholder="Enter your Password"/>
            </Form.Group>

            <Form.Group style={{margin:'2rem auto'}}>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="email" placeholder="Enter your Password"/>
            </Form.Group>
            <Button style={{display:'flex', margin:'1rem auto', width:'30%', textAlign: 'center'}} variant="primary" type="submit">
                Create Account
            </Button>
            <Alert variant="secondary"> Already an account? Login <a href="/login">here!</a> </Alert>
        </Form>
    </Card>
    </div>
    )
}

function Signup() {
    return (
        <div>
        <Card style={{ display:'flex', width: '40vw', margin:'100px auto', padding: '30px'}}>
        <h1 style={{ margin:'auto'}}>Sign Up</h1>
            <Form>
                <Form.Group style={{margin:'2rem auto'}}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your Email"/>
                </Form.Group>

                <Form.Group style={{margin:'2rem auto'}}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="email" placeholder="Enter your Password"/>
                </Form.Group>

                <Form.Group style={{margin:'2rem auto'}}>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="email" placeholder="Enter your Password"/>
                </Form.Group>
                <Button style={{display:'flex', margin:'1rem auto', width:'30%', textAlign: 'center'}} variant="primary" type="submit">
                    Create Account
                </Button>
                <Alert variant="secondary"> Already an account? Login <a href="/login">here!</a> </Alert>
            </Form>
        </Card>
        </div>
    )
}

export default Signup
