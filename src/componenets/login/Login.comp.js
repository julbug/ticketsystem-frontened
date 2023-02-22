import React from 'react'
import PropTypes from 'prop-types'
import{Container, Row, Col, Form, Button} from 'react-bootstrap'

export const LoginForm = ({
    handleOnChange,
    handleOnSubmit,
    formSwitcher,
    email,
    pass,
}) => {
  return (
    <Container>
    <Row>
        <Col>
          <h1 className='text-success text-center'>Client Login</h1>
          <hr/>
          <Form autoComplete="off" onSubmit ={handleOnSubmit}>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type="email"
                    name="email"
                    value={email}
                    onChange = {handleOnChange}
                    placeholder="Enter Email"
                    required
                    
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password"
                    name="password"
                    onChange = {handleOnChange}
                    value={pass}
                    placeholder="password"
                    required
                    
                />
            </Form.Group>
            <br />
           <center><Button type="submit">Login</Button></center>
          </Form>
          <hr />
      </Col>
    </Row>

    <Row>
        <Col>
            <a href="#!" onClick={() => formSwitcher('rest')}>
            Forgot Password
            </a>
        </Col>
    </Row>


    </Container>
  );
};
LoginForm.propType = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
};