// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../assets/css/stylecontact.css';

const FormPage = () => (
  <div className='div-contact-form'>
    <div className='div-title-form'>             
    </div>
       
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
      <div className='contact-form'> 
        <Form>
        <div className='fields-form'> 
        <div>
           <Field type="text" name="nombre" placeholder="Nombre" />
           <Field type="email" name="email" placeholder="Email"/>
           <ErrorMessage name="email" component="div" />
        </div>
           <Field className='field-consult' type="textarea" placeholder="Consulta" name="textarea" />
           <button className='btn-form btn btn-primary whyus-button' type="submit" disabled={isSubmitting}>
             Enviar Consulta
           </button>
        </div>
        </Form>
      </div>
      )}
    </Formik>
  </div>
);

export default FormPage;