import React, { useState } from "react";
import { Button, Modal, Box, Backdrop, Typography } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const ShowHomeSatusModal = ({ onClose }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      BackdropComponent={Backdrop}
      BackdropProps={{
        onClick: onClose,
      }}
    >
      <Box
        sx={{
          padding: "1rem",
          background: "rgb(255, 255, 255)",
          width: "350px",
          minHeight: "200px",
          borderRadius: "16px",
          position: "absolute",
          top: "50%",
          right: "50%",
          transform: "translate(50%, -50%)",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <ReportProblemIcon
            sx={{ color: "var(--green-color)", marginInlineEnd: "0.5rem" }}
          />
          <Typography sx={{ fontSize: "1.25rem", lineHeight: "1.1" }}>
            تأكيد
          </Typography>
        </Box>
        <Typography sx={{ marginY: "1.5rem" }}>
          الرجاء مراجعة البيانات التالية للعقار قبل عرضه (الأسعار، التوافر،
          الصور، الموقع، المرافق، شروط الحجز) حيث أن صحة هذه المعلومات تقع تحت
          مسؤوليتك بشكل كامل، وستكون ظاهرة للعملاء .لإجراء الحجوزات وسيعتمد
          عليها
        </Typography>

        <Typography>هل أنت متأكد من عرض العقار ؟</Typography>
        <Box
          sx={{
            height: "min-content",
            display: "flex",
            marginBlockStart: "0.5rem",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "var(--green-color) ",
              color: "white",
              borderRadius: "400px",
              padding: "12px 24px",
              "&:hover": {
                backgroundColor: "#0b7b5a",
                color: "white",
              },
            }}
          >
            أعرض العقار
          </Button>
          <Button
            sx={{
              color: "var(--green-color)",
              backgroundColor: "white",
              border: "1px solid var(--green-color)",
              borderRadius: "400px",
              padding: "12px 24px",
            }}
            onClick={onClose}
          >
            راجع البيانات أولا
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ShowHomeSatusModal;
