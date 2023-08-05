import React from "react";
import { Box, Paper, Typography, Container, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
const SubscribeDetails = () => {
  return (
    <Container>
      <Typography
        sx={{
          fontSize: "25px",
          fontWeight: "700",
        }}
      >
        تفاصيل الاشتراك
      </Typography>
      <Paper
        sx={{
          width: { xs: "100%", lg: "90%" },
          margin: "auto",
          padding: "1rem",
          marginY: "3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "1rem 0rem",
            borderBottom: "1px solid #eee",
          }}
        >
          <Typography
            sx={{
              color: "var(--green-color)",
              marginLeft: "10px",
              fontSize: "18px",
            }}
          >
            رقم الفاتورة:
          </Typography>
          <Typography> 000000</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "1rem 0rem",
            borderBottom: "1px solid #eee",
          }}
        >
          <Typography
            sx={{
              color: "var(--green-color)",
              marginLeft: "10px",
              fontSize: "18px",
            }}
          >
            اسم العضوية:
          </Typography>
          <Typography> العضوية الاساسية</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "1rem 0rem",
            borderBottom: "1px solid #eee",
          }}
        >
          <Typography
            sx={{
              color: "var(--green-color)",
              marginLeft: "10px",
              fontSize: "18px",
            }}
          >
            عدد الأعلانات:
          </Typography>
          <Typography> 50 من أصل 100</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "1rem 0rem",
            borderBottom: "1px solid #eee",
          }}
        >
          <Typography
            sx={{
              color: "var(--green-color)",
              marginLeft: "10px",
              fontSize: "18px",
            }}
          >
            عدد مرات الترقية المؤقتة:
          </Typography>
          <Typography> 1 من أصل 1</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "1rem 0rem",
            borderBottom: "1px solid #eee",
          }}
        >
          <Typography
            sx={{
              color: "var(--green-color)",
              marginLeft: "10px",
              fontSize: "18px",
            }}
          >
            تاريخ بداية الأشتراك:
          </Typography>
          <Typography sx={{ display: "flex" }}>
            <Typography sx={{ marginLeft: "10px" }}>22:06:01</Typography>
            <Typography>25-08-2023</Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "1rem 0rem",
            borderBottom: "1px solid #eee",
          }}
        >
          <Typography
            sx={{
              color: "var(--green-color)",
              marginLeft: "10px",
              fontSize: "18px",
            }}
          >
            تاريخ نهاية الأشتراك:
          </Typography>
          <Typography sx={{ display: "flex" }}>
            <Typography sx={{ marginLeft: "10px" }}>22:06:01</Typography>
            <Typography>25-08-2023</Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "1rem 0rem",
          }}
        >
          <Typography
            sx={{
              color: "var(--green-color)",
              marginLeft: "10px",
              fontSize: "18px",
            }}
          >
            طباعة تفاصيل الاشتراك:
          </Typography>
          <PrintIcon sx={{ marginRight: "10px", cursor: "pointer" }} />
        </Box>
      </Paper>
    </Container>
  );
};

export default SubscribeDetails;
