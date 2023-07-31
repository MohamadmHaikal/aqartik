import React, { useState } from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <Button onClick={handleClick} sx={{ marginLeft: "-20px" }}>
      {isFavorite ? (
        <FavoriteIcon sx={{ color: "white" }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: "white" }} />
      )}
    </Button>
  );
};

export default FavoriteButton;
