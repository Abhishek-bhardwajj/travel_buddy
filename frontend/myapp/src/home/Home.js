import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import road2 from '..//assets/travel (Banner (Landscape)).png';
import "./Home.css";
import { Link } from 'react-router-dom';
import TypeWriterEffect from 'react-typewriter-effect';


function Home() {
  return (
    <Box position={"relative"} width="100%" height="90vh" className='body'>
      <img src={road2} alt="Road" className='images'/>
        <Typography 
        variant="h4"
        fontFamily={"dancing script"}
        fontWeight="bold"
        textAlign={"center"} 
        width="100%"
        marginLeft={20}
        sx={{
          position:"absolute", 
          top:"0px" ,
          color:"#111119de",
          textShadow: "0 0 10px brown"
      }}
      >
      <span> <TypeWriterEffect
            startDelay={100}
            cursorColor="black"
            multiText={[
              "Travel buddy welcomes you",
              "Dare to live the life of your choice!!",
              "Let's explore the world together"     
        ]}
            multiTextDelay={1000}
            typeSpeed={50}
            
          /></span>
      </Typography>

      <Box width="100%" height="30%" display={"flex"}
      flexDirection="column"

      >
        <Typography  className='text' textAlign={"center"} variant='h4' padding={4} fontFamily={'dancing script'}>
        Share  Your Travel Diaries
        </Typography>
        <Box margin="auto">
        <Button  LinkComponent={Link} to="/add" variant="contained" sx={{ mr:2 , fontWeight:'light'}} > Share Your Story</Button>
        <Button  LinkComponent={Link} to="/diaries" variant="contained" sx={{ ml:2 }}> View Diaries</Button>

            

        </Box>
      </Box>

  </Box>
  );

};

export default Home
