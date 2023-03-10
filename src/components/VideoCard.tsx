import { FC } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { VideoResponseInterface } from "../interfaces/Api/Response/VideoResponseInterface";

interface PropsInterface {
  video: VideoResponseInterface;
}

const VideoCard: FC<PropsInterface> = ({ video }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          component="img"
          alt={video.snippet.channelTitle}
          height={video.snippet.thumbnails.high.height}
          image={video.snippet.thumbnails.high.url}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {video.snippet.title.slice(0, 60)}
        </Typography>
        <Link to={`/channel/${video.snippet.channelId}`}>
          <Typography variant="subtitle2" color="gray">
            {video.snippet.channelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
