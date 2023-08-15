import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FavoriteIcons = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={handleClickFavorite}
      style={{ alignItems: "center", display: "flex" }}
    >
      {isFavorite ? (
        <FavoriteIcon sx={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: "black", marginLeft: "3px" }} />
      )}
    </div>
  );
};

export default FavoriteIcons;
