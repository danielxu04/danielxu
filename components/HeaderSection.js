import NavBar from './NavBar/NavBar';
import IntroContainer from './IntroContainer';

function HeaderSection(){
    return (
        <div>
            <div className="top-0">
                <NavBar />
            </div>
            <div className="pt-[11vh] md:py-[11vh] md:pb-[8vh]">
                <IntroContainer />
            </div>
            
        </div>
    );
}

export default HeaderSection;