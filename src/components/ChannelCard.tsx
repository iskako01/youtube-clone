import { FC } from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import { VideoResponseInterface } from "../interfaces/Api/Response/VideoResponseInterface";

interface PropsInterface {
  channelDetail: VideoResponseInterface;
}

const ChannelCard: FC<PropsInterface> = ({ channelDetail }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "200px",
        margin: "auto",
        flexDirection: "column",
        p: "10px",
      }}
    >
      <Link to={`/channel/${channelDetail.snippet.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            component="img"
            alt={channelDetail.snippet.channelTitle}
            height={channelDetail.snippet.thumbnails.high.height}
            image={channelDetail.snippet.thumbnails.high.url}
            sx={{
              borderRadius: "50%",
              height: "80px",
              width: "80px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail.snippet.channelTitle}{" "}
            <CheckCircleIcon
              sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
