import React, { useEffect } from 'react'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns'
import Comments from '../../Components/Comments/Comments'
import "./VideoPage.css"
import { useParams,Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { addToHistory } from '../../actions/History'
import { viewVideo } from '../../actions/video'

function VideoPage() {
    const { vid } = useParams();

    const vids = useSelector(state => state.videoReducer)?.data;

    const vv= vids?.filter(q=> q._id=== vid)[0];
    console.log(vv)
    const CurrentUser = useSelector((state) => state?.currentUserReducer);
    const dispatch = useDispatch()

    


    const handleHistory = ()=>{
        dispatch(
            addToHistory({
                videoId: vid,
                Viewer: CurrentUser?.result._id,
            })
        )
    }

    const handleViews = ()=>{
        dispatch(viewVideo({
            id:vid
        }))
    }

    useEffect(()=>{
        if(CurrentUser){
            handleHistory();
        }
        handleViews();
    },[])


    return (
        <>
            <div className="container_videoPage">
                <div className="container2_videoPage">
                    <div className="video_display_screen_videoPage">
                        <video
                            // src={`http://localhost:5500/${vv?.filePath}`}
                            src={`https://youtubeclone-serverside-rj.onrender.com/${vv?.filePath}`}
                            className={"video_ShowVideo_videoPage"} controls autoPlay>
                        </video>

                        <div className="video_details_videoPage">
                            <div className="videos_btns_title_VideoPage_cont">
                                <p className="video_title_VideoPage">{vv?.videoTitle}</p>
                                <div className="views_date_btns_VideoPage">
                                    <div className="views_VideoPage">
                                        {vv?.Views} views <span><pre>   </pre></span> <div className="dot"> {" "}</div> {" "}
                                        {moment(vv?.createdAt).fromNow()} 
                                    </div>
                                    <LikeWatchLaterSaveBtns vv={vv} vid={vid}/>
                                </div>
                            </div>

                            <Link to={`/chanel/${vv?.videoChanel}`} 
                                className="chanel_details_videopage">
                                <b className="chanel_logo_videopage">
                                    <p> {vv?.Uploader?.charAt(0).toUpperCase()} </p>
                                </b>
                                <p className="chanel_name_videopage">{vv?.Uploader}</p>
                            </Link>

                            <div className="comments_videopage">
                                <h2><u>Comments</u></h2>
                                <Comments videoId={vv._id}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="moreVideoBar">
                        More Video
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoPage