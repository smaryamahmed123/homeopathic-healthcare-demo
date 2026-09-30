import React from "react";
import { Button, Card, CardContent, Container, Divider, Grid, Stack, Typography, Box } from "@mui/material";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import { Link } from "react-router-dom";
import { medicines } from "../data/data";

export default function Prescription() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Card>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Stack direction="row" justifyContent="space-between"><Box><Typography variant="overline" color="secondary.main">DIGITAL PRESCRIPTION · DEMO</Typography><Typography variant="h3">Prescription</Typography></Box><Button startIcon={<PrintOutlinedIcon />}>Print</Button></Stack>
          <Typography sx={{ mt: 3 }} fontWeight={800}>Dr. Sara Ahmed</Typography><Typography color="text.secondary">Fictional demo physician · Natural Care Clinic</Typography>
          <Divider sx={{ my: 3 }} />
          <Typography fontWeight={800}>Patient</Typography><Typography>Demo Patient</Typography>
          <Typography fontWeight={800} sx={{ mt: 3 }}>Items</Typography>
          {medicines.slice(0, 2).map((m, i) => <Grid container key={m.id} sx={{ py: 1.5, borderBottom: "1px solid #E8EFF3" }}><Grid item xs={7}><Typography fontWeight={700}>{m.name}</Typography></Grid><Grid item xs={2}>1</Grid><Grid item xs={3}>Demo instruction</Grid></Grid>)}
          <Button component={Link} to="/search?type=medicine&q=relief" variant="contained" size="large" sx={{ mt: 4 }}>Find medicines from prescription</Button>
        </CardContent>
      </Card>
    </Container>
  );
}
