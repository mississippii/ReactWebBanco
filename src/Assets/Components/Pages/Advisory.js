import React from 'react';
import { Container, Row, Col, Card, ListGroup ,Image} from 'react-bootstrap';
import yourImage from '../../Images/corporate.jpg'; // Replace with your image path

function Advisory() {
  return (
    <Container className="my-5">
    <Row className="justify-content-center">
      <Col lg={10}>
        <Card className="border-0 shadow-sm">
          <Row className="no-gutters">
            <Col md={6}>
              <Image src={yourImage} alt="Our Services" fluid rounded className="h-100" />
            </Col>
            <Col md={6}>
              <Card.Body>
                <Card.Title as="h2" className="text-center text-primary mb-4">Our Services</Card.Title>
                <Card.Text className="text-muted mb-4">
                  As a licensee of the BSEC, ACML plays a role of ‘Intermediary’ in the capital market of Bangladesh. It’s a service-oriented company whose major activities of business include:
                </Card.Text>
                <ListGroup variant="flush" className="text-muted">
                  <ListGroup.Item className="py-2">Issue Management (IPO, RPO, Rights Issue, Bond & Debenture Issue, Issue of Preference Share, Capital Raising, and/or Private Placement)</ListGroup.Item>
                  <ListGroup.Item className="py-2">Underwriting of Shares</ListGroup.Item>
                  <ListGroup.Item className="py-2">Managing Portfolio of Clients</ListGroup.Item>
                  <ListGroup.Item className="py-2">Corporate Advisory Services</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Advisory
