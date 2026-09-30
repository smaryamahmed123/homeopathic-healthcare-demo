import React from "react";
import { Card, CardContent, CardMedia, Chip, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function MedicineCard({ medicine, onAdd }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia component="img" height="150" image={medicine.image} alt="" />
      <CardContent>
        <Chip label={medicine.category} size="small" />
        <Typography fontWeight={800} sx={{ mt: 1 }}>{medicine.name}</Typography>
        <Typography color="text.secondary" variant="body2">{medicine.pharmacy} · {medicine.stock} in stock</Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>Rs. {medicine.price}</Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 1.5 }}>
          <Button component={Link} to={`/medicines/${medicine.id}`} size="small">Details</Button>
          <Button onClick={() => onAdd?.(medicine)} size="small" variant="contained">Add</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
