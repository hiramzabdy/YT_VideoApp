import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
            borderRadius: 10,
            border: "1px solid #e3e3e3",
            px: 2,
            boxShadow: "none",
            mr: {sm: 5}
        }}
    >
        <input
            className="search-bar"
            placeholder="Search..."
            value=""
            onChange={() => {}}s
        />

        <IconButton type="submit" sx={{padding: "10px", color: "red"}}>
            <SearchIcon/>
        </IconButton>

    </Paper>
  )
}

export default SearchBar