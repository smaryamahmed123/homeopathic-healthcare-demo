import { Box, Button, Card, CardContent, Chip, Container, Divider, Stack, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { clinics, doctors } from "../data/data";

export default function ClinicProfile() {
  const { id } = useParams();
  const clinic = clinics.find(c => c.id === id) || clinics[0];
  const clinicDoctors = doctors.filter(d => clinic.doctors.includes(d.id));
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Card>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Chip label="Verified clinic" color="success" size="small" />
          <Typography variant="h3" sx={{ mt: 1 }}>{clinic.name}</Typography>
          <Typography color="text.secondary">{clinic.location}</Typography>
          <Typography sx={{ mt: 1 }}>⭐ {clinic.rating} · {clinic.reviews} reviews</Typography>
          <Divider sx={{ my: 4 }} />
          <Typography variant="h5" fontWeight={800}>Services</Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 2 }} flexWrap="wrap">{clinic.services.map(s => <Chip key={s} label={s} />)}</Stack>
          <Typography variant="h5" fontWeight={800} sx={{ mt: 5, mb: 2 }}>Doctors</Typography>
          {clinicDoctors.map(d => (
            <Card key={d.id} variant="outlined" sx={{ mb: 1.5 }}>
              <CardContent>
                <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" gap={2}>
                  <Box><Typography fontWeight={800}>{d.name}</Typography><Typography color="text.secondary">{d.specialty}</Typography></Box>
                  <Button component={Link} to={`/doctors/${d.id}`}>View doctor</Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
}
