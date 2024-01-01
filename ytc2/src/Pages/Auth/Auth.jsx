import React from "react";
import "./Auth.css";
import { GoogleLogout } from "react-google-login";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";
import { Link } from "react-router-dom";
function Auth({ User, setAuthBtn, setEditCreateChanelBtn }) {
  const dispatch = useDispatch();
  const onLogoutSuccess = () => {
    dispatch(setCurrentUser(null));
    alert("Logout successfully");
  };
  return (
    <div className="Auth_container" onClick={() => setAuthBtn(false)}>
      <div className="Auth_container2">
        <p className="User_Details">
          <div className="Chanel_logo_App">
            <p className="fstChar_logo_App">
              {User?.result.name ? (
                <>{User?.result.name.charAt(0).toUpperCase()}</>
              ) : (
                <>{User?.result.email.charAt(0).toUpperCase()}</>
              )}
            </p>
          </div>
          <div className="email_Auth">{User?.result.email}</div>
        </p>
        <div className="btns_Auth">
          {User?.result.name ? (
            <>
            {
              <Link to={`/chanel/${User?.result._id}`} className="btn_Auth">
                Your Chanel
                 {/* <input
                type="submit"
                className="btn_Auth"
                value="Your Chanel"
                // onClick={() => setEditCreateChanelBtn(true)}
              /> */}
              </Link>
            }
             
            </>
          ) : (
            <>
              <input
                type="submit"
                className="btn_Auth"
                value="Create your Chanel"
                onClick={() => setEditCreateChanelBtn(true)}
              />
            </>
          )}

          <div>
            <GoogleLogout
              clientId={
                "925804897075-mpk8vq8j2gm3k6ngtnrgn8er31v8o1mj.apps.googleusercontent.com"
              }
              onLogoutSuccess={onLogoutSuccess}
              render={(renderProps) => (
                <div onClick={renderProps.onClick} className="btn_Auth">
                  <BiLogOut />
                  Log Out
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
