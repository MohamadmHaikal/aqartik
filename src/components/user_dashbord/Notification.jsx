import React from "react";
import { Box, Typography } from "@mui/material";
import PaginationAds from "../Filter/PaginationAds";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  { label: "معرف", width: "10%" },
  { label: "من قبل", width: "20%" },
  { label: "عنوان الشعار", width: "20%" },
  { label: "وصف الشعار", width: "40%" },
  { label: "الخيارات", width: "10%" },
];

const dataRows = [
  {
    id: 1,
    from: "rama",
    title: "update your ads",
    description: "Description 11jbjhbvjhbhjk",
  },
  {
    id: 2,
    from: "rama",
    title: "update your ads",
    description: "Description 11jbghjgbiugb khkjbhujbubhouklnjlk lhnlikhbn ",
  },
  {
    id: 1,
    from: "rama",
    title: "update your ads",
    description: "Description 11jbjhbvjhbhjk",
  },
  {
    id: 2,
    from: "rama",
    title: "update your ads",
    description: "Description 11jbghjgbiugb khkjbhujbubhouklnjlk lhnlikhbn ",
  },
  {
    id: 1,
    from: "rama",
    title: "update your ads",
    description: "Description 11jbjhbvjhbhjk",
  },
  {
    id: 2,
    from: "rama",
    title: "update your ads",
    description: "Description 11jbghjgbiugb khkjbhujbubhouklnjlk lhnlikhbn ",
  },
];

const Notification = () => {
  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", md: "95%", overflowX: "scroll" },
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "15px",
          margin: "auto",
        }}
      >
        <Box sx={{ minWidth: "500px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #eee",
              paddingY: "1rem",
            }}
          >
            {columns.map((column, index) => (
              <Typography
                key={index}
                sx={{
                  width: column.width,
                  textAlign: "center",
                  color: "var(--green-color)",
                }}
              >
                {column.label}
              </Typography>
            ))}
          </Box>

          {dataRows.map((row) => (
            <Box
              key={row.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: "1rem",
                borderBottom: "1px solid #eee",
              }}
            >
              <Typography sx={{ width: "10%", textAlign: "center" }}>
                {row.id}
              </Typography>
              <Typography sx={{ width: "20%", textAlign: "center" }}>
                {row.from}
              </Typography>
              <Typography sx={{ width: "20%", textAlign: "center" }}>
                {row.title}
              </Typography>
              <Typography sx={{ width: "40%", textAlign: "center" }}>
                {row.description}
              </Typography>
              <Typography sx={{ width: "10%", textAlign: "center" }}>
                <DeleteIcon sx={{ color: "red", cursor: "pointer" }} />
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <PaginationAds />
    </>
  );
};

export default Notification;
