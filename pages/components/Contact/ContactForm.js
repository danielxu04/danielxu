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
            className="w-1/2"
        >
            <div className="flex flex-col gap-2.5">
                <Input 
                    id='name'
                    name='name'
                    type='text'
                    placeholder="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name && (
                    <p className="text-xs text-pink-600 font-montserratMedium">{formik.errors.name}</p>
                )}
            </div>
            <div className="flex flex-col gap-2.5">
                <Input 
                    id='email'
                    name='email'
                    type='email'
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                    <p className="text-xs text-pink-600 font-montserratMedium">{formik.errors.email}</p>
                )}
            </div>
            <div className="flex flex-col gap-2.5">
                <Input 
                    id='message'
                    name='message'
                    type='text'
                    placeholder="Message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                />
                {formik.errors.message && formik.touched.message && (
                    <p className="text-xs text-pink-600 font-montserratMedium">{formik.errors.message}</p>
                )}
            </div>

            <button className="rounded-lg bg-white mt-[4vh]" type='submit'>
                Let's Chat!
            </button>
        </form>
    );
}

export default ContactForm;