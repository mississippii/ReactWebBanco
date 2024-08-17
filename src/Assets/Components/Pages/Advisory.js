import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function Advisory() {
  return (
    <Container className="my-5">
    <Row className="justify-content-center">
      <Col lg={10}>
        <Card className="border-0 shadow-sm">
          <Card.Body>
            <Card.Title as="h2" className="text-center text-primary mb-4">Our Services</Card.Title>
            <Card.Text className="text-muted mb-4">
              As a licensee of the BSEC, ACML plays a role of ‘Intermediary’ in the capital market of Bangladesh. It’s a service-oriented company whose major activities of business include:
            </Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item className="py-2">Issue Management (IPO, RPO, Rights Issue, Bond & Debenture Issue, Issue of Preference Share, Capital Raising, and/or Private Placement)</ListGroup.Item>
              <ListGroup.Item className="py-2">Underwriting of Shares</ListGroup.Item>
              <ListGroup.Item className="py-2">Managing Portfolio of Clients</ListGroup.Item>
              <ListGroup.Item className="py-2">Corporate Advisory Services</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Advisory
