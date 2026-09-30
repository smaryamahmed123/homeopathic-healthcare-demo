import React from "react";
import { Avatar, Box, Button, Card, CardContent, Chip, Container, Divider, Grid, Rating, Stack, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link, useParams } from "react-router-dom";
import { doctors } from "../data/data";

export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === id) || doctors[0];
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Card sx={{ overflow: "hidden" }}>
        <Box sx={{ bgcolor: "#E8F4F6", p: { xs: 3, md: 5 } }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems={{ md: "center" }}>
            <Avatar src={doctor.image} sx={{ width: 130, height: 130 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Stack direction="row" spacing={1} alignItems="center"><Typography variant="h4">{doctor.name}</Typography><VerifiedIcon color="primary" /></Stack>
              <Typography color="secondary.main" fontWeight={800} sx={{ mt: .5 }}>{doctor.specialty}</Typography>
              <Typography color="text.secondary" sx={{ mt: .5 }}>{doctor.qualification} · {doctor.experience}</Typography>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}><Rating value={doctor.rating} readOnly size="small" /><Typography>{doctor.rating} ({doctor.reviews} reviews)</Typography></Stack>
              <Typography sx={{ mt: 1 }}><LocationOnOutlinedIcon sx={{ verticalAlign: "middle", fontSize: 19 }} /> {doctor.location}</Typography>
            </Box>
            <Box><Button component={Link} to={`/booking/${doctor.id}`} variant="contained" size="large">Book appointment</Button></Box>
          </Stack>
        </Box>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={7}>
              <Typography variant="h5" fontWeight={800}>About</Typography>
              <Typography color="text.secondary" sx={{ mt: 1.5 }}>{doctor.about}</Typography>
              <Typography variant="h5" fontWeight={800} sx={{ mt: 4 }}>Services</Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 1.5 }} flexWrap="wrap">
                {["Consultation", "Video consultation", "Follow-up", "Digital prescription"].map(x => <Chip key={x} label={x} />)}
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card variant="outlined"><CardContent><Typography fontWeight={800}>Consultation</Typography><Typography variant="h4" sx={{ mt: .5 }}>Rs. {doctor.fee}</Typography><Typography color="text.secondary">Demo consultation fee</Typography><Divider sx={{ my: 2 }} /><Stack spacing={1}><Typography><VideoCallOutlinedIcon sx={{ verticalAlign: "middle" }} /> Video consultation</Typography><Typography>Available slots shown during booking</Typography></Stack></CardContent></Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
