import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function StatCard({ label, value, caption }) {
  return (
    <Card>
      <CardContent>
        <Typography color="text.secondary" variant="body2">{label}</Typography>
        <Typography variant="h4" sx={{ mt: .5 }}>{value}</Typography>
        {caption && <Typography color="secondary.main" variant="body2" sx={{ mt: .5 }}>{caption}</Typography>}
      </CardContent>
    </Card>
  );
}
