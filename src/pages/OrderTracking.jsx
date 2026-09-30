import React from "react";
import { Box, Card, CardContent, Container, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const steps = ["Confirmed", "Packed", "Dispatched", "Out for delivery", "Delivered"];

export default function OrderTracking({ order }) {
  const { id } = useParams();
  const current = steps.indexOf(order?.status || "Out for delivery");
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="overline" color="secondary.main">DELIVERY TRACKING</Typography>
      <Typography variant="h3">Order {id}</Typography>
      <Card sx={{ mt: 3 }}><CardContent sx={{ p: { xs: 2, md: 5 } }}>
        <Typography fontWeight={800}>Live demo status</Typography>
        <Box sx={{ mt: 5, overflowX: "auto" }}>
          <Stepper activeStep={current} alternativeLabel sx={{ minWidth: 650 }}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
        </Box>
        <Typography color="text.secondary" sx={{ mt: 4 }}>In the production system, delivery orders would receive status notifications from the courier workflow.</Typography>
      </CardContent></Card>
    </Container>
  );
}
