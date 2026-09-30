import React from "react";
import { Card, CardContent, Chip, Container, Grid, Stack, Typography, Button } from "@mui/material";
import StatCard from "../components/StatCard";

const rows = [
  ["Dr. Demo Physician", "Doctor", "Pending review"],
  ["Natural Care Clinic", "Clinic", "Approved"],
  ["Healthy Life Pharmacy", "Pharmacy", "Approved"],
  ["CarePlus Pharmacy", "Pharmacy", "Pending review"]
];

export default function AdminDashboard() {
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="overline" color="secondary.main">PLATFORM ADMIN</Typography><Typography variant="h3">Admin Dashboard</Typography><Typography color="text.secondary">Demo controls for verification, users, orders, reviews and platform reporting.</Typography>
      <Grid container spacing={2.5} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={3}><StatCard label="Providers" value="248" /></Grid>
        <Grid item xs={12} sm={3}><StatCard label="Patients" value="4,820" /></Grid>
        <Grid item xs={12} sm={3}><StatCard label="Appointments" value="1,246" /></Grid>
        <Grid item xs={12} sm={3}><StatCard label="Orders" value="892" /></Grid>
      </Grid>
      <Card sx={{ mt: 3 }}><CardContent sx={{ p: 3 }}><Typography variant="h5" fontWeight={800}>Provider verification queue</Typography>{rows.map(([name, role, status]) => <Stack key={name} direction={{ xs: "column", sm: "row" }} justifyContent="space-between" gap={1} sx={{ py: 2, borderBottom: "1px solid #E8EFF3" }}><Stack><Typography fontWeight={800}>{name}</Typography><Typography color="text.secondary">{role}</Typography></Stack><Stack direction="row" spacing={1} alignItems="center"><Chip label={status} color={status === "Approved" ? "success" : "warning"} /><Button variant="outlined">Review</Button></Stack></Stack>)}</CardContent></Card>
    </Container>
  );
}
