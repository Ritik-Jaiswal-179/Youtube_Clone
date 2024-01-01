import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import "./VideoUpload.css";
import { uploadVideo } from "../../actions/video";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function VideoUpload({ setVidUploadPage }) {

  const CurrentUser = useSelector(state => state.currentUserReducer)
  const dispatch = useDispatch();
  const [title, settitle] = useState("")
  const [videoFile, setvideoFile] = useState("")
  const [progress, setProgress] = useState(0)

  const handleSetvideoFile = (e) => {
    setvideoFile(e.target.files[0]);
  }
  const fileOptions = {
    onUploadProgress: (ProgressEvent) => {
      const { loaded, total } = ProgressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setProgress(percentage);
      if (percentage === 100) {
        setTimeout(() => {}, 3000);
        setVidUploadPage(false);
      }
    }
  }
  const uploadVidoeoFile = () => {
    if (!title) {
      alert("Plz enter the title of video.")
    } else if (!videoFile) {
      alert("Plz attach the video file.")
    } else if (videoFile.size > 10000000) {
      alert("Plz enter the video file less than 1gb")
    } else {
      const fileData = new FormData();
      fileData.append("file", videoFile)
      fileData.append("title", title)
      fileData.append("chanel", CurrentUser?.result._id)
      fileData.append("uploader", CurrentUser?.result.name)
      // console.log(videoFile)
      dispatch(
        uploadVideo({
          fileData: fileData,
          fileOptions: fileOptions
        }))
    }
  }
  return (
    <div className="container_VidUpload">
      <input type="submit" name="text" value={"X"}
        onClick={() => setVidUploadPage(false)}
        className="ibtn_x" />
      <div className="container2_VidUpload">
        <div className="ibox_div_vidupload">
          <input
            onChange={(e) => { settitle(e.target.value) }}
            type="text"
            className="ibox_vidupload"
            maxLength={30}
            placeholder="Enter title of your video"
          />
        </div>
        <label htmlFor="file" className="ibox_vidupload btn_vidupload">
          <input
            type="file"
            name="file"
            className="ibox_vidupload"
            style={{ fontSize: "1rem" }}
            onChange={e => { handleSetvideoFile(e) }}
          />
        </label>
        <div className="ibox_div_vidupload">
          <input onClick={() => uploadVidoeoFile()} type="submit" value="Upload" className="ibox_vidupload btn_vidupload" />
        </div>

        <div className="loader ibox_div_vidupload">
          <CircularProgressbar
            value={progress}
            text={`${progress}`}
            styles={
              buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "20px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255,255,255,${progress / 100})`,
                textColor: "#f88",
                trailColor: "#adff2f",
                backgroundColor: "#3e98c7"

              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default VideoUpload;

// VideoFiles validation failed: fileName: Path `fileName` is required."
// headers
// :