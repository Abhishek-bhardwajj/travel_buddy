import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box position={"relative"} width="100%" height="90vh">
      <img src="road.jpg" alt="Road"  width={"100%"} height="70%"/>
        <Typography 
        variant="h2"
        fontFamily={"dancing script"}
        fontWeight="bold"
        textAlign={"center"} 
        width="100%"
        sx={{
          position:"absolute", 
          top:"0px" ,
          color:"#111115de",
          background:"#82CBDF"
      }}
      >
      Dare to live the life of your choice
      </Typography>
      <Box width="100%" height="30%" display={"flex"}
      flexDirection="column"

      >
        <Typography textAlign={"center"} variant='h4' padding={4}>
        Share  Your Travel Diaries
        </Typography>
        <Box margin="auto">
        <Button  LinkComponent={Link} to="/add" variant="contained" sx={{ mr:2}}> Share Your Story</Button>
        <Button  LinkComponent={Link} to="/diaries" variant="contained" sx={{ ml:2 }}> View Diaries</Button>

            

        </Box>
      </Box>

  </Box>
  );

};

export default Home
