import React from 'react'
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';

function LikedVideo() {
  const likedVideoList = useSelector(state=>state.likedVideoReducer)
  // console.log(likedVideoList)
  // const LikedVideo = [
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
  // ];
  return (
    <WHL page={"LikedVideo"} videoList={likedVideoList} />
  )
}

export default LikedVideo