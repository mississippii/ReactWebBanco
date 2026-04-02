import React from 'react';
import { Container, Row, Col, Card, ListGroup, Image } from 'react-bootstrap';
import img1 from '../../Images/stock20.jpg';

const underwrittenCompanies = [
  'Master Feed Agrotec Limited',
  'Golden Harvest Agro Industries Limited',
  'Esquire Knit Composite Limited',
  'Ratanpur Steel Re-rolling Mills Limited',
  'Express Insurance Limited',
  'Advent Pharma Limited',
  'Saif Powertec Limited',
  'Queen South Textile Mills Limited',
  'Shepherd Industries Limited',
  'GPH Ispat Limited',
  'Fortune Shoes Limited',
  'IDLC Finance Limited',
  'Galaxy Sweater and Yarn Dyeing Limited',
  'BD Thai Aluminium Ltd',
  'Shasha Denims Limited',
  'Ifad Autos Limited',
  'Safco Spinning Mills Limited',
  'Metrocem Cement Limited',
  'Generation Next Fashions Limited',
  'Bangladesh Industrial Finance Company Limited',
  'Peoples Leasing and Financial Services Limited',
  'Republic Insurance Company Limited',
  'Dacca Dyeing & Manufacturing Co. Ltd',
  'Bangladesh Finance and Investment Limited',
  'Hwa Well Textile (BD) Limited',
  'Shamsul Alamin Real Estate Limited',
  'Tung Hai Knitting and Dyeing Limited',
  'Mozaffar Hossain Spinning Mills Limited',
  'United Airways (BD) Limited',
  'Aamra Technologies Limited',
];

function Undewriting() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="border-0 shadow-sm">
            <Row className="no-gutters">
              <Col md={6}>
                <Image src={img1} alt="Underwriting of Shares" fluid rounded className="h-100" style={{ objectFit: 'cover' }} />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title as="h2" className="text-primary mb-4">Underwriting of Shares</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    The risks of under-subscription of public offerings are mitigated through underwriting. We are a licensed underwriter approved by the Bangladesh Securities and Exchange Commission (BSEC). Underwriting services are offered to companies desiring to go for public issues in different forms, such as IPO, RPO, and Rights Issue.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
            <Card.Body>
              <Card.Title as="h5" className="mb-3">Issues Underwritten by SIM Capital Limited</Card.Title>
              <ListGroup variant="flush">
                {underwrittenCompanies.map((company, i) => (
                  <ListGroup.Item key={i} className="py-2">{company}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Undewriting;
