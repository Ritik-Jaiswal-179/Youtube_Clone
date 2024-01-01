import React, { useState } from 'react';
import './Comments.css';
import DisplayComment from './DisplayComment';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../actions/comments';
function Comments({videoId}) {
    const [CommentText, setCommentText] = useState("")
    // console.log(CommentText)
    
 
    
  const CurrentUser = useSelector((state) => state?.currentUserReducer); 
  const commentsList = useSelector((s)=>s.commentReducer)
    // const commentsList = [{_id:"1", commentbody:"hello", userCommented:"abc"},{_id:"2", commentbody:"hiii", userCommented:"xyz"}]
 

    const dispatch = useDispatch
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        if(CurrentUser){

            if(!CommentText){
                alert("Please type your comment !");
            }else{
                dispatch(postComment({
                    videoId:videoId,
                    userId:CurrentUser?.result._id,
                    commentbody:CommentText,
                    userCommented:CurrentUser?.result.name,
                }));
                setCommentText=(""); 
            }
        }else{
            alert("Please login to post your comment !")
        }
    }
  return (
    <>
        <form action="" className="comments_sub_form_comments" onSubmit={handleOnSubmit}>
            <input 
            type="text" 
            onChange={e=>setCommentText(e.target.value)}  
            placeholder='Add comment...' 
            className='comment_ibox'
            value={CommentText}
            />

            <input 
            type="submit" 
            value="add"  
            className='comments_add_btn_comments'
            />

        </form>

        <div className="display_comment_container">
            {
                commentsList?.data?.filter((q)=>videoId === q?.videoId).reverse().map(m=>{
                    return(
                        <DisplayComment 
                        cId={m._id} 
                        userId={m.userId}
                        commentbody={m.commentbody} 
                        commentOn={m.commentOn}
                        userCommented={m.userCommented}
                        />

                    )
                })
            }
        </div>
    </>
  )
}

export default Comments