import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth,createUserProfileDocument } from '../../firebase/firebase.utils';
import {Formik, Form} from 'formik';
import * as yup from "yup";
import './sign-up.styles.scss';

const initialValues = {
	displayName:"",
    email: "",
    password: "",
    confirmPassword:""
}


const validationSchema = yup.object({
	displayName: yup
        .string()
        .min(2)
        .required()
        .max(200),
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
    confirmPassword: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match')
  });

const onSubmit = async (data, { setSubmitting }) => {
	    
	    setSubmitting(true);
	    try {
		      const { user } = await auth.createUserWithEmailAndPassword(
		        data.email,
		        data.password
		      );
		      const displayName = data.displayName;
		      await createUserProfileDocument(user, {displayName});
		} catch (error) {
		    console.error(error);
		}
	    setSubmitting(false);
}

const SignUp = () => (
    <div className='sign-up'>
        <h2>I don't have an account</h2>
        <span>Sign Up with your email and password</span>   

        <Formik
            validateOnChange={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, errors, isSubmitting, submitForm }) => (
                <Form>  
                	<FormInput
                        name='displayName'
                        type='text'
                        label='Display Name'
                    />
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

                    <FormInput
                        name='confirmPassword'
                        type='password'
                        label='Confirm Password'
                    />

                    <div className='buttons'>

                    <CustomButton 
                        type='submit' 
                        disabled={isSubmitting}
                        onClick={submitForm}
                    > 
                        Sign Up 
                    </CustomButton>
                    <CustomButton 
                        type='button'
                        disabled={isSubmitting}
                        isGoogleSignIn
                    > 
                        Sign Up with Google 
                    </CustomButton>

                    </div>
                </Form> 
            )}
        </Formik>
           
    </div>
)

export default SignUp; 