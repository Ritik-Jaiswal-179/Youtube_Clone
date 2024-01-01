import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../../actions/auth"
import { updateChanelDate } from "../../actions/chanelUser";
import "./CreateEditChanel.css";

function CreateEditChanel({ setEditCreateChanelBtn }) {
  // const CurrentUser = {
  //   result: {
  //     name: "Ritik Jaiswal",
  //     email: "ritik12345@gmail.com",
  //     joinedOn: "2023-1-1",
  //   },
  // };

  const CurrentUser = useSelector(state=>state.currentUserReducer)
  const [name, setname] = useState(CurrentUser?.result.name);
  const [desc, setdesc] = useState(CurrentUser?.result.desc);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!name) {
      alert("Plz Enter name: ");
    } else if (!desc) {
      alert("Plz ENter Discription");
    } else {   
      dispatch(updateChanelDate(CurrentUser?.result._id,{
        name:name,
        desc:desc,
      }));
      setEditCreateChanelBtn(false);
      setTimeout(() => {
        dispatch(login({ email: CurrentUser?.result.email }));
      }, 5000);
    }
  };

  return (
    <div className="container_CreateEditChanel">
      <input
        type="submit"
        onClick={() => setEditCreateChanelBtn(false)}
        name="text"
        value={"X"}
        className="ibtn_x"
      />
      <div className="container2_CreateEditChanel">
        <h1>
          {CurrentUser?.result.name ? <>Edit </> : <>Create</>}
          Your Chanel
        </h1>


        <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Your Name"
          className="ibox"
          name="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          />
        <textarea
          type="text"
          placeholder={"Enter your description"}
          rows={15}
          className="ibox"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
          />
        <input
          type="submit"
          value={"Submit"}
          // onclick={handleSubmit}
          className="ibtn"
          />
          </form>
      </div>
    </div>
  );
}

export default CreateEditChanel;
