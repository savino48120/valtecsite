import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image, Tab, Nav } from "react-bootstrap";
import placeholder1 from "./placeholder1.jpg";
import placeholder2 from "./placeholder2.jpg";
import "../home.css";
import {
  FaIndustry,
  FaBuilding,
  FaLandmark,
  FaTools,
  FaRecycle,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css"

const Markets = () => {
  const [activeTab, setActiveTab] = useState("oilGas");

  const tabContent = {
    oilGas: [
      [{ sectionTitle: "Oil and Gas Industry" }],
      [
        {
          title: "Oil and Gas Infrastructure",
          description: "Lorem ipsum dolor sit amet...",
          img: placeholder1,
        },
        {
          title: "Oil and Gas Infrastructure",
          description: "Lorem ipsum dolor sit amet...",
          img: placeholder2,
        },
      ],
    ],
    renewableEnergy: [
      [{ sectionTitle: "Renewable Energy Industry" }],
      [
        {
          title: "Renewable Energy",
          description: "Lorem ipsum dolor sit amet...",
          img: placeholder1,
        },
        {
          title: "Renewable Energy",
          description: "Lorem ipsum dolor sit amet...",
          img: placeholder2,
        },
      ],
    ],
    infrastructure: [
      [{ sectionTitle: "Infrastructure Industry" }],
      [
        {
          title: "Infrastructure Infrastructure",
          description: "Lorem ipsum dolor sit amet...",
          img: placeholder1,
        },
        {
          title: "Oil and Gas Infrastructure",
          description: "Lorem ipsum dolor sit amet...",
          img: placeholder2,
        },
      ],
    ],
    engineering: [
      [{ sectionTitle: "Engineering Industry" }],
      [
        {
          title: "Engineering",
          description: "Lorem ipsum dolor sit amet...",
          img: placeholder1,
        },
        {
          title: "Renewable Energy",
          description: "Lorem ipsum dolor sit amet...",
          img: placeholder2,
        },
      ],
    ],
    financial: [
      [{ sectionTitle: "Financial Industry" }],
      [
        {
          title: "Financial Infrastructure",
          description: "Lorem ipsum dolor sit amet...",
          img: placeholder1,
        },
        {
          title: "Oil and Gas Infrastructure",
          description: "Lorem ipsum dolor sit amet...",
          img: placeholder2,
        },
      ],
    ],
    // Additional tabs content can go here
  };

  useEffect(()=>{
    AOS.init(
      {
        duration:1050,
        offset:50,
      }
    )
  }, []);

  return (
    <Container fluid className="mt-5 marketSection">
      <h1 className="marketTitle text-center mb-3 defheadFont text-danger">
        <span data-aos="fade-up" data-aos-delay="500"><FaIndustry /></span> <span data-aos="fade-up" data-aos-delay="600">Markets</span>
      </h1>
      <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)} >
        <Nav
          className="justify-content-center my-2 mx-auto marketTitle"
          variant="pills"
          style={{
            backgroundColor: "#ff1143",
            borderRadius: "30px",
            padding: "10px",
            width: "70%",
          }}
        >
          <Nav.Item className='defbodyFont'>
            <Nav.Link eventKey="oilGas" style={{ color: "#ffffff" }} >
              <FaIndustry
                className="me-2"
                color={activeTab === "oilGas" ? "#ff416c" : "white"}
              />{" "}
              Oil & Gas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='defbodyFont'>
            <Nav.Link eventKey="renewableEnergy" style={{ color: "#fff" }}>
              <FaRecycle
                className="me-2"
                color={activeTab === "renewableEnergy" ? "#ff416c" : "white"}
              />{" "}
              Renewable Energy
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='defbodyFont'>
            <Nav.Link eventKey="infrastructure" style={{ color: "#fff" }}>
              <FaBuilding
                className="me-2"
                color={activeTab === "infrastructure" ? "#ff416c" : "white"}
              />{" "}
              Infrastructure
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='defbodyFont'>
            <Nav.Link eventKey="engineering" style={{ color: "#fff" }}>
              <FaTools
                className="me-2"
                color={activeTab === "engineering" ? "#ff416c" : "white"}
              />{" "}
              Engineering
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='defbodyFont'>
            <Nav.Link eventKey="financial" style={{ color: "#fff" }}>
              <FaLandmark
                className="me-2"
                color={activeTab === "financial" ? "#ff416c" : "white"}
              />{" "}
              Financial Services
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="marketTitle">
          <Tab.Content>
            <Tab.Pane eventKey={activeTab}>
              <h3 className="text-center mt-3 mb-1 defheadFont" data-aos="fade-up">
                {tabContent[activeTab][0][0].sectionTitle}
              </h3>
              <Row className="justify-content-around">
                {tabContent[activeTab][1].map((content, index) => (
                  <Col md={6} className="mt-4" key={index} data-aos="fade-up">
                    <Image src={content.img} fluid rounded />
                    <h5 className="my-3 defbodyFont" data-aos="fade-up"><strong>{content.title}</strong></h5>
                    <p className='defbodyFont' data-aos="fade-up">{content.description}</p>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
      <p className="text-center defbodyFont">
        <Button variant="danger" className="mt-4 px-5 fs-5 marketTitle">
          Request a Quote
        </Button>{" "}
        <Button variant="danger" className="mt-4 px-5 fs-5 ms-2 marketTitle">
          Make Enquiries
        </Button>
      </p>
    </Container>
  );
};

export default Markets;
