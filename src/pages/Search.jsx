import React, { useMemo } from "react";
import { Box, Chip, Container, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DoctorCard from "../components/DoctorCard";
import MedicineCard from "../components/MedicineCard";
import SectionTitle from "../components/SectionTitle";
import { clinics, doctors, medicines, pharmacies } from "../data/data";
import { Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Search() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const type = params.get("type") || "all";

  const filteredDoctors = useMemo(() => doctors.filter(d => !query || `${d.name} ${d.specialty} ${d.location}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const filteredMeds = useMemo(() => medicines.filter(m => !query || `${m.name} ${m.category}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Box sx={{ maxWidth: 800, mb: 4 }}><SearchBar large initial={query} /></Box>
      <Stack direction="row" spacing={1} sx={{ mb: 4 }} flexWrap="wrap">
        {["all", "doctor", "clinic", "pharmacy", "medicine"].map((item) => (
          <Chip key={item} label={item[0].toUpperCase() + item.slice(1)} onClick={() => setParams({ ...(query ? { q: query } : {}), ...(item !== "all" ? { type: item } : {}) })} color={type === item ? "primary" : "default"} />
        ))}
      </Stack>

      <SectionTitle eyebrow="Unified search" title={query ? `Results for "${query}"` : "Explore the platform"} text="The demo combines provider and medicine results so a symptom or medicine query can lead into the next step." />

      {(type === "all" || type === "doctor") && (
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>Doctors</Typography>
          <Grid container spacing={2.5}>
            {filteredDoctors.map(d => <Grid item xs={12} md={4} key={d.id}><DoctorCard doctor={d} /></Grid>)}
          </Grid>
        </Box>
      )}

      {(type === "all" || type === "clinic") && (
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>Clinics</Typography>
          <Grid container spacing={2.5}>
            {clinics.map(c => <Grid item xs={12} md={6} key={c.id}><Card><CardContent><Typography variant="h6" fontWeight={800}>{c.name}</Typography><Typography color="text.secondary">{c.location}</Typography><Typography sx={{ mt: 1 }}>⭐ {c.rating} · {c.reviews} reviews</Typography><Stack direction="row" spacing={1} sx={{ mt: 1.5 }} flexWrap="wrap">{c.services.map(s => <Chip key={s} label={s} size="small" />)}</Stack><Button component={Link} to={`/clinics/${c.id}`} sx={{ mt: 2 }} variant="outlined">View Clinic</Button></CardContent></Card></Grid>)}
          </Grid>
        </Box>
      )}

      {(type === "all" || type === "pharmacy") && (
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>Pharmacies</Typography>
          <Grid container spacing={2.5}>
            {pharmacies.map(p => <Grid item xs={12} md={6} key={p.id}><Card><CardContent><Typography variant="h6" fontWeight={800}>{p.name}</Typography><Typography color="text.secondary">{p.location}</Typography><Typography sx={{ mt: 1 }}>⭐ {p.rating} · {p.reviews} reviews</Typography><Chip label={p.delivery ? "Home delivery" : "Pickup"} size="small" sx={{ mt: 1.5 }} /><br/><Button component={Link} to={`/pharmacies/${p.id}`} sx={{ mt: 2 }} variant="outlined">Open Store</Button></CardContent></Card></Grid>)}
          </Grid>
        </Box>
      )}

      {(type === "all" || type === "medicine") && (
        <Box>
          <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>Medicines</Typography>
          <Grid container spacing={2.5}>
            {filteredMeds.map(m => <Grid item xs={12} sm={6} md={3} key={m.id}><MedicineCard medicine={m} /></Grid>)}
          </Grid>
        </Box>
      )}
    </Container>
  );
}
