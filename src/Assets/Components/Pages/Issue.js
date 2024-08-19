import React from 'react';
import { Container, Row, Col, Card, ListGroup, Image } from 'react-bootstrap';
import yourImage from '../../Images/handshake.jpg';

const Issue = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="border-0 shadow-sm">
            <Row className="no-gutters">
              <Col md={6}>
                <Image src={yourImage} alt="Alpha Capital Management" fluid rounded className="h-100" />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title as="h2" className="text-primary mb-4">Issue Management</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    At Alpha Capital Management Limited, sustainability is an important driver of our engagement with clients and how we conduct our business. Every single requirement of the clients is properly analyzed with care. We provide advice in sourcing the capital that companies need to grow, the expertise needed to manage risks, and the information and perspectives our clients must have to make business and investment decisions. Increasingly, all of these activities demand focus on sustainability issues and the future of the ventures that we work with.
                  </Card.Text>
                  <Card.Title as="h4" className="mb-3">Our Issue Management Services include:</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="py-2">Initial Public Offering (IPO)</ListGroup.Item>
                    <ListGroup.Item className="py-2">Rights Issue</ListGroup.Item>
                    <ListGroup.Item className="py-2">Repeat Public Offering (RPO)</ListGroup.Item>
                    <ListGroup.Item className="py-2">Underwriting Arrangement</ListGroup.Item>
                    <ListGroup.Item className="py-2">Qualified Investor Offer by Small Capital Companies</ListGroup.Item>
                    <ListGroup.Item className="py-2">Issuance of Debt Securities (Private & Public)</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Issue;
