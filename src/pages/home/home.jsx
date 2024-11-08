import React from "react";
import MainSlider from "./components/carousel.jsx";
import AboutSection from "./components/aboutSection.jsx";
import ServiceSection from "./services.jsx";
import Markets from "./components/Markets.jsx";
import ProjectSection from "./components/projectsSection.jsx";
import ContactSection from "./components/contactSection.jsx";
import "../../assets/home"

export default function Home() {
    return (
        <div>
            <MainSlider />
            <AboutSection />
            <Markets />
            <ServiceSection />
            <ProjectSection />
            <ContactSection />
        </div>
    )
}