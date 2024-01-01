import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import './WHLcss.css'
import WHLVideoList from './WHLVideoList'
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from '../../actions/History';

function WHL({page,videoList }) {

    const CurrentUser = useSelector((state) => state?.currentUserReducer);
    const dispatch = useDispatch
    const handleClearHistory = ()=>{
        if(CurrentUser){
            dispatch(clearHistory({
                userId: CurrentUser?.result._id,  
            }))
        }
    }
    return (
        <div className='conatiner_Pages_App'>
            <LeftSideBar />
            <div className='conatiner2_Pages_App'>
                <p className="conatiner_whl">
                    <div className="box_WHL leftside_whl">
                        <b>Your {page} shown here</b>
                        {
                            page==="History"&&
                        <div className="clear_History_btn" onClick={()=>handleClearHistory()}>Clear History</div>
                        }
                    </div>
                    <div className="rightside_whl">
                        <h1>{page}</h1>
                        <div className="whl_list">
                            <WHLVideoList page={page} 
                                CurrentUser={CurrentUser?.result._id}
                            videoList={videoList} />
                        </div>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default WHL