import { Button, Card, CardContent, Chip, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { pharmacies, medicines } from "../data/data";
import MedicineCard from "../components/MedicineCard";
import { useNavigate } from "react-router-dom";

export default function PharmacyProfile() {
  const { id } = useParams();
  const pharmacy = pharmacies.find(p => p.id === id) || pharmacies[0];
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Card sx={{ mb: 4 }}><CardContent sx={{ p: 4 }}><Chip label="Verified pharmacy" color="success" size="small" /><Typography variant="h3" sx={{ mt: 1 }}>{pharmacy.name}</Typography><Typography color="text.secondary">{pharmacy.location}</Typography><Typography sx={{ mt: 1 }}>⭐ {pharmacy.rating} · {pharmacy.reviews} reviews</Typography><Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigate("/search?type=medicine")}>Browse all medicines</Button></CardContent></Card>
      <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>Storefront</Typography>
      <Grid container spacing={2.5}>{medicines.map(m => <Grid item xs={12} sm={6} md={3} key={m.id}><MedicineCard medicine={m} /></Grid>)}</Grid>
    </Container>
  );
}
