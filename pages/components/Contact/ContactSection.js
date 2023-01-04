import ContactForm from "./ContactForm";

function ContactSection(){
    return (
        <div className="flex flex-col md:flex-row py-[10vh]">
            <div className="inline-block text-purple-300">
                <h2 className="font-montserratBold text-3xl">It was nice meeting you. <br/>I&apos;d love to get in touch.</h2>
                <p>Whether it be about an opportunity, a question, 
                    or simply just to say hi, feel free to send me a message.</p>
            </div>
            <ContactForm />
        </div>
    );
}

export default ContactSection;