import NavBar from './NavBar/NavBar';
import IntroContainer from './IntroContainer';

function HeaderSection(){
    return (
        <div>
            <div className="top-0">
                <NavBar />
            </div>
            <div className="py-[11vh]">
                <IntroContainer />
            </div>
            
        </div>
    );
}

export default HeaderSection;