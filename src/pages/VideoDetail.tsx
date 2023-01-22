import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactPlayer from "react-player";
import { fetchApiSearchVideo, fetchApiVideoDetail } from "../utils/api";
import { VideoResponseInterface } from "../interfaces/Api/Response/VideoResponseInterface";
import { VideoDetailResponseInterface } from "../interfaces/Api/Response/VideoDetailResponseInterface";
import Videos from "../components/Videos";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoItems, setvideoItems] = useState<VideoResponseInterface[]>([]);
  const [videoDetail, setVideoDetail] =
    useState<VideoDetailResponseInterface>();

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
              {videoDetail?.snippet.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${videoDetail?.snippet.channelId}`}>
                <Typography variant="h6" color="#fff">
                  {videoDetail?.snippet.channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videoDetail?.statistics.viewCount!
                  ).toLocaleString()}{" "}
                  views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videoDetail?.statistics.likeCount!
                  ).toLocaleString()}{" "}
                  likes
                </Typography>
              </Stack>
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
