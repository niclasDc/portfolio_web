import React, {useRef} from "react";
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import emailjs from '@emailjs/browser'


const ContactForm = () => {

    const  formContact = useRef();

    return(
      <Formik initialValues={{name: '', email: '',subject: '', message: ''}}
              validationSchema={Yup.object({
                  name: Yup.string().max(20, 'Debe contener 15 caracteres o menos').min(4,'Debe contener más de 4 caracteres').required('Required'),
                  email: Yup.string().email('Digite un correo valido').required('Required'),
                  subject: Yup.string().max(20, 'Debe contener 20 caracteres o menos').min(4,'Debe contener más de 4 caracteres').required('Required'),
                  message: Yup.string().max(100, 'Debe contener 100 caracteres o menos').min(10,'Debe contener más de 10 caracteres').required('Required')
              })}
              onSubmit={(values, {resetForm}) => {

                  emailjs.sendForm('service_b2ftngr', 'template_nv3lfg7', formContact.current, 'vWFN2BHKnq3-h_QBv')
                      .then((result)=>{
                          console.log(result.text);
                          resetForm();
                      }, (error) =>{
                          console.log(error.text)
                      });

              }}
      >
          <Form ref={formContact}>
              <div className="input-group">
                  <span className="input-group-text text-white" style={{backgroundColor: "#D47C42"}}>TU NOMBRE</span>
                  <Field name="name" type="text" className="form-control"/>
              </div>
              <ErrorMessage name="name"/>

              <div className="input-group mt-3">
                  <Field name="email" type="email" className="form-control" placeholder="TU EMAIL"/>
                  <span className="input-group-text text-white" style={{backgroundColor: "#D47C42"}}>@example.com</span>
              </div>
              <ErrorMessage name="email" />

              <div className="input-group mt-3">
                  <span className="input-group-text text-white" style={{backgroundColor: "#D47C42"}}>ASUNTO</span>
                  <Field name="subject" type="text" className="form-control"/>
              </div>
              <ErrorMessage name="subject" />

              <div className="mt-3">
                  <Field name="message" as="textarea" className="form-control" placeholder="MENSAJE"/>
                  <ErrorMessage name="message" />
              </div>

              <button type="submit" className="btn text-white mt-3" style={{backgroundColor: "#262924"}}>Enviar Mensaje</button>
          </Form>
      </Formik>
    );
}

function Contact (){

    return(
        <div className="container">
            <div className="row row-content mt-5">
                <div className="col-12 col-lg-5 mb-3">
                    <h4 style={{fontWeight: "bold", fontSize: "32px"}}>Métodos de Contacto</h4>
                    <p style={{fontSize: "18px"}}>
                        Puedes ponerte encontacto conmigo utilizanndo el siguiente
                        formulario, o enviandome un email a nicolas.alvatri@gmail.com.
                        <br/>
                        <br/>
                        Tambies puedes encontrame en Linkedin, Instagram o GitHub.
                    </p>
                    <div className="d-flex justify-content-center">
                        <MDBBtn tag='a' color='none' href='https://www.linkedin.com/in/nicolas-alvarez-triana-872046157/' className='m-3' style={{ color: '#3b5998' }}>
                            <MDBIcon fab icon='linkedin-in' size='2x' />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' href='https://www.instagram.com/niclas_o_0/' className='m-3' style={{ color: '#262924' }}>
                            <MDBIcon fab icon='instagram' size='2x' />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' href='https://github.com/niclasDc?tab=repositories' className='m-3' style={{ color: '#262924' }}>
                            <MDBIcon fab icon='github' size='2x' />
                        </MDBBtn>
                    </div>
                </div>
                <div className="col-12 offset-lg-1 col-lg-6">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;