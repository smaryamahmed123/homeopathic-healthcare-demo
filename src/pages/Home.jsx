import React from "react";
import { Box, Button, Card, CardContent, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import LocalPharmacyOutlinedIcon from "@mui/icons-material/LocalPharmacyOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
import DoctorCard from "../components/DoctorCard";
import MedicineCard from "../components/MedicineCard";
import SectionTitle from "../components/SectionTitle";
import { doctors, medicines } from "../data/data";

const intents = [
  { icon: MedicalServicesOutlinedIcon, title: "Find Doctor", text: "Browse verified homeopathic doctors", link: "/search" },
  { icon: LocalHospitalOutlinedIcon, title: "Find Clinic", text: "Explore clinics and specialists", link: "/search?type=clinic" },
  { icon: LocalPharmacyOutlinedIcon, title: "Find Pharmacy", text: "Find pharmacies and medicine", link: "/search?type=pharmacy" },
  { icon: SearchIcon, title: "Find Medicine", text: "Search the demo medicine catalog", link: "/search?type=medicine" }
];

export default function Home() {
  return (
    <>
      <Box className="hero-bg soft-grid" sx={{ py: { xs: 7, md: 11 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Chip label="HOMEOPATHIC HEALTHCARE PLATFORM" color="secondary" sx={{ mb: 2, fontWeight: 800 }} />
                <Typography variant="h1" sx={{ fontSize: { xs: 42, md: 64 }, lineHeight: 1.03, maxWidth: 760 }}>
                  Healthcare, consultation & medicines in one place.
                </Typography>
                <Typography sx={{ fontSize: 18, color: "text.secondary", mt: 2, maxWidth: 650 }}>
                  Find doctors, clinics, pharmacies and medicines through one connected patient journey.
                </Typography>
                <Box sx={{ mt: 4, maxWidth: 720 }}><SearchBar large /></Box>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
                  {["Skin specialist", "General homeopathy", "Allergy", "Medicines"].map((x) => <Chip key={x} label={x} variant="outlined" />)}
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ p: 2, borderRadius: 5, boxShadow: "0 30px 80px rgba(20,70,90,.14)" }}>
                <CardContent>
                  <Typography variant="overline" color="secondary.main" fontWeight={800}>ONE CONNECTED FLOW</Typography>
                  {["Search a doctor", "Book a consultation", "Receive a digital prescription", "Find prescribed medicines", "Choose pickup or delivery"].map((x, i) => (
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ py: 1.6, borderBottom: i < 4 ? "1px solid #E8EFF3" : "none" }} key={x}>
                      <Box sx={{ width: 38, height: 38, borderRadius: 2, bgcolor: "#E7F4F5", color: "primary.main", display: "grid", placeItems: "center", fontWeight: 900 }}>{i + 1}</Box>
                      <Typography fontWeight={700}>{x}</Typography>
                    </Stack>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 7 }}>
        <SectionTitle eyebrow="Start here" title="What are you looking for?" />
        <Grid container spacing={2}>
          {intents.map(({ icon: Icon, title, text, link }) => (
            <Grid item xs={12} sm={6} md={3} key={title}>
              <Card component={Link} to={link} sx={{ height: "100%", "&:hover": { borderColor: "primary.main" } }}>
                <CardContent>
                  <Icon color="primary" sx={{ fontSize: 34 }} />
                  <Typography variant="h6" fontWeight={800} sx={{ mt: 2 }}>{title}</Typography>
                  <Typography color="text.secondary" sx={{ mt: .5 }}>{text}</Typography>
                  <ArrowForwardIcon sx={{ mt: 2 }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: "white", py: 7 }}>
        <Container maxWidth="xl">
          <SectionTitle eyebrow="Doctors" title="Doctors near you" text="Demo results for Karachi-area searches." action={<Button component={Link} to="/search">View all</Button>} />
          <Grid container spacing={2.5}>
            {doctors.map((doctor) => <Grid item xs={12} md={4} key={doctor.id}><DoctorCard doctor={doctor} /></Grid>)}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 7 }}>
        <SectionTitle eyebrow="Pharmacy" title="Popular medicines" action={<Button component={Link} to="/search?type=medicine">Browse medicines</Button>} />
        <Grid container spacing={2.5}>
          {medicines.map((medicine) => <Grid item xs={12} sm={6} md={3} key={medicine.id}><MedicineCard medicine={medicine} /></Grid>)}
        </Grid>
      </Container>

      <Box sx={{ py: 7, bgcolor: "#EAF5F6" }}>
        <Container maxWidth="xl">
          <Card sx={{ p: { xs: 2, md: 5 }, bgcolor: "#123B4E", color: "white", border: 0 }}>
            <Grid container alignItems="center" spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography variant="h4">A single patient health journey</Typography>
                <Typography sx={{ color: "#C8D9E1", mt: 1 }}>Appointments, prescriptions, health records and medicine ordering are designed to connect instead of living in separate systems.</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button component={Link} to="/dashboard/patient" variant="contained" color="secondary" size="large" fullWidth endIcon={<CalendarMonthOutlinedIcon />}>Open Patient Demo</Button>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
    </>
  );
}
