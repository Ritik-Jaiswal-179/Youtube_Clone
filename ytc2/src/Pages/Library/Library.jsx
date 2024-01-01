import React from 'react'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
// import vid from '../../Components/Video/vid.mp4'
import { FaHistory } from 'react-icons/fa'
import { MdOutlineWatchLater } from 'react-icons/md'
import WHLVideoList from '../../Components/WHL/WHLVideoList'
import "./Library.css"
import { AiOutlineLike } from 'react-icons/ai'
import { useSelector } from 'react-redux'
function Library() {

  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const HistoryList = useSelector(state => state.HistoryReducer)
  const watchLaterList = useSelector(state => state.watchLaterReducer)
  const likedVideoList = useSelector(state => state.likedVideoReducer)
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     Channel: "jhfs67vsugs986sb986s",
  //     title: "video 1",
  //     Uploader: "abc",
  //     description: "description of video 1"
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     Channel: "opiuy",
  //     title: "video 2",
  //     Uploader: "abc",
  //     description: "description of video 2"
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     Channel: "add",
  //     title: "video 3",
  //     Uploader: "abc",
  //     description: "description of video 3"
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     Channel: "add",
  //     title: "video 4",
  //     Uploader: "abc",
  //     description: "description of video 4"
  //   },
  // ]
  return (
    <div className='conatiner_Pages_App'>
      <LeftSideBar />
      <div className='conatiner2_Pages_App'>
        <div className="container_librarypage">
          <h1 className="title_container_librarypage">
            <b><FaHistory /></b>
            <b>History</b>

          </h1>
          <div className="container_videolist_librarypage">
            <WHLVideoList page={"History"}
              CurrentUser={CurrentUser?.result._id} 
              videoList={HistoryList} />
          </div>
        </div>

        <div className="container_librarypage">
          <h1 className="title_container_librarypage">
            <b><MdOutlineWatchLater /></b>
            <b>WatchLater</b>

          </h1>
          <div className="container_videolist_librarypage">
            <WHLVideoList page={"Watch Later"} 
              videoList={watchLaterList}
              CurrentUser={CurrentUser?.result._id} />
          </div>
        </div>

        <div className="container_librarypage">
          <h1 className="title_container_librarypage">
            <b><AiOutlineLike /></b>
            <b>Liked Videos</b>

          </h1>
          <div className="container_videolist_librarypage">
            <WHLVideoList page={"Liked Videos "}
              videoList={likedVideoList}
              CurrentUser={CurrentUser?.result._id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library