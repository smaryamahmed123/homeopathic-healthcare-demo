import React from "react";
import { Box, Typography } from "@mui/material";

export default function SectionTitle({ eyebrow, title, text, action }) {
  return (
    <Box sx={{ mb: 3 }}>
      {eyebrow && <Typography color="secondary.main" fontWeight={800} sx={{ textTransform: "uppercase", letterSpacing: 1.2, fontSize: 13 }}>{eyebrow}</Typography>}
      <Box sx={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 2 }}>
        <Box>
          <Typography variant="h4" sx={{ mt: 0.5 }}>{title}</Typography>
          {text && <Typography color="text.secondary" sx={{ mt: 0.8, maxWidth: 720 }}>{text}</Typography>}
        </Box>
        {action}
      </Box>
    </Box>
  );
}
