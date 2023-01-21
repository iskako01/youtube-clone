import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApiSearchVideo, fetchApiVideoDetail } from "../utils/api";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState();
  const [videoDetail, setVideoDetail] = useState();

  const featchVideoDetail = async () => {
    if (id) {
      const videoDetail = await fetchApiVideoDetail(id);
      setVideoDetail(videoDetail);

      const video = await fetchApiSearchVideo(id);
      setVideo(video);
    }
  };

  console.log(video, videoDetail);

  useEffect(() => {
    featchVideoDetail();
  }, [id]);

  return <div>VideoDetail {id}</div>;
};

export default VideoDetail;
