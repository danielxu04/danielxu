import NavBar from './NavBar/NavBar';
import IntroContainer from './IntroContainer';

function HeaderSection(){
    return (
        <div>
            <div className="absolute top-0">
                <NavBar />
            </div>
            <div className="absolute top-16">
                <IntroContainer />
            </div>
            
        </div>
    );
}

export default HeaderSection;