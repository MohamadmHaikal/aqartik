import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const Star = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={handleClickFavorite}
      style={{ alignItems: "center", display: "flex" , cursor:"pointer" }}
    >
      {isFavorite ? (
        <StarIcon sx={{ color: "gold" , fontSize:"2rem"}} />
      ) : (
        <StarBorderIcon sx={{ color: "black", marginLeft: "3px" , fontSize:"2rem"}} />
      )}
    </div>
  );
};

export default Star;
