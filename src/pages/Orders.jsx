import { Box, Button, Card, CardContent, Chip, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

export default function Orders({ order }) {
  const demo = order || { id: "SHF-1024", status: "Out for delivery", items: [{ name: "Allergy Relief Drops", qty: 1, price: 650 }], delivery: true };
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="overline" color="secondary.main">ORDERS</Typography><Typography variant="h3" sx={{ mb: 3 }}>My Orders</Typography>
      <Card><CardContent sx={{ p: 4 }}>
        <Stack direction="row" justifyContent="space-between"><Box><Typography fontWeight={800}>{demo.id}</Typography><Typography color="text.secondary">Demo medicine order</Typography></Box><Chip label={demo.status} color="success" /></Stack>
        {(demo.items || []).map((item, i) => <Typography key={i} sx={{ mt: 2 }}>{item.name} × {item.qty} — Rs. {item.price * item.qty}</Typography>)}
        <Button component={Link} to={`/orders/${demo.id}`} variant="contained" sx={{ mt: 3 }}>Track order</Button>
      </CardContent></Card>
    </Container>
  );
}
