import { useContext } from 'react';
import { LightModeContext } from "../../contexts/LightMode";

function DesktopNavButton(props){

    const lightModeState = useContext(LightModeContext);

    return(
        <a href={props.id} className={`text-py-2 px-5 lg:px-7 font-ubuntuMedium rounded text-lg hover:scale-110 transition-15
            ${lightModeState.isLightMode === 'light' ? 'nav-items text-purple-600 purple-glow' : 'light-nav-items text-fuchsia-600 light-purple-glow'}`}>
                {props.text}
        </a>
    );
}

export default DesktopNavButton;