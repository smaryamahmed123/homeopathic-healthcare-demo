import React from "react";
import { Alert } from "@mui/material";

export default function DemoBanner() {
  return (
    <Alert severity="info" icon={false} sx={{ borderRadius: 0, justifyContent: "center", py: 0.6 }}>
      <strong>DEMO / CONCEPT:</strong>&nbsp; This prototype uses fictional profiles, medicines, records and transactions.
    </Alert>
  );
}
