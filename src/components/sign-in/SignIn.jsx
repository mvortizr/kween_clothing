import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {Formik, Form} from 'formik';
import * as yup from "yup";

import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';


const initialValues = {
    email: "",
    password: "",

}

const validationSchema = yup.object({
    email: yup
        .string()
        .min(2)
        .required()
        .email()
        .max(100),
    password: yup
        .string()
        .min(8)
        .max(16)
        .matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$","It must contain at least one uppercase letter, one lowercase letter, one number and one special character")
        .required(),
  });

const SignIn = () => (
    <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <Formik
            validateOnChange={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);
                console.log("submit: ", data);
                setSubmitting(false);
            }}
        >
            {({ values, errors, isSubmitting, submitForm }) => (
                <Form>  
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                    />

                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                    />

                    <CustomButton 
                        type='submit' 
                        disabled={isSubmitting}
                        onClick={submitForm}
                    > 
                        Sign in 
                    </CustomButton>
                    <CustomButton 
                        type='submit' 
                        disabled={isSubmitting}
                        onClick={signInWithGoogle} 
                        isGoogleSignIn
                    > 
                        Sign in 
                    </CustomButton>
                </Form> 
            )}
        </Formik>
           
    </div>
)

export default SignIn; 