import React from "react";
import { Box, Paper, Typography, Container, Button } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CheckIcon from "@mui/icons-material/Check";

const Cards = () => {
  return (
    <Container sx={{ marginTop: "17rem" }}>
      <Typography
        sx={{
          color: "var(--green-color)",
          fontSize: "25px",
          fontWeight: "700",
          marginBottom: "2rem",
        }}
      >
         العضويات
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "right" },
        }}
      >
        <Box
          sx={{
            width: "300px",
            minHeight: "300px",
            marginX: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Paper sx={{ padding: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <AccountBalanceIcon sx={{ color: "var(--green-color)" }} />
              <Typography
                sx={{
                  marginRight: "10px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                قسم الإدارة
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "25px",
                marginBottom: "1rem",
              }}
            >
              <Typography
                sx={{ color: "orange", marginLeft: "10px", fontSize: "25px" }}
              >
                20000
              </Typography>
              <Typography sx={{ color: "gray", fontSize: "18px" }}>
                ريال / سنة
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography>إدارة الموقع</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography> إضافة إعلانات</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography> إضافة مشرفين</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography> إضافة وكلاء</Typography>
            </Box>
            <Button
              sx={{
                backgroundColor: "var(--green-color)",
                color: "white",
                borderRadius: "20px",
                display: "block",
                marginRight: "auto",
                minWidth: "7rem",
                "&:hover": {
                  backgroundColor: "var(--green-color)",
                  color: "white",
                },
              }}
            >
              اشترك الأن
            </Button>
          </Paper>
        </Box>
        <Box sx={{ width: "300px", marginX: "1rem" }}>
          <Paper sx={{ padding: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <AccountBalanceIcon sx={{ color: "var(--green-color)" }} />
              <Typography
                sx={{
                  marginRight: "10px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                قسم الإدارة
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "25px",
                marginBottom: "1rem",
              }}
            >
              <Typography
                sx={{ color: "orange", marginLeft: "10px", fontSize: "25px" }}
              >
                20000
              </Typography>
              <Typography sx={{ color: "gray", fontSize: "18px" }}>
                ريال / سنة
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography>إدارة الموقع</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography> إضافة إعلانات</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography> إضافة مشرفين</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography> إضافة وكلاء</Typography>
            </Box>
            <Button
              sx={{
                backgroundColor: "var(--green-color)",
                color: "white",
                borderRadius: "20px",
                display: "block",
                marginRight: "auto",
                minWidth: "7rem",
              }}
            >
              اشترك الأن
            </Button>
          </Paper>
        </Box>
        {/* <Box sx={{ width: "300px", marginX: "1rem" }}>
          <Paper sx={{ padding: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <AccountBalanceIcon sx={{ color: "var(--green-color)" }} />
              <Typography
                sx={{
                  marginRight: "10px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                قسم الإدارة
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "25px",
                marginBottom: "1rem",
              }}
            >
              <Typography
                sx={{ color: "orange", marginLeft: "10px", fontSize: "25px" }}
              >
                20000
              </Typography>
              <Typography sx={{ color: "gray", fontSize: "18px" }}>
                ريال / سنة
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography>إدارة الموقع</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography> إضافة إعلانات</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography> إضافة مشرفين</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography> إضافة وكلاء</Typography>
            </Box>
            <Button
              sx={{
                backgroundColor: "var(--green-color)",
                color: "white",
                borderRadius: "20px",
                display: "block",
                marginRight: "auto",
                minWidth: "7rem",
              }}
            >
              اشترك الأن
            </Button>
          </Paper>
        </Box>
        <Box sx={{ width: "300px", marginX: "1rem" }}>
          <Paper sx={{ padding: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <AccountBalanceIcon sx={{ color: "var(--green-color)" }} />
              <Typography
                sx={{
                  marginRight: "10px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                قسم الإدارة
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "25px",
                marginBottom: "1rem",
              }}
            >
              <Typography
                sx={{ color: "orange", marginLeft: "10px", fontSize: "25px" }}
              >
                20000
              </Typography>
              <Typography sx={{ color: "gray", fontSize: "18px" }}>
                ريال / سنة
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography>إدارة الموقع</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography> إضافة إعلانات</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography> إضافة مشرفين</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginBottom: "1rem",
              }}
            >
              <CheckIcon
                sx={{ color: "var(--green-color)", marginLeft: "5px" }}
              />
              <Typography> إضافة وكلاء</Typography>
            </Box>
            <Button
              sx={{
                backgroundColor: "var(--green-color)",
                color: "white",
                borderRadius: "20px",
                display: "block",
                marginRight: "auto",
                minWidth: "7rem",
              }}
            >
              اشترك الأن
            </Button>
          </Paper>
        </Box> */}
      </Box>
    </Container>
  );
};

export default Cards;
