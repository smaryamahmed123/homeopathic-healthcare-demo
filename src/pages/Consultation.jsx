import React from "react";
import { Box, Button, Card, CardContent, Chip, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotesIcon from "@mui/icons-material/Notes";
import { Link, useParams } from "react-router-dom";
import { doctors } from "../data/data";

export default function Consultation() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === id) || doctors[0];
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}><Box><Typography variant="overline">STEP 2 · CONSULTATION</Typography><Typography variant="h3">Video consultation</Typography></Box><Chip label="Demo session" color="info" /></Stack>
      <Grid container spacing={2.5}>
        <Grid item xs={12} md={8}><Card sx={{ bgcolor: "#102F43", color: "white", minHeight: 500, display: "grid", placeItems: "center" }}><Box sx={{ textAlign: "center" }}><VideoCallIcon sx={{ fontSize: 70, opacity: .8 }} /><Typography variant="h5">{doctor.name}</Typography><Typography sx={{ color: "#BFD0D8" }}>Patient: Demo Patient</Typography><Button variant="contained" color="secondary" sx={{ mt: 3 }}>Join demo call</Button></Box></Card></Grid>
        <Grid item xs={12} md={4}><Card sx={{ height: "100%" }}><CardContent><Stack direction="row" spacing={1}><NotesIcon color="primary" /><Typography fontWeight={800}>Patient record preview</Typography></Stack><Divider sx={{ my: 2 }} /><Typography variant="body2" color="text.secondary">Previous visits</Typography><Typography sx={{ mt: 1 }}>2 demo visits available</Typography><Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>Shared records</Typography><Typography sx={{ mt: 1 }}>Demo access granted for this consultation.</Typography><Button component={Link} to={`/prescription/${doctor.id}`} variant="contained" fullWidth sx={{ mt: 4 }}>Create prescription</Button></CardContent></Card></Grid>
      </Grid>
    </Container>
  );
}
