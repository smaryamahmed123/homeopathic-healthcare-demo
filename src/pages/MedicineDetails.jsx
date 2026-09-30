import React from "react";
import { Button, Card, CardContent, Chip, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { medicines } from "../data/data";
import { Link } from "react-router-dom";

export default function MedicineDetails({ onAdd }) {
  const { id } = useParams();
  const medicine = medicines.find(m => m.id === id) || medicines[0];
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Card>
        <Grid container>
          <Grid item xs={12} md={5}><img src={medicine.image} alt="" style={{ width: "100%", height: 320, objectFit: "cover" }} /></Grid>
          <Grid item xs={12} md={7}><CardContent sx={{ p: 4 }}><Chip label={medicine.category} /><Typography variant="h3" sx={{ mt: 1 }}>{medicine.name}</Typography><Typography color="text.secondary" sx={{ mt: 1 }}>Demo product listing from {medicine.pharmacy}.</Typography><Typography variant="h4" sx={{ mt: 3 }}>Rs. {medicine.price}</Typography><Typography sx={{ mt: 1 }}>{medicine.stock} units shown in demo stock</Typography><Button onClick={() => onAdd(medicine)} variant="contained" size="large" sx={{ mt: 3 }}>Add to cart</Button><Button component={Link} to="/cart" sx={{ mt: 3, ml: 1 }}>View cart</Button></CardContent></Grid>
        </Grid>
      </Card>
    </Container>
  );
}
