import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import DrawerSideBar from "./Components/LeftSideBar/DrawerSideBar";
import { useState } from "react";
import CreateEditChanel from "./Pages/Chanel/CreateEditChanel";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllChanel } from "./actions/chanelUser";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import { getAllVideo } from "./actions/video";
import { getAlllikedVideo } from "./actions/likeVideo";
import { getAllwatchLater } from "./actions/watchLater";
import { getAllHistory } from "./actions/History";
// import { getAllHistory } from "./actions/History";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
  }, [dispatch]);

  const [toggleDrawerSidebar, settoggleDrawerSidebar] = useState({
    display: "none",
  });
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      settoggleDrawerSidebar({
        display: "flex",
      });
    } else {
      settoggleDrawerSidebar({
        display: "none",
      });
    }
  };

  const [vidUploadPage, setVidUploadPage] = useState(false)
  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false);
  return (
    <Router>
      {
        vidUploadPage && <VideoUpload setVidUploadPage={setVidUploadPage}/>
      }
      {EditCreateChanelBtn && (
        <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn} />
      )}

      <Navbar
        setEditCreateChanelBtn={setEditCreateChanelBtn}
        toggleDrawer={toggleDrawer}
      />

      <DrawerSideBar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
      />

      <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn={setEditCreateChanelBtn} />
    </Router>
  );
}

export default App;
