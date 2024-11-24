import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
    const handleSubmit = (values) => {
        console.log('Form submitted:', values);
    };

    return(
        <Formik
        initialValues={{ username: '', email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit} 
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <Field type="text" id="username" name="username" />
                        <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label htmlFor="password">Passowrd:</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name="password" component="div" stye={{ color: 'red' }} />
                    </div>
                    <button type="submit" disabled={isSubmitting}> 
                        Register
                    </button>
                </Form>
            )
            }
        </Formik>
    );
};

export default FormikForm;