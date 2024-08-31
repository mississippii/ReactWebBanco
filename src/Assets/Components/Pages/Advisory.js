import React from 'react';
import { Container, Row, Col, Card, ListGroup ,Image} from 'react-bootstrap';
import yourImage from '../../Images/corporate.jpg';

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
                Our Mission is to achieve your investment goal. We strive to provide best-in-class advice and execution excellence on the most complex transactions across products in order to help our clients grow.
                We aspire to be the leading trusted advisor in regards to the advisory services related to.
                </Card.Text>
                <ListGroup variant="flush" className="text-muted">
                  <ListGroup.Item className="py-2">Capital Structuring</ListGroup.Item>
                  <ListGroup.Item className="py-2">Capital Raising</ListGroup.Item>
                  <ListGroup.Item className="py-2">listing through IPO, RPO and Rights Issue</ListGroup.Item>
                  <ListGroup.Item className="py-2">Merger and Acquisition</ListGroup.Item>
                  <ListGroup.Item className="py-2">issuance of debt securities</ListGroup.Item>
                  <ListGroup.Item className="py-2">Ensuring Corporate Governance</ListGroup.Item>
                </ListGroup>
                <Card.Text className="text-muted mb-4">
                Our Investment Banking division is in the front end to provide our clients better solution and mechanism for the profitability of our valued clients. We remain committed to a strategy of sourcing investing/financing opportunities with clients.
                </Card.Text>
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
