import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

const Error = () => {
    const error = useRouteError()
    if (error.status === 404) {
        return (<Wrapper>
            <div>
                <img src={img} alt="not found" />
                <h3>Oops! Page not found</h3>
                <Link to='/dashboard' className="btn">Back Home</Link>
            </div>
        </Wrapper>)
    }
}

export default Error