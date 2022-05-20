import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import React, { useState, ReactNode } from "react";

export type ToastHavingDetailInfoProps = {
  detailContent: ReactNode;
  children: ReactNode;
};
export const ToastHavingDetailInfo = ({
  detailContent,
  children,
}: ToastHavingDetailInfoProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <Accordion
      expanded={open}
      onChange={(e) => {
        e.stopPropagation();
        setOpen((prev) => !prev);
      }}
      sx={{
        backgroundColor: "inherit",
        padding: 0,
      }}
      elevation={0}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {children}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          overflow: "auto",
          maxHeight: "200px",
        }}
      >
        {detailContent}
      </AccordionDetails>
    </Accordion>
  );
};
