import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from "./index"
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { query } = useParams()
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${query}`).then(data => {
      setVideos(data.items)
    })
  }, [query])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2, backgroundColor: 'black' }}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white'}} >
        Search results for <span style={{ color: '#F31503'}}> {query} </span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed