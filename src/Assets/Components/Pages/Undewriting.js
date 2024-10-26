import React from 'react';
import { Container, Row, Col, Card, ListGroup,Image } from 'react-bootstrap';
import img1 from '../../Images/stock20.jpg';
function Undewriting() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="border-0 shadow-sm">
            <Row className="no-gutters">
              <Col md={6}>
                <Image src={img1} alt="Underwriting of Shares" fluid rounded className="h-100" />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title as="h2" className="text-primary mb-4">Underwriting of Shares</Card.Title>
                  <Card.Text className="text-muted mb-4">
                  The Risks of under subscription of public offering are mitigated through underwriting. We are licensed underwriter approved by the Bangladesh Securities and Exchange Commission (BSEC).
                  Underwriting services are offered to the companies desired to go for public issues in different form, such as IPO, RPO and Rights Issue. Issues underwritten by SIM Capital Limited are as under:
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
            <Card.Body>
              <Card.Text className="text-muted mb-4">
                Issues underwritten by SIM Capital Limited include:
              </Card.Text>
              <ListGroup variant="flush">
              <ListGroup.Item className="py-2">Master Feed Agrotec Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Golden Harvest Agro Industries Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Esquire Knit Composite Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Ratanpur Steel Re-rolling Mills Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Express Insurance Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Advent Pharma Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Saif Powertec Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Queen South Textile Mills Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Shepherd Industries Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">GPH Ispat Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Fortune Shoes Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">IDLC Finance Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Galaxy Sweater and Yarn Dyeing Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">BD Thai Aluminium Ltd</ListGroup.Item>
                    <ListGroup.Item className="py-2">Shasha Denims Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Ifad Autos Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Safco Spinning Mills Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Metrocem Cement Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Generation Next Fashions Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Bangladesh Industrial Finance Company Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Peoples Leasing and Financial Services Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Republic Insurance Company Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Dacca Dyeing & Manufacturing Co. Ltd</ListGroup.Item>
                    <ListGroup.Item className="py-2">Bangladesh Finance and Investment Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Hwa Well Textile (BD) Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Shamsul Alamin Real Estate Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Tung Hai Knitting and Dyeing Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Mozaffar Hossain Spinning Mills Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">United Airways (BD) Limited</ListGroup.Item>
                    <ListGroup.Item className="py-2">Aamra Technologies Limited</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Undewriting
