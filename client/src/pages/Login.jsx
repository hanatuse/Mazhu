import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import Logo from '../components/Logo'
import FormRow from '../components/FormRow'

const Login = () => {
    return (
        <Wrapper>
            <form className='form'>
                <Logo />
                <h4>Login</h4>
                <FormRow type='email' name='email' labelText='email' />
                <FormRow type='password' name='password' labelText='password' />
                <button type='submit' className='btn btn-block'>Submit</button>
                <p>Not a member?
                    <Link to='/register' className='member-btn'>Register</Link>
                </p>
            </form>
        </Wrapper>)
}

export default Login