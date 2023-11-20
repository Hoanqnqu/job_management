import React from 'react'
import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
};

const Register = () => {
    const [values, setValues] = useState(initialState);

    // redux toolkit and useNavigate later

    const handleChange = (e) => {
        console.log(e.target);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }
    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo />
                <h3>Login</h3>

                {/* name field */}
                <FormRow name={'name'} type={'text'} value={values.name} handleChange={handleChange} />
                <FormRow name={'email'} type={'email'} value={values.email} handleChange={handleChange} />
                <FormRow name={'password'} type={'password'} value={values.password} handleChange={handleChange} />


                <button type='submit' className='btn btn-block'>
                    submit
                </button>
            </form>
        </Wrapper>
    )
}

export default Register