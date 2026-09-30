import React from "react";
import { Box, Button, Card, CardContent, Container, Grid, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import StatCard from "../components/StatCard";

export default function ProviderDashboard() {
  const [type, setType] = useState("Doctor");
  const isPharmacy = type === "Pharmacy";
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" gap={2}>
        <Box><Typography variant="overline" color="secondary.main">SERVICE PROVIDER PORTAL</Typography><Typography variant="h3">{type} Dashboard</Typography><Typography color="text.secondary">Demo dashboard activated according to account type.</Typography></Box>
        <TextField select label="Account type" value={type} onChange={e => setType(e.target.value)} sx={{ minWidth: 220 }}><MenuItem value="Doctor">Doctor</MenuItem><MenuItem value="Clinic / Hospital">Clinic / Hospital</MenuItem><MenuItem value="Pharmacy">Pharmacy</MenuItem><MenuItem value="Pharmacy + Clinic">Pharmacy + Clinic</MenuItem></TextField>
      </Stack>
      <Grid container spacing={2.5} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={4}><StatCard label={isPharmacy ? "Orders today" : "Today's appointments"} value={isPharmacy ? "28" : "12"} caption="Demo data" /></Grid>
        <Grid item xs={12} sm={4}><StatCard label={isPharmacy ? "Sales today" : "Patients"} value={isPharmacy ? "Rs. 42.5k" : "128"} caption="Demo data" /></Grid>
        <Grid item xs={12} sm={4}><StatCard label={isPharmacy ? "Low stock" : "Rating"} value={isPharmacy ? "7" : "4.8"} caption="Demo data" /></Grid>
      </Grid>
      <Grid container spacing={2.5} sx={{ mt: 1 }}>
        <Grid item xs={12} md={8}><Card><CardContent sx={{ p: 3 }}><Typography variant="h5" fontWeight={800}>{isPharmacy ? "Recent orders" : "Today's schedule"}</Typography>{[1,2,3,4].map(i => <Stack key={i} direction="row" justifyContent="space-between" sx={{ py: 2, borderBottom: "1px solid #E8EFF3" }}><Box><Typography fontWeight={800}>{isPharmacy ? `Order #102${i}` : `Patient ${["Ali Ahmed","Sara Khan","Hamza Ali","Ayesha Noor"][i-1]}`}</Typography><Typography color="text.secondary">{isPharmacy ? "Medicine order · delivery" : `${10+i-1}:00 AM · Demo appointment`}</Typography></Box><Button variant="outlined">{isPharmacy ? "Process" : "Open"}</Button></Stack>)}</CardContent></Card></Grid>
        <Grid item xs={12} md={4}><Card><CardContent sx={{ p: 3 }}><Typography variant="h5" fontWeight={800}>Quick actions</Typography><Stack spacing={1.5} sx={{ mt: 2 }}><Button variant="contained">{isPharmacy ? "Add medicine" : "Create prescription"}</Button><Button variant="outlined">Manage profile</Button><Button variant="outlined">View analytics</Button><Button variant="outlined">Notifications</Button></Stack></CardContent></Card></Grid>
      </Grid>
    </Container>
  );
}
