import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { Spacer } from "./Spacer";

export type PerPageSelectProps = {
  perPage: number;
  setPerPage: (perPage: number) => void;
  values: number[];
  label?: string;
};

export const PerPageSelect = ({
  perPage,
  setPerPage,
  values,
  label,
}: PerPageSelectProps): JSX.Element => {
  const handleChange = (event: SelectChangeEvent) => {
    setPerPage(parseInt(event.target.value, 10));
  };
  const labelId = `PerPageSelect_${Date.now()}`;

  return (
    <Box
      sx={{
        color: "text.secondary",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        component="label"
        sx={{
          alignItems: "center",
          display: "flex",
          fontSize: "0.9rem",
          justifyContent: "center",
        }}
        id={labelId}
      >
        {label || "Rows per page"}
      </Box>
      <Spacer direction="horizontal" size="8px" />
      <Select
        value={perPage.toString()}
        onChange={handleChange}
        size="small"
        labelId={labelId}
        variant="outlined"
      >
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
