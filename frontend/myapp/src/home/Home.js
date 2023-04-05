import { Box, Typography } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <Box position={"relative"} width="100%" height="90vh">
      <img src="road.jpg" alt="Road"  width={"100%"} height="70%"/>
        <Typography 
        variant="h2"
        // font-family: 'Alkatra', cursive;
        font-family= {"Libre Baskerville, serif"}
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
      </Box>

  </Box>
  );

};

export default Home
