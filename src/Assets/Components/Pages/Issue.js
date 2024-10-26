import React from 'react';
import { Container, Row, Col, Card, ListGroup, Image, Table } from 'react-bootstrap';
import yourImage from '../../Images/issiemenegment.jpg';

const Issue = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="border-0 shadow-sm">
            <Row className="no-gutters">
              <Col md={5} className="p-3">
                <Image src={yourImage} alt="SIM Capital Limited" fluid rounded />
              </Col>
              <Col md={7}>
                <Card.Body>
                  <Card.Title as="h2" className="text-primary mb-4">Issue Management</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    At SIM Capital Limited, sustainability is an important driver of our engagement with clients and how we conduct our business. Every single requirement of the clients is properly analyzed with care. We provide advice in sourcing capital that companies need to grow, the expertise needed to manage risks, and the information and perspectives our clients must have to make business and investment decisions. Increasingly, all of these activities demand focus on sustainability issues and the future of the ventures that we work with.
                  </Card.Text>

                  <Card.Title as="h4" className="mb-3">Our Issue Management Services consist of the following:</Card.Title>

                  {/* Initial Public Offering (IPO) Section */}
                  <Card.Title as="h5" className="mt-4 mb-3">Initial Public Offering (IPO)</Card.Title>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Name of the Company</th>
                        <th>Issue Size (Crore)</th>
                        <th>Particulars</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Taufika Foods and Agro Industries Limited</td>
                        <td>30.00</td>
                        <td>IPO</td>
                      </tr>
                      <tr>
                        <td>Sea Pearl Beach Resort & Spa Limited (Royal Tulip)</td>
                        <td>15.00</td>
                        <td>IPO</td>
                      </tr>
                      <tr>
                        <td>New Line Clothings Limited</td>
                        <td>30.00</td>
                        <td>IPO</td>
                      </tr>
                      <tr>
                        <td>Nahee Aluminum Composite Panel Ltd.</td>
                        <td>15.00</td>
                        <td>IPO</td>
                      </tr>
                      <tr>
                        <td>BBS Cables Limited</td>
                        <td>20.00</td>
                        <td>IPO</td>
                      </tr>
                      <tr>
                        <td>IFAD Autos Limited</td>
                        <td>63.75</td>
                        <td>IPO</td>
                      </tr>
                      <tr>
                        <td>Golden Harvest Agro Industries Limited</td>
                        <td>75.00</td>
                        <td>IPO</td>
                      </tr>
                      <tr>
                        <td>Family Tex (BD) Limited</td>
                        <td>34.00</td>
                        <td>IPO</td>
                      </tr>
                      <tr>
                        <td>Sunlife Insurance Company Limited</td>
                        <td>12.00</td>
                        <td>IPO</td>
                      </tr>
                      <tr>
                        <td>Social Islami Bank Limited</td>
                        <td>400.00</td>
                        <td>Bond Issue</td>
                      </tr>
                    </tbody>
                  </Table>

                  {/* Rights Issue Section */}
                  <Card.Title as="h5" className="mt-4 mb-3">Rights Issue</Card.Title>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Name of the Company</th>
                        <th>Issue Size (Crore)</th>
                        <th>Particulars</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Golden Harvest Agro Industries Limited</td>
                        <td>89.93</td>
                        <td>Rights Issue</td>
                      </tr>
                      <tr>
                        <td>IFAD Autos Limited</td>
                        <td>124.38</td>
                        <td>Rights Issue</td>
                      </tr>
                      <tr>
                        <td>Saif Powertec Limited</td>
                        <td>174.44</td>
                        <td>Rights Issue</td>
                      </tr>
                      <tr>
                        <td>GPH Ispat Limited</td>
                        <td>261.95</td>
                        <td>Rights Issue</td>
                      </tr>
                      <tr>
                        <td>First Finance Limited</td>
                        <td>25.16</td>
                        <td>Rights Issue</td>
                      </tr>
                      <tr>
                        <td>Bangladesh Industrial Finance Company Limited</td>
                        <td>33.56</td>
                        <td>Rights Issue</td>
                      </tr>
                      <tr>
                        <td>Delta Spinners Limited</td>
                        <td>91.72</td>
                        <td>Rights Issue</td>
                      </tr>
                      <tr>
                        <td>Tallu Spinning Mills Limited</td>
                        <td>42.80</td>
                        <td>Rights Issue</td>
                      </tr>
                    </tbody>
                  </Table>

                  {/* Issuance of Debt Securities Section */}
                  <Card.Title as="h5" className="mt-4 mb-3">Issuance of Debt Securities (Private & Public)</Card.Title>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Name of the Company</th>
                        <th>Issue Size (Crore)</th>
                        <th>Particulars</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Social Islami Bank Limited</td>
                        <td>400.00</td>
                        <td>Bond Issue</td>
                      </tr>
                    </tbody>
                  </Table>

                  {/* Additional Services */}
                  <ListGroup variant="flush" className="mt-4">
                    <ListGroup.Item className="py-2">Repeat Public Offering (RPO)</ListGroup.Item>
                    <ListGroup.Item className="py-2">Underwriting Arrangement</ListGroup.Item>
                    <ListGroup.Item className="py-2">Qualified Investor Offer by Small Capital Companies</ListGroup.Item>
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