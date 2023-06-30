import {useFormik} from 'formik';
import Input from './Input';
import { useContext } from "react";
import { LightModeContext } from "../../contexts/LightMode";


const validate = (values) => {
    const errors = {};
  
    if (!values.name) {
      errors.name = 'Please enter your name.';
    }
  
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Please enter a valid email.';
    }
  
    if (!values.message) {
      errors.message = 'Please enter your message.';
    }
  
    return errors;
  };


function ContactForm(){

    const lightModeState = useContext(LightModeContext);

    const formik = useFormik({
        initialValues: { name: '', email: '', message: ''},
        validate,
        onSubmit: (values, actions) => {
            actions.resetForm();
            
        },
    });
    
    return (
        <form 
            name='contact' 
            onSubmit={formik.SubmitHandler} 
            action="mailto:danielxu004@gmail.com" 
            method="post" 
            enctype="text/plain" 
            className="w-full lg:w-3/5 pt-[4vh]"
        >
            <div className="gap-2.5 block text-center">
                <Input 
                    name='name'
                    type='text'
                    placeholder="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name && (
                    <p className="text-xs text-pink-600 pt-3 font-montserratMedium">{formik.errors.name}</p>
                )}
            </div>
            <div className="gap-2.5 block text-center">
                <Input 
                    name='email'
                    type='email'
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                    <p className="text-xs text-pink-600 pt-3 font-montserratMedium">{formik.errors.email}</p>
                )}
            </div>
            <div className="block gap-2.5 text-center">
                <textarea
                    name="message"
                    type="text"
                    rows={10}
                    placeholder="Message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    className={`rounded-md p-3 w-[77vw] 2xs:w-[70vw] lg:w-[45vw] mt-[6vh] min-h-[37vh] max-h-[40vh] font-montserratRegular inline-block mx-auto text-left focus:outline-none
                    transition-075 ${lightModeState.isLightMode === 'light' 
                    ? 'bg-zinc-800 text-purple-300 purple-300-glow form-purple-box-shadow' 
                    : 'bg-pink-50 text-fuchsia-600 fuchsia-600-glow placeholder-fuchsia-300 light-form-box-shadow'}`}
                />
                {formik.errors.message && formik.touched.message && (
                    <p className="text-xs text-pink-600 pt-3 font-montserratMedium">{formik.errors.message}</p>
                )}
            </div>
            <div className="block text-center">
                <button className={`rounded-lg w-[40vw] md:w-[20vw] lg:w-[10vw] h-[7vh] md:h-[5vh] lg:h-[3.5vh] xl:h-[5vh] font-montserratMedium 
                 border-[1px] hover:border-[1.5px] mt-[4vh] xl:mt-[7vh] justify-center hover:scale-110 
                 ${lightModeState.isLightMode === 'light' 
                    ? 'bg-zinc-800 text-purple-300 purple-300-glow border-purple-300 hover:text-purple-300 chat-btn' 
                    : 'bg-pink-50 text-fuchsia-600 fuchsia-600-glow border-fuchsia-400 placeholder-fuchsia-300 light-chat-btn'}`}
                    type='submit'>
                    Send
                </button>
            </div>
            
        </form>
    );
}

export default ContactForm;