import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Portfolio() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <Card.Title as="h2" className="text-center text-primary mb-4">Managing Portfolio of Clients</Card.Title>
              <Card.Text className="text-muted mb-4">
                We constantly strive to be creative and anticipate the changing needs of our clients by developing new products and services. Clients seek customized and holistic solutions. Based on our clients’ unique needs, we tailor solutions across a broad range of offerings – from portfolio design to advisory solutions. We have a dedicated portfolio team to look after the best management of our clients’ money.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Portfolio