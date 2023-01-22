import { FC } from "react";
import { Box, Stack } from "@mui/material";
import { VideoResponseInterface } from "../interfaces/Api/Response/VideoResponseInterface";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

interface PropsInterface {
  videoItems: VideoResponseInterface[];
  direction: string;
}

const Videos: FC<PropsInterface> = ({ videoItems, direction }) => {
  return (
    <Stack
      direction={direction === "column" ? "column" : "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="start"
      gap={2}
    >
      {videoItems.map((video, index) => (
        <Box key={index}>
          <VideoCard video={video} />
          <ChannelCard channelDetail={video} />
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
