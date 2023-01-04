import {useFormik} from 'formik';

const validate = (values) => {
    const errors = {};
  
    if (!values.name) {
      errors.name = 'Please enter a name.';
    }
  
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Please enter a valid email.';
    }
  
    if (!values.message) {
      errors.message = 'Please enter a message.';
    }
  
    return errors;
  };


function ContactForm(){

    
    return (
        <form name='contact' onSubmit={formik.handleSubmit} className="xl:mt-4">
            <div className="">
                <input type="text"></input>
            </div>
            <div className="">
                <input type="text" value=""></input>
            </div>
            <div className="">
                <input type="text" value=""></input>
            </div>
        </form>
    );
}

export default ContactForm;