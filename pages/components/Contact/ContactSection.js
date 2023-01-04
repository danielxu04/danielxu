import ContactForm from "./ContactForm";

function ContactSection(){
    return (
        <div id="contact" className="flex flex-col lg:flex-row lg:pt-[10vh] pb-[15vh]">
            <div className="flex lg:block text-purple-300 mt-6 items-center lg:w-2/5">
                <div className="px-[1vw] 2xs:px-[3vw] pt-[8vh] pb-[2vh] md:pb-0 lg:pb-[2vh] text-center w-full lg:text-left lg:pl-[9vw]">
                    <h2 className="font-montserratBold text-4xl purple-glow 2xl:text-6xl">It was nice meeting you. <br/>I&apos;d love to get in touch.</h2>
                    <br /><br />
                </div>
                <p className="hidden lg:flex font-montserratRegular text-md md:px-[10vw] xl:px-[6vw] lg:text-lg text-purple-300 purple-glow lg:ml-[6vh]">
                    Whether it be about an opportunity, a question, 
                    or simply just to say hi, feel free to send me a message.
                </p>
            </div>
            <div className="flex lg:hidden text-center lg:text-left">
                <p className="px-[2vw] 2xs:px-[4vw] flex font-montserratRegular text-md lg:text-lg text-purple-300 purple-glow lg:px-[10vh] lg:ml-[6vh]">
                    Whether it be about an opportunity, a question, 
                    or simply just to say hi, feel free to send me a message.
                </p>
            </div>
            <ContactForm />
        </div>
    );
}

export default ContactSection;