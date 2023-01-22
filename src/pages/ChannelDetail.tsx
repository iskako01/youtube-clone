import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApiChannelDetail, fetchApiVideoByChannelId } from "../utils/api";
import { Box } from "@mui/material";
import Videos from "../components/Videos";
import { ChannelResponseInterface } from "../interfaces/Api/Response/ChannelResponseInterface";
import { VideoResponseInterface } from "../interfaces/Api/Response/VideoResponseInterface";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] =
    useState<ChannelResponseInterface>();
  const [videos, setVideos] = useState<VideoResponseInterface[]>([]);

  const fetchChannelDetail = async () => {
    if (id) {
      const channelDetail = await fetchApiChannelDetail(id);
      setChannelDetail(channelDetail);

      const videos = await fetchApiVideoByChannelId(id);
      setVideos(videos);
    }
  };

  console.log(id, channelDetail);

  useEffect(() => {
    fetchChannelDetail();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videoItems={videos} direction="row" />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
