import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { PageBreadcrumb } from '../../componenets/breadcrumb/Breadcrumb.comp';
import { SearchFrom } from '../../componenets/search-form/SearchFrom.comp';
import { TicketTable } from '../../componenets/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import {Link} from "react-router-dom";

export const TicketLists = () => {

    const [str, setStr] = useState('');
    const [dispTicket, setDispTicket] = useState(tickets);

    useEffect(() => {}, [str, dispTicket]);

    const handleOnChange = (e) => {
        const { value } = e.target;
        console.log(value);
        setStr(value);
        searchTicket(value);
    };

    const searchTicket = (sttr) => {
        const displayTickets = tickets.filter((row) =>
        row.subject.toLowerCase().includes(sttr.toLowerCase())
        );
        setDispTicket(displayTickets);
    };


  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Ticket Lists" />
            </Col>
        </Row>

        <Row className="mt-4">
            <Col>
            <Link to = "/add-ticket">
                <Button variant="success">Add New Ticket</Button>
                </Link>
            </Col>
            <Col className="text-right">
                <SearchFrom handleOnChange={handleOnChange} str={str}/>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <TicketTable tickets ={dispTicket} />
            </Col>
        </Row>

    </Container>
  );
};
