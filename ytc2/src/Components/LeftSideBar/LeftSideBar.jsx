import React from 'react';
import {AiOutlineHome} from "react-icons/ai";
import {MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary} from "react-icons/md";
import "./LeftSideBar.css";
import { NavLink } from "react-router-dom";
function LeftSideBar() {
  return (
    <div className='conatiner_LeftSideBar'>

        <NavLink to={'/'} className='icons_sidebar_div'>
            <AiOutlineHome size={22} className='icon_sidebar'/>
            <div className='text_sidebar_icon'>Home</div>
        </NavLink>

        <div className='icons_sidebar_div'>
            <MdOutlineExplore size={22} className='icon_sidebar'/>
            <div className='text_sidebar_icon'>Explore</div>
        </div>    

        <div className='icons_sidebar_div'>
            <MdOutlineSubscriptions size={22} className='icon_sidebar'/>
            <div className='text_sidebar_icon' style={{margin:0,padding:0}}>Subscription</div>
        </div>    

        <NavLink to={'/library'} className='icons_sidebar_div'>
            <MdOutlineVideoLibrary size={22} className='icon_sidebar'/>
            <div className='text_sidebar_icon'>Library</div>
        </NavLink>    
        
    </div>
  )
}

export default LeftSideBar