import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { PageBreadcrumb } from '../../componenets/breadcrumb/Breadcrumb.comp';

export const TicketLists = () => {
  return (
    <Container>
        <Row>
            <PageBreadcrumb page="Ticket Lists" />
        </Row>
    </Container>
  )
}
