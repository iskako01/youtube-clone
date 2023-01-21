import { FC, useEffect, useState } from "react";
import { fetchApi } from "../../utils/api";
import VideoCard from "../VideoCard";
import { VideoResponseInterface } from "../../interfaces/VideoResponseInterface";
import { Box, Stack } from "@mui/material";
import Videos from "../Videos";

interface PropsInterface {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const VideosContainer: FC<PropsInterface> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [videoItems, setVideoItems] = useState<VideoResponseInterface[]>([]);

  const featchVideos = async () => {
    const items = await fetchApi(`search?part=snippet&q=${selectedCategory}`);

    setVideoItems(items);
  };

  useEffect(() => {
    featchVideos();
  }, [selectedCategory]);
  console.log(videoItems);

  return <Videos videoItems={videoItems} />;
};

export default VideosContainer;
