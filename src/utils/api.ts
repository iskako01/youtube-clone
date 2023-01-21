import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"; //process.env.REACT_APP_API_BASE_URL;

const options = {
  params: { part: "snippet", videoId: "M7FIvfx5J10" },
  headers: {
    "X-RapidAPI-Key": "b27c9537c6msh19865a3d556f2fdp18edbfjsn9563a52f3d51", //process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApiSearch = async (url: string) => {
  const { data } = await axios.get(
    `${BASE_URL}/search?part=snippet&q=${url}`,
    options
  );

  return data.items;
};

export const fetchApiSearchVideo = async (id: string) => {
  const { data } = await axios.get(
    `${BASE_URL}/search?part=snippet&relatedToVideoId=${id}&type=video`,
    options
  );

  return data.items;
};

export const fetchApiVideoDetail = async (id: string) => {
  const { data } = await axios.get(
    `${BASE_URL}/videos?part=snippet,statistics&id=${id}`,
    options
  );

  return data.items[0];
};
