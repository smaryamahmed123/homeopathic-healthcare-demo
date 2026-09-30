import { Button, Card, CardContent, Container, Grid, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout({ cart, onPlaceOrder }) {
  const [delivery, setDelivery] = useState("Home delivery");
  const navigate = useNavigate();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const fee = delivery === "Home delivery" ? 150 : 0;

  const submit = (e) => {
    e.preventDefault();
    onPlaceOrder({ delivery, address: "Demo address, Karachi", total: subtotal + fee });
    navigate("/orders");
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="overline" color="secondary.main">PAYMENT · DEMO</Typography><Typography variant="h3">Checkout</Typography>
      <Card component="form" onSubmit={submit} sx={{ mt: 3 }}><CardContent sx={{ p: 4 }}>
        <Grid container spacing={2.5}>
          <Grid item xs={12}><TextField required fullWidth label="Name" defaultValue="Demo Patient" /></Grid>
          <Grid item xs={12}><TextField required fullWidth label="Phone" defaultValue="0300-0000000" /></Grid>
          <Grid item xs={12}><TextField fullWidth label="Address" defaultValue="Demo address, Karachi" /></Grid>
          <Grid item xs={12}><TextField select fullWidth label="Fulfillment" value={delivery} onChange={e => setDelivery(e.target.value)}><MenuItem value="Home delivery">Home delivery</MenuItem><MenuItem value="Pickup">Pickup</MenuItem></TextField></Grid>
          <Grid item xs={12}><Typography fontWeight={800}>Payment method</Typography><Typography color="text.secondary">Demo card / wallet gateway — no real payment is processed.</Typography></Grid>
        </Grid>
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}><Typography>Estimated total</Typography><Typography variant="h5">Rs. {subtotal + fee}</Typography></Stack>
        <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 3 }} disabled={!cart.length}>Confirm demo order</Button>
      </CardContent></Card>
    </Container>
  );
}
