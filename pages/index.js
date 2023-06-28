import {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import HeaderSection from '../components/HeaderSection';
import AboutMe from '../components/AboutMe/AboutMe';
import ProjectSection from '../components/Projects/ProjectSection';
import ContactSection from '../components/Contact/ContactSection';
import FooterSection from '../components/Footer/FooterSection';
import ParticleAnimation from '../components/ParticleAnimation';



function HomePage() {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <div className="flex flex-col w-screen">
            <HeaderSection />
            <div data-aos="fade-up"><AboutMe /></div>
            <div data-aos="fade-up"><ProjectSection /></div>
            <div data-aos="fade-up"><ContactSection /></div>
            <FooterSection />
            <ParticleAnimation />
        </div>
    );
}


export default HomePage;