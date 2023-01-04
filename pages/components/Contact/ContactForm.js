import {useFormik} from 'formik';
import Input from './Input';

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
            className="w-3/5 pt-[4vh]"
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
                    className="rounded-md bg-zinc-800 px-4 p-3 mt-[6vh] font-montserratRegular form-purple-box-shadow text-purple-300 purple-300-glow inline-block mx-auto text-left focus:outline-none w-[45vw]"
                />
                {formik.errors.message && formik.touched.message && (
                    <p className="text-xs text-pink-600 pt-3 font-montserratMedium">{formik.errors.message}</p>
                )}
            </div>
            
            <div className="block text-center">
                <button className="rounded-lg w-[10vw] h-[5vh] bg-zinc-800 text-purple-300 font-montserratMedium border-purple-300 border-2 mt-[7vh] justify-center hover:scale-110 chat-btn" type='submit'>
                    Send!
                </button>
            </div>
            
        </form>
    );
}

export default ContactForm;