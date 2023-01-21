import { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import VideosContainer from "../components/containers/VideosContainer";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const currentYear = new Date().getFullYear();

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ m: "10px", color: "#ffffff" }}
        >
          Copyright {currentYear} JSM Media{" "}
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#ffffff" }}
        >
          {selectedCategory}
          <span style={{ color: "#FC1503" }}> videos</span>
        </Typography>

        <VideosContainer
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
    </Stack>
  );
};

export default Feed;
