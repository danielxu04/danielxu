// our-domain.com/

import HeaderSection from './components/HeaderSection';
import AboutMe from './components/AboutMe/AboutMe';
import ProjectSection from './components/Projects/ProjectSection';

function HomePage() {
    return (
        <div className="flex flex-col w-screen">
                <HeaderSection />
                <AboutMe />
                <ProjectSection />
        </div>
    );
}


export default HomePage;