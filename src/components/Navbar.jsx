import { AppBar, Badge, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar({ cartCount }) {
  const navigate = useNavigate();
  const [anchor, setAnchor] = useState(null);

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: "1px solid #E5EDF2", bgcolor: "rgba(255,255,255,.94)", backdropFilter: "blur(10px)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 1 }}>
          <Typography component={Link} to="/" variant="h5" sx={{ fontWeight: 900, color: "primary.main", mr: { xs: 1, md: 4 } }}>
            Shifa<span style={{ color: "#2A9D8F" }}>Connect</span>
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, flexGrow: 1 }}>
            <Button component={Link} to="/search">Find Doctor</Button>
            <Button component={Link} to="/search?type=clinic">Clinics</Button>
            <Button component={Link} to="/search?type=pharmacy">Pharmacy</Button>
            <Button component={Link} to="/search?type=medicine">Medicines</Button>
          </Box>

          <IconButton onClick={() => navigate("/search")} aria-label="search"><SearchIcon /></IconButton>
          <IconButton component={Link} to="/cart" aria-label="cart">
            <Badge badgeContent={cartCount} color="secondary"><ShoppingCartOutlinedIcon /></Badge>
          </IconButton>
          <IconButton onClick={(e) => setAnchor(e.currentTarget)} aria-label="dashboards"><DashboardOutlinedIcon /></IconButton>
          <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
            <MenuItem component={Link} to="/dashboard/patient">Patient Dashboard</MenuItem>
            <MenuItem component={Link} to="/dashboard/provider">Provider Dashboard</MenuItem>
            <MenuItem component={Link} to="/dashboard/admin">Admin Dashboard</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
