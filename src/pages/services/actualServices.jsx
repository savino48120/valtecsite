import React from "react";
import aboutImg from "../../assets/aboutImg.png";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import "./services.css";
import {
  MdOutlineConstruction,
  MdOutlineCompassCalibration,
  MdOutlineSolarPower,
  MdOutlinePrecisionManufacturing,
  MdOutlineGroup,
} from "react-icons/md";
import { PiMonitor } from "react-icons/pi";
import { AiOutlineExperiment } from "react-icons/ai";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      offset: 50, // Trigger animations 50px before an element is in view
    });
  }, []);
  return (
    <>
      <Banner title="Valtec Services" />
      <Container className="mt-4 px-0">
        <p className="mx-3" data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum
          assumenda, optio vitae sequi possimus eligendi soluta ipsam quasi,
          iure delectus autem, necessitatibus voluptate exercitationem rerum hic
          nam quae eum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Velit laborum assumenda, optio vitae sequi possimus eligendi soluta
          ipsam quasi, iure delectus autem, necessitatibus voluptate
          exercitationem rerum hic nam quae eum!
        </p>
        <Row className="flex-column gy-2 mt-5">
          <Col data-aos="fade-up">
            <Row className="justify-content-between align-items-start">
              <Col xs={12} lg={6} className="zoom-out-container mb-5">
                <div
                  className="image-Container"
                  style={{ width: "100%", height: "auto" }}
                >
                  <img src={aboutImg} alt="Company" className="img-fluid" />
                </div>
              </Col>
              <Col className="">
                <p className="fs-5 p-0 m-0">
                  <MdOutlineConstruction className="s-icon" />
                  Engineering, Procument and Construction
                </p>
                <hr
                  style={{
                    borderTop: "2px solid rgba(255,17,67,1)",
                    borderRadius: "4px",
                    opacity: "1",
                    margin: "0.5rem 0",
                  }}
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tempor magna et placerat fringilla. Phasellus nisl orci, Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Velit laborum
                assumenda, optio vitae sequi possimus eligendi soluta ipsam
                quasi, iure delectus autem, necessitatibus voluptate
                exercitationem rerum hic nam quae eum!
                <p className="mt-4">
                  {/* <DefaultButton name="Read More" variant="danger" /> */}
                </p>
              </Col>
            </Row>
          </Col>
          <Col data-aos="fade-up">
            <Row className="justify-content-between align-items-start">
              <Col xs={12} lg={6} className="zoom-out-container mb-5">
                <img src={aboutImg} alt="Company" className="img-fluid" />
              </Col>
              <Col>
                <p className="fs-5 p-0 m-0">
                  <MdOutlineCompassCalibration className="s-icon" />
                  Calibration Services
                </p>
                <hr
                  style={{
                    borderTop: "2px solid rgba(255,17,67,1)",
                    borderRadius: "4px",
                    opacity: "1",
                    margin: "0.5rem 0",
                  }}
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tempor magna et placerat fringilla. Phasellus nisl orci,
                imperdiet vitae eros ac, molestie elementum magna. Maecenas
                dictum, velit quis volutpat cursus, sapien risus hendrerit eros,
                non congue arcu massa sit amet magna.
                <p className="mt-4">
                  {/* <DefaultButton name="Read More" variant="danger" /> */}
                </p>
              </Col>
            </Row>
          </Col>
          <Col data-aos="fade-up">
            <Row className="justify-content-between align-items-start">
              <Col xs={12} lg={6} className="zoom-out-container mb-5">
                <img src={aboutImg} alt="Company" className="img-fluid" />
              </Col>
              <Col className="">
                <p className="fs-5 p-0 m-0">
                  <AiOutlineExperiment className="s-icon" /> Fuel Additives and
                  Lubricants
                </p>
                <hr
                  style={{
                    borderTop: "2px solid rgba(255,17,67,1)",
                    borderRadius: "4px",
                    opacity: "1",
                    margin: "0.5rem 0",
                  }}
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tempor magna et placerat fringilla. Phasellus nisl orci,
                imperdiet vitae eros ac, molestie elementum magna. Maecenas
                dictum, velit quis volutpat cursus, sapien risus hendrerit eros,
                non congue arcu massa sit amet magna.
                <p className="mt-4">
                  {/* <DefaultButton name="Read More" variant="danger" /> */}
                </p>
              </Col>
            </Row>
          </Col>
          <Col data-aos="fade-up">
            <Row className="justify-content-between align-items-start">
              <Col xs={12} lg={6} className="zoom-out-container mb-5">
                <img src={aboutImg} alt="Company" className="img-fluid" />
              </Col>
              <Col className="">
                <p className="fs-5 p-0 m-0">
                  <MdOutlinePrecisionManufacturing className="s-icon" />{" "}
                  Infrastructure and Facilities
                </p>
                <hr
                  style={{
                    borderTop: "2px solid rgba(255,17,67,1)",
                    borderRadius: "4px",
                    opacity: "1",
                    margin: "0.5rem 0",
                  }}
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tempor magna et placerat fringilla. Phasellus nisl orci,
                imperdiet vitae eros ac, molestie elementum magna. Maecenas
                dictum, velit quis volutpat cursus, sapien risus hendrerit eros,
                non congue arcu massa sit amet magna.
                <p className="mt-4">
                  {/* <DefaultButton name="Read More" variant="danger" /> */}
                </p>
              </Col>
            </Row>
          </Col>
          <Col data-aos="fade-up">
            <Row className="justify-content-between align-items-start">
              <Col xs={12} lg={6} className="zoom-out-container mb-5">
                <img src={aboutImg} alt="Company" className="img-fluid" />
              </Col>
              <Col className="">
                <p className="fs-5 p-0 m-0">
                  <MdOutlineSolarPower className="s-icon" />
                  Renewable Energy
                </p>
                <hr
                  style={{
                    borderTop: "2px solid rgba(255,17,67,1)",
                    borderRadius: "4px",
                    opacity: "1",
                    margin: "0.5rem 0",
                  }}
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tempor magna et placerat fringilla. Phasellus nisl orci,
                imperdiet vitae eros ac, molPublic Private Partnerships estie
                elementum magna. Maecenas dictum, velit quis volutpat cursus,
                sapien risus hendrerit eros, non congue arcu massa sit amet
                magna.
                <p className="mt-4">
                  {/* <DefaultButton name="Read More" variant="danger" /> */}
                </p>
              </Col>
            </Row>
          </Col>
          <Col data-aos="fade-up">
            <Row className="justify-content-between align-items-start">
              <Col xs={12} lg={6} className="zoom-out-container mb-5">
                <img src={aboutImg} alt="Company" className="img-fluid" />
              </Col>
              <Col className="">
                <p className="fs-5 p-0 m-0">
                  <PiMonitor className="s-icon" />
                  Digital Solutions, IT and Cybersecurity
                </p>
                <hr
                  style={{
                    borderTop: "2px solid rgba(255,17,67,1)",
                    borderRadius: "4px",
                    opacity: "1",
                    margin: "0.5rem 0",
                  }}
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tempor magna et placerat fringilla. Phasellus nisl orci,
                imperdiet vitae eros ac, molestie elementum magna. Maecenas
                dictum, velit quis volutpat cursus, sapien risus hendrerit eros,
                non congue arcu massa sit amet magna.
                <p className="mt-4">
                  {/* <DefaultButton name="Read More" variant="danger" /> */}
                </p>
              </Col>
            </Row>
          </Col>
          <Col data-aos="fade-up">
            <Row className="justify-content-between align-items-start">
              <Col xs={12} lg={6} className="zoom-out-container mb-5">
                <img src={aboutImg} alt="Company" className="img-fluid" />
              </Col>
              <Col className="">
                <p className="fs-5 p-0 m-0">
                  <MdOutlineGroup className="s-icon" />
                  Public Private Partnerships
                </p>
                <hr
                  style={{
                    borderTop: "2px solid rgba(255,17,67,1)",
                    borderRadius: "4px",
                    opacity: "1",
                    margin: "0.5rem 0",
                  }}
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tempor magna et placerat fringilla. Phasellus nisl orci,
                imperdiet vitae eros ac, molestie elementum magna. Maecenas
                dictum, velit quis volutpat cursus, sapien risus hendrerit eros,
                non congue arcu massa sit amet magna.
                <p className="mt-4">
                  {/* <DefaultButton name="Read More" variant="danger" /> */}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
