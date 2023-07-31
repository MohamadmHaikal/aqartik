import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const FiveStars = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
  return (
    <Box sx={{ display: "flex", gap: 0 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <IconButton
          key={star}
          onClick={() => handleStarClick(star)}
          color={star <= rating ? "gold" : undefined}
        >
          {star <= rating ? (
            <StarIcon sx={{ color: "gold" }} />
          ) : (
            <StarBorderIcon />
          )}
        </IconButton>
      ))}
    </Box>
  );
};

export default FiveStars;
