import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import "./../assets/css/Home.css"
import main from "./../assets/images/landing/main.png";

const Landing = () => {
    
  return <>
  <Box>
    <img src={main} alt="" className='landimg' />
    <Container>
        <Typography>India’s Leading Creative Platform</Typography>
        <Typography>Experience hassle free bookings. Trusted by 2500+ Customers
</Typography>
    </Container>
  </Box>
  </>
}

export default Landing