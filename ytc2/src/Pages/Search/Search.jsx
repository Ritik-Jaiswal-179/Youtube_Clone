import React from 'react'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// import vid from '../../Components/Video/vid.mp4'
// import "./Search.css"

function Search() {

    const {searchQuery} = useParams();
  const vids = useSelector(state=>state.videoReducer)?.data
  ?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).reverse();
  return (
    <div className='conatiner_Pages_App'>
      <LeftSideBar />
      <div className='conatiner2_Pages_App'>
        <h2 style={{color:'white'}}>Search result for {searchQuery} ...</h2>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  )
}

export default Search
