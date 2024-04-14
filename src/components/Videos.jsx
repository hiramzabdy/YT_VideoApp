import { Stack, Box } from "@mui/material"
import { VideoCard, ChannelCard} from "."

const Videos = ({ videos }) => {
  console.log(videos)

  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} gap={3}>
      {videos.map((item) => (
        <Box>
          {item.id.kind == "youtube#video" && <VideoCard video={item}/>}
          {item.id.kind == "youtube#channel" && <ChannelCard channel={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos