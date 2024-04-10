import { useState, useEffect } from "react"
import { Box, Stack, Typography} from "@mui/material"
import { Sidebar, Videos } from "./"

const Feed = () => {
  return (
    <Stack
    sx={{flexDirection: {sx: "column", md: "row"}}}
    >
      <Box
      sx={{height:{sx: "auto", md: "92vh"}, borderRight: "1px solid #e3e3e3", px:{sx: 0, md: 2}}}
      >
        <Sidebar></Sidebar>
        <Typography className="copyright" variant="body2" sx={{mt:1.5, color: "#fff"}}>Copyrights 2024</Typography>
      </Box>

      <Box p={2} sx={{overflow: "auto", height: "30vh", flex: 2}}>
        <Typography fontWeight="bold" mb={2} sx={{color: "white"}}>
          New <span style={{color: "#F31503"}}>Videos</span>
        </Typography>
        <Videos videos={[]} />
      </Box>
      
    </Stack>
  )
}

export default Feed