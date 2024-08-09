import React from 'react'
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import Wrapper from '../assets/wrappers/ThemeToggle';
import { useDashboardContext } from '../pages/DashboardLayout';

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useDashboardContext()

    return (
        <Wrapper onClick={toggleDarkTheme}>
            {isDarkTheme ? (<MdSunny className='toggle-icon' />) : (<IoMoon />)}
        </Wrapper>
    )
}

export default ThemeToggle