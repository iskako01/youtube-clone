import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"; //process.env.REACT_APP_API_BASE_URL;

const options = {
  params: { part: "snippet", videoId: "M7FIvfx5J10" },
  headers: {
    "X-RapidAPI-Key": "b27c9537c6msh19865a3d556f2fdp18edbfjsn9563a52f3d51", //process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data.items;
};
