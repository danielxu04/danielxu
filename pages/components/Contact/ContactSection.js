import ContactForm from "./ContactForm";

function ContactSection(){
    return (
        <div className="flex flex-col md:flex-row py-[10vh]">
            <div className="block text-purple-300 mt-6 w-2/5">
                <div className="relative pl-[9vw]">
                    <h2 className="font-montserratBold text-6xl ">It was nice meeting you. <br/>I&apos;d love to get in touch.</h2>
                    <br /><br />
                </div>  
                    <p className="px-[10vh] font-montserratRegular">Whether it be about an opportunity, a question, 
                        or simply just to say hi, feel free to send me a message.</p>
                
                
            </div>
            <ContactForm />
        </div>
    );
}

export default ContactSection;