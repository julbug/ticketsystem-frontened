import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { PageBreadcrumb } from '../../componenets/breadcrumb/Breadcrumb.comp';
import { AddTicketForm } from '../../componenets/add-ticket-form/AddTicketForm.comp';
import {shortText} from '../../utils/validation';


const initialFrmDt = {
    name: "",
    email: "",
    subject: "",
    issueDate: "",
    details: ""

};
const initialFrmError = {
    name: false,
    email: false,
    subject: false,
    issueDate: false,
    details: false

};
export const AddTicket = () => {

    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataError, setFrmDataError] = useState(initialFrmError);
    useEffect(()=>{}, [frmData, frmDataError]);


    const handleOnChange = (e) =>{
        const {name, value} = e.target;

        
        setFrmData({
            ...frmData,
            [name]:value
        })
        
    };

const handleOnSubmit = async (e) =>{
    e.preventDefault();

    setFrmDataError(initialFrmError)

    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataError({
        ...initialFrmError,
        subject: !isSubjectValid,
    });

    console.log('Form submit request recieved', frmData)
};

  return (
    <Container>
    <Row>
        <Col>
            <PageBreadcrumb page="New Ticket" />
        </Col>
    </Row>

    <Row>
        <Col>
           <AddTicketForm
           handleOnChange={handleOnChange}
           handleOnSubmit={handleOnSubmit}
           frmDataError={frmDataError}
           frmDt = {frmData} />
        </Col>
    </Row>
    </Container>
  )
}
