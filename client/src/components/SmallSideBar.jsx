import Wrapper from '../assets/wrappers/SmallSidebar.js'
import React from 'react'
import { useDashboardContext } from '../pages/DashboardLayout.jsx'
import { FaTimes } from 'react-icons/fa'
import NavLinks from './NavLinks.jsx'

const SmallSideBar = () => {
    const { showSidebar, toggleSidebar } = useDashboardContext()

    return (
        <Wrapper>
            <div className={showSidebar ? "sidebar-container show-sidebar" : 'sidebar-container'}>
                <div className="content">
                    <button type='button' className='close-btn' onClick={toggleSidebar}>
                        <FaTimes />
                    </button>
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSideBar