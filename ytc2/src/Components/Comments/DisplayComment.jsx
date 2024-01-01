import React, { useState } from 'react'
import './Comments.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment, editComment } from '../../actions/comments'
import moment from 'moment'
import currentUserReducer from '../../Reducers/currentUser'

function DisplayComment({ cId, commentbody,userId,commentOn,  userCommented }) {

  
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const [Edit, setEdit] = useState(false)
  const [CmtBdy, setCommentTBdy] = useState("")
  const [cmtId, setCmtId] = useState("")

  const handleEdit=(ctId,ctBdy)=>{
    setEdit(true)
    setCmtId(ctId)
    setCommentTBdy(ctBdy) 
  } 
const dispatch = useDispatch();
  const handleOnSubmit=(e)=>{
     e.preventDefault()
     
     if(!CmtBdy){
      alert("type your comment ")
     }else{
      dispatch(editComment({
        id:cmtId,
        commentbody:CmtBdy
      }))
      setCommentTBdy("")
     }
     setEdit(false )
  }

  const handleDel = (id)=>{
    dispatch(deleteComment(id))
  }
  return (
    <>
      {
        Edit ? (<>
          <form action="" 
          className="comments_sub_form_comments" 
          onSubmit={handleOnSubmit}
          >

            <input type="text" 
            onChange={(e) => setCommentTBdy(e.target.value)} 
            placeholder='Edit comment...' 
            value={CmtBdy}
            className='comment_ibox'  
            />

            <input type="submit" 
            value="Change" 
            className='comments_add_btn_comments' 
            />

          </form>
        </>) : (<>
          <p className="comment_body">{commentbody}</p>
        </>)
      }
      <p className="use_commented"> - {userCommented} commented {moment(commentOn).fromNow()}</p>
      {
        CurrentUser?.result._id === userId &&(

          <p className="EditDel_DisplayComment">
        <i onClick={()=>handleEdit(cId,commentbody)}>Edit</i>
        <i onClick={()=>handleDel(cId)}>Delete</i>
      </p>
        )
      }
    </>
  )
}

export default DisplayComment