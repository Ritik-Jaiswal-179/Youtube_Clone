import React,{useEffect, useState} from 'react'
import './Navbar.css'
import SearchBar from './SearchBar/SearchBar'
import { RiVideoAddLine } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiUserCircle } from 'react-icons/bi'
import { GoogleLogin } from 'react-google-login'
import { Link } from 'react-router-dom'
import { gapi }  from 'gapi-script'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../../actions/auth'
import  Auth  from '../../Pages/Auth/Auth'
const Navbar = ({ toggleDrawer,setEditCreateChanelBtn }) => {
  const [AuthBtn, setAuthBtn] = useState(false)
  // const CurrentUser = null;
  // const CurrentUser = {
  //   result : {
  //     name: "Ritik Jaiswal",
  //     email: "ritik12345@gmail.com",
  //     joinedOn: "2023-1-1"
  //   }
  // }
  const CurrentUser = useSelector(state=>state.currentUserReducer)
  // console.log(CurrentUser)

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "925804897075-mpk8vq8j2gm3k6ngtnrgn8er31v8o1mj.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  },
    []);

    const dispatch = useDispatch();
  const onSuccess = (response) => {
    const Email = response?.profileObj.email;
    console.log(Email);
    dispatch(login({email:Email}))
  }
  const onFailure = (response) => {
    console.log("Failed", response);
  }
  return (
    <>
    <div className='Container_Navbar'>

      <div className='Burger_Logo_Navbar'>
        <div className='burger' onClick={() => { toggleDrawer() }}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <Link to={'/'} className='logo_div_Navbar'>
          <img src='http://clipart-library.com/images_k/youtube-transparent-png/youtube-transparent-png-15.png' alt='youtube_logo' />
          <p className='logo_title_Navbar'>Youtube</p>
        </Link>
      </div>

      <SearchBar />

      <RiVideoAddLine size={22} className="vid_bell_Navbar" />
      <div className='apps_Box'>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
      </div>
      <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
      <div className="Auth_cont_Navbar">
        {
          CurrentUser ? (<>
            <div className="Chanel_logo_App" onClick={()=>setAuthBtn(true)} >
              <p className="fstChar_logo_App">
                {
                  CurrentUser?.result.name ? (<>
                    {CurrentUser?.result.name.charAt(0).toUpperCase()}
                  </>) : (<>
                    {CurrentUser?.result.email.charAt(0).toUpperCase()}
                  </>)
                }
              </p>
            </div>
          </>
          ) : (
            <>
              <GoogleLogin
                clientId={'925804897075-mpk8vq8j2gm3k6ngtnrgn8er31v8o1mj.apps.googleusercontent.com'}
                onSuccess={onSuccess}
                onFailure={onFailure}
                render={(renderProps)=>
                  (<p onClick={renderProps.onClick} className="Auth_Btn">
                    <BiUserCircle   size={22} />
                    <b>Sign in</b>
                  </p>)}
              />
            </>)
        }
      </div>

    </div>
    {
      AuthBtn &&
      <Auth 
      setEditCreateChanelBtn={setEditCreateChanelBtn} 
      User={CurrentUser}
      setAuthBtn={setAuthBtn}
      />
    }
    </>
  )
}
export default Navbar

