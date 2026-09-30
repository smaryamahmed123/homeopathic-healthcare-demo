import React from "react";
import { Box, Container, Grid, Link as MuiLink, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#102F43", color: "#DCEAF1", mt: 8, py: 6 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography variant="h5" fontWeight={900} color="white">ShifaConnect</Typography>
            <Typography sx={{ mt: 1.5, maxWidth: 520, color: "#B9CBD5" }}>
              A concept platform connecting patients with homeopathic doctors, clinics and pharmacies.
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography fontWeight={800} color="white">Explore</Typography>
            <MuiLink component={Link} to="/search" display="block" sx={{ mt: 1, color: "#B9CBD5" }}>Doctors</MuiLink>
            <MuiLink component={Link} to="/search?type=clinic" display="block" sx={{ mt: 1, color: "#B9CBD5" }}>Clinics</MuiLink>
            <MuiLink component={Link} to="/search?type=pharmacy" display="block" sx={{ mt: 1, color: "#B9CBD5" }}>Pharmacy</MuiLink>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography fontWeight={800} color="white">Patient</Typography>
            <MuiLink component={Link} to="/records" display="block" sx={{ mt: 1, color: "#B9CBD5" }}>Health Records</MuiLink>
            <MuiLink component={Link} to="/orders" display="block" sx={{ mt: 1, color: "#B9CBD5" }}>Orders</MuiLink>
            <MuiLink component={Link} to="/dashboard/patient" display="block" sx={{ mt: 1, color: "#B9CBD5" }}>Dashboard</MuiLink>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography fontWeight={800} color="white">Demo note</Typography>
            <Typography sx={{ mt: 1, color: "#B9CBD5" }}>No real medical, payment or prescription data is used in this prototype.</Typography>
          </Grid>
        </Grid>
        <Typography sx={{ mt: 5, pt: 3, borderTop: "1px solid rgba(255,255,255,.12)", color: "#8FA8B6", fontSize: 13 }}>
          © 2026 ShifaConnect Demo
        </Typography>
      </Container>
    </Box>
  );
}
