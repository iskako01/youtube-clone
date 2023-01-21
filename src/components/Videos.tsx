import { FC } from "react";

import { Box, Stack } from "@mui/material";
import { VideoResponseInterface } from "../interfaces/VideoResponseInterface";
import VideoCard from "./VideoCard";

interface PropsInterface {
  videoItems: VideoResponseInterface[];
}

const Videos: FC<PropsInterface> = ({ videoItems }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="start"
      gap={2}
    >
      {videoItems.map((video, index) => (
        <Box key={index}>
          <VideoCard video={video} />
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
