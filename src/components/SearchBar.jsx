import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ large = false, initial = "" }) {
  const [value, setValue] = useState(initial);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(value)}`);
  };

  return (
    <form onSubmit={submit}>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search symptoms, doctors, specialties, medicines..."
        size={large ? "medium" : "small"}
        InputProps={{
          startAdornment: <InputAdornment position="start"><SearchIcon color="primary" /></InputAdornment>,
        }}
        sx={{
          bgcolor: "white",
          "& .MuiOutlinedInput-root": { borderRadius: large ? 3 : 2, minHeight: large ? 64 : 46 },
          boxShadow: large ? "0 12px 40px rgba(23,107,135,.12)" : "none"
        }}
      />
    </form>
  );
}
