import React from 'react'
import "./LeftSideBar.css"
import { AiFillLike, AiOutlineHome, AiOutlinePlaySquare } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater } from 'react-icons/md'
import { FaHistory } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
function DrawerSideBar({ toggleDrawer, toggleDrawerSidebar }) {
  return (
    <div className='container_DrawerLeftSidebar' style={toggleDrawerSidebar}>
      <div className='container2_DrawerLeftSidebar'>
        <div className="drawer_LeftSidebar">
          <NavLink to={'/'} className="icons_sidebar_div">
            <p>
              <AiOutlineHome size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Home</div>
            </p>
          </NavLink>

          <div className="icons_sidebar_div">
            <p>
              <MdOutlineExplore size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Explore</div>
            </p>
          </div>

          <div className="icons_sidebar_div">
            <p>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeeKFFJ6X3FZVt2qTf48Z9YGUKeKHstcV3E0ZHdHIhIyWiH7Oi3Jv3dHbTPxSva7bwbE&usqp=CAU' alt='ShortsImg' width={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Shorts</div>
            </p>
          </div>

          <div className="icons_sidebar_div">
            <p>
              <MdOutlineSubscriptions size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Subscriptions</div>
            </p>
          </div>
        </div>

        <div className="libraryBtn_Drawersidebar">
          <NavLink to={'/library'} className="icons_sidebar_div">
            <p>
              <MdOutlineVideoLibrary size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Library</div>
            </p>
          </NavLink>

          <NavLink to={'/history'} className="icons_sidebar_div">
            <p>
              <FaHistory size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">History</div>
            </p>
          </NavLink>

          <NavLink to={'/yourvideos'} className="icons_sidebar_div">
            <p>
              <AiOutlinePlaySquare size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Your Videos</div>
            </p>
          </NavLink>
           
          <NavLink to={'/watchlater'} className="icons_sidebar_div">
            <p>
              <MdOutlineWatchLater size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Watch Later</div>
            </p>
          </NavLink>

          <NavLink to={'/likedvideo'} className="icons_sidebar_div">
            <p>
              <AiFillLike size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
              <div className="text_sidebar_icon">Liked Videos</div>
            </p>
          </NavLink>
        </div>

        <div className="subscriptions_lsdbar">
          <h3>Your Subscriptions</h3>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div className="chanel">Channel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div className="chanel">Channel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div className="chanel">Channel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div className="chanel">Channel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div className="chanel">Channel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div className="chanel">Channel</div>
          </div>
        </div>
      </div>
      <div className="container3_DrawerLeftSidebar" onClick={() => toggleDrawer()}>

      </div>
    </div>
  )
}

export default DrawerSideBar