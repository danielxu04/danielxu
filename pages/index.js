// our-domain.com/

import HeaderSection from './components/HeaderSection';
import AboutMe from './components/AboutMe/AboutMe'

function HomePage() {
    return (
        <div className="flex flex-col">
            <HeaderSection />

            <AboutMe />
        </div>
    );
}


export default HomePage;