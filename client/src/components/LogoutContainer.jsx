import React from 'react'
import { CgUserlane } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';

const LogoutContainer = () => {
    const [showLogout, setShowLogout] = useState(false)

    const { user, logoutUser } = useDashboardContext()
    return (
        <Wrapper>
            <button type='button' className='btn logout-btn' onClick={() => setShowLogout(!showLogout)}>
                <CgUserlane />
                {user?.name}
                <FaCaretDown />
            </button>
            <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                <button type='button' className='btn dropdown-btn' onClick={logoutUser}>logout</button>
            </div>
        </Wrapper>
    )
}

export default LogoutContainer