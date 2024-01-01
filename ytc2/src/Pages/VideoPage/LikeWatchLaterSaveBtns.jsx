import React, { useEffect } from 'react'
import { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { AiFillDislike, AiOutlineDislike, AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { RiPlayListAddFill, RiShareForwardFill, RiHeartAddFill } from 'react-icons/ri'
import './LikeWatchLaterSaveBtns.css'
import { useDispatch, useSelector } from 'react-redux'
import { likeVideo } from '../../actions/video'
import { addToLikedVideo, deletelikedVideo } from '../../actions/likeVideo'
import { addTowatchLater, deleteWatchLater } from '../../actions/watchLater'

function LikeWatchLaterSaveBtns({ vv, vid }) {

    const CurrentUser = useSelector((state) => state?.currentUserReducer);
    const dispatch = useDispatch()
    const [SaveVideo, setSaveVideo] = useState(false)
    const [Dislike, setDislike] = useState(false)
    const [LikeBtn, setLikeBtn] = useState(false)

    const likedVideoList = useSelector(state => state.likedVideoReducer);
    const watchLaterList = useSelector(state => state.watchLaterReducer);

    useEffect(() => {
        likedVideoList?.data.filter(
                (q) => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id
            ).map((m) => setLikeBtn(true))

        watchLaterList?.data.filter(
                (q) => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id
            ).map((m) => setSaveVideo(true))
    },[]);
    console.log(vid,"///",CurrentUser?.result._id)



    const toggleSavedVideo = () => {
        if (CurrentUser) {
            if (SaveVideo) {
                setSaveVideo(false)
                dispatch(deleteWatchLater({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id,
                }))
                console.log(vid,CurrentUser?.result._id)
            } else {
                setSaveVideo(true)
                dispatch(addTowatchLater({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id,
                }));
            }
        } else {
            alert("PLz login to save a video.")
        }
    }
    const toggleLikeBtn = (e, lk) => {
        if (CurrentUser) {
            if (LikeBtn) {
                setLikeBtn(false)
                dispatch(likeVideo({
                    id: vid, Like: lk - 1
                }))
                dispatch(deletelikedVideo({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id,
                }))
            } else {
                setLikeBtn(true)
                dispatch(likeVideo({
                    id: vid, Like: lk + 1
                }))
                dispatch(addToLikedVideo({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id,
                }))
                setDislike(false)
            }
        } else {
            alert("PLz login to give a like.")
        }
    }
    const toggleDislikeBtn = (e, lk) => {
        if (CurrentUser) {
            if (Dislike) {
                setDislike(false)
            } else {
                setDislike(true)
                if (LikeBtn) {
                    dispatch(likeVideo({
                        id: vid, Like: lk - 1,
                    }))
                    dispatch(deletelikedVideo({
                        videoId: vid,
                        Viewer: CurrentUser?.result._id,
                    }))
                }
                setLikeBtn(false)
            }
        } else {
            alert("PLz login to disike.")
        }
    }


    return (
        <div className='Btns_cont_videoPage'>
            <div className="btn_videoPage">
                <BsThreeDots />
            </div>

            <div className="btn_videoPage">
                <div className="like_videoPage" 
                onClick={(e) => toggleLikeBtn(e, vv.Like)}>
                    {
                        LikeBtn ? (<>
                            <AiFillLike size={22} className="btns_videoPage" />
                        </>) : (<>
                            <AiOutlineLike size={22} className="btns_videoPage" />
                        </>)
                    }
                    <b>{vv?.Like}</b>
                </div>
                <div className="like_videoPage" 
                onClick={(e) => toggleDislikeBtn(e, vv.Like)}>
                    {
                        Dislike ? (<>
                            <AiFillDislike size={22} className="btns_videoPage" />
                        </>) : (<>
                            <AiOutlineDislike size={22} className="btns_videoPage" />
                        </>)
                    }
                    <b>Dislike</b>
                </div>
                <div className="like_videoPage" 
                onClick={() => toggleSavedVideo()}>
                    {
                        SaveVideo ? (<>
                            <MdPlaylistAddCheck size={22} className="btns_videoPage" />
                            <b>Saved</b>
                        </>) : (<>
                            <RiPlayListAddFill size={22} className="btns_videoPage" />
                            <b>Save</b>
                        </>)
                    }
                </div>
                <div className="like_videoPage">
                    <>
                        <RiHeartAddFill size={22} className="btns_videoPage" />
                        <b>Thanks</b>
                    </>
                </div>
                <div className="like_videoPage">
                    <>
                        <RiShareForwardFill size={22} className="btns_videoPage" />
                        <b>Share</b>
                    </>
                </div>
            </div>
        </div>
    )
}

export default LikeWatchLaterSaveBtns