import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApiSearchVideo, fetchApiVideoDetail } from "../utils/api";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ReactPlayer from "react-player";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Videos from "../components/Videos";
import { VideoResponseInterface } from "../interfaces/Api/Response/VideoResponseInterface";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoItems, setvideoItems] = useState<VideoResponseInterface[]>([]);
  const [videoDetail, setVideoDetail] = useState();

  const fetchVideoDetail = async () => {
    if (id) {
      const videoItems = await fetchApiSearchVideo(id);
      setvideoItems(videoItems);

      const videoDetail = await fetchApiVideoDetail(id);
      setVideoDetail(videoDetail);

      console.log(videoItems, videoDetail);
    }
  };

  useEffect(() => {
    fetchVideoDetail();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {/* {videoDetail.snippet.title} */}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              {/* <Link to={`/channel/${videoDetail.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {videoDetail.snippet.channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack> */}
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videoItems={videoItems} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
