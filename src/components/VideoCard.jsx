import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl, demoChannelTitle, demoChannelUrl, demoProfilePicture, demoVideoTitle, demoVideoUrl } from "../utils/constants"

const VideoCard = ( { video: { id: { videoId }, snippet } } ) => {

  return (
    <Card
      sx={{
        width: {md: "320px", xs: "100%"},
        boxShadow: "none",
        borderRadius: "none"
    }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>

        <CardMedia
          image={snippet?.thumbnails?.high?.url || snippet?.thumbnails?.default?.url }
          alt={snippet.title}
          sx={{
            width: 320,
            height: 180
          }}
        />

        <CardContent
          sx={{
            background: "#1e1e1e",
            height: "104px"
          }}
        >
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography
              width={288}
              variant="subtitle1"
              fontWeight={"bold"}
              color={"#FFF"}
            >
              {snippet?.title.length > 60 ? snippet.title.slice(0,60) + "..." : snippet.title || demoVideoTitle}
            </Typography>
          </Link>

          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography
              width={288}
              variant="subtitle2"
              fontWeight={"bold"}
              color={"gray"}
              paddingTop={1}
            >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle
                sx={{
                  marginLeft: "4px",
                  fontSize: 12,
                  color: "gray"
                }}
              ></CheckCircle>
            </Typography>
          </Link>

        </CardContent>

      </Link>
    </Card>
  )
}

export default VideoCard