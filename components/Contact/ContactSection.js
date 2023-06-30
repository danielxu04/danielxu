import ContactForm from "./ContactForm";
import { useContext } from 'react';
import { LightModeContext } from "../../contexts/LightMode";

function ContactSection(){

    const lightModeState = useContext(LightModeContext);

    return (
        <div id="contact" className="flex flex-col pb-[4vh] lg:flex-row lg:pt-[10vh] lg:pb-[8vh] xl:pb-[15vh]">
            <div className={`flex lg:block mt-6 items-center lg:w-2/5 transition-075
            ${lightModeState.isLightMode === 'light' ? 'text-purple-100' : 'text-fuchsia-700'}`}>
                <div className="px-[1vw] 2xs:px-[3vw] pt-[8vh] pb-[2vh] md:pb-0 lg:pb-[2vh] text-center w-full lg:text-left lg:pl-[9vw]">
                    <h2 className={`font-montserratBold text-4xl 2xl:text-6xl
                    ${lightModeState.isLightMode === 'light' ? 'wider-purple-glow' : 'light-wider-purple-glow'}`}>It was nice meeting you. <br/>I&apos;d love to get in touch.</h2>
                    <br /><br />
                </div>
                <p className={`hidden lg:flex font-montserratRegular text-md md:px-[10vw] lg:px-0 xl:px-[6vw] lg:text-lg wider-purple-glow transition-075 lg:ml-[6vh]
                    ${lightModeState.isLightMode === 'light' ? 'wider-purple-glow subtext-color' : 'light-contact-glow text-fuchsia-500'}`}>
                    Whether it be about an opportunity, a question, 
                    or simply just to say hi, feel free to send me a message.
                </p>
            </div>
            <div className="flex lg:hidden text-center">
                <p className={`px-[2vw] 2xs:px-[4vw] flex font-montserratRegular text-md lg:text-lg subtext-color wider-purple-glow lg:px-[10vh] transition-075 lg:ml-[6vh]
                ${lightModeState.isLightMode === 'light' ? 'wider-purple-glow' : 'light-contact-glow'}`}>
                    Whether it be about an opportunity, a question, 
                    or simply just to say hi, feel free to send me a message.
                </p>
            </div>
            <ContactForm />
        </div>
    );
}

export default ContactSection;