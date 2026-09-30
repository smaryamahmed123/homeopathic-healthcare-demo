import React from "react";
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import { appointments } from "../data/data";

export default function PatientDashboard() {
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="overline" color="secondary.main">PATIENT PORTAL</Typography><Typography variant="h3">Good morning, Demo Patient</Typography><Typography color="text.secondary">Your appointments, health records and medicine orders.</Typography>
      <Grid container spacing={2.5} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={4}><StatCard label="Upcoming appointments" value="2" caption="Next: 18 Sep" /></Grid>
        <Grid item xs={12} sm={4}><StatCard label="Health record entries" value="8" caption="Across demo providers" /></Grid>
        <Grid item xs={12} sm={4}><StatCard label="Active orders" value="1" caption="Out for delivery" /></Grid>
      </Grid>
      <Grid container spacing={2.5} sx={{ mt: 1 }}>
        <Grid item xs={12} md={7}><Card><CardContent sx={{ p: 3 }}><Typography variant="h5" fontWeight={800}>Upcoming appointments</Typography>{appointments.map(a => <Stack key={a.id} direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 2, borderBottom: "1px solid #E8EFF3" }}><Box><Typography fontWeight={800}>{a.doctor}</Typography><Typography color="text.secondary">{a.date} · {a.time} · {a.type}</Typography></Box><Button component={Link} to="/consultation/d1">{a.status}</Button></Stack>)}</CardContent></Card></Grid>
        <Grid item xs={12} md={5}><Card><CardContent sx={{ p: 3 }}><Typography variant="h5" fontWeight={800}>Quick actions</Typography><Stack spacing={1.5} sx={{ mt: 2 }}><Button component={Link} to="/search" variant="outlined" startIcon={<CalendarMonthOutlinedIcon />}>Find a doctor</Button><Button component={Link} to="/records" variant="outlined" startIcon={<DescriptionOutlinedIcon />}>Open health records</Button><Button component={Link} to="/orders" variant="outlined" startIcon={<ShoppingBagOutlinedIcon />}>Track order</Button></Stack></CardContent></Card></Grid>
      </Grid>
    </Container>
  );
}
