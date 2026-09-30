import React from "react";
import { Box, Button, Card, CardContent, Chip, Container, Divider, Stack, Typography } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

export default function HealthRecords() {
  const visits = [
    ["18 Sep 2026", "Dr. Sara Ahmed", "Skin & Allergy", "Prescription created"],
    ["22 Aug 2026", "Dr. Ahmed Khan", "General Homeopathy", "Follow-up recorded"]
  ];
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" gap={2} sx={{ mb: 3 }}>
        <Box><Typography variant="overline" color="secondary.main">PATIENT HEALTH RECORDS</Typography><Typography variant="h3">My Health Records</Typography></Box>
        <Button startIcon={<ShareOutlinedIcon />} variant="outlined">Share history</Button>
      </Stack>
      <Card><CardContent sx={{ p: 4 }}>
        <Typography fontWeight={800}>Demo Patient</Typography><Typography color="text.secondary">Longitudinal visit timeline</Typography>
        <Divider sx={{ my: 3 }} />
        {visits.map(([date, doctor, specialty, result], i) => <Box key={date} sx={{ py: 2.5, borderBottom: i < visits.length - 1 ? "1px solid #E8EFF3" : "none" }}><Chip label={date} size="small" /><Typography variant="h6" fontWeight={800} sx={{ mt: 1 }}>{doctor}</Typography><Typography color="secondary.main">{specialty}</Typography><Typography color="text.secondary" sx={{ mt: .5 }}>{result}</Typography></Box>)}
      </CardContent></Card>
    </Container>
  );
}
