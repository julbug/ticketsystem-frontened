import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { PageBreadcrumb } from '../../componenets/breadcrumb/Breadcrumb.comp'

export const Ticket = () => {
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb></PageBreadcrumb>
            </Col>
        </Row>
    </Container>
  )
}
