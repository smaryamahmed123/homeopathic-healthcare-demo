import React from "react";
import { Avatar, Box, Button, Card, CardContent, Chip, Rating, Stack, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  return (
    <Card sx={{ height: "100%", transition: ".2s", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 14px 40px rgba(20,60,80,.10)" } }}>
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Avatar src={doctor.image} sx={{ width: 72, height: 72 }} />
          <Box sx={{ minWidth: 0 }}>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Typography fontWeight={800}>{doctor.name}</Typography>
              {doctor.verified && <VerifiedIcon color="primary" sx={{ fontSize: 18 }} />}
            </Stack>
            <Typography color="secondary.main" fontWeight={700}>{doctor.specialty}</Typography>
            <Typography variant="body2" color="text.secondary">{doctor.experience} experience</Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }} alignItems="center">
          <Rating value={doctor.rating} precision={0.1} size="small" readOnly />
          <Typography variant="body2" fontWeight={700}>{doctor.rating}</Typography>
          <Typography variant="body2" color="text.secondary">({doctor.reviews})</Typography>
        </Stack>
        <Stack spacing={0.8} sx={{ mt: 1.5 }}>
          <Typography variant="body2"><LocationOnOutlinedIcon sx={{ fontSize: 17, verticalAlign: "middle", mr: .5 }} />{doctor.location}</Typography>
          <Typography variant="body2"><VideoCallOutlinedIcon sx={{ fontSize: 17, verticalAlign: "middle", mr: .5 }} />Video consultation available</Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Chip size="small" label={`Rs. ${doctor.fee}`} />
          <Button component={Link} to={`/doctors/${doctor.id}`} size="small" variant="outlined">Profile</Button>
          <Button component={Link} to={`/booking/${doctor.id}`} size="small" variant="contained">Book</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
