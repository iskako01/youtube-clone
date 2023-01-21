/* eslint-disable array-callback-return */
import { FC } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

interface PropsInterface {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Sidebar: FC<PropsInterface> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Stack
      direction="row"
      sx={{
        pr: "10px",
        pl: "10px",
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background:
              category.name === selectedCategory ? "#FC1503" : "#ffffff",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#ffffff" : "#FC1503",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              color: category.name === selectedCategory ? "#ffffff" : "#000000",
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
