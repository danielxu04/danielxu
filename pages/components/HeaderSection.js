import NavBar from './NavBar/NavBar';
import IntroContainer from './IntroContainer';

function HeaderSection(){
    return (
        <div>
            <NavBar />
            <div>
                <IntroContainer />
            </div>

        </div>
    );
}

export default HeaderSection;