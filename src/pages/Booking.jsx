import React from "react";
import { Button, Card, CardContent, Container, Grid, MenuItem, Stack, TextField, Typography, Box } from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doctors } from "../data/data";

export default function Booking() {
  const { doctorId } = useParams();
  const doctor = doctors.find(d => d.id === doctorId) || doctors[0];
  const [date, setDate] = useState("18 Sep 2026");
  const [time, setTime] = useState(doctor.slots[0]);
  const [type, setType] = useState("Video consultation");

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Card><CardContent sx={{ p: { xs: 3, md: 5 } }}>
        <Typography variant="overline" color="secondary.main" fontWeight={800}>STEP 1 · BOOKING</Typography>
        <Typography variant="h3">Book with {doctor.name}</Typography>
        <Typography color="text.secondary">{doctor.specialty} · Rs. {doctor.fee}</Typography>
        <Grid container spacing={2.5} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Date" value={date} onChange={e => setDate(e.target.value)} /></Grid>
          <Grid item xs={12} sm={6}><TextField select fullWidth label="Time" value={time} onChange={e => setTime(e.target.value)}>{doctor.slots.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}</TextField></Grid>
          <Grid item xs={12}><TextField select fullWidth label="Consultation type" value={type} onChange={e => setType(e.target.value)}><MenuItem value="Video consultation">Video consultation</MenuItem><MenuItem value="Clinic visit">Clinic visit</MenuItem></TextField></Grid>
          <Grid item xs={12}><TextField fullWidth multiline rows={3} label="Demo reason for visit" placeholder="Example: general consultation" /></Grid>
        </Grid>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 4 }}><Box><Typography color="text.secondary">Consultation fee</Typography><Typography variant="h5">Rs. {doctor.fee}</Typography></Box><Button component={Link} to={`/consultation/${doctor.id}`} variant="contained" size="large">Continue to payment demo</Button></Stack>
      </CardContent></Card>
    </Container>
  );
}
