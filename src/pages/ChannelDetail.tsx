import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApiChannelDetail } from "../utils/api";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();

  const fetchChannelDetail = async () => {
    if (id) {
      const channelDetail = await fetchApiChannelDetail(id);
      setChannelDetail(channelDetail);
    }
  };

  console.log(channelDetail);

  useEffect(() => {
    fetchChannelDetail();
  }, [id]);

  return <div>ChannelDetail</div>;
};

export default ChannelDetail;
