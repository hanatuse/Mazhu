import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import Logo from './Logo.jsx'
import NavLinks from './NavLinks'
import { useDashboardContext } from '../pages/DashboardLayout'

const BigSideBar = () => {
    const { showSidebar } = useDashboardContext()
    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
                <div className="content">
                    <header>
                        <Logo />
                    </header>
                    <NavLinks isBigSidebar />
                </div>
            </div>
        </Wrapper>
    )
}

export default BigSideBar