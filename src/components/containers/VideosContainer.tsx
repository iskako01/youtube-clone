import { FC, useEffect, useState } from "react";
import { fetchApiSearch } from "../../utils/api";
import { VideoResponseInterface } from "../../interfaces/VideoResponseInterface";
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
    const items = await fetchApiSearch(selectedCategory);

    setVideoItems(items);
  };

  useEffect(() => {
    featchVideos();
  }, [selectedCategory]);
  console.log(videoItems);

  return <Videos videoItems={videoItems} />;
};

export default VideosContainer;
