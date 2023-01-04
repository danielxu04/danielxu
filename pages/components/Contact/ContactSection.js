import ContactForm from "./ContactForm";

function ContactSection(){
    return (
        <div className="flex flex-col md:flex-row pt-[10vh] pb-[15vh]">
            <div className="block text-purple-300 mt-6 w-2/5">
                <div className="relative pt-[8vh] pl-[9vw] pb-[2vh]">
                    <h2 className="font-montserratBold text-6xl purple-glow">It was nice meeting you. <br/>I&apos;d love to get in touch.</h2>
                    <br /><br />
                </div>  
                    <p className="lg:px-[10vh] lg:ml-[6vh] font-montserratRegular text-lg purple-glow">Whether it be about an opportunity, a question, 
                        or simply just to say hi, feel free to send me a message.</p>
                
                
            </div>
            <ContactForm />
        </div>
    );
}

export default ContactSection;