import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

import './add-ticket-form.style.css'


export const AddTicketForm = ({
    handleOnSubmit,
    handleOnChange,
    frmDt,
    frmDataError 
}) => {
    console.log(frmDt);
  return (
    <div className="p-5 mb-4 mt-3 bg-light rounded-3 shadow add-new-ticket">
    <h1 className = "text-success text-center">Add New Ticket</h1>
    <hr />
     <Form autoComplete="off" onSubmit ={handleOnSubmit}>


            <Form.Group as={Row}>
                <Form.Label column sm={3}>Name</Form.Label>
                <Col sm={9}>
                <Form.Control
                    name="name"
                    value={frmDt.name}
                    onChange = {handleOnChange}
                    placeholder="Name"
                    required
                />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Email</Form.Label>
                <Col sm={9}>
                <Form.Control
                    type="email"
                    name="email"
                    value={frmDt.email}
                    onChange = {handleOnChange}
                    placeholder="Email"
                    required
                    
                />
                </Col>
            </Form.Group>




            <Form.Group as={Row}>
                <Form.Label column sm={3}>Subject</Form.Label>
                <Col sm={9}>
                <Form.Control
                    name="subject"
                    value={frmDt.subject}
                    onChange = {handleOnChange}
                    placeholder="Subject"
                    required
                />
                <Form.Text className="text-danger">
                {frmDataError.subject && "Subject is required"}
                </Form.Text>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Issue Found</Form.Label>
                <Col sm={9}>
                <Form.Control 
                    type="date"
                    name="issueDate"
                    value={frmDt.issueDate}
                    onChange = {handleOnChange}
                    required
                />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Details</Form.Label>
                <Col sm={9}>
                <Form.Control 
                    as="textarea"
                    name="details"
                    value={frmDt.details}
                    rows="5"
                    onChange = {handleOnChange}
                    placeholder="Please provide a brief description of your issue"
                    required                    
                />
                </Col>
            </Form.Group>

            <Button type="submit" variant="success" block>
            Submit
            </Button>
          </Form>

    </div>
  );
};

AddTicketForm.propTypes={
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataError: PropTypes.object.isRequired,
};