import React from 'react'
import "./home.css"
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
// import vid from '../../Components/Video/vid.mp4'
import { useSelector } from 'react-redux'

function Home() {

  const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();

  
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

  const navlist = ["All","Python","Java","Gaming","Movies","Hollywood","Music","Comedy","Animation","Python","Java","Gaming","Movies","Hollywood","Music","Comedy","Animation","Python","Java","Gaming","Movies","Hollywood","Music","Comedy","Animation"]
  return (
    <div className='conatiner_Pages_App'>
      <LeftSideBar />
      <div className='conatiner2_Pages_App'>
        <div className="navigation_Home">
          {
            navlist.map(m=>{
              return(
              <p key={m} className="btn_nav_home">{m}</p>
              )
            })
          }
        </div>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  )
}


export default Home