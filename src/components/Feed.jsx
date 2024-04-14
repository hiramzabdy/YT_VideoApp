import { useState, useEffect } from "react"
import { Box, Stack, Typography} from "@mui/material"
import { Sidebar, Videos } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.data.items)
      })
  }, [])

  return (
    <Stack
    sx={{flexDirection: {sx: "column", md: "row"}}}
    >
      <Box
      sx={{height:{sx: "auto", md: "92vh"}, borderRight: "1px solid #e3e3e3", px:{sx: 0, md: 2}}}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></Sidebar>
        <Typography className="copyright" variant="body2" sx={{mt:1.5, color: "#fff"}}>Copyrights 2024</Typography>
      </Box>

      <Box p={2} sx={{overflow: "auto", height: "100vh", flex: 2}}>
        <Typography fontWeight="bold" mb={2} sx={{color: "white"}}>
          {selectedCategory} <span style={{color: "#F31503"}}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
      
    </Stack>
  )
}

export default Feed