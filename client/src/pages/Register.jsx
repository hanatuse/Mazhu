import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import Logo from '../components/Logo'
import FormRow from '../components/FormRow'

const Register = () => {
    return (<Wrapper>
        <form className='form'>
            <Logo />
            <h4>Register</h4>
            <FormRow type='text' name='fname' labelText='First Name' />
            <FormRow type='text' name='lname' labelText='Last Name' />
            <FormRow type='text' name='location' labelText='Location' />
            <FormRow type='email' name='email' labelText='email' />
            <FormRow type='password' name='password' labelText='password' />
            <button type='submit' className='btn btn-block'>Submit</button>
            <p>Already a member?
                <Link to='/login' className='member-btn'>Login</Link>
            </p>
        </form>
    </Wrapper>
    )
}

export default Register